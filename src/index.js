import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/home.js';
import Activity from './components/activity.js';
import Research from './components/research.js';
import Publication from './components/publication.js';
import './styles/index.css';
import './styles/typography.css';
import { Route, BrowserRouter, Redirect, hashHistory } from 'react-router-dom';

ReactDOM.render((
	<BrowserRouter history={hashHistory}>
		<div>
			<Route path="/" component={App}>
				<Route path="*" component={Home} />
			</Route>
			<Redirect from='/' to='/home'/>
	    <Route path="/home" component={Home} />
	    <Route path="/activity" component={Activity} />
	    <Route path="/research" component={Research} />
	    <Route path="/publication" component={Publication} />
	  </div>
 	</BrowserRouter>
	),
  document.getElementById('root')
);
