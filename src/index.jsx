import App from './components/App';
import {applyMiddleware, createStore} from 'redux';
import io from 'socket.io-client';
import {List} from 'immutable';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import remoteActionMiddleware from './remote_action_middleware';
import {ResultsContainer} from './components/Results';
import Router, {Route} from 'react-router';
import {setState} from './action_creators';
import {VotingContainer} from './components/Voting';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
    store.dispatch(setState(state))
);

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

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
