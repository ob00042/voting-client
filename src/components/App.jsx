import React from 'react';
import {List, Map} from 'immutable';
import { Route, Switch } from 'react-router-dom';
import Results from './Results';
import Voting from './Voting';


const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

export default class App extends React.Component {
  render() {
    return ( 
    		<Switch>
					<Route path="/results" render={() => <Results pair={pair} tally={tally} />} />
					<Route path="/" render={() => <Voting pair={pair} />} />
				</Switch>
			);
  }
};
