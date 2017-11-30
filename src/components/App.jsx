import React from 'react';
import {List, Map} from 'immutable';
import { Route, Switch } from 'react-router-dom';
import { ResultsContainer } from './Results';
import { VotingContainer }  from './Voting';


// const pair = List.of('Trainspotting', '28 Days Later');
// const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

export default class App extends React.Component {
  render() {
    return this.props.children;
  }
};
