import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carousel from './carousel';
const { __, setLocaleData } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	RichText,
	MediaUpload,
	BlockControls,
	InspectorControls
} = wp.editor;
const {
	Button,
	PanelBody,
	SelectControl
} = wp.components;
const {
	Fragment
} = wp.element;

registerBlockType( 'bengal-studio/testimonials', {
	title: __( 'Testimonials', 'gutenberg-blocks' ),
	icon: 'index-card',
	category: 'layout',
	attributes: {
		items: {
			type: 'array',
			default: [
				{
					id: Date.now(),
					content: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
					backgroundId: 0,
					backgroundUrl: '',
					mediaId: 0,
					mediaUrl: ''
				}
			]
		},
		options: {
			type: 'object',
			default: {
				items: 1,
				animateOut: 'fadeOut'
			}
		}
	},
	edit: ( props ) => {
		const {
			className,
			attributes: {
				items,
				options
			},
			setAttributes,
		} = props;

		const quotes = [
			'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
			'A room without books is like a body without a soul',
			'If you tell the truth, you don\'t have to remember anything',
			'Always forgive your enemies; nothing annoys them so much.'
		];

		const removeItem = (itemId) => {
			let newItems = items.filter(function (item) {
				return item.id !== itemId;
			});

			setAttributes( { items: newItems } );
		}

		const addItem = () => {
			const quote = quotes[Math.floor(Math.random()*quotes.length)];

			let item = {
				id: Date.now(),
				content: quote,
				backgroundId: 0,
				backgroundUrl: '',
				mediaId: 0,
				mediaUrl: ''
			};

			let newItems = items.concat(item);
			setAttributes( { items: newItems } );
		}

		const onChangeContent = ( { newContent, currentItem } ) => {
			let newItems = items.map(item =>
		        (item.id === currentItem.id)
					? {...item, content: newContent}
					: item
		    )

			setAttributes( { items: newItems } );
		};

		const onSelectBackground = ( { media, currentItem } ) => {
			let newItems = items.map(item =>
		        (item.id === currentItem.id)
					? {...item, backgroundId: media.id, backgroundUrl: media.url }
					: item
		    )

			setAttributes( { items: newItems } );
		};

		const onSelectMedia = ( { media, currentItem } ) => {
			let newItems = items.map(item =>
		        (item.id === currentItem.id)
					? {...item, mediaId: media.id, mediaUrl: media.url }
					: item
		    )

			setAttributes( { items: newItems } );
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={ __( 'Options' ) }
						initialOpen={ false }
					>
						<SelectControl
							label={ __( 'animateOut' ) }
							help= { __( 'Class for CSS3 animation out.') }
							value={ [ options.animateOut ] }
							onChange={ ( animateOut ) => {
								const newOptions = {...options, animateOut: animateOut};
								setAttributes( { options: newOptions } );
							} }
							options={ [
								{ value: 'fadeOut', label: 'fadeOut' },
								{ value: 'slideOutDown', label: 'slideOutDown' }
							] }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ className }>
					<Carousel
						items={ items }
						onChangeContent={ onChangeContent }
						onSelectBackground={ onSelectBackground }
						onSelectMedia={ onSelectMedia }
						removeItem={ removeItem }
						addItem={ addItem }
					/>
				</div>
			</Fragment>
		);
	},
	save: () => {
		// Rendering in PHP
        return null;
	},
} );
