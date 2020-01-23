import React from 'react';


const HomePage = () => (
	<div className="home">
		<div className="home__container-one">
			<img src="img/logo.png" alt="company logo" className="home__logo"></img>
			<a href="#" className="home__signin-link">Sign In</a>
		</div>
		<div className="home__container-two">
			<h1 className="home__primary-heading">
				Unlimited video game trailers and watch anytime
			</h1>
			<h2 className="home__secondary-heading">
				Keep up to date with upcoming video games
			</h2>
			<a href="#" className="home__signup-link">Sign Up</a>
		</div>
	</div>
);

export default HomePage;