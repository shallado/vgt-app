import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BrowsePage from '../components/BrowsePage';

const AppRouter = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/browse" component={BrowsePage} />
		</Switch>
	</BrowserRouter>
);

export default AppRouter;