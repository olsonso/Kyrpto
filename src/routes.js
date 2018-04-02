import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './components/app';
import HomePage from './components/HomePage';
import LoginPage from "./components/LoginPage";
import UserHomePage from "./components/UserHomePage";


export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="login" component={LoginPage} />
		<Route path="userHomePage" component={UserHomePage} />
	</Route>	
)