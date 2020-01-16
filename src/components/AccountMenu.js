import React from 'react';

const AccountMenu = () => (
  <div className="account-menu">
    <div className="account-menu__drop-down">
      <img
        src="img/profile.jpg"
        alt="profile"
        className="account-menu__profile-img"
      ></img>
			<div className="account-menu__icon">
      	<ion-icon name="arrow-dropdown"></ion-icon>
			</div>
    </div>
    <div className="account-menu__content-container">
			<div className="account-menu__icon--alt">
      	<ion-icon name="arrow-dropup"></ion-icon>
			</div>
      <a href="/YourAccount" className="account-menu__profile">Manage Profile</a>
      <a href="/" className="account-menu__sign-out">Sign out of VGT</a>
    </div>
  </div>
);

export default AccountMenu;