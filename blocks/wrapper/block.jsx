// External Dependencies.
import classnames from 'classnames/dedupe';

const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InnerBlocks,
} = wp.editor;

class TabBlock extends Component {
    render() {
        let className = classnames( 'bengal-studio-wrapper' );
        return (
            <div className={ className }>
                <InnerBlocks templateLock={ false } />
            </div>
        );
    }
}

const {
	registerBlockType,
} = wp.blocks;

registerBlockType('bengal-studio/wrapper', {
    title: __( 'Wrapper' ),
    description: __( 'A simple block' ),
    icon: 'index-card',
    category: 'layout',

    edit: TabBlock,

    save: function() {
        let className = classnames( 'bengal-studio-wrapper' );
        return (
            <div className={ className }>
                <InnerBlocks.Content />
            </div>
        );
    }
})
