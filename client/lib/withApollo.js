// lib/withApollo.js
import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

export default withApollo(
	({ ctx, headers, initialState }) =>
		new ApolloClient({
			uri   : 'https://chupetinps.herokuapp.com/',
			cache : new InMemoryCache().restore(initialState || {})
		})
);
