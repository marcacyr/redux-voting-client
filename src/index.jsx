import App from './components/App';
import {createStore} from 'redux';
import {List} from 'immutable';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import {ResultsContainer} from './components/Results';
import Router, {Route} from 'react-router';
import {VotingContainer} from './components/Voting';

const store = createStore(reducer);
store.dispatch({
    type: 'SET_STATE',
    state: {
        vote: {
            pair: ['Sunshine', '28 Days Later'],
            tally: { Sunshine: 2 }
        }
    }
});

const routes =
    <Route component={App}>
        <Route path='/results' component={ ResultsContainer } />
        <Route path='/' component={ VotingContainer } />
    </Route>;

ReactDOM.render(
    <Provider store={ store }>
        <Router>{ routes }</Router>
    </Provider>,
    document.getElementById('app')
);
