'use strict';

const connectDb = require('./db');
const { ObjectID } = require('mongodb');

module.exports = {
	Brand        : {
		products : async ({ products }) => {
			let db;
			let productData;
			let ids;

			try {
				db = await connectDb();
				ids = products ? products.map((id) => ObjectID(id)) : [];
				productData =
					ids.length > 0 ? await db.collection('product').find({ _id: { $in: ids } }).toArray() : [];
			} catch (error) {
				console.log(error);
			}
			return productData;
		}
	},
	User         : {
		bag : async ({ bag }) => {
			let db;
			let productData;
			let ids;

			try {
				db = await connectDb();
				ids = bag ? bag.map((id) => ObjectID(id)) : [];
				productData =
					ids.length > 0 ? await db.collection('product').find({ _id: { $in: ids } }).toArray() : [];
			} catch (error) {
				console.log(error);
			}
			return productData;
		}
	},
	GlobalSearch : {
		__resolveType : (item, context, info) => {
			if (item.price) {
				return 'Product';
			}
			return 'Brand';
		}
	}
};
