import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {List} from 'immutable';
import Winner from './Winner';

export default React.createClass({
    mixins: [PureRenderMixin],

    getPair() {
        return this.props.pair || List();
    },

    getVotes(entry) {
        if (this.props.tally && this.props.tally.has(entry)) {
            return this.props.tally.get(entry);
        }
        return 0;
    },

    getWinnerUI() {
        return (
            <Winner ref='winner' winner={ this.props.winner } />
        );
    },

    getResultsUI() {
        return (
            <div className='results'>
                <div className='tally'>
                    { this.getPair().map(entry =>
                        <div key={ entry } className='entry'>
                            <h1>{ entry }</h1>
                            <div className='voteCount'>
                                { this.getVotes(entry) }
                            </div>
                        </div>
                    )}
                </div>
                <div className='management'>
                    <button ref='next' className='next' onClick={ this.props.next }>
                        Next
                    </button>
                </div>
            </div>
        );
    },

    render() {
        const renderedUI = this.props.winner ? this.getWinnerUI() : this.getResultsUI();
        return renderedUI;
    }
});
