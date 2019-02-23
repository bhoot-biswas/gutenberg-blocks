import { Component } from 'react';
const { __, setLocaleData } = wp.i18n;
const {
	RichText,
	MediaUpload
} = wp.editor;

const {
	Button,
} = wp.components;

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        };

        this.setCurrentIndex = this.setCurrentIndex.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    setCurrentIndex(index) {
        this.setState({currentIndex: index});
    }

	wow() {
        console.log('gg');
    }

    removeItem() {
		const { items, removeItem } = this.props;
		let { currentIndex } = this.state;
		if (!currentIndex) {
			currentIndex = items[0].id;
		}

		const newItems = items.filter(function (item) {
			return item.id !== currentIndex;
		});

		if (newItems && newItems.length && currentIndex) {
			removeItem(currentIndex);
			this.setState({currentIndex: newItems[0].id});
		}
    }

    render() {
        const { items, addItem, onChangeContent, onSelectBackground, onSelectMedia } = this.props;
        let { currentIndex } = this.state;
		if (!currentIndex) {
			currentIndex = items[0].id;
		}

		let currentItem;
		items.map((item) => {
			if (item.id == currentIndex) {
				currentItem = item;
			}
		});

        return (
            <div>
                <div className="carousel__wrap">
					<MediaUpload
						onSelect={ ( media ) => { onSelectBackground( { media, currentItem } ) } }
						allowedTypes="image"
						value={ currentItem.backgroundId }
						render={ ( { open } ) => (
							<div style={ {backgroundImage: 'url(' + currentItem.backgroundUrl + ')'} } className={ currentItem.backgroundId ? 'carousel__background image-button' : 'carousel__background button button-large' } onClick={ open }>
								{ ! currentItem.backgroundId ? __( 'Upload Image', 'gutenberg-examples' ) : <img src={ currentItem.backgroundUrl } alt={ __( 'Upload Recipe Image', 'gutenberg-examples' ) } /> }
							</div>
						) }
					/>

					<div className="carousel__body">
						<RichText
							tagName="p"
							onChange={ ( newContent ) => { onChangeContent( { newContent, currentItem } ) } }
							value={currentItem.content}
						/>

						<div className="carousel__media">
							<MediaUpload
								onSelect={ ( media ) => { onSelectMedia( { media, currentItem } ) } }
								allowedTypes="image"
								value={ currentItem.mediaId }
								render={ ( { open } ) => (
									<Button className={ currentItem.mediaId ? 'image-button' : 'button button-large' } onClick={ open }>
										{ ! currentItem.mediaId ? __( 'Upload Image', 'gutenberg-examples' ) : <img src={ currentItem.mediaUrl } alt={ __( 'Upload Recipe Image', 'gutenberg-examples' ) } /> }
									</Button>
								) }
							/>
						</div>
					</div>
                </div>

				<div className="carousel__controls">
					<button className="btn carousel__controls--delete" onClick={() => this.removeItem()}>
						<span class="dashicons dashicons-minus"></span>
					</button>

	                {items.map((item, index) =>
	                    <button className="btn" onClick={() => this.setCurrentIndex(item.id)}>
	                        {index + 1}
	                    </button>
	                )}

					<button className="btn carousel__controls--add" onClick={() => addItem()}>
						<span class="dashicons dashicons-plus"></span>
					</button>
				</div>
            </div>
        );
    }
}
