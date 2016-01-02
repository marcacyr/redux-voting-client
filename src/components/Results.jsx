import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List} from 'immutable';
import Winner from './Winner';
import Tally from './Tally';
import Next from './Next';

export default React.createClass({
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
