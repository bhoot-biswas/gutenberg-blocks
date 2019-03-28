// External Dependencies.
import classnames from 'classnames/dedupe';

const { __ } = wp.i18n;
const { Component } = wp.element;

class TabBlock extends Component {
    render() {

        let className = classnames( 'bengal-studio-tab' );

        return (
            <div className={ className }>
                ggg
            </div>
        );
    }
}

const {
	registerBlockType,
} = wp.blocks;

registerBlockType('bengal-studio/chart', {
    title: __( 'Chart' ),
    description: __( 'A single tab within a tabs block.' ),
    icon: 'index-card',
    category: 'layout',

    edit: TabBlock,

    save: function() {
        let className = 'tab-pane fade';
        return (
            <div className={ className }>
                hh
            </div>
        );
    }
})
