import React from 'react';
import AccountMenu from './AccountMenu';

const AccountPage = () => (
  <div className="account">
    <div className="account__header">
      <img src="img/logo.png" alt="company logo" className="home__logo"></img>
			<AccountMenu />
    </div>
    <div className="account__container">
      <h1 className="account__title">Your Account</h1>
      <div className="personal-info">
        <div className="personal-info__header">
          <h2 className="personal-info__title">Personal Info</h2>
          <button className="update-info-btn">Update Info</button>
        </div>
        <ul className="personal-info__details">
          <li>Ryan Bang</li>
          <li>01/10/20</li>
          <li>Male</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AccountPage;