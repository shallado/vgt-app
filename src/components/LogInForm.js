import React from 'react';

const LogInForm = () => (
	<form className="login-form">
		<h1>Sign In</h1>
		<div className="input-field">
			<div className="input-field__label-container">
				<label htmlFor="email">Email</label>
			</div>
			<input type="email" id="email" className="input-field__input" />
		</div>
		<div className="input-field">
			<div className="input-field__label-container">
				<label htmlFor="password">Password</label>
			</div>
			<input type="password" id="password" className="input-field__input" />
		</div>
		<button>Log In</button>
	</form>
);

export default LogInForm;