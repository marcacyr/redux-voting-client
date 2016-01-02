import React from 'react';
import {List} from 'immutable';
import Winner from './Winner';
import Vote from './Vote';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
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
