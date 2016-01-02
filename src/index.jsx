import App from './components/App';
import {createStore} from 'redux';
import {List} from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import Results from './components/Results';
import Router, {Route} from 'react-router';
import Voting from './components/Voting';

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
        <Route path='/results' component={ Results } />
        <Route path='/' component={ Voting } />
    </Route>;

ReactDOM.render(
    <Router>{ routes }</Router>,
    document.getElementById('app')
);
