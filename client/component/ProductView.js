import React from 'react';

export default function Product(props) {
	return (
		<div className='product'>
			<div className='product__img'>
				<img src={props.data.image} width='100%' alt='' />
			</div>
			<div className='product__description'>
				<div className='product-banner'>
					<span>OFERTA EXCLUSIVA</span>
				</div>
				<div className='product-title'>
					<h3>{props.data.title}</h3>
				</div>

				<div className='product-discount'>
					<span className='product-discount__price'>{props.data.price * 2 + '.00'}</span>
					<span className='product-discount__percentage'>-50%</span>
				</div>
				<div className='product-price'>
					<span>{props.data.price}</span>
				</div>
				{/* info */}
				<div className='product-information'>
					{props.wrap ? (
						<div className='product-information__text'>
							<p>
								<b>Descripción:</b> ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
								eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
								vero
							</p>
						</div>
					) : null}

					<div className='product-information__delivery'>
						<img src='/static/icons/icons8-truck-50.png' width='20px' alt='' />{' '}
						<span>Envío internacional</span>
					</div>
					<div className='product-information__reviews'>
						<img src='/static/icons/icons8-star-filled-48.png' width='20px' alt='' />
						<img src='/static/icons/icons8-star-filled-48.png' width='20px' alt='' />
						<img src='/static/icons/icons8-star-filled-48.png' width='20px' alt='' />
						<img src='/static/icons/icons8-star-filled-48.png' width='20px' alt='' />
						<img src='/static/icons/icons8-star-filled-48.png' width='20px' alt='' />

						<span className='product-information__reviews--number'>128 reviews</span>
					</div>
				</div>
			</div>

			<style jsx>
				{`
					.product {
						display: grid;
						background: white;
						max-width: ${props.wrap ? '1000px' : '400px'};
						width: 100%;
						margin: 0 auto;
						font-size: 11px;
						box-sizing: border-box;
						padding: 1em;
						grid-template: auto /1fr 1fr 1fr;
					}
					.product__img {
						grid-row: 1/2;
						padding: ${props.wrap ? '0' : '.9em'};
						box-sizing: border-box;
					}
					.product-title h3 {
						margin: 0;
						padding: .5em 0 .7em 0;
					}
					.product__description,
					.product__img {
						background: white;
						width: 100%;
					}
					.product__description {
						padding-left: ${props.wrap ? '7em' : '1.2em'};
						grid-column: 2/4;
						grid-row: 1/3;
						box-sizing: border-box;
					}

					.product-banner span {
						color: white;
						font-size: .7em;
						background: rgb(181, 0, 191);
						background: linear-gradient(90deg, rgba(181, 0, 191, 1) 0%, rgba(0, 8, 180, 1) 100%);
						padding: 0 .4em;
					}
					.product-discount {
						margin-bottom: .6em;
					}
					.product-discount__price {
						font-size: .8em;
					}
					.product-discount__percentage {
						margin-left: .8em;
						color: red;

						font-size: 1em;
					}
					.product-price {
						font-size: 1.rem;
						color: black;
					}

					.product-information__delivery {
						padding: 1.5em 0 .8em 0;
					}
					.product-information__reviews {
						display: flex;
						align-items: center;
					}
					.product-information__reviews--number {
						color: #ffca28;
						margin-left: 1rem;
						height: 20px;
					}

					@media (min-width: 660px) {
						.product {
							border: ${props.wrap ? ' 0px' : '1px solid #d5d5d5'};
							font-size: 15px;
						}
					}
					// .product {
					// 	max-width: 900px;
					// 	margin: 0 auto;
					// }
					// .product__img {
					// 	padding: 1rem;
					// }
					// .product__description {
					// 	padding-left: 7rem;
					// }
					// .product-information__text {
					// 	display: block;
					// }
				`}
			</style>
			{`
						
					`}
		</div>
	);
}
