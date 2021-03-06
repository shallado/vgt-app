import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AccountPage from '../components/AccountPage';
import BrowsePage from '../components/BrowsePage';
import HomePage from '../components/HomePage';
import LogInPage from '../components/LogInPage';
import MyListPage from '../components/MyListPage';
import NintendoPage from '../components/NintendoPage';
import PCPage from '../components/PCPage';
import PlayStationPage from '../components/PlayStationPage';
import SignUpPage from '../components/SignUpPage';
import XboxPage from '../components/XboxPage';

const AppRouter = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={HomePage} exact={true} />
			<Route path="/login" component={LogInPage} />
			<Route path="/signup" component={SignUpPage} />
			<Route path="/browse" component={BrowsePage} exact={true} />
			<Route path="/nintendo" component={NintendoPage} />
			<Route path="/playstation" component={PlayStationPage} />
			<Route path="/xbox" component={XboxPage} />
			<Route path="/pc" component={PCPage} />
			<Route path="/my-list" component={MyListPage} />
			<Route path="/account" component={AccountPage} />
		</Switch>
	</BrowserRouter>
);

export default AppRouter;