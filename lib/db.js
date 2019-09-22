'use strict';
const { DB_USER, DB_PASSWD, DB_NAME } = process.env;
const { MongoClient } = require('mongodb');
const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@cluster0-iubit.mongodb.net/test?retryWrites=true&w=majority`;

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
