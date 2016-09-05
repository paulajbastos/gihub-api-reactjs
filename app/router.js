import React from 'react';
import { Router, Route, browserHistory, DefaultRoute, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';

// Pages
import Home from './components/Home';
import RepoItem from './components/repo-item';

export default (
	<Router history={browserHistory}>
		<Route component={MainLayout}>
		  	<Route path="/" component={Home} />
		  	<Route path="/:name" component={RepoItem} />
		</Route>
  	</Router>
);