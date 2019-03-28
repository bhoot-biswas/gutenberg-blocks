// External Dependencies.
import classnames from 'classnames/dedupe';

const {
    applyFilters,
} = wp.hooks;
const { __, sprintf } = wp.i18n;
const { Component, Fragment } = wp.element;
const {
    PanelBody,
    RangeControl,
    SelectControl,
} = wp.components;

const {
    RichText,
    InspectorControls,
    InnerBlocks,
} = wp.editor;

const {
	registerBlockType,
} = wp.blocks;

/**
 * Returns the layouts configuration for a given number of tabs.
 *
 * @param {number} attributes tabs attributes.
 *
 * @return {Object[]} Tabs layout configuration.
 */
const getTabsTemplate = ( attributes ) => {
    const {
        tabsCount,
    } = attributes;
    const result = [];

    for ( let k = 1; k <= tabsCount; k++ ) {
        result.push( [ 'bengal-studio/tab', { tabNumber: k } ] );
    }

    return result;
};

const getTabs = ( { tabsCount, tabsSettings } ) => {
    const result = [];

    for ( let k = 1; k <= tabsCount; k++ ) {
        result.push( {
            label: tabsSettings[ 'tab_' + k ] ? tabsSettings[ 'tab_' + k ].label : sprintf( __( 'Tab %d' ), k ),
            number: k,
        } );
    }

    return result;
};

class TabsBlock extends Component {
    render() {
        const {
            attributes,
            setAttributes,
        } = this.props;

        let { className = '' } = this.props;

        const {
            tabsCount,
            tabActive,
            tabsSettings,
            buttonsAlign,
        } = attributes;

        const tabs = getTabs( attributes );

        className = classnames(
            className,
            'bengal-studio-tabs'
        );

        className = applyFilters( 'bengalStudio.editor.className', className, this.props );

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <div className="bengal-studio-alert" style={ { borderLeftColor: '#de9116' } }>
                            <div className="bengal-studio-alert-content">
                                { __( 'This Tabs block has a legacy structure. To use new tabs, add it again from blocks inserter.' ) }
                            </div>
                        </div>
                    </PanelBody>
                    <PanelBody>
                        <RangeControl
                            label={ __( 'Tabs' ) }
                            value={ tabsCount }
                            onChange={ ( value ) => setAttributes( { tabsCount: value } ) }
                            min={ 1 }
                            max={ 6 }
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={ className } data-tab-active={ tabActive }>
                    <div className={ classnames( 'bengal-studio-tabs__buttons', `bengal-studio-tabs-buttons-align-${ buttonsAlign }` ) }>
                        {
                            tabs.map( ( val ) => {
                                const selected = tabActive === val.number;

                                return (
                                    <RichText
                                        tagName="div"
                                        data-tab={ val.number }
                                        className={ classnames( 'bengal-studio-tabs-buttons-item', selected ? 'bengal-studio-tabs-buttons-item-active' : '' ) }
                                        placeholder={ __( 'Tab label' ) }
                                        value={ val.label }
                                        unstableOnFocus={ () => setAttributes( { tabActive: val.number } ) }
                                        onChange={ ( value ) => {
                                            if ( typeof tabs[ val.number - 1 ] !== 'undefined' ) {
                                                if ( typeof tabsSettings[ `tab_${ val.number }` ] === 'undefined' ) {
                                                    tabsSettings[ `tab_${ val.number }` ] = {};
                                                }
                                                tabsSettings[ `tab_${ val.number }` ].label = value;
                                                setAttributes( { tabsSettings: Object.assign( {}, tabsSettings ) } );
                                            }
                                        } }
                                        formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                                        keepPlaceholderOnFocus
                                        key={ `tab_button_${ val.number }` }
                                    />
                                );
                            } )
                        }
                    </div>
                    <div className="bengal-studio-tabs__content">
                        <div className="bengal-studio-tabs__inside">
                            <InnerBlocks
                                template={ getTabsTemplate( attributes ) }
                                templateLock="all"
                                allowedBlocks={ [ 'bengal-studio/tab' ] }
                            />
                        </div>
                    </div>
                </div>
                <style>
                    { `
                    .bengal-studio-tabs .bengal-studio-tabs__content [data-tab="${ tabActive }"] {
                        display: block;
                    }
                    ` }
                </style>
            </Fragment>
        );
    }
}

registerBlockType('bengal-studio/tabs', {
    title: __( 'Tabs' ),
    description: __( 'Tabs.' ),
    icon: 'index-card',
    category: 'layout',
    keywords: [
        __( 'tabs' ),
        __( 'tab' )
    ],
    attributes: {
        tabsCount: {
            type: 'number',
            default: 2,
        },
        tabActive: {
            type: 'number',
            default: 1,
        },
        tabsSettings: {
            type: 'object',
            default: {},
        },
        buttonsAlign: {
            type: 'string',
            default: 'start',
        },
    },

    edit: TabsBlock,

    save: function() {
        return (
            <InnerBlocks.Content />
        );
    }
});
