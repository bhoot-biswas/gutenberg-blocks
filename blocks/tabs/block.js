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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
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

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),

/***/ 77:
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


var applyFilters = wp.hooks.applyFilters;
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks;
var registerBlockType = wp.blocks.registerBlockType;

/**
 * Returns the layouts configuration for a given number of tabs.
 *
 * @param {number} attributes tabs attributes.
 *
 * @return {Object[]} Tabs layout configuration.
 */

var getTabsTemplate = function getTabsTemplate(attributes) {
    var tabsCount = attributes.tabsCount;

    var result = [];

    for (var k = 1; k <= tabsCount; k++) {
        result.push(['bengal-studio/tab', { tabNumber: k }]);
    }

    return result;
};

var getTabs = function getTabs(_ref) {
    var tabsCount = _ref.tabsCount,
        tabsSettings = _ref.tabsSettings;

    var result = [];

    for (var k = 1; k <= tabsCount; k++) {
        result.push({
            label: tabsSettings['tab_' + k] ? tabsSettings['tab_' + k].label : sprintf(__('Tab %d'), k),
            number: k
        });
    }

    return result;
};

var TabsBlock = function (_Component) {
    _inherits(TabsBlock, _Component);

    function TabsBlock() {
        _classCallCheck(this, TabsBlock);

        return _possibleConstructorReturn(this, (TabsBlock.__proto__ || Object.getPrototypeOf(TabsBlock)).apply(this, arguments));
    }

    _createClass(TabsBlock, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                attributes = _props.attributes,
                setAttributes = _props.setAttributes;
            var _props$className = this.props.className,
                className = _props$className === undefined ? '' : _props$className;
            var tabsCount = attributes.tabsCount,
                tabActive = attributes.tabActive,
                tabsSettings = attributes.tabsSettings,
                buttonsAlign = attributes.buttonsAlign;


            var tabs = getTabs(attributes);

            className = __WEBPACK_IMPORTED_MODULE_0_classnames_dedupe___default()(className, 'bengal-studio-tabs');

            className = applyFilters('bengalStudio.editor.className', className, this.props);

            return wp.element.createElement(
                Fragment,
                null,
                wp.element.createElement(
                    InspectorControls,
                    null,
                    wp.element.createElement(
                        PanelBody,
                        null,
                        wp.element.createElement(
                            'div',
                            { className: 'bengal-studio-alert', style: { borderLeftColor: '#de9116' } },
                            wp.element.createElement(
                                'div',
                                { className: 'bengal-studio-alert-content' },
                                __('This Tabs block has a legacy structure. To use new tabs, add it again from blocks inserter.')
                            )
                        )
                    ),
                    wp.element.createElement(
                        PanelBody,
                        null,
                        wp.element.createElement(RangeControl, {
                            label: __('Tabs'),
                            value: tabsCount,
                            onChange: function onChange(value) {
                                return setAttributes({ tabsCount: value });
                            },
                            min: 1,
                            max: 6
                        })
                    )
                ),
                wp.element.createElement(
                    'div',
                    { className: className, 'data-tab-active': tabActive },
                    wp.element.createElement(
                        'div',
                        { className: __WEBPACK_IMPORTED_MODULE_0_classnames_dedupe___default()('bengal-studio-tabs__buttons', 'bengal-studio-tabs-buttons-align-' + buttonsAlign) },
                        tabs.map(function (val) {
                            var selected = tabActive === val.number;

                            return wp.element.createElement(RichText, {
                                tagName: 'div',
                                'data-tab': val.number,
                                className: __WEBPACK_IMPORTED_MODULE_0_classnames_dedupe___default()('bengal-studio-tabs-buttons-item', selected ? 'bengal-studio-tabs-buttons-item-active' : ''),
                                placeholder: __('Tab label'),
                                value: val.label,
                                unstableOnFocus: function unstableOnFocus() {
                                    return setAttributes({ tabActive: val.number });
                                },
                                onChange: function onChange(value) {
                                    if (typeof tabs[val.number - 1] !== 'undefined') {
                                        if (typeof tabsSettings['tab_' + val.number] === 'undefined') {
                                            tabsSettings['tab_' + val.number] = {};
                                        }
                                        tabsSettings['tab_' + val.number].label = value;
                                        setAttributes({ tabsSettings: Object.assign({}, tabsSettings) });
                                    }
                                },
                                formattingControls: ['bold', 'italic', 'strikethrough'],
                                keepPlaceholderOnFocus: true,
                                key: 'tab_button_' + val.number
                            });
                        })
                    ),
                    wp.element.createElement(
                        'div',
                        { className: 'bengal-studio-tabs__content' },
                        wp.element.createElement(
                            'div',
                            { className: 'bengal-studio-tabs__inside' },
                            wp.element.createElement(InnerBlocks, {
                                template: getTabsTemplate(attributes),
                                templateLock: 'all',
                                allowedBlocks: ['bengal-studio/tab']
                            })
                        )
                    )
                ),
                wp.element.createElement(
                    'style',
                    null,
                    '\n                    .bengal-studio-tabs .bengal-studio-tabs__content [data-tab="' + tabActive + '"] {\n                        display: block;\n                    }\n                    '
                )
            );
        }
    }]);

    return TabsBlock;
}(Component);

registerBlockType('bengal-studio/tabs', {
    title: __('Tabs'),
    description: __('Tabs.'),
    icon: 'index-card',
    category: 'layout',
    keywords: [__('tabs'), __('tab')],
    attributes: {
        tabsCount: {
            type: 'number',
            default: 2
        },
        tabActive: {
            type: 'number',
            default: 1
        },
        tabsSettings: {
            type: 'object',
            default: {}
        },
        buttonsAlign: {
            type: 'string',
            default: 'start'
        }
    },

    edit: TabsBlock,

    save: function save() {
        return wp.element.createElement(InnerBlocks.Content, null);
    }
});

/***/ })

/******/ });