'use strict';
const connectDb = require('./db');
const { ObjectID } = require('mongodb');

module.exports = {
	createProduct : async (root, { input }) => {
		const defaults = {
			tags : []
		};
		let db;
		let product;
		const newProduct = Object.assign(defaults, input);
		try {
			db = await connectDb();
			product = await db.collection('product').insertOne(newProduct);
			newProduct._id = product.insertedId;
		} catch (err) {
			console.log(err);
		}
		return newProduct;
	},
	createBrand   : async (root, { input }) => {
		let db;
		let brand;
		const newBrand = Object.assign(input);
		try {
			db = await connectDb();
			brand = await db.collection('brand').insertOne(newBrand);
			newBrand._id = brand.insertedId;
		} catch (err) {
			console.log(err);
		}
		return newBrand;
	},
	addProduct    : async (root, { productID, brandID }) => {
		let db;
		let brand;
		let product;
		try {
			db = await connectDb();
			product = await db.collection('product').findOne({ _id: ObjectID(productID) });
			brand = await db.collection('brand').findOne({ _id: ObjectID(brandID) });
			if (!brand || !product) throw new Error('no hay brand o producto');
			await db
				.collection('brand')
				.updateOne({ _id: ObjectID(brandID) }, { $addToSet: { products: ObjectID(productID) } });
		} catch (err) {
			console.log(err);
		}
		return brand;
	}
};
