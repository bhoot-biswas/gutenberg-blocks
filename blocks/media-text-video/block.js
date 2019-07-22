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
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames_dedupe__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames_dedupe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames_dedupe__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// External Dependencies.


var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var Fragment = wp.element.Fragment;


var ALLOWED_BLOCKS = ['core/button', 'core/paragraph', 'core/heading', 'core/list'];

var MediaTextBlock = function (_Component) {
    _inherits(MediaTextBlock, _Component);

    function MediaTextBlock() {
        _classCallCheck(this, MediaTextBlock);

        return _possibleConstructorReturn(this, (MediaTextBlock.__proto__ || Object.getPrototypeOf(MediaTextBlock)).apply(this, arguments));
    }

    _createClass(MediaTextBlock, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                attributes = _props.attributes,
                setAttributes = _props.setAttributes;
            var media = attributes.media,
                videoUrl = attributes.videoUrl,
                enableVideo = attributes.enableVideo;


            var className = __WEBPACK_IMPORTED_MODULE_0_classnames_dedupe___default()('bengal-studio-block-media-text-video');
            return wp.element.createElement(
                Fragment,
                null,
                wp.element.createElement(
                    InspectorControls,
                    null,
                    wp.element.createElement(
                        PanelBody,
                        { title: __('Video URL'), className: 'blocks-video' },
                        wp.element.createElement(ToggleControl, {
                            label: 'Enable Video',
                            help: enableVideo ? 'Has overlay video.' : 'No overlay video.',
                            checked: !!enableVideo,
                            onChange: function onChange() {
                                return setAttributes({ enableVideo: !enableVideo });
                            }
                        }),
                        wp.element.createElement(TextControl, {
                            label: 'Additional CSS Class',
                            value: videoUrl,
                            onChange: function onChange(value) {
                                return setAttributes({ videoUrl: value });
                            }
                        })
                    )
                ),
                wp.element.createElement(
                    'div',
                    { className: className },
                    wp.element.createElement(
                        'div',
                        { className: 'bengal-studio__row' },
                        wp.element.createElement(
                            'div',
                            { className: 'bengal-studio__col' },
                            wp.element.createElement(MediaUpload, {
                                onSelect: function onSelect(media) {
                                    return setAttributes({ media: media });
                                },
                                allowedTypes: 'image',
                                value: media.id,
                                render: function render(_ref) {
                                    var open = _ref.open;
                                    return wp.element.createElement(
                                        'div',
                                        { className: media.id ? 'bengal-studio__media' : 'bengal-studio__button-wrap', onClick: open },
                                        media.id ? wp.element.createElement('img', { src: media.url, alt: __('Upload Image', 'gutenberg-examples') }) : wp.element.createElement(
                                            'div',
                                            { className: 'button button-large' },
                                            __('Upload Image', 'gutenberg-examples')
                                        )
                                    );
                                }
                            })
                        ),
                        wp.element.createElement(
                            'div',
                            { className: 'bengal-studio__col' },
                            wp.element.createElement(InnerBlocks, {
                                allowedBlocks: ALLOWED_BLOCKS
                            })
                        )
                    )
                )
            );
        }
    }]);

    return MediaTextBlock;
}(Component);

var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('bengal-studio/media-text-video', {
    title: __('Media & Text (Custom Block)'),
    description: __('A simple block'),
    icon: 'index-card',
    category: 'layout',
    attributes: {
        enableVideo: {
            type: 'boolean',
            default: false
        },
        videoUrl: {
            type: 'string',
            default: 'https://www.youtube.com/watch?v=vcaXm9dgcpI'
        },
        media: {
            type: 'object',
            default: {
                id: 0,
                url: ''
            }
        }
    },

    edit: MediaTextBlock,

    save: function save() {
        return wp.element.createElement(InnerBlocks.Content, null);
    }
});

/***/ })

/******/ });