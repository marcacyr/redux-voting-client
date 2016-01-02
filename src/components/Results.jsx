import {connect} from 'react-redux';
import {List} from 'immutable';
import Next from './Next';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import React from 'react';
import Tally from './Tally';
import Winner from './Winner';

export const Results = React.createClass({
    mixins: [PureRenderMixin],

    getPair() {
        return this.props.pair || List();
    },

    getWinnerUI() {
        return (
            <Winner ref='winner' winner={ this.props.winner } />
        );
    },

    getResultsUI() {
        return (
            <div className='results'>
                <Tally pair={ this.getPair() } tally={ this.props.tally } />
                <div className='management'>
                    <Next ref='next' next={ this.props.next } />
                </div>
            </div>
        );
    },

    render() {
        const renderedUI = this.props.winner ? this.getWinnerUI() : this.getResultsUI();
        return renderedUI;
    }
});

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        tally: state.getIn(['vote', 'tally']),
        winner: state.get('winner')
    }
}

export const ResultsContainer = connect(mapStateToProps)(Results);
