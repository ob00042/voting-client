import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import { VotingContainer } from './components/Voting';
import { ResultsContainer } from './components/Results';

const store = createStore(reducer);
store.dispatch({
	type: 'SET_STATE',
	state: {
		vote: {
			pair: ['Sunshine', '28 Days Later'],
			tally: {Sunshine: 2}
		}
	}
});

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