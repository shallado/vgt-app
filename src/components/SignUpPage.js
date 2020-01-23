import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';

const SignUpPage = () => (
	<div className="signup">
		<div className="signup__header">
			<img src="img/logo.png" alt="company logo" className="home__logo"></img>
			<Link to="/login" className="home__signin-link">
				Sign In
      </Link>
		</div>
		<SignUpForm />
	</div>
);

export default SignUpPage;