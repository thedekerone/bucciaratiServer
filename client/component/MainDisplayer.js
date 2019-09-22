import React from 'react';

export default function MainDisplayer() {
	return (
		<div className='main-displayer'>
			<div className='main-displayer__item' id='item1'>
				<img src='static/main/fashion.jpg' height='100%' width='100%' alt='' />
			</div>
			<div className='main-displayer__item' id='item2'>
				<h1>MEJORES OFERTAS</h1>
			</div>
			<div className='main-displayer__item' id='item3'>
				<h1>COLLECIÓN INVIERNO</h1>
			</div>
			<style jsx>
				{`
					.main-displayer {
						display: grid;
						grid-template: 1fr 1fr 1fr / 1fr 1fr;
						height: 25rem;
					}
					#item1 {
						grid-column: 1/3;
						grid-row: 1/3;
					}
					#item2 {
						background: rgb(109, 104, 255);
						background: linear-gradient(90deg, rgba(109, 104, 255, 1) 0%, rgba(255, 86, 244, 1) 100%);
					}
					#item3 {
						background: rgb(228, 113, 62);
						background: linear-gradient(90deg, rgba(228, 113, 62, 1) 0%, rgba(209, 0, 181, 1) 100%);
					}
					#item2,
					#item3 {
						display: flex;
						justify-content: center;
						align-items: center;
					}
					#item2 h1,
					#item3 h1 {
						font-size: 1.4em;
						margin: 0;
						text-align: center;
						color: white;
					}

					.main-displayer__item {
						overflow: hidden;
					}

					@media (min-width: 560px) {
						.main-displayer {
							grid-template: 200px 200px/ 1fr 1fr 1.5fr;
						}
						#item1 {
							grid-column: 1/3;
							grid-row: 1/3;
						}
					}
					img {
						object-fit: cover;
					}
				`}
			</style>
		</div>
	);
}
