// External Dependencies.
import classnames from 'classnames/dedupe';

const {
    applyFilters,
} = wp.hooks;
const { __ } = wp.i18n;
const { Component } = wp.element;

const {
    InnerBlocks,
} = wp.editor;

class TabBlock extends Component {
    render() {
        let {
            className = ''
        } = this.props;

        className = classnames( className, 'bengal-studio-tab' );

        className = applyFilters( 'bengalStudio.editor.className', className, this.props );

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

registerBlockType('bengal-studio/tab', {
    title: __( 'Tab' ),
    description: __( 'A single tab within a tabs block.' ),
    icon: 'index-card',
    category: 'layout',
    attributes: {
        tabNumber: {
            type: 'number',
        },
    },

    edit: TabBlock,

    getEditWrapperProps( attributes ) {
        return { 'data-tab': attributes.tabNumber };
    },

    save: function( props ) {
        const {
            tabNumber,
        } = props.attributes;

        let className = 'tab-pane fade';

        className = applyFilters( 'bengalStudio.blocks.className', className, {
            ...{
                name,
            },
            ...props,
        } );

        return (
            <div className={ className } id={ `tab_${ tabNumber }` }>
                <InnerBlocks.Content />
            </div>
        );
    }
})
