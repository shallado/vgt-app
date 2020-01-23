import React from 'react';

const FeaturedTrailer = () => (
	<div className="featured-trailer">
		<video className="featured-trailer__video" controls>
			<source src="video/halo.mp4" type="video/mp4" />
		</video>
		<div className="featured-trailer__content">
			<div className="featured-trailer__info">
				<h1 className="featured-trailer__title">Halo Reach</h1>
				<p className="featured-trailer__description">
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
			</div>
		</div>
	</div>
);

export default FeaturedTrailer;