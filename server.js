'use strict';

require('dotenv').config();
const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const gqlMiddleware = require('express-graphql');
const { readFileSync } = require('fs');
const { join } = require('path');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server');

const port = process.env.port || 8000;
const resolvers = require('./lib/resolvers');
const isDev = process.env.NODE_ENV !== 'production';
const path = require('path');

// definiendo le esquema
const typeDefs = readFileSync(
	join(__dirname, 'lib', 'schema.graphql'),
	//
	'utf-8'
);

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
