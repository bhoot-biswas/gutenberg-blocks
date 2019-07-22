// External Dependencies.
import classnames from 'classnames/dedupe';

const { __ } = wp.i18n;
const {
    Component,
} = wp.element;
const {
    TextControl,
    ToggleControl,
    PanelBody,
} = wp.components;
const {
    MediaUpload,
    InnerBlocks,
    InspectorControls,
} = wp.editor;
const {
	Fragment
} = wp.element;

const ALLOWED_BLOCKS = [ 'core/button', 'core/paragraph', 'core/heading', 'core/list' ];

class MediaTextBlock extends Component {
    render() {
        const {
            attributes,
            setAttributes,
		} = this.props;

        const {
            media,
			videoUrl,
            enableVideo
		} = attributes;

        let className = classnames( 'bengal-studio-block-media-text-video' );
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={ __( 'Video URL' ) } className="blocks-video">
                        <ToggleControl
                            label="Enable Video"
                            help={ enableVideo ? 'Has overlay video.' : 'No overlay video.' }
                            checked={ !! enableVideo }
                            onChange={ () => setAttributes( { enableVideo: ! enableVideo } ) }
                        />
                        <TextControl
                            label="Additional CSS Class"
                            value={ videoUrl }
                            onChange={ ( value ) => setAttributes( { videoUrl: value } ) }
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={ className }>
                    <div className={ 'bengal-studio__row' }>
                        <div className={ 'bengal-studio__col' }>
                            <MediaUpload
                                onSelect={ ( media ) => setAttributes( { media } ) }
                                allowedTypes="image"
                                value={ media.id }
                                render={ ( { open } ) => (
                                    <div className={ media.id ? 'bengal-studio__media' : 'bengal-studio__button-wrap' } onClick={ open }>
                                        { media.id ? <img src={ media.url } alt={ __( 'Upload Image', 'gutenberg-examples' ) } /> : <div className={ 'button button-large' }>{ __( 'Upload Image', 'gutenberg-examples' ) }</div> }
                                    </div>
                                ) }
                            />
                        </div>
                        <div className={ 'bengal-studio__col' }>
                            <InnerBlocks
                                allowedBlocks={ ALLOWED_BLOCKS }
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const {
	registerBlockType,
} = wp.blocks;

registerBlockType('bengal-studio/media-text-video', {
    title: __( 'Media & Text (Custom Block)' ),
    description: __( 'A simple block' ),
    icon: 'index-card',
    category: 'layout',
    attributes: {
        enableVideo: {
            type: 'boolean',
            default: false,
        },
        videoUrl: {
            type: 'string',
            default: 'https://www.youtube.com/watch?v=vcaXm9dgcpI',
        },
        media: {
            type: 'object',
            default: {
                id: 0,
                url: '',
            },
        }
    },

    edit: MediaTextBlock,

    save: function() {
        return (
            <InnerBlocks.Content />
        );
    }
})
