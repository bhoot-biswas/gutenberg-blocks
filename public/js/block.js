/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload;
var Button = wp.components.Button;


registerBlockType('gutenberg-examples/example-05-recipe-card-esnext', {
	title: __('Example: Recipe Card (esnext)', 'gutenberg-examples'),
	icon: 'index-card',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2'
		},
		mediaID: {
			type: 'number'
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src'
		},
		ingredients: {
			type: 'array',
			source: 'children',
			selector: '.ingredients'
		},
		instructions: {
			type: 'array',
			source: 'children',
			selector: '.steps'
		}
	},
	edit: function edit(props) {
		var className = props.className,
		    _props$attributes = props.attributes,
		    title = _props$attributes.title,
		    mediaID = _props$attributes.mediaID,
		    mediaURL = _props$attributes.mediaURL,
		    ingredients = _props$attributes.ingredients,
		    instructions = _props$attributes.instructions,
		    setAttributes = props.setAttributes;

		var onChangeTitle = function onChangeTitle(value) {
			setAttributes({ title: value });
		};

		var onSelectImage = function onSelectImage(media) {
			setAttributes({
				mediaURL: media.url,
				mediaID: media.id
			});
		};
		var onChangeIngredients = function onChangeIngredients(value) {
			setAttributes({ ingredients: value });
		};

		var onChangeInstructions = function onChangeInstructions(value) {
			setAttributes({ instructions: value });
		};

		return wp.element.createElement(
			'div',
			{ className: className },
			wp.element.createElement(RichText, {
				tagName: 'h2',
				placeholder: __('Write Recipe title…', 'gutenberg-examples'),
				value: title,
				onChange: onChangeTitle
			}),
			wp.element.createElement(
				'div',
				{ className: 'recipe-image' },
				wp.element.createElement(MediaUpload, {
					onSelect: onSelectImage,
					allowedTypes: 'image',
					value: mediaID,
					render: function render(_ref) {
						var open = _ref.open;
						return wp.element.createElement(
							Button,
							{ className: mediaID ? 'image-button' : 'button button-large', onClick: open },
							!mediaID ? __('Upload Image', 'gutenberg-examples') : wp.element.createElement('img', { src: mediaURL, alt: __('Upload Recipe Image', 'gutenberg-examples') })
						);
					}
				})
			),
			wp.element.createElement(
				'h3',
				null,
				__('Ingredients', 'gutenberg-examples')
			),
			wp.element.createElement(RichText, {
				tagName: 'ul',
				multiline: 'li',
				placeholder: __('Write a list of ingredients…', 'gutenberg-examples'),
				value: ingredients,
				onChange: onChangeIngredients,
				className: 'ingredients'
			}),
			wp.element.createElement(
				'h3',
				null,
				__('Instructions', 'gutenberg-examples')
			),
			wp.element.createElement(RichText, {
				tagName: 'div',
				multiline: 'p',
				className: 'steps',
				placeholder: __('Write the instructions…', 'gutenberg-examples'),
				value: instructions,
				onChange: onChangeInstructions
			})
		);
	},
	save: function save(props) {
		var className = props.className,
		    _props$attributes2 = props.attributes,
		    title = _props$attributes2.title,
		    mediaURL = _props$attributes2.mediaURL,
		    ingredients = _props$attributes2.ingredients,
		    instructions = _props$attributes2.instructions;

		return wp.element.createElement(
			'div',
			{ className: className },
			wp.element.createElement(RichText.Content, { tagName: 'h2', value: title }),
			mediaURL && wp.element.createElement('img', { className: 'recipe-image', src: mediaURL, alt: __('Recipe Image', 'gutenberg-examples') }),
			wp.element.createElement(RichText.Content, { tagName: 'h2', className: 'ingredients', value: ingredients }),
			wp.element.createElement(RichText.Content, { tagName: 'div', className: 'steps', value: instructions })
		);
	}
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);