import React from 'react';
import ProductView from './ProductView';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default function Productos(props) {
	return (
		<div className='productos'>
			{props.data.map((e) => {
				return <ProductView key={e._id} product={e} />;
			})}

			<style jsx>
				{`
                .productos{
                    display: grid;
                    gap: 1em ;
                    grid-template-columns: repeat(auto-fill, minmax(300px,1fr))
                `}
			</style>
		</div>
	);
}
