import React from 'react';

export default function Filtros() {
	return (
		<div className='filtros'>
			<div className='filtro'>
				<img src='static/icons/icons8-filter-50.png' width='20px' alt='' /> <span>Filtros</span>
			</div>

			<div className='vista'>
				<img src='static/icons/icons8-view-stream-50.png' width='20px' alt='' /> <span>Filtros</span>
			</div>
			<style jsx>{`
				.filtros {
					display: flex;
					justify-content: flex-end;
					width: 100%;
					max-width: 900px;
					border: 1px solid black;
					padding: .4em;
					box-sizing: border-box;
					margin: 0 auto;
				}
				.vista {
					padding: 0 .5em;
				}
				.vista,
				.filtro {
					display: flex;
					align-items: center;
				}
			`}</style>
		</div>
	);
}
