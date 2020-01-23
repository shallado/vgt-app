import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="home">
    <div className="home__container-one">
      <img src="img/logo.png" alt="company logo" className="home__logo"></img>
      <Link to="/login" className="home__signin-link">
        Sign In
      </Link>
    </div>
    <div className="home__container-two">
      <h1 className="home__primary-heading">
        Unlimited video game trailers and watch anytime
      </h1>
      <h2 className="home__secondary-heading">
        Keep up to date with upcoming video games
      </h2>
      <a href="#">Sign Up</a>
      <Link to="/signup" className="home__signup-link">Sign Up</Link>
    </div>
  </div>
);

export default HomePage;