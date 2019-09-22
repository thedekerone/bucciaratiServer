const routes = require('next-routes');

// Name   Page      Pattern
module.exports = routes() // ----   ----      -----
	.add('producto')
	.add('/', 'index')
	.add('single');
