import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

ReactDOM.render(
    <Voting pair={ pair } winner='Trainspotting' />,
    document.getElementById('app')
);
