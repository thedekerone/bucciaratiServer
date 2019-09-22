import React from 'react';

export default function BrandDisplayer() {
	return (
		<div className='brands'>
			<div className='brand'>
				<div className='brand__img'>
					<img src='static/marcas/gucci.png' width='100%;' alt='' />
				</div>
				<h3 className='brand__title'>GUCCI</h3>
			</div>
			<div className='brand'>
				<div className='brand__img'>
					<img src='static/marcas/gucci.png' width='100%;' alt='' />
				</div>
				<h3 className='brand__title'>GUCCI</h3>
			</div>
			<div className='brand'>
				<div className='brand__img'>
					<img src='static/marcas/gucci.png' width='100%;' alt='' />
				</div>
				<h3 className='brand__title'>GUCCI</h3>
			</div>
			<div className='brand'>
				<div className='brand__img'>
					<img src='static/marcas/gucci.png' width='100%;' alt='' />
				</div>
				<h3 className='brand__title'>GUCCI</h3>
			</div>
			<div className='brand'>
				<div className='brand__img'>
					<img src='static/marcas/gucci.png' width='100%;' alt='' />
				</div>
				<h3 className='brand__title'>GUCCI</h3>
			</div>
			<div className='brand'>
				<div className='brand__img'>
					<img src='static/marcas/gucci.png' width='100%;' alt='' />
				</div>
				<h3 className='brand__title'>GUCCI</h3>
			</div>
			<style jsx>
				{`
					.brands {
						display: grid;
						gap: .7em;
						margin: 0 auto;
						padding: .4em;
						max-width: 550px;
						grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
					}
					.brand {
						margin: 0 auto;

						width: 100%;
						display: flex;
						background: white;
						flex-direction: column;
						align-items: center;
					}
					.brand__img {
						position: relative;
						padding: 0 .9rem;
						box-sizing: border-box;
						text-align: center;
					}
					.brand__img img {
						width: 70%;
						max-width: 120px;
					}
					.brand__img::after {
						content: "";
						width: 100%;
						height: 1px;
						display: block;
						margin: 0 auto;
						bottom: 0;
						background: #ababab;
					}
					.brand__title {
						margin: .7rem 0;
						font-size: .9em;
						font-weight: 400;
					}
					@media (min-width: 660px) {
						.brand {
							border: 1px solid #d5d5d5;
						}
					}
				`}
			</style>
		</div>
	);
}
