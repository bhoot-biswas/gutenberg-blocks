// External Dependencies.
import classnames from 'classnames/dedupe';

const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InnerBlocks,
} = wp.editor;

const ALLOWED_BLOCKS = [ 'core/button', 'core/paragraph', 'core/heading', 'core/list' ];
const TEMPLATE = [
    [ 'core/columns', {}, [
        [ 'core/column', {}, [
            [ 'core/image', {} ],
        ] ],
        [ 'core/column', {}, [
            [ 'core/heading', { placeholder: 'Heading' } ],
            [ 'core/paragraph', { placeholder: 'Paragraph' } ],
        ] ],
    ] ],
];

class TabBlock extends Component {
    render() {
        let className = classnames( 'bengal-studio-block-media-text' );
        return (
            <div className={ className }>
                <InnerBlocks
                    allowedBlocks={ ALLOWED_BLOCKS }
                    template={ TEMPLATE }
                    templateInsertUpdatesSelection={ false }
                />
            </div>
        );
    }
}

const {
	registerBlockType,
} = wp.blocks;

registerBlockType('bengal-studio/media-text', {
    title: __( 'Media & Text (Custom)' ),
    description: __( 'A simple block' ),
    icon: 'index-card',
    category: 'layout',

    edit: TabBlock,

    save: function() {
        let className = classnames( 'bengal-studio-block-media-text' );
        return (
            <div className={ className }>
                <div className="wp-block-media-text__content">
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    }
})
