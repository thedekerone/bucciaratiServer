import React from 'react';

export default function Selector() {
	return (
		<div className='selector'>
			<div className='drop-bar'>
				<select name='product' id='product'>
					<option value='zapatillas'>zapatillas</option>
					<option value='polos'>polos</option>
					<option value='carteras'>carteras</option>
					<option value='pantalones'>pantalones</option>
				</select>
			</div>

			<div className='filter' />
			<style jsx>{`
				.drop-bar {
					display: flex;
					justify-content: center;
				}
				select {
					width: 100%;
					font-size: 1.3em;
					padding: .5em;
					font-weight: 300;
					margin: 0 auto;
					max-width: 900px;
				}
			`}</style>
		</div>
	);
}
