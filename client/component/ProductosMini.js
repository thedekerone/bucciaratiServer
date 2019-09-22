import Carousel from './Carousel';
import React from 'react';
import ProductViewMini from './ProductViewMini';
import ProductView from './ProductView';
import { Link } from '../routes';
import { Router } from 'next/router';

export default function ProductosMini(props) {
	return (
		<Carousel width='120' height='auto' margin='10' slides='4'>
			'<div className='productos'>
				{props.data.map((e) => {
					return (
						<Link route='single' params={{ slug: e._id }} key={e._id}>
							<a className='carousel__item'>
								<ProductViewMini data={e} />
							</a>
						</Link>
					);
				})}
			</div>
			<style jsx>{`
				.productos {
					display: flex;
				}
				.productos > a {
					flex-shrink: 0;
				}
			`}</style>'
		</Carousel>
	);
}
