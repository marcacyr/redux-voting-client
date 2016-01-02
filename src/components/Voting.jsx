import React from 'react';
import {List} from 'immutable';
import Winner from './Winner';
import Vote from './Vote';

export default React.createClass({
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
