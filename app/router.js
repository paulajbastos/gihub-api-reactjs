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
		  	<Route path="gihub-api-reactjs" component={Home} />
			<Route path="gihub-api-reactjs">
				<Route path=":name" component={RepoItem} />
			</Route>
		</Route>
  	</Router>
);


/*
DEV:

OPT1
<Route path="/" component={Home} />
<Route path="repo">
	<Route path=":name" component={RepoItem} />
</Route>

OPT2
<Route path="/" component={Home} />
<Route path="/:name" component={RepoItem} />

AR:

<Route path="gihub-api-reactjs" component={Home} />
<Route path="gihub-api-reactjs">
	<Route path=":name" component={RepoItem} />
</Route>
*/