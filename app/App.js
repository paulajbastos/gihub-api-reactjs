'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';

// import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

/*
var Router = require('react-router').Router
var Route = require('react-router').Route
var Link = require('react-router').Link
*/

/*var RepoList = require('./components/RepoList');
var RepoItem = require('./components/RepoItem');

var Home = require('./components/Home');
var Example = require('./components/Example');*/

// Now we can attach the router to the 'root' element like this:
ReactDOM.render(Router, document.getElementById('root'));


/*ReactDOM.render(<RepoList/>, document.getElementById('reactRepoList'));
ReactDOM.render(<RepoItem/>, document.getElementById('reactRepoItem'));*/


// ReactDOM.render((
// 	<Router>
//     	<Route path="/" component={GCOM} />
//   	</Router>), document.getElementById("root")
// );


// <Route path="users" component={Users}>
// 	<Route path="/user/:userId" component={User}/>
// </Route>

//<Route path="user/:userID" component={User} />

// <Route component={SearchLayout}>
// <Route path="users" component={UserList} />
// <Route path="widgets" component={WidgetList} />