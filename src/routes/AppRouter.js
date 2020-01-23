import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BrowsePage from '../components/BrowsePage';
import NintendoPage from '../components/NintendoPage';
import PlayStationPage from '../components/PlayStationPage';
import XboxPage from '../components/XboxPage';
import PCPage from '../components/PCPage';
import MyListPage from '../components/MyListPage';

const AppRouter = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/browse" component={BrowsePage} exact={true} />
			<Route path="/browse/nintendo" component={NintendoPage} />
			<Route path="/browse/playstation" component={PlayStationPage} />
			<Route path="/browse/xbox" component={XboxPage} />
			<Route path="/browse/pc" component={PCPage} />
			<Route path="/my-list" component={MyListPage} />
		</Switch>
	</BrowserRouter>
);

export default AppRouter;