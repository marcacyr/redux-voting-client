import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],

    getVotes(entry) {
        if (this.props.tally && this.props.tally.has(entry)) {
            return this.props.tally.get(entry);
        }
        return 0;
    },

    render() {
        const {pair} = this.props;

        return (
            <div className='tally'>
                { pair.map(entry =>
                    <div key={ entry } className='entry'>
                        <h1>{ entry }</h1>
                        <div className='voteCount'>
                            { this.getVotes(entry) }
                        </div>
                    </div>
                )}
            </div>
        )
    }
});
