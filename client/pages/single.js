import React from 'react';
import ProductView from '../component/ProductView';
import ProductViewMini from '../component/ProductViewMini';
import ProductosMini from '../component/ProductosMini';
import Navbar from '../component/Navbar';
import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const GETTER = gql`
	query Product($PR: ID!) {
		getProduct(id: $PR) {
			_id
			title
			image
			price
		}
	}
`;

class single extends React.Component {
	static async getInitialProps({ query }) {
		return { id: query.slug };
	}
	componentDidMount() {
		console.log(this.props.id);
	}
	render() {
		if (!this.props.id) return <h1>aea</h1>;
		return (
			<Query query={GETTER} variables={{ PR: this.props.id }}>
				{({ loading, error, data }) => {
					if (loading) return <h1>loading</h1>;
					if (error) return <h1>{error}</h1>;
					return (
						<div>
							<Navbar />
							<div className='container'>
								<ProductView data={data.getProduct} wrap={true} />
								<div className='tiendas'>
									<h2>También podría gustarte: </h2>

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
											if (loading) return <h1>loading</h1>;
											if (error) return <h1>{error}</h1>;
											return <ProductosMini data={data.getProducts} />;
										}}
									</Query>
								</div>
							</div>
							<style jsx>{`
								@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');

								.container {
									max-width: 1150px;
									width: 100%;
									padding: 0;
									padding-top: 80px;
									overflow: hidden;
									margin: 0 auto 4rem;
								}

								.tiendas {
									padding-left: 10px;
								}

								h2 {
									font-size: 1rem;
									font-weight: 400;
									margin-bottom: 1.5em;
									text-transform: uppercase;
								}
								.tiendas h2 {
									font-size: .9em;
								}
								:global(*) {
									-webkit-user-drag: none;
									-khtml-user-drag: none;
									-moz-user-drag: none;
									-o-user-drag: none;
									user-drag: none;
								}
								.ofertas {
									padding-left: 10px;
								}
								.tiendas,
								.ofertas {
									margin-top: 2.5rem;
								}

								:global(body) {
									background: #f3f3f3;
									margin: 0;
									position: relative;
									font-family: 'Montserrat', sans-serif;
								}
								:global(*) {
									color: #646464;
								}
								:global(a) {
									text-decoration: none;
								}
								:global(img) {
									-webkit-user-drag: none;
									-khtml-user-drag: none;
									-moz-user-drag: none;
									-o-user-drag: none;
									user-drag: none;
								}
								@media (min-width: 660px) {
									:global(#flex) {
										display: flex;
										justify-content: center;
									}
									:global(body) {
										background: white;
									}
									.container {
										padding-top: 150px;
									}
									:global(.carousel__item) {
										border: 1px solid #e8e8e8;
									}
								}
							`}</style>
						</div>
					);
				}}
			</Query>
		);
	}
}
export default single;
