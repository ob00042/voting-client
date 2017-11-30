import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import { setState } from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import App from './components/App';
import { VotingContainer } from './components/Voting';
import { ResultsContainer } from './components/Results';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => 
	store.dispatch(setState(state))
);

const createStoreWithMiddleware = applyMiddleware(
	remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
	<Provider store={store}>
  	<HashRouter component={App}>
			<Switch>
				<Route path="/results" component={ResultsContainer} />
				<Route path="/" component={VotingContainer} />
			</Switch>
		</HashRouter>
	</Provider>,
  document.getElementById('app')
);