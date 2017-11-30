import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

ReactDOM.render(
  <HashRouter>
		<App />
	</HashRouter>,
  document.getElementById('app')
);