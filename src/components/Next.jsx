import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],

    render() {
        return (
            <button className='next' onClick={ this.props.next }>
                Next
            </button>
        );
    }
});
