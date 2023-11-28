'use strict';
const { DB_URL } = process.env;
const { MongoClient } = require('mongodb');
const mongoUrl = DB_URL;

let connection;
async function connectDb() {
	if (connection) return connection;
	let client;
	try {
		client = await MongoClient.connect(mongoUrl, {
			useNewUrlParser    : true,
			useUnifiedTopology : true
		});
		connection = await client.db(DB_NAME);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
	return connection;
}
module.exports = connectDb;
