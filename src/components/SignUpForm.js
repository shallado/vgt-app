import React from 'react';

const SignUpForm = () => {
	const createDays = () => {
		const days = [];

		for(let num = 1; num <= 31; num++) {
			days.push(<option value={num} key={num}>{num}</option>);
		}

		return days;
	};

	const createMonths = () => {
		const months = [
			'January', 
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		return months.map((month) => <option value={month} key={month}>{month}</option>);
	};

	const createYears = () => {
		const years = [];

		for (let year = 1900; year <= 2020; year++) {
			years.push(<option value={year} key={year}>{year}</option>);
		}

		return years;
	};

	return (
		<form className="signup-form">
			<div className="input-field">
				<div className="input-field__label-container">
					<label htmlFor="email" className="input-field__label">
						Email
					</label>
				</div>
				<input type="email" id="email" className="input-field__input" />
			</div>
			<div className="input-field">
				<div className="input-field__label-container">
					<label htmlFor="password" className="input-field__label">
						Password
					</label>
				</div>
				<input type="password" id="password" className="input-field__input" />
			</div>
			<div className="input-field">
				<div className="input-field__label-container">
					<label htmlFor="name" className="input-field__label">
						Name
					</label>
				</div>
				<input type="text" id="name" className="input-field__input" />
			</div>
			<div className="input-field">
				<div className="input-field__label-container">
					<label className="input-field__label">Birthday</label>
				</div>
				<select className="input-field__input">
					<option>Month</option>
					{createMonths()}
				</select>
				<select className="input-field__input">
					<option>Day</option>
					{createDays()}
				</select>
				<select className="input-field__input">
					<option>Year</option>
					{createYears()}
				</select>
			</div>
			<div className="input-field">
				<div className="input-field__label-container">
					<label className="input-field__label">Gender</label>
				</div>
				<select className="input-field__input">
					<option>Select</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
			</div>
		</form>
	);
};

export default SignUpForm;