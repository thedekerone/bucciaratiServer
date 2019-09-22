import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag, useScroll } from 'react-use-gesture';

export default function Carousel(props) {
	var margin = parseInt(props.margin, 10);
	var slides = parseInt(props.slides, 10);
	var width = parseInt(props.width, 10);
	var height = parseInt(props.height, 10);
	const [
		{ xy },
		set
	] = useSpring(() => ({
		xy : [
			0,
			0
		]
	}));

	const bind = useDrag(({ down, local, velocity, direction }) => {
		set({
			xy : down
				? [
						local[0],
						0
					]
				: [
						Math.round(local[0] / (margin + width) + 0.3 * direction[0]) * (margin + width),
						0
					]
		});

		if (!down) {
			local[0] = Math.round(local[0] / (margin + width) + 0.3 * direction[0]) * (margin + width);
			if (
				local[0] > 0 ||
				(!window.matchMedia('(max-width:950px)').matches && slides < 7) ||
				(!window.matchMedia('(max-width:650px)').matches && slides < 6) ||
				(!window.matchMedia('(max-width:500px)').matches && slides < 5)
			) {
				console.log(1);
				local[0] = 0;
				set({
					xy : [
						0,
						0
					]
				});
			} else if (window.matchMedia('(max-width:950px)').matches) {
				console.log(2);

				if (local[0] < window.innerWidth - (width * slides + margin * (slides - 1))) {
					local[0] = window.innerWidth - 10 - (width * slides + margin * (slides - 1));
					console.log(12);

					set({
						xy : [
							local[0],
							0
						]
					});
				}
			} else {
				console.log(3);

				if (local[0] < 1150 - (width * slides + margin * (slides - 1))) {
					console.log(4);

					local[0] = 1150 - 25 - (width * slides + margin * (slides - 1));
					set({
						xy : [
							local[0],
							0
						]
					});
				}
			}
			//  window.innerWidth - (width * 5 + margin * 4);
		}
	});
	var styleNeeded = {
		transform  : xy.interpolate((x, y) => `translate3D(${x}px,0, 0)`),
		whiteSpace : 'nowrap',
		margin     : '0 auto'

		// display        : slides < 6 ? 'flex' : 'block',
		// justifyContent : slides < 6 ? 'center' : null
	};

	return (
		<div className='carousel-container' {...bind()}>
			<animated.div id={`${slides < 6 ? 'flex' : null}`} className='carousel' style={styleNeeded}>
				{props.children}
			</animated.div>

			<style jsx>{`
				.carousel-container {
					overflow: hidden;
				}
				.carousel-container:hover {
					cursor: pointer;
				}
				.carousel::-webkit-scrollbar {
					display: none;
				}

				.carousel-container :global(.carousel__item) {
					display: inline-block;
					width: ${width}px;
					height: ${height}px;
					background: white;
					margin-right: ${margin}px;
					-webkit-user-select: none;
					-khtml-user-select: none;
					-moz-user-select: none;
					-o-user-select: none;
					user-select: none;
				}
				@media (min-width: 950px) {
					:global(#flex) {
						display: flex;
						justify-content: center;
					}
					.carousel-container {
						overflow: hidden;
					}
					:global(.carousel) {
					}
				}
			`}</style>
		</div>
	);
}
