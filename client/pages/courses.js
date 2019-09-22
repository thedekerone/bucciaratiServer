import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
const Courses = () => (
	<Query
		query={gql`
			{
				getProducts {
					_id
					title
					image
					price
				}
			}
		`}>
		{({ loading, error, data }) => {
			if (loading) return <p>Loading...</p>;
			if (error) return <p>Error :(</p>;
			return data.getProducts.map(({ _id, title, price }) => (
				<div key={_id}>
					<p>{`${title} by ${price}`}</p>
				</div>
			));
		}}
	</Query>
);
export default Courses;
