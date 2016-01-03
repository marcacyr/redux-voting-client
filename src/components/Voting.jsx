import {connect} from 'react-redux';
import {List} from 'immutable';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import React from 'react';
import Vote from './Vote';
import Winner from './Winner';
import * as actionCreators from '../action_creators';

export const Voting = React.createClass({
    mixins: [PureRenderMixin],

    render() {
        const {winner} = this.props;
        return (
            <div>
                { winner ?
                    <Winner ref="winner" winner={ winner } /> :
                    <Vote { ...this.props } />
                }
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        hasVoted: state.getIn(['myVote', 'entry']),
        winner: state.get('winner')
    };
}

export const VotingContainer = connect(
    mapStateToProps,
    actionCreators
)(Voting);
