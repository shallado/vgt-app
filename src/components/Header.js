import React from 'react';

const Header = () => (
	<header className="header">
		<div className="header__info">
			<h1 className="header__title">Halo Reach</h1>
			<p className="header__description">
				Halo: Reach is a 2010 first-person shooter developed by Bungie and published by Microsoft Game Studios, originally for the Xbox 360
			</p>
		</div>
		<div className="videogame-content">
			<div className="videogame-content__links">
				<a href="#" className="videogame-content__link">
					<ion-icon name="play"></ion-icon>
					<p>Play</p>
				</a>
				<a href="#" className="videogame-content__link">
					<ion-icon name="add"></ion-icon>
					<p>My Trailer</p>
				</a>
				<a href="#" className="videogame-content__link">
					<ion-icon name="information-circle-outline"></ion-icon>
					<p>More Info</p>
				</a>
			</div>
			<p className="videogame-content__rating">Rated M</p>
		</div>
	</header>
);

export default Header;