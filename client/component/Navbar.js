import React from 'react';
import { Link } from '../routes';

export default function Navbar() {
	return (
		<div className='navbar-container'>
			<div className='navbar'>
				<div className='main-navbar'>
					<Link route='/'>
						<a>
							<h1 className='main-navbar__title'>Logo</h1>
						</a>
					</Link>
					<span className='main-navbar__icon'>
						<div className='categorias'>
							<p>Categorias</p>{' '}
						</div>

						<img className='icon-menu' width='30px' src='static/icons/menu.svg' alt='' />
					</span>
				</div>
				<div className='secondary-navbar'>
					<nav className='secondary-navbar__items'>
						<ul>
							<li>Hombres</li>
							<li>Mujeres</li>
							<li>Niños</li>
							<li>Accesorios</li>
							<li>Regalos</li>
						</ul>
					</nav>
				</div>
			</div>

			<style jsx>
				{`
                    .navbar-container{
						position:relative;
						
                    }
					.navbar {
                        width: 100%;
						background: white;
                        z-index: 100;
						position: fixed;
					}
					.navbar h1{
						margin: .5rem 0;
					}
					.main-navbar {
						margin: 0 auto;
						max-width:1150px;
						
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 0 1rem;
                    }
                    .main-navbar__icon{
                        display:flex;
						align-item:center;
						justify-content:center
					}
					 .categorias{
						 display:flex;
						 align-item: center;
						 padding-right: 1rem
					 }
					.icon-menu{
                        color
                    }
					.secondary-navbar {
                        display:none;
						background:#F2F2F2
					}
					.secondary-navbar__items{
						max-width:1150px;
						margin: 0 auto;
					}
                    .secondary-navbar__items ul {
						display:flex;
						max-width: 1150px;
                        width:100%;
                        padding:0;
                        margin:0 ;
                        max-width:400px;
                        justify-content: space-between;
                        align-items:center;
                        height: 2rem
                    }
                    .secondary-navbar__items ul li {
						list-style:none;
						font-size: .8rem
                    }
                    @media (min-width: 560px) {
                        .secondary-navbar{
                            display:block
                        }
                        :global(body){
                            background:white
                        }
                    }
				`}
			</style>
		</div>
	);
}
