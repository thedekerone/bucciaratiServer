'use strict';

const query = require('./query');
const mutation = require('./mutation');
const types = require('./types');

module.exports = {
	Query    : query,
	Mutation : mutation,
	...types
};
