'use strict';

require('dotenv').config();
const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const gqlMiddleware = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server');
const jwt = require('jsonwebtoken');
const resolvers = require('./lib/resolvers');

// definiendo le esquema
const typeDefs = readFileSync(
	join(__dirname, 'lib', 'schema.graphql'),
	//
	'utf-8'
);

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context   : ({ req }) => {
		// get the user token from the headers
		const data = { usuario: req.headers.usuario, password: req.headers.password };
		const token = jwt.sign({ sub: data.usuario, password: data.password }, process.env.JWT_SECRET_TOKEN);

		let loggedIn = true;
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
			const username = decoded.sub;
			const password = decoded.password;
			// optionally block the user
			// we could also check user roles/permissions here
			if (username == 'null') loggedIn = false;

			// add the user to the context
			return { loggedIn };
		} catch (err) {
			loggedIn = false;
			return { loggedIn };
		}
	}
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
