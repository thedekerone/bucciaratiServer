'use strict';
const connectDb = require('./db');
const { ObjectID } = require('mongodb');

module.exports = {
	createProduct        : async (root, { input }) => {
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
	createUser           : async (root, { input }) => {
		const defaults = {
			tags : []
		};
		let db;
		let product;
		const newUser = Object.assign(defaults, input);
		try {
			db = await connectDb();
			product = await db.collection('user').insertOne(newUser);
			newUser._id = product.insertedId;
		} catch (err) {
			console.log(err);
		}
		return newUser;
	},
	createBrand          : async (root, { input }) => {
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
	addProduct           : async (root, { productID, brandID }) => {
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
	},
	addProductToBag      : async (root, { productID, userID }) => {
		let db;
		let user;
		let product;
		try {
			db = await connectDb();
			product = await db.collection('product').findOne({ _id: ObjectID(productID) });
			user = await db.collection('user').findOne({ _id: ObjectID(userID) });
			if (!user || !product) throw new Error('no hay brand o producto');
			await db
				.collection('user')
				.updateOne({ _id: ObjectID(userID) }, { $addToSet: { bag: ObjectID(productID) } });
		} catch (err) {
			console.log(err);
		}
		return user;
	},
	removeProductFromBag : async (root, { productID, userID }) => {
		let db;
		let user;
		let product;
		let updatedUser;
		try {
			db = await connectDb();
			product = await db.collection('product').findOne({ _id: ObjectID(productID) });
			user = await db.collection('user').findOne({ _id: ObjectID(userID) });
			updatedUser = user.bag.filter((e) => e != productID);
			// console.log(updatedUser.length);
			// user.bag.map((e) => console.log(e != productID));

			// console.log(productID);
			if (!user || !product) throw new Error('no hay brand o producto');
			await db.collection('user').updateOne({ _id: ObjectID(userID) }, { $set: { bag: updatedUser } });
		} catch (err) {
			console.log(err);
		}
		return user;
	}
};
