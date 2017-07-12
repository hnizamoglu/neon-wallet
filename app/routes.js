import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Balance from './components/Balance';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Login} />
		<Route path="/balance" component={Balance} />
	</Route>
);
