(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* 
  @package NOTY - Dependency-free notification library 
  @version version: 3.1.4 
  @contributors https://github.com/needim/noty/graphs/contributors 
  @documentation Examples and Documentation - http://needim.github.com/noty 
  @license Licensed under the MIT licenses: http://www.opensource.org/licenses/mit-license.php 
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Noty", [], factory);
	else if(typeof exports === 'object')
		exports["Noty"] = factory();
	else
		root["Noty"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = exports.deepExtend = exports.animationEndEvents = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.inArray = inArray;
exports.stopPropagation = stopPropagation;
exports.generateID = generateID;
exports.outerHeight = outerHeight;
exports.addListener = addListener;
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.remove = remove;
exports.classList = classList;
exports.visibilityChangeFlow = visibilityChangeFlow;
exports.createAudioElements = createAudioElements;

var _api = __webpack_require__(1);

var API = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var animationEndEvents = exports.animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function inArray(needle, haystack, argStrict) {
  var key = void 0;
  var strict = !!argStrict;

  if (strict) {
    for (key in haystack) {
      if (haystack.hasOwnProperty(key) && haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack.hasOwnProperty(key) && haystack[key] === needle) {
        return true;
      }
    }
  }
  return false;
}

function stopPropagation(evt) {
  evt = evt || window.event;

  if (typeof evt.stopPropagation !== 'undefined') {
    evt.stopPropagation();
  } else {
    evt.cancelBubble = true;
  }
}

var deepExtend = exports.deepExtend = function deepExtend(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (Array.isArray(obj[key])) {
          out[key] = obj[key];
        } else if (_typeof(obj[key]) === 'object' && obj[key] !== null) {
          out[key] = deepExtend(out[key], obj[key]);
        } else {
          out[key] = obj[key];
        }
      }
    }
  }

  return out;
};

function generateID() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var id = 'noty_' + prefix + '_';

  id += 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });

  return id;
}

function outerHeight(el) {
  var height = el.offsetHeight;
  var style = window.getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

var css = exports.css = function () {
  var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'];
  var cssProps = {};

  function camelCase(string) {
    return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (match, letter) {
      return letter.toUpperCase();
    });
  }

  function getVendorProp(name) {
    var style = document.body.style;
    if (name in style) return name;

    var i = cssPrefixes.length;
    var capName = name.charAt(0).toUpperCase() + name.slice(1);
    var vendorName = void 0;

    while (i--) {
      vendorName = cssPrefixes[i] + capName;
      if (vendorName in style) return vendorName;
    }

    return name;
  }

  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }

  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }

  return function (element, properties) {
    var args = arguments;
    var prop = void 0;
    var value = void 0;

    if (args.length === 2) {
      for (prop in properties) {
        if (properties.hasOwnProperty(prop)) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) {
            applyCss(element, prop, value);
          }
        }
      }
    } else {
      applyCss(element, args[1], args[2]);
    }
  };
}();

function addListener(el, events, cb) {
  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  events = events.split(' ');
  for (var i = 0; i < events.length; i++) {
    if (document.addEventListener) {
      el.addEventListener(events[i], cb, useCapture);
    } else if (document.attachEvent) {
      el.attachEvent('on' + events[i], cb);
    }
  }
}

function hasClass(element, name) {
  var list = typeof element === 'string' ? element : classList(element);
  return list.indexOf(' ' + name + ' ') >= 0;
}

function addClass(element, name) {
  var oldList = classList(element);
  var newList = oldList + name;

  if (hasClass(oldList, name)) return;

  // Trim the opening space.
  element.className = newList.substring(1);
}

function removeClass(element, name) {
  var oldList = classList(element);
  var newList = void 0;

  if (!hasClass(element, name)) return;

  // Replace the class name.
  newList = oldList.replace(' ' + name + ' ', ' ');

  // Trim the opening and closing spaces.
  element.className = newList.substring(1, newList.length - 1);
}

function remove(element) {
  if (element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

function classList(element) {
  return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
}

function visibilityChangeFlow() {
  var hidden = void 0;
  var visibilityChange = void 0;
  if (typeof document.hidden !== 'undefined') {
    // Opera 12.10 and Firefox 18 and later support
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
  }

  function onVisibilityChange() {
    API.PageHidden = document[hidden];
    handleVisibilityChange();
  }

  function onBlur() {
    API.PageHidden = true;
    handleVisibilityChange();
  }

  function onFocus() {
    API.PageHidden = false;
    handleVisibilityChange();
  }

  function handleVisibilityChange() {
    if (API.PageHidden) stopAll();else resumeAll();
  }

  function stopAll() {
    setTimeout(function () {
      Object.keys(API.Store).forEach(function (id) {
        if (API.Store.hasOwnProperty(id)) {
          if (API.Store[id].options.visibilityControl) {
            API.Store[id].stop();
          }
        }
      });
    }, 100);
  }

  function resumeAll() {
    setTimeout(function () {
      Object.keys(API.Store).forEach(function (id) {
        if (API.Store.hasOwnProperty(id)) {
          if (API.Store[id].options.visibilityControl) {
            API.Store[id].resume();
          }
        }
      });
      API.queueRenderAll();
    }, 100);
  }

  if (visibilityChange) {
    addListener(document, visibilityChange, onVisibilityChange);
  }

  addListener(window, 'blur', onBlur);
  addListener(window, 'focus', onFocus);
}

function createAudioElements(ref) {
  if (ref.hasSound) {
    var audioElement = document.createElement('audio');

    ref.options.sounds.sources.forEach(function (s) {
      var source = document.createElement('source');
      source.src = s;
      source.type = 'audio/' + getExtension(s);
      audioElement.appendChild(source);
    });

    if (ref.barDom) {
      ref.barDom.appendChild(audioElement);
    } else {
      document.querySelector('body').appendChild(audioElement);
    }

    audioElement.volume = ref.options.sounds.volume;

    if (!ref.soundPlayed) {
      audioElement.play();
      ref.soundPlayed = true;
    }

    audioElement.onended = function () {
      remove(audioElement);
    };
  }
}

function getExtension(fileName) {
  return fileName.match(/\.([^.]+)$/)[1];
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Defaults = exports.Store = exports.Queues = exports.DefaultMaxVisible = exports.docTitle = exports.DocModalCount = exports.PageHidden = undefined;
exports.getQueueCounts = getQueueCounts;
exports.addToQueue = addToQueue;
exports.removeFromQueue = removeFromQueue;
exports.queueRender = queueRender;
exports.queueRenderAll = queueRenderAll;
exports.ghostFix = ghostFix;
exports.build = build;
exports.hasButtons = hasButtons;
exports.handleModal = handleModal;
exports.handleModalClose = handleModalClose;
exports.queueClose = queueClose;
exports.dequeueClose = dequeueClose;
exports.fire = fire;
exports.openFlow = openFlow;
exports.closeFlow = closeFlow;

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var PageHidden = exports.PageHidden = false;
var DocModalCount = exports.DocModalCount = 0;

var DocTitleProps = {
  originalTitle: null,
  count: 0,
  changed: false,
  timer: -1
};

var docTitle = exports.docTitle = {
  increment: function increment() {
    DocTitleProps.count++;

    docTitle._update();
  },

  decrement: function decrement() {
    DocTitleProps.count--;

    if (DocTitleProps.count <= 0) {
      docTitle._clear();
      return;
    }

    docTitle._update();
  },

  _update: function _update() {
    var title = document.title;

    if (!DocTitleProps.changed) {
      DocTitleProps.originalTitle = title;
      document.title = '(' + DocTitleProps.count + ') ' + title;
      DocTitleProps.changed = true;
    } else {
      document.title = '(' + DocTitleProps.count + ') ' + DocTitleProps.originalTitle;
    }
  },

  _clear: function _clear() {
    if (DocTitleProps.changed) {
      DocTitleProps.count = 0;
      document.title = DocTitleProps.originalTitle;
      DocTitleProps.changed = false;
    }
  }
};

var DefaultMaxVisible = exports.DefaultMaxVisible = 5;

var Queues = exports.Queues = {
  global: {
    maxVisible: DefaultMaxVisible,
    queue: []
  }
};

var Store = exports.Store = {};

var Defaults = exports.Defaults = {
  type: 'alert',
  layout: 'topRight',
  theme: 'mint',
  text: '',
  timeout: false,
  progressBar: true,
  closeWith: ['click'],
  animation: {
    open: 'noty_effects_open',
    close: 'noty_effects_close'
  },
  id: false,
  force: false,
  killer: false,
  queue: 'global',
  container: false,
  buttons: [],
  callbacks: {
    beforeShow: null,
    onShow: null,
    afterShow: null,
    onClose: null,
    afterClose: null,
    onClick: null,
    onHover: null,
    onTemplate: null
  },
  sounds: {
    sources: [],
    volume: 1,
    conditions: []
  },
  titleCount: {
    conditions: []
  },
  modal: false,
  visibilityControl: false

  /**
   * @param {string} queueName
   * @return {object}
   */
};function getQueueCounts() {
  var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';

  var count = 0;
  var max = DefaultMaxVisible;

  if (Queues.hasOwnProperty(queueName)) {
    max = Queues[queueName].maxVisible;
    Object.keys(Store).forEach(function (i) {
      if (Store[i].options.queue === queueName && !Store[i].closed) count++;
    });
  }

  return {
    current: count,
    maxVisible: max
  };
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function addToQueue(ref) {
  if (!Queues.hasOwnProperty(ref.options.queue)) {
    Queues[ref.options.queue] = { maxVisible: DefaultMaxVisible, queue: [] };
  }

  Queues[ref.options.queue].queue.push(ref);
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function removeFromQueue(ref) {
  if (Queues.hasOwnProperty(ref.options.queue)) {
    var queue = [];
    Object.keys(Queues[ref.options.queue].queue).forEach(function (i) {
      if (Queues[ref.options.queue].queue[i].id !== ref.id) {
        queue.push(Queues[ref.options.queue].queue[i]);
      }
    });
    Queues[ref.options.queue].queue = queue;
  }
}

/**
 * @param {string} queueName
 * @return {void}
 */
function queueRender() {
  var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';

  if (Queues.hasOwnProperty(queueName)) {
    var noty = Queues[queueName].queue.shift();

    if (noty) noty.show();
  }
}

/**
 * @return {void}
 */
function queueRenderAll() {
  Object.keys(Queues).forEach(function (queueName) {
    queueRender(queueName);
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function ghostFix(ref) {
  var ghostID = Utils.generateID('ghost');
  var ghost = document.createElement('div');
  ghost.setAttribute('id', ghostID);
  Utils.css(ghost, {
    height: Utils.outerHeight(ref.barDom) + 'px'
  });

  ref.barDom.insertAdjacentHTML('afterend', ghost.outerHTML);

  Utils.remove(ref.barDom);
  ghost = document.getElementById(ghostID);
  Utils.addClass(ghost, 'noty_fix_effects_height');
  Utils.addListener(ghost, Utils.animationEndEvents, function () {
    Utils.remove(ghost);
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function build(ref) {
  findOrCreateContainer(ref);

  var markup = '<div class="noty_body">' + ref.options.text + '</div>' + buildButtons(ref) + '<div class="noty_progressbar"></div>';

  ref.barDom = document.createElement('div');
  ref.barDom.setAttribute('id', ref.id);
  Utils.addClass(ref.barDom, 'noty_bar noty_type__' + ref.options.type + ' noty_theme__' + ref.options.theme);

  ref.barDom.innerHTML = markup;

  fire(ref, 'onTemplate');
}

/**
 * @param {Noty} ref
 * @return {boolean}
 */
function hasButtons(ref) {
  return !!(ref.options.buttons && Object.keys(ref.options.buttons).length);
}

/**
 * @param {Noty} ref
 * @return {string}
 */
function buildButtons(ref) {
  if (hasButtons(ref)) {
    var buttons = document.createElement('div');
    Utils.addClass(buttons, 'noty_buttons');

    Object.keys(ref.options.buttons).forEach(function (key) {
      buttons.appendChild(ref.options.buttons[key].dom);
    });

    ref.options.buttons.forEach(function (btn) {
      buttons.appendChild(btn.dom);
    });
    return buttons.outerHTML;
  }
  return '';
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function handleModal(ref) {
  if (ref.options.modal) {
    if (DocModalCount === 0) {
      createModal(ref);
    }

    exports.DocModalCount = DocModalCount += 1;
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function handleModalClose(ref) {
  if (ref.options.modal && DocModalCount > 0) {
    exports.DocModalCount = DocModalCount -= 1;

    if (DocModalCount <= 0) {
      var modal = document.querySelector('.noty_modal');

      if (modal) {
        Utils.removeClass(modal, 'noty_modal_open');
        Utils.addClass(modal, 'noty_modal_close');
        Utils.addListener(modal, Utils.animationEndEvents, function () {
          Utils.remove(modal);
        });
      }
    }
  }
}

/**
 * @return {void}
 */
function createModal() {
  var body = document.querySelector('body');
  var modal = document.createElement('div');
  Utils.addClass(modal, 'noty_modal');
  body.insertBefore(modal, body.firstChild);
  Utils.addClass(modal, 'noty_modal_open');

  Utils.addListener(modal, Utils.animationEndEvents, function () {
    Utils.removeClass(modal, 'noty_modal_open');
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function findOrCreateContainer(ref) {
  if (ref.options.container) {
    ref.layoutDom = document.querySelector(ref.options.container);
    return;
  }

  var layoutID = 'noty_layout__' + ref.options.layout;
  ref.layoutDom = document.querySelector('div#' + layoutID);

  if (!ref.layoutDom) {
    ref.layoutDom = document.createElement('div');
    ref.layoutDom.setAttribute('id', layoutID);
    ref.layoutDom.setAttribute('role', 'alert');
    ref.layoutDom.setAttribute('aria-live', 'polite');
    Utils.addClass(ref.layoutDom, 'noty_layout');
    document.querySelector('body').appendChild(ref.layoutDom);
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function queueClose(ref) {
  if (ref.options.timeout) {
    if (ref.options.progressBar && ref.progressDom) {
      Utils.css(ref.progressDom, {
        transition: 'width ' + ref.options.timeout + 'ms linear',
        width: '0%'
      });
    }

    clearTimeout(ref.closeTimer);

    ref.closeTimer = setTimeout(function () {
      ref.close();
    }, ref.options.timeout);
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function dequeueClose(ref) {
  if (ref.options.timeout && ref.closeTimer) {
    clearTimeout(ref.closeTimer);
    ref.closeTimer = -1;

    if (ref.options.progressBar && ref.progressDom) {
      Utils.css(ref.progressDom, {
        transition: 'width 0ms linear',
        width: '100%'
      });
    }
  }
}

/**
 * @param {Noty} ref
 * @param {string} eventName
 * @return {void}
 */
function fire(ref, eventName) {
  if (ref.listeners.hasOwnProperty(eventName)) {
    ref.listeners[eventName].forEach(function (cb) {
      if (typeof cb === 'function') {
        cb.apply(ref);
      }
    });
  }
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function openFlow(ref) {
  fire(ref, 'afterShow');
  queueClose(ref);

  Utils.addListener(ref.barDom, 'mouseenter', function () {
    dequeueClose(ref);
  });

  Utils.addListener(ref.barDom, 'mouseleave', function () {
    queueClose(ref);
  });
}

/**
 * @param {Noty} ref
 * @return {void}
 */
function closeFlow(ref) {
  delete Store[ref.id];
  ref.closing = false;
  fire(ref, 'afterClose');

  Utils.remove(ref.barDom);

  if (ref.layoutDom.querySelectorAll('.noty_bar').length === 0 && !ref.options.container) {
    Utils.remove(ref.layoutDom);
  }

  if (Utils.inArray('docVisible', ref.options.titleCount.conditions) || Utils.inArray('docHidden', ref.options.titleCount.conditions)) {
    docTitle.decrement();
  }

  queueRender(ref.options.queue);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotyButton = undefined;

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotyButton = exports.NotyButton = function NotyButton(html, classes, cb) {
  var _this = this;

  var attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  _classCallCheck(this, NotyButton);

  this.dom = document.createElement('button');
  this.dom.innerHTML = html;
  this.id = attributes.id = attributes.id || Utils.generateID('button');
  this.cb = cb;
  Object.keys(attributes).forEach(function (propertyName) {
    _this.dom.setAttribute(propertyName, attributes[propertyName]);
  });
  Utils.addClass(this.dom, classes || 'noty_btn');

  return this;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Push = exports.Push = function () {
  function Push() {
    var workerPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/service-worker.js';

    _classCallCheck(this, Push);

    this.subData = {};
    this.workerPath = workerPath;
    this.listeners = {
      onPermissionGranted: [],
      onPermissionDenied: [],
      onSubscriptionSuccess: [],
      onSubscriptionCancel: [],
      onWorkerError: [],
      onWorkerSuccess: [],
      onWorkerNotSupported: []
    };
    return this;
  }

  /**
   * @param {string} eventName
   * @param {function} cb
   * @return {Push}
   */


  _createClass(Push, [{
    key: 'on',
    value: function on(eventName) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if (typeof cb === 'function' && this.listeners.hasOwnProperty(eventName)) {
        this.listeners[eventName].push(cb);
      }

      return this;
    }
  }, {
    key: 'fire',
    value: function fire(eventName) {
      var _this = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (this.listeners.hasOwnProperty(eventName)) {
        this.listeners[eventName].forEach(function (cb) {
          if (typeof cb === 'function') {
            cb.apply(_this, params);
          }
        });
      }
    }
  }, {
    key: 'create',
    value: function create() {
      console.log('NOT IMPLEMENTED YET');
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isSupported',
    value: function isSupported() {
      var result = false;

      try {
        result = window.Notification || window.webkitNotifications || navigator.mozNotification || window.external && window.external.msIsSiteMode() !== undefined;
      } catch (e) {}

      return result;
    }

    /**
     * @return {string}
     */

  }, {
    key: 'getPermissionStatus',
    value: function getPermissionStatus() {
      var perm = 'default';

      if (window.Notification && window.Notification.permissionLevel) {
        perm = window.Notification.permissionLevel;
      } else if (window.webkitNotifications && window.webkitNotifications.checkPermission) {
        switch (window.webkitNotifications.checkPermission()) {
          case 1:
            perm = 'default';
            break;
          case 0:
            perm = 'granted';
            break;
          default:
            perm = 'denied';
        }
      } else if (window.Notification && window.Notification.permission) {
        perm = window.Notification.permission;
      } else if (navigator.mozNotification) {
        perm = 'granted';
      } else if (window.external && window.external.msIsSiteMode() !== undefined) {
        perm = window.external.msIsSiteMode() ? 'granted' : 'default';
      }

      return perm.toString().toLowerCase();
    }

    /**
     * @return {string}
     */

  }, {
    key: 'getEndpoint',
    value: function getEndpoint(subscription) {
      var endpoint = subscription.endpoint;
      var subscriptionId = subscription.subscriptionId;

      // fix for Chrome < 45
      if (subscriptionId && endpoint.indexOf(subscriptionId) === -1) {
        endpoint += '/' + subscriptionId;
      }

      return endpoint;
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isSWRegistered',
    value: function isSWRegistered() {
      try {
        return navigator.serviceWorker.controller.state === 'activated';
      } catch (e) {
        return false;
      }
    }

    /**
     * @return {void}
     */

  }, {
    key: 'unregisterWorker',
    value: function unregisterWorker() {
      var self = this;
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function (registrations) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = registrations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var registration = _step.value;

              registration.unregister();
              self.fire('onSubscriptionCancel');
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        });
      }
    }

    /**
     * @return {void}
     */

  }, {
    key: 'requestSubscription',
    value: function requestSubscription() {
      var _this2 = this;

      var userVisibleOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var self = this;
      var current = this.getPermissionStatus();
      var cb = function cb(result) {
        if (result === 'granted') {
          _this2.fire('onPermissionGranted');

          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register(_this2.workerPath).then(function () {
              navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
                self.fire('onWorkerSuccess');
                serviceWorkerRegistration.pushManager.subscribe({
                  userVisibleOnly: userVisibleOnly
                }).then(function (subscription) {
                  var key = subscription.getKey('p256dh');
                  var token = subscription.getKey('auth');

                  self.subData = {
                    endpoint: self.getEndpoint(subscription),
                    p256dh: key ? window.btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
                    auth: token ? window.btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null
                  };

                  self.fire('onSubscriptionSuccess', [self.subData]);
                }).catch(function (err) {
                  self.fire('onWorkerError', [err]);
                });
              });
            });
          } else {
            self.fire('onWorkerNotSupported');
          }
        } else if (result === 'denied') {
          _this2.fire('onPermissionDenied');
          _this2.unregisterWorker();
        }
      };

      if (current === 'default') {
        if (window.Notification && window.Notification.requestPermission) {
          window.Notification.requestPermission(cb);
        } else if (window.webkitNotifications && window.webkitNotifications.checkPermission) {
          window.webkitNotifications.requestPermission(cb);
        }
      } else {
        cb(current);
      }
    }
  }]);

  return Push;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(9);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === GET_THEN_ERROR) {
      reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator$1(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate(input);
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

Enumerator$1.prototype._enumerate = function (input) {
  for (var i = 0; this._state === PENDING && i < input.length; i++) {
    this._eachEntry(input[i], i);
  }
};

Enumerator$1.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$1 = c.resolve;

  if (resolve$$1 === resolve$1) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise$2) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$1) {
        return resolve$$1(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$1(entry), i);
  }
};

Enumerator$1.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator$1.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all$1(entries) {
  return new Enumerator$1(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race$1(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise$2(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
  }
}

Promise$2.all = all$1;
Promise$2.race = race$1;
Promise$2.resolve = resolve$1;
Promise$2.reject = reject$1;
Promise$2._setScheduler = setScheduler;
Promise$2._setAsap = setAsap;
Promise$2._asap = asap;

Promise$2.prototype = {
  constructor: Promise$2,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

/*global self*/
function polyfill$1() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise$2;
}

// Strange compat..
Promise$2.polyfill = polyfill$1;
Promise$2.Promise = Promise$2;

return Promise$2;

})));



/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(8)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global VERSION */

__webpack_require__(5);

var _es6Promise = __webpack_require__(4);

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _utils = __webpack_require__(0);

var Utils = _interopRequireWildcard(_utils);

var _api = __webpack_require__(1);

var API = _interopRequireWildcard(_api);

var _button = __webpack_require__(2);

var _push = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Noty = function () {
  /**
   * @param {object} options
   * @return {Noty}
   */
  function Noty() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Noty);

    this.options = Utils.deepExtend({}, API.Defaults, options);
    this.id = this.options.id || Utils.generateID('bar');
    this.closeTimer = -1;
    this.barDom = null;
    this.layoutDom = null;
    this.progressDom = null;
    this.showing = false;
    this.shown = false;
    this.closed = false;
    this.closing = false;
    this.killable = this.options.timeout || this.options.closeWith.length > 0;
    this.hasSound = this.options.sounds.sources.length > 0;
    this.soundPlayed = false;
    this.listeners = {
      beforeShow: [],
      onShow: [],
      afterShow: [],
      onClose: [],
      afterClose: [],
      onClick: [],
      onHover: [],
      onTemplate: []
    };
    this.promises = {
      show: null,
      close: null
    };
    this.on('beforeShow', this.options.callbacks.beforeShow);
    this.on('onShow', this.options.callbacks.onShow);
    this.on('afterShow', this.options.callbacks.afterShow);
    this.on('onClose', this.options.callbacks.onClose);
    this.on('afterClose', this.options.callbacks.afterClose);
    this.on('onClick', this.options.callbacks.onClick);
    this.on('onHover', this.options.callbacks.onHover);
    this.on('onTemplate', this.options.callbacks.onTemplate);

    return this;
  }

  /**
   * @param {string} eventName
   * @param {function} cb
   * @return {Noty}
   */


  _createClass(Noty, [{
    key: 'on',
    value: function on(eventName) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if (typeof cb === 'function' && this.listeners.hasOwnProperty(eventName)) {
        this.listeners[eventName].push(cb);
      }

      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'show',
    value: function show() {
      var _this = this;

      if (this.options.killer === true) {
        Noty.closeAll();
      } else if (typeof this.options.killer === 'string') {
        Noty.closeAll(this.options.killer);
      }

      var queueCounts = API.getQueueCounts(this.options.queue);

      if (queueCounts.current >= queueCounts.maxVisible || API.PageHidden && this.options.visibilityControl) {
        API.addToQueue(this);

        if (API.PageHidden && this.hasSound && Utils.inArray('docHidden', this.options.sounds.conditions)) {
          Utils.createAudioElements(this);
        }

        if (API.PageHidden && Utils.inArray('docHidden', this.options.titleCount.conditions)) {
          API.docTitle.increment();
        }

        return this;
      }

      API.Store[this.id] = this;

      API.fire(this, 'beforeShow');

      this.showing = true;

      if (this.closing) {
        this.showing = false;
        return this;
      }

      API.build(this);
      API.handleModal(this);

      if (this.options.force) {
        this.layoutDom.insertBefore(this.barDom, this.layoutDom.firstChild);
      } else {
        this.layoutDom.appendChild(this.barDom);
      }

      if (this.hasSound && !this.soundPlayed && Utils.inArray('docVisible', this.options.sounds.conditions)) {
        Utils.createAudioElements(this);
      }

      if (Utils.inArray('docVisible', this.options.titleCount.conditions)) {
        API.docTitle.increment();
      }

      this.shown = true;
      this.closed = false;

      // bind button events if any
      if (API.hasButtons(this)) {
        Object.keys(this.options.buttons).forEach(function (key) {
          var btn = _this.barDom.querySelector('#' + _this.options.buttons[key].id);
          Utils.addListener(btn, 'click', function (e) {
            Utils.stopPropagation(e);
            _this.options.buttons[key].cb();
          });
        });
      }

      this.progressDom = this.barDom.querySelector('.noty_progressbar');

      if (Utils.inArray('click', this.options.closeWith)) {
        Utils.addClass(this.barDom, 'noty_close_with_click');
        Utils.addListener(this.barDom, 'click', function (e) {
          Utils.stopPropagation(e);
          API.fire(_this, 'onClick');
          _this.close();
        }, false);
      }

      Utils.addListener(this.barDom, 'mouseenter', function () {
        API.fire(_this, 'onHover');
      }, false);

      if (this.options.timeout) Utils.addClass(this.barDom, 'noty_has_timeout');
      if (this.options.progressBar) {
        Utils.addClass(this.barDom, 'noty_has_progressbar');
      }

      if (Utils.inArray('button', this.options.closeWith)) {
        Utils.addClass(this.barDom, 'noty_close_with_button');

        var closeButton = document.createElement('div');
        Utils.addClass(closeButton, 'noty_close_button');
        closeButton.innerHTML = '×';
        this.barDom.appendChild(closeButton);

        Utils.addListener(closeButton, 'click', function (e) {
          Utils.stopPropagation(e);
          _this.close();
        }, false);
      }

      API.fire(this, 'onShow');

      if (this.options.animation.open === null) {
        this.promises.show = new _es6Promise2.default(function (resolve) {
          resolve();
        });
      } else if (typeof this.options.animation.open === 'function') {
        this.promises.show = new _es6Promise2.default(this.options.animation.open.bind(this));
      } else {
        Utils.addClass(this.barDom, this.options.animation.open);
        this.promises.show = new _es6Promise2.default(function (resolve) {
          Utils.addListener(_this.barDom, Utils.animationEndEvents, function () {
            Utils.removeClass(_this.barDom, _this.options.animation.open);
            resolve();
          });
        });
      }

      this.promises.show.then(function () {
        var _t = _this;
        setTimeout(function () {
          API.openFlow(_t);
        }, 100);
      });

      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'stop',
    value: function stop() {
      API.dequeueClose(this);
      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'resume',
    value: function resume() {
      API.queueClose(this);
      return this;
    }

    /**
     * @param {int|boolean} ms
     * @return {Noty}
     */

  }, {
    key: 'setTimeout',
    value: function (_setTimeout) {
      function setTimeout(_x) {
        return _setTimeout.apply(this, arguments);
      }

      setTimeout.toString = function () {
        return _setTimeout.toString();
      };

      return setTimeout;
    }(function (ms) {
      this.stop();
      this.options.timeout = ms;

      if (this.barDom) {
        if (this.options.timeout) {
          Utils.addClass(this.barDom, 'noty_has_timeout');
        } else {
          Utils.removeClass(this.barDom, 'noty_has_timeout');
        }

        var _t = this;
        setTimeout(function () {
          // ugly fix for progressbar display bug
          _t.resume();
        }, 100);
      }

      return this;
    })

    /**
     * @param {string} html
     * @param {boolean} optionsOverride
     * @return {Noty}
     */

  }, {
    key: 'setText',
    value: function setText(html) {
      var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.barDom) {
        this.barDom.querySelector('.noty_body').innerHTML = html;
      }

      if (optionsOverride) this.options.text = html;

      return this;
    }

    /**
     * @param {string} type
     * @param {boolean} optionsOverride
     * @return {Noty}
     */

  }, {
    key: 'setType',
    value: function setType(type) {
      var _this2 = this;

      var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.barDom) {
        var classList = Utils.classList(this.barDom).split(' ');

        classList.forEach(function (c) {
          if (c.substring(0, 11) === 'noty_type__') {
            Utils.removeClass(_this2.barDom, c);
          }
        });

        Utils.addClass(this.barDom, 'noty_type__' + type);
      }

      if (optionsOverride) this.options.type = type;

      return this;
    }

    /**
     * @param {string} theme
     * @param {boolean} optionsOverride
     * @return {Noty}
     */

  }, {
    key: 'setTheme',
    value: function setTheme(theme) {
      var _this3 = this;

      var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.barDom) {
        var classList = Utils.classList(this.barDom).split(' ');

        classList.forEach(function (c) {
          if (c.substring(0, 12) === 'noty_theme__') {
            Utils.removeClass(_this3.barDom, c);
          }
        });

        Utils.addClass(this.barDom, 'noty_theme__' + theme);
      }

      if (optionsOverride) this.options.theme = theme;

      return this;
    }

    /**
     * @return {Noty}
     */

  }, {
    key: 'close',
    value: function close() {
      var _this4 = this;

      if (this.closed) return this;

      if (!this.shown) {
        // it's in the queue
        API.removeFromQueue(this);
        return this;
      }

      API.fire(this, 'onClose');

      this.closing = true;

      if (this.options.animation.close === null) {
        this.promises.close = new _es6Promise2.default(function (resolve) {
          resolve();
        });
      } else if (typeof this.options.animation.close === 'function') {
        this.promises.close = new _es6Promise2.default(this.options.animation.close.bind(this));
      } else {
        Utils.addClass(this.barDom, this.options.animation.close);
        this.promises.close = new _es6Promise2.default(function (resolve) {
          Utils.addListener(_this4.barDom, Utils.animationEndEvents, function () {
            if (_this4.options.force) {
              Utils.remove(_this4.barDom);
            } else {
              API.ghostFix(_this4);
            }
            resolve();
          });
        });
      }

      this.promises.close.then(function () {
        API.closeFlow(_this4);
        API.handleModalClose(_this4);
      });

      this.closed = true;

      return this;
    }

    // API functions

    /**
     * @param {boolean|string} queueName
     * @return {Noty}
     */

  }], [{
    key: 'closeAll',
    value: function closeAll() {
      var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      Object.keys(API.Store).forEach(function (id) {
        if (queueName) {
          if (API.Store[id].options.queue === queueName && API.Store[id].killable) {
            API.Store[id].close();
          }
        } else if (API.Store[id].killable) {
          API.Store[id].close();
        }
      });
      return this;
    }

    /**
     * @param {Object} obj
     * @return {Noty}
     */

  }, {
    key: 'overrideDefaults',
    value: function overrideDefaults(obj) {
      API.Defaults = Utils.deepExtend({}, API.Defaults, obj);
      return this;
    }

    /**
     * @param {int} amount
     * @param {string} queueName
     * @return {Noty}
     */

  }, {
    key: 'setMaxVisible',
    value: function setMaxVisible() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : API.DefaultMaxVisible;
      var queueName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'global';

      if (!API.Queues.hasOwnProperty(queueName)) {
        API.Queues[queueName] = { maxVisible: amount, queue: [] };
      }

      API.Queues[queueName].maxVisible = amount;
      return this;
    }

    /**
     * @param {string} innerHtml
     * @param {String} classes
     * @param {Function} cb
     * @param {Object} attributes
     * @return {NotyButton}
     */

  }, {
    key: 'button',
    value: function button(innerHtml) {
      var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var cb = arguments[2];
      var attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      return new _button.NotyButton(innerHtml, classes, cb, attributes);
    }

    /**
     * @return {string}
     */

  }, {
    key: 'version',
    value: function version() {
      return "3.1.4";
    }

    /**
     * @param {String} workerPath
     * @return {Push}
     */

  }, {
    key: 'Push',
    value: function Push(workerPath) {
      return new _push.Push(workerPath);
    }
  }]);

  return Noty;
}();

// Document visibility change controller


exports.default = Noty;
Utils.visibilityChangeFlow();
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
});

},{}],2:[function(require,module,exports){
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Scrollbar=n():t.Scrollbar=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=58)}([function(t,n,e){var r=e(25)("wks"),o=e(16),i=e(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(13)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(2),o=e(3),i=e(11),u=e(6),c=e(10),s=function(t,n,e){var a,f,l,p,h=t&s.F,d=t&s.G,v=t&s.S,y=t&s.P,m=t&s.B,g=d?r:v?r[n]||(r[n]={}):(r[n]||{}).prototype,b=d?o:o[n]||(o[n]={}),x=b.prototype||(b.prototype={});for(a in d&&(e=n),e)l=((f=!h&&g&&void 0!==g[a])?g:e)[a],p=m&&f?c(l,r):y&&"function"==typeof l?c(Function.call,l):l,g&&u(g,a,l,t&s.U),b[a]!=l&&i(b,a,p),y&&x[a]!=l&&(x[a]=l)};r.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n,e){var r=e(2),o=e(11),i=e(9),u=e(16)("src"),c=e(60),s=(""+c).split("toString");e(3).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(a&&(i(e,u)||o(e,u,t[n]?""+t[n]:s.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||c.call(this)}))},function(t,n,e){var r=e(8),o=e(41),i=e(43),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(1);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(44);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(7),o=e(17);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(1);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports={}},function(t,n,e){var r=e(10),o=e(49),i=e(50),u=e(8),c=e(19),s=e(51),a={},f={};(n=t.exports=function(t,n,e,l,p){var h,d,v,y,m=p?function(){return t}:s(t),g=r(e,l,n?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(h=c(t.length);h>b;b++)if((y=n?g(u(d=t[b])[0],d[1]):g(t[b]))===a||y===f)return y}else for(v=m.call(t);!(d=v.next()).done;)if((y=o(v,g,d.value,n))===a||y===f)return y}).BREAK=a,n.RETURN=f},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(31),o=e(28);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(27),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(28);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(16)("meta"),o=e(1),i=e(9),u=e(7).f,c=0,s=Object.isExtensible||function(){return!0},a=!e(13)((function(){return s(Object.preventExtensions({}))})),f=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!n)return"E";f(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!s(t))return!0;if(!n)return!1;f(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&s(t)&&!i(t,r)&&f(t),t}}},function(t,n,e){"use strict";var r=e(23),o={};o[e(0)("toStringTag")]="z",o+""!="[object z]"&&e(6)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,n,e){var r=e(24),o=e(0)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(3),o=e(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(40)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){"use strict";var r=e(61)(!0);e(29)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){"use strict";var r=e(40),o=e(5),i=e(6),u=e(11),c=e(14),s=e(62),a=e(33),f=e(68),l=e(0)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,n,e,d,v,y,m){s(e,n,d);var g,b,x,_=function(t){if(!p&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",E="values"==v,S=!1,O=t.prototype,T=O[l]||O["@@iterator"]||v&&O[v],A=T||_(v),M=v?E?_("entries"):A:void 0,P="Array"==n&&O.entries||T;if(P&&(x=f(P.call(new t)))!==Object.prototype&&x.next&&(a(x,w,!0),r||"function"==typeof x[l]||u(x,l,h)),E&&T&&"values"!==T.name&&(S=!0,A=function(){return T.call(this)}),r&&!m||!p&&!S&&O[l]||u(O,l,A),c[n]=A,c[w]=h,v)if(g={values:E?A:_("values"),keys:y?A:_("keys"),entries:M},m)for(b in g)b in O||i(O,b,g[b]);else o(o.P+o.F*(p||S),n,g);return g}},function(t,n,e){var r=e(64),o=e(46);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(25)("keys"),o=e(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(7).f,o=e(9),i=e(0)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){for(var r=e(69),o=e(30),i=e(6),u=e(2),c=e(11),s=e(14),a=e(0),f=a("iterator"),l=a("toStringTag"),p=s.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(h),v=0;v<d.length;v++){var y,m=d[v],g=h[m],b=u[m],x=b&&b.prototype;if(x&&(x[f]||c(x,f,p),x[l]||c(x,l,m),s[m]=p,g))for(y in r)x[y]||i(x,y,r[y],!0)}},function(t,n,e){var r=e(6);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){"use strict";var r=e(2),o=e(5),i=e(6),u=e(35),c=e(21),s=e(15),a=e(36),f=e(1),l=e(13),p=e(52),h=e(33),d=e(73);t.exports=function(t,n,e,v,y,m){var g=r[t],b=g,x=y?"set":"add",_=b&&b.prototype,w={},E=function(t){var n=_[t];i(_,t,"delete"==t?function(t){return!(m&&!f(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!f(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!f(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,e){return n.call(this,0===t?0:t,e),this})};if("function"==typeof b&&(m||_.forEach&&!l((function(){(new b).entries().next()})))){var S=new b,O=S[x](m?{}:-0,1)!=S,T=l((function(){S.has(1)})),A=p((function(t){new b(t)})),M=!m&&l((function(){for(var t=new b,n=5;n--;)t[x](n,n);return!t.has(-0)}));A||((b=n((function(n,e){a(n,b,t);var r=d(new g,n,b);return null!=e&&s(e,y,r[x],r),r}))).prototype=_,_.constructor=b),(T||M)&&(E("delete"),E("has"),y&&E("get")),(M||O)&&E(x),m&&_.clear&&delete _.clear}else b=v.getConstructor(n,t,y,x),u(b.prototype,e),c.NEED=!0;return h(b,t),w[t]=b,o(o.G+o.W+o.F*(b!=g),w),m||v.setStrong(b,t,y),b}},function(t,n,e){"use strict";var r=e(5);t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,n=new Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,e){"use strict";var r=e(5),o=e(44),i=e(10),u=e(15);t.exports=function(t){r(r.S,t,{from:function(t){var n,e,r,c,s=arguments[1];return o(this),(n=void 0!==s)&&o(s),null==t?new this:(e=[],n?(r=0,c=i(s,arguments[2],2),u(t,!1,(function(t){e.push(c(t,r++))}))):u(t,!1,e.push,e),new this(e))}})}},function(t,n){t.exports=!1},function(t,n,e){t.exports=!e(4)&&!e(13)((function(){return 7!=Object.defineProperty(e(42)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(1),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(1);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(8),o=e(63),i=e(46),u=e(32)("IE_PROTO"),c=function(){},s=function(){var t,n=e(42)("iframe"),r=i.length;for(n.style.display="none",e(67).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r=e(7).f,o=e(45),i=e(35),u=e(10),c=e(36),s=e(15),a=e(29),f=e(47),l=e(72),p=e(4),h=e(21).fastKey,d=e(12),v=p?"_s":"size",y=function(t,n){var e,r=h(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,a){var f=t((function(t,r){c(t,f,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[v]=0,null!=r&&s(r,e,t[a],t)}));return i(f.prototype,{clear:function(){for(var t=d(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var e=d(this,n),r=y(e,t);if(r){var o=r.n,i=r.p;delete e._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),e._f==r&&(e._f=o),e._l==r&&(e._l=i),e[v]--}return!!r},forEach:function(t){d(this,n);for(var e,r=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!y(d(this,n),t)}}),p&&r(f.prototype,"size",{get:function(){return d(this,n)[v]}}),f},def:function(t,n,e){var r,o,i=y(t,n);return i?i.v=e:(t._l=i={i:o=h(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[v]++,"F"!==o&&(t._i[o]=i)),t},getEntry:y,setStrong:function(t,n,e){a(t,n,(function(t,e){this._t=d(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?f(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,f(1))}),e?"entries":"values",!e,!0),l(n)}}},function(t,n,e){var r=e(8);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(14),o=e(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(23),o=e(0)("iterator"),i=e(14);t.exports=e(3).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(0)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(23),o=e(77);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},function(t,n,e){var r=e(10),o=e(31),i=e(20),u=e(19),c=e(87);t.exports=function(t,n){var e=1==t,s=2==t,a=3==t,f=4==t,l=6==t,p=5==t||l,h=n||c;return function(n,c,d){for(var v,y,m=i(n),g=o(m),b=r(c,d,3),x=u(g.length),_=0,w=e?h(n,x):s?h(n,0):void 0;x>_;_++)if((p||_ in g)&&(y=b(v=g[_],_,m),t))if(e)w[_]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return _;case 2:w.push(v)}else if(f)return!1;return l?-1:a||f?f:w}}},function(t,n,e){"use strict";var r=e(4),o=e(30),i=e(90),u=e(53),c=e(20),s=e(31),a=Object.assign;t.exports=!a||e(13)((function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach((function(t){n[t]=t})),7!=a({},t)[e]||Object.keys(a({},n)).join("")!=r}))?function(t,n){for(var e=c(t),a=arguments.length,f=1,l=i.f,p=u.f;a>f;)for(var h,d=s(arguments[f++]),v=l?o(d).concat(l(d)):o(d),y=v.length,m=0;y>m;)h=v[m++],r&&!p.call(d,h)||(e[h]=d[h]);return e}:a},function(t,n,e){"use strict";(function(t){var e="object"==typeof t&&t&&t.Object===Object&&t;n.a=e}).call(this,e(99))},function(t,n,e){t.exports=e(100)},function(t,n,e){e(22),e(26),e(34),e(71),e(76),e(78),e(79),t.exports=e(3).Map},function(t,n,e){t.exports=e(25)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(27),o=e(28);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),s=r(e),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(45),o=e(17),i=e(33),u={};e(11)(u,e(0)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(7),o=e(8),i=e(30);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,s=0;c>s;)r.f(t,e=u[s++],n[e]);return t}},function(t,n,e){var r=e(9),o=e(18),i=e(65)(!1),u=e(32)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),s=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>s;)r(c,e=n[s++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(18),o=e(19),i=e(66);t.exports=function(t){return function(n,e,u){var c,s=r(n),a=o(s.length),f=i(u,a);if(t&&e!=e){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(27),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(2).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(9),o=e(20),i=e(32)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(70),o=e(47),i=e(14),u=e(18);t.exports=e(29)(Array,"Array",(function(t,n){this._t=u(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(0)("unscopables"),o=Array.prototype;null==o[r]&&e(11)(o,r,{}),t.exports=function(t){o[r][t]=!0}},function(t,n,e){"use strict";var r=e(48),o=e(12);t.exports=e(37)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(o(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(o(this,"Map"),0===t?0:t,n)}},r,!0)},function(t,n,e){"use strict";var r=e(2),o=e(7),i=e(4),u=e(0)("species");t.exports=function(t){var n=r[t];i&&n&&!n[u]&&o.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(1),o=e(74).set;t.exports=function(t,n,e){var i,u=n.constructor;return u!==e&&"function"==typeof u&&(i=u.prototype)!==e.prototype&&r(i)&&o&&o(t,i),t}},function(t,n,e){var r=e(1),o=e(8),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(10)(Function.call,e(75).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},function(t,n,e){var r=e(53),o=e(17),i=e(18),u=e(43),c=e(9),s=e(41),a=Object.getOwnPropertyDescriptor;n.f=e(4)?a:function(t,n){if(t=i(t),n=u(n,!0),s)try{return a(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(5);r(r.P+r.R,"Map",{toJSON:e(54)("Map")})},function(t,n,e){var r=e(15);t.exports=function(t,n){var e=[];return r(t,!1,e.push,e,n),e}},function(t,n,e){e(38)("Map")},function(t,n,e){e(39)("Map")},function(t,n,e){e(22),e(26),e(34),e(81),e(82),e(83),e(84),t.exports=e(3).Set},function(t,n,e){"use strict";var r=e(48),o=e(12);t.exports=e(37)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},function(t,n,e){var r=e(5);r(r.P+r.R,"Set",{toJSON:e(54)("Set")})},function(t,n,e){e(38)("Set")},function(t,n,e){e(39)("Set")},function(t,n,e){e(22),e(34),e(86),e(92),e(93),t.exports=e(3).WeakMap},function(t,n,e){"use strict";var r,o=e(2),i=e(55)(0),u=e(6),c=e(21),s=e(56),a=e(91),f=e(1),l=e(12),p=e(12),h=!o.ActiveXObject&&"ActiveXObject"in o,d=c.getWeak,v=Object.isExtensible,y=a.ufstore,m=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function(t){if(f(t)){var n=d(t);return!0===n?y(l(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function(t,n){return a.def(l(this,"WeakMap"),t,n)}},b=t.exports=e(37)("WeakMap",m,g,a,!0,!0);p&&h&&(s((r=a.getConstructor(m,"WeakMap")).prototype,g),c.NEED=!0,i(["delete","has","get","set"],(function(t){var n=b.prototype,e=n[t];u(n,t,(function(n,o){if(f(n)&&!v(n)){this._f||(this._f=new r);var i=this._f[t](n,o);return"set"==t?this:i}return e.call(this,n,o)}))})))},function(t,n,e){var r=e(88);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(1),o=e(89),i=e(0)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){var r=e(24);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){"use strict";var r=e(35),o=e(21).getWeak,i=e(8),u=e(1),c=e(36),s=e(15),a=e(55),f=e(9),l=e(12),p=a(5),h=a(6),d=0,v=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},m=function(t,n){return p(t.a,(function(t){return t[0]===n}))};y.prototype={get:function(t){var n=m(this,t);if(n)return n[1]},has:function(t){return!!m(this,t)},set:function(t,n){var e=m(this,t);e?e[1]=n:this.a.push([t,n])},delete:function(t){var n=h(this.a,(function(n){return n[0]===t}));return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,e,i){var a=t((function(t,r){c(t,a,n,"_i"),t._t=n,t._i=d++,t._l=void 0,null!=r&&s(r,e,t[i],t)}));return r(a.prototype,{delete:function(t){if(!u(t))return!1;var e=o(t);return!0===e?v(l(this,n)).delete(t):e&&f(e,this._i)&&delete e[this._i]},has:function(t){if(!u(t))return!1;var e=o(t);return!0===e?v(l(this,n)).has(t):e&&f(e,this._i)}}),a},def:function(t,n,e){var r=o(i(n),!0);return!0===r?v(t).set(n,e):r[t._i]=e,t},ufstore:v}},function(t,n,e){e(38)("WeakMap")},function(t,n,e){e(39)("WeakMap")},function(t,n,e){e(26),e(95),t.exports=e(3).Array.from},function(t,n,e){"use strict";var r=e(10),o=e(5),i=e(20),u=e(49),c=e(50),s=e(19),a=e(96),f=e(51);o(o.S+o.F*!e(52)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,o,l,p=i(t),h="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,y=void 0!==v,m=0,g=f(p);if(y&&(v=r(v,d>2?arguments[2]:void 0,2)),null==g||h==Array&&c(g))for(e=new h(n=s(p.length));n>m;m++)a(e,m,y?v(p[m],m):p[m]);else for(l=g.call(p),e=new h;!(o=l.next()).done;m++)a(e,m,y?u(l,v,[o.value,m],!0):o.value);return e.length=m,e}})},function(t,n,e){"use strict";var r=e(7),o=e(17);t.exports=function(t,n,e){n in t?r.f(t,n,o(0,e)):t[n]=e}},function(t,n,e){e(98),t.exports=e(3).Object.assign},function(t,n,e){var r=e(5);r(r.S+r.F,"Object",{assign:e(56)})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"keyboardHandler",(function(){return et})),e.d(r,"mouseHandler",(function(){return rt})),e.d(r,"resizeHandler",(function(){return ot})),e.d(r,"selectHandler",(function(){return it})),e.d(r,"touchHandler",(function(){return ut})),e.d(r,"wheelHandler",(function(){return ct}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},i=function(){return(i=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function u(t,n,e,r){var o,i=arguments.length,u=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,n,e,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(n,e,u):o(n,e))||u);return i>3&&u&&Object.defineProperty(n,e,u),u}e(59),e(80),e(85),e(94),e(97);var c=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)},s=e(57),a="object"==typeof self&&self&&self.Object===Object&&self,f=s.a||a||Function("return this")(),l=f.Symbol,p=Object.prototype,h=p.hasOwnProperty,d=p.toString,v=l?l.toStringTag:void 0,y=Object.prototype.toString,m=l?l.toStringTag:void 0,g=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":m&&m in Object(t)?function(t){var n=h.call(t,v),e=t[v];try{t[v]=void 0;var r=!0}catch(t){}var o=d.call(t);return r&&(n?t[v]=e:delete t[v]),o}(t):function(t){return y.call(t)}(t)},b=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,w=/^0o[0-7]+$/i,E=parseInt,S=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==g(t)}(t))return NaN;if(c(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=c(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(b,"");var e=_.test(t);return e||w.test(t)?E(t.slice(2),e?2:8):x.test(t)?NaN:+t},O=function(t,n,e){return void 0===e&&(e=n,n=void 0),void 0!==e&&(e=(e=S(e))==e?e:0),void 0!==n&&(n=(n=S(n))==n?n:0),function(t,n,e){return t==t&&(void 0!==e&&(t=t<=e?t:e),void 0!==n&&(t=t>=n?t:n)),t}(S(t),n,e)};function T(t,n){return void 0===t&&(t=-1/0),void 0===n&&(n=1/0),function(e,r){var o="_"+r;Object.defineProperty(e,r,{get:function(){return this[o]},set:function(e){Object.defineProperty(this,o,{value:O(e,t,n),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function A(t,n){var e="_"+n;Object.defineProperty(t,n,{get:function(){return this[e]},set:function(t){Object.defineProperty(this,e,{value:!!t,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}var M=function(){return f.Date.now()},P=Math.max,j=Math.min,k=function(t,n,e){var r,o,i,u,s,a,f=0,l=!1,p=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(n){var e=r,i=o;return r=o=void 0,f=n,u=t.apply(i,e)}function v(t){var e=t-a;return void 0===a||e>=n||e<0||p&&t-f>=i}function y(){var t=M();if(v(t))return m(t);s=setTimeout(y,function(t){var e=n-(t-a);return p?j(e,i-(t-f)):e}(t))}function m(t){return s=void 0,h&&r?d(t):(r=o=void 0,u)}function g(){var t=M(),e=v(t);if(r=arguments,o=this,a=t,e){if(void 0===s)return function(t){return f=t,s=setTimeout(y,n),l?d(t):u}(a);if(p)return clearTimeout(s),s=setTimeout(y,n),d(a)}return void 0===s&&(s=setTimeout(y,n)),u}return n=S(n)||0,c(e)&&(l=!!e.leading,i=(p="maxWait"in e)?P(S(e.maxWait)||0,n):i,h="trailing"in e?!!e.trailing:h),g.cancel=function(){void 0!==s&&clearTimeout(s),f=0,r=a=o=s=void 0},g.flush=function(){return void 0===s?u:m(M())},g};function D(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(n,e,r){var o=r.value;return{get:function(){return this.hasOwnProperty(e)||Object.defineProperty(this,e,{value:k.apply(void 0,function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),o=0;for(n=0;n<e;n++)for(var i=arguments[n],u=0,c=i.length;u<c;u++,o++)r[o]=i[u];return r}([o],t))}),this[e]}}}}var L,N=function(){function t(t){var n=this;void 0===t&&(t={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(t).forEach((function(e){n[e]=t[e]}))}return Object.defineProperty(t.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(t){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=t},enumerable:!0,configurable:!0}),u([T(0,1)],t.prototype,"damping",void 0),u([T(0,1/0)],t.prototype,"thumbMinSize",void 0),u([A],t.prototype,"renderByPixels",void 0),u([A],t.prototype,"alwaysShowTracks",void 0),u([A],t.prototype,"continuousScrolling",void 0),t}(),z=new WeakMap;function C(){if(void 0!==L)return L;var t=!1;try{var n=function(){},e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassive",n,e),window.removeEventListener("testPassive",n,e)}catch(t){}return L=!!t&&{passive:!1}}function R(t){var n=z.get(t)||[];return z.set(t,n),function(t,e,r){function o(t){t.defaultPrevented||r(t)}e.split(/\s+/g).forEach((function(e){n.push({elem:t,eventName:e,handler:o}),t.addEventListener(e,o,C())}))}}function F(t){var n=function(t){return t.touches?t.touches[t.touches.length-1]:t}(t);return{x:n.clientX,y:n.clientY}}function I(t,n){return void 0===n&&(n=[]),n.some((function(n){return t===n}))}var W=["webkit","moz","ms","o"],H=new RegExp("^-(?!(?:"+W.join("|")+")-)");function B(t,n){n=function(t){var n={};return Object.keys(t).forEach((function(e){if(H.test(e)){var r=t[e];e=e.replace(/^-/,""),n[e]=r,W.forEach((function(t){n["-"+t+"-"+e]=r}))}else n[e]=t[e]})),n}(n),Object.keys(n).forEach((function(e){var r=e.replace(/^-/,"").replace(/-([a-z])/g,(function(t,n){return n.toUpperCase()}));t.style[r]=n[e]}))}var G,X=function(){function t(t){this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=F(t)}return t.prototype.update=function(t){var n=this.velocity,e=this.updateTime,r=this.lastPosition,o=Date.now(),i=F(t),u={x:-(i.x-r.x),y:-(i.y-r.y)},c=o-e||16,s=u.x/c*16,a=u.y/c*16;n.x=.9*s+.1*n.x,n.y=.9*a+.1*n.y,this.delta=u,this.updateTime=o,this.lastPosition=i},t}(),V=function(){function t(){this._touchList={}}return Object.defineProperty(t.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),t.prototype.isActive=function(){return void 0!==this._activeTouchID},t.prototype.getDelta=function(){var t=this._getActiveTracker();return t?i({},t.delta):this._primitiveValue},t.prototype.getVelocity=function(){var t=this._getActiveTracker();return t?i({},t.velocity):this._primitiveValue},t.prototype.track=function(t){var n=this,e=t.targetTouches;return Array.from(e).forEach((function(t){n._add(t)})),this._touchList},t.prototype.update=function(t){var n=this,e=t.touches,r=t.changedTouches;return Array.from(e).forEach((function(t){n._renew(t)})),this._setActiveID(r),this._touchList},t.prototype.release=function(t){var n=this;delete this._activeTouchID,Array.from(t.changedTouches).forEach((function(t){n._delete(t)}))},t.prototype._add=function(t){if(!this._has(t)){var n=new X(t);this._touchList[t.identifier]=n}},t.prototype._renew=function(t){this._has(t)&&this._touchList[t.identifier].update(t)},t.prototype._delete=function(t){delete this._touchList[t.identifier]},t.prototype._has=function(t){return this._touchList.hasOwnProperty(t.identifier)},t.prototype._setActiveID=function(t){this._activeTouchID=t[t.length-1].identifier},t.prototype._getActiveTracker=function(){return this._touchList[this._activeTouchID]},t}();!function(t){t.X="x",t.Y="y"}(G||(G={}));var U=function(){function t(t,n){void 0===n&&(n=0),this._direction=t,this._minSize=n,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+t}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.update=function(t,n,e){this.realSize=Math.min(n/e,1)*n,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=t/e*(n+(this.realSize-this.displaySize)),B(this.element,this._getStyle())},t.prototype._getStyle=function(){switch(this._direction){case G.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case G.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},t}(),Y=function(){function t(t,n){void 0===n&&(n=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+t,this.thumb=new U(t,n),this.thumb.attachTo(this.element)}return t.prototype.attachTo=function(t){t.appendChild(this.element)},t.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},t.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},t.prototype.update=function(t,n,e){B(this.element,{display:e<=n?"none":"block"}),this.thumb.update(t,n,e)},t}(),q=function(){function t(t){this._scrollbar=t;var n=t.options.thumbMinSize;this.xAxis=new Y(G.X,n),this.yAxis=new Y(G.Y,n),this.xAxis.attachTo(t.containerEl),this.yAxis.attachTo(t.containerEl),t.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return t.prototype.update=function(){var t=this._scrollbar,n=t.size,e=t.offset;this.xAxis.update(e.x,n.container.width,n.content.width),this.yAxis.update(e.y,n.container.height,n.content.height)},t.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},u([D(300)],t.prototype,"autoHideOnIdle",null),t}(),K=new WeakMap;function $(t){return Math.pow(t-1,3)+1}var J,Q,Z,tt=function(){function t(t,n){var e=this.constructor;this.scrollbar=t,this.name=e.pluginName,this.options=i(i({},e.defaultOptions),n)}return t.prototype.onInit=function(){},t.prototype.onDestroy=function(){},t.prototype.onUpdate=function(){},t.prototype.onRender=function(t){},t.prototype.transformDelta=function(t,n){return i({},t)},t.pluginName="",t.defaultOptions={},t}(),nt={order:new Set,constructors:{}};function et(t){var n=R(t),e=t.containerEl;n(e,"keydown",(function(n){var r=document.activeElement;if((r===e||e.contains(r))&&!function(t){return!("INPUT"!==t.tagName&&"SELECT"!==t.tagName&&"TEXTAREA"!==t.tagName&&!t.isContentEditable)&&!t.disabled}(r)){var o=function(t,n){var e=t.size,r=t.limit,o=t.offset;switch(n){case J.TAB:return function(t){requestAnimationFrame((function(){t.scrollIntoView(document.activeElement,{offsetTop:t.size.container.height/2,onlyScrollIfNeeded:!0})}))}(t);case J.SPACE:return[0,200];case J.PAGE_UP:return[0,40-e.container.height];case J.PAGE_DOWN:return[0,e.container.height-40];case J.END:return[0,r.y-o.y];case J.HOME:return[0,-o.y];case J.LEFT:return[-40,0];case J.UP:return[0,-40];case J.RIGHT:return[40,0];case J.DOWN:return[0,40];default:return null}}(t,n.keyCode||n.which);if(o){var i=o[0],u=o[1];t.addTransformableMomentum(i,u,n,(function(e){e?n.preventDefault():(t.containerEl.blur(),t.parent&&t.parent.containerEl.focus())}))}}}))}function rt(t){var n,e,r,o,i,u=R(t),c=t.containerEl,s=t.track,a=s.xAxis,f=s.yAxis;function l(n,e){var r=t.size;return n===Q.X?e/(r.container.width+(a.thumb.realSize-a.thumb.displaySize))*r.content.width:n===Q.Y?e/(r.container.height+(f.thumb.realSize-f.thumb.displaySize))*r.content.height:0}function p(t){return I(t,[a.element,a.thumb.element])?Q.X:I(t,[f.element,f.thumb.element])?Q.Y:void 0}u(c,"click",(function(n){if(!e&&I(n.target,[a.element,f.element])){var r=n.target,o=p(r),i=r.getBoundingClientRect(),u=F(n),c=t.offset,s=t.limit;if(o===Q.X){var h=u.x-i.left-a.thumb.displaySize/2;t.setMomentum(O(l(o,h)-c.x,-c.x,s.x-c.x),0)}o===Q.Y&&(h=u.y-i.top-f.thumb.displaySize/2,t.setMomentum(0,O(l(o,h)-c.y,-c.y,s.y-c.y)))}})),u(c,"mousedown",(function(e){if(I(e.target,[a.thumb.element,f.thumb.element])){n=!0;var u=e.target,s=F(e),l=u.getBoundingClientRect();o=p(u),r={x:s.x-l.left,y:s.y-l.top},i=c.getBoundingClientRect(),B(t.containerEl,{"-user-select":"none"})}})),u(window,"mousemove",(function(u){if(n){e=!0;var c=t.offset,s=F(u);if(o===Q.X){var a=s.x-r.x-i.left;t.setPosition(l(o,a),c.y)}o===Q.Y&&(a=s.y-r.y-i.top,t.setPosition(c.x,l(o,a)))}})),u(window,"mouseup blur",(function(){n=e=!1,B(t.containerEl,{"-user-select":""})}))}function ot(t){R(t)(window,"resize",k(t.update.bind(t),300))}function it(t){var n,e=R(t),r=t.containerEl,o=t.contentEl,i=t.offset,u=t.limit,c=!1;e(window,"mousemove",(function(e){c&&(cancelAnimationFrame(n),function e(r){var o=r.x,c=r.y;(o||c)&&(t.setMomentum(O(i.x+o,0,u.x)-i.x,O(i.y+c,0,u.y)-i.y),n=requestAnimationFrame((function(){e({x:o,y:c})})))}(function(t,n){var e=t.bounding,r=e.top,o=e.right,i=e.bottom,u=e.left,c=F(n),s=c.x,a=c.y,f={x:0,y:0};return 0===s&&0===a?f:(s>o-20?f.x=s-o+20:s<u+20&&(f.x=s-u-20),a>i-20?f.y=a-i+20:a<r+20&&(f.y=a-r-20),f.x*=2,f.y*=2,f)}(t,e)))})),e(o,"selectstart",(function(t){t.stopPropagation(),cancelAnimationFrame(n),c=!0})),e(window,"mouseup blur",(function(){cancelAnimationFrame(n),c=!1})),e(r,"scroll",(function(t){t.preventDefault(),r.scrollTop=r.scrollLeft=0}))}function ut(t){var n,e=/Android/.test(navigator.userAgent)?3:2,r=t.options.delegateTo||t.containerEl,o=new V,i=R(t),u=0;i(r,"touchstart",(function(e){o.track(e),t.setMomentum(0,0),0===u&&(n=t.options.damping,t.options.damping=Math.max(n,.5)),u++})),i(r,"touchmove",(function(n){if(!Z||Z===t){o.update(n);var e=o.getDelta(),r=e.x,i=e.y;t.addTransformableMomentum(r,i,n,(function(e){e&&(n.preventDefault(),Z=t)}))}})),i(r,"touchcancel touchend",(function(r){var i=o.getVelocity(),c={x:0,y:0};Object.keys(i).forEach((function(t){var r=i[t]/n;c[t]=Math.abs(r)<50?0:r*e})),t.addTransformableMomentum(c.x,c.y,r),0==--u&&(t.options.damping=n),o.release(r),Z=null}))}function ct(t){R(t)(t.options.delegateTo||t.containerEl,"onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel",(function(n){var e=function(t){if("deltaX"in t){var n=ft(t.deltaMode);return{x:t.deltaX/st.STANDARD*n,y:t.deltaY/st.STANDARD*n}}return"wheelDeltaX"in t?{x:t.wheelDeltaX/st.OTHERS,y:t.wheelDeltaY/st.OTHERS}:{x:0,y:t.wheelDelta/st.OTHERS}}(n),r=e.x,o=e.y;t.addTransformableMomentum(r,o,n,(function(t){t&&n.preventDefault()}))}))}!function(t){t[t.TAB=9]="TAB",t[t.SPACE=32]="SPACE",t[t.PAGE_UP=33]="PAGE_UP",t[t.PAGE_DOWN=34]="PAGE_DOWN",t[t.END=35]="END",t[t.HOME=36]="HOME",t[t.LEFT=37]="LEFT",t[t.UP=38]="UP",t[t.RIGHT=39]="RIGHT",t[t.DOWN=40]="DOWN"}(J||(J={})),function(t){t[t.X=0]="X",t[t.Y=1]="Y"}(Q||(Q={}));var st={STANDARD:1,OTHERS:-3},at=[1,28,500],ft=function(t){return at[t]||at[0]},lt=new Map,pt=function(){function t(t,n){var e=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=t;var r=this.contentEl=document.createElement("div");this.options=new N(n),t.setAttribute("data-scrollbar","true"),t.setAttribute("tabindex","-1"),B(t,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(t.style.msTouchAction="none"),r.className="scroll-content",Array.from(t.childNodes).forEach((function(t){r.appendChild(t)})),t.appendChild(r),this.track=new q(this),this.size=this.getSize(),this._plugins=function(t,n){return Array.from(nt.order).filter((function(t){return!1!==n[t]})).map((function(e){var r=new(0,nt.constructors[e])(t,n[e]);return n[e]=r.options,r}))}(this,this.options.plugins);var o=t.scrollLeft,i=t.scrollTop;t.scrollLeft=t.scrollTop=0,this.setPosition(o,i,{withoutCallbacks:!0});var u=window,c=u.MutationObserver||u.WebKitMutationObserver||u.MozMutationObserver;"function"==typeof c&&(this._observer=new c((function(){e.update()})),this._observer.observe(r,{subtree:!0,childList:!0})),lt.set(t,this),requestAnimationFrame((function(){e._init()}))}return Object.defineProperty(t.prototype,"parent",{get:function(){for(var t=this.containerEl.parentElement;t;){var n=lt.get(t);if(n)return n;t=t.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(t){this.setPosition(this.scrollLeft,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(t){this.setPosition(t,this.scrollTop)},enumerable:!0,configurable:!0}),t.prototype.getSize=function(){return function(t){var n=t.containerEl,e=t.contentEl;return{container:{width:n.clientWidth,height:n.clientHeight},content:{width:e.offsetWidth-e.clientWidth+e.scrollWidth,height:e.offsetHeight-e.clientHeight+e.scrollHeight}}}(this)},t.prototype.update=function(){!function(t){var n=t.getSize(),e={x:Math.max(n.content.width-n.container.width,0),y:Math.max(n.content.height-n.container.height,0)},r=t.containerEl.getBoundingClientRect(),o={top:Math.max(r.top,0),right:Math.min(r.right,window.innerWidth),bottom:Math.min(r.bottom,window.innerHeight),left:Math.max(r.left,0)};t.size=n,t.limit=e,t.bounding=o,t.track.update(),t.setPosition()}(this),this._plugins.forEach((function(t){t.onUpdate()}))},t.prototype.isVisible=function(t){return function(t,n){var e=t.bounding,r=n.getBoundingClientRect(),o=Math.max(e.top,r.top),i=Math.max(e.left,r.left),u=Math.min(e.right,r.right);return o<Math.min(e.bottom,r.bottom)&&i<u}(this,t)},t.prototype.setPosition=function(t,n,e){var r=this;void 0===t&&(t=this.offset.x),void 0===n&&(n=this.offset.y),void 0===e&&(e={});var o=function(t,n,e){var r=t.options,o=t.offset,u=t.limit,c=t.track,s=t.contentEl;return r.renderByPixels&&(n=Math.round(n),e=Math.round(e)),n=O(n,0,u.x),e=O(e,0,u.y),n!==o.x&&c.xAxis.show(),e!==o.y&&c.yAxis.show(),r.alwaysShowTracks||c.autoHideOnIdle(),n===o.x&&e===o.y?null:(o.x=n,o.y=e,B(s,{"-transform":"translate3d("+-n+"px, "+-e+"px, 0)"}),c.update(),{offset:i({},o),limit:i({},u)})}(this,t,n);o&&!e.withoutCallbacks&&this._listeners.forEach((function(t){t.call(r,o)}))},t.prototype.scrollTo=function(t,n,e,r){void 0===t&&(t=this.offset.x),void 0===n&&(n=this.offset.y),void 0===e&&(e=0),void 0===r&&(r={}),function(t,n,e,r,o){void 0===r&&(r=0);var i=void 0===o?{}:o,u=i.easing,c=void 0===u?$:u,s=i.callback,a=t.options,f=t.offset,l=t.limit;a.renderByPixels&&(n=Math.round(n),e=Math.round(e));var p=f.x,h=f.y,d=O(n,0,l.x)-p,v=O(e,0,l.y)-h,y=Date.now();cancelAnimationFrame(K.get(t)),function n(){var e=Date.now()-y,o=r?c(Math.min(e/r,1)):1;if(t.setPosition(p+d*o,h+v*o),e>=r)"function"==typeof s&&s.call(t);else{var i=requestAnimationFrame(n);K.set(t,i)}}()}(this,t,n,e,r)},t.prototype.scrollIntoView=function(t,n){void 0===n&&(n={}),function(t,n,e){var r=void 0===e?{}:e,o=r.alignToTop,i=void 0===o||o,u=r.onlyScrollIfNeeded,c=void 0!==u&&u,s=r.offsetTop,a=void 0===s?0:s,f=r.offsetLeft,l=void 0===f?0:f,p=r.offsetBottom,h=void 0===p?0:p,d=t.containerEl,v=t.bounding,y=t.offset,m=t.limit;if(n&&d.contains(n)){var g=n.getBoundingClientRect();if(!c||!t.isVisible(n)){var b=i?g.top-v.top-a:g.bottom-v.bottom+h;t.setMomentum(g.left-v.left-l,O(b,-y.y,m.y-y.y))}}}(this,t,n)},t.prototype.addListener=function(t){if("function"!=typeof t)throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(t)},t.prototype.removeListener=function(t){this._listeners.delete(t)},t.prototype.addTransformableMomentum=function(t,n,e,r){this._updateDebounced();var o=this._plugins.reduce((function(t,n){return n.transformDelta(t,e)||t}),{x:t,y:n}),i=!this._shouldPropagateMomentum(o.x,o.y);i&&this.addMomentum(o.x,o.y),r&&r.call(this,i)},t.prototype.addMomentum=function(t,n){this.setMomentum(this._momentum.x+t,this._momentum.y+n)},t.prototype.setMomentum=function(t,n){0===this.limit.x&&(t=0),0===this.limit.y&&(n=0),this.options.renderByPixels&&(t=Math.round(t),n=Math.round(n)),this._momentum.x=t,this._momentum.y=n},t.prototype.updatePluginOptions=function(t,n){this._plugins.forEach((function(e){e.name===t&&Object.assign(e.options,n)}))},t.prototype.destroy=function(){var t=this.containerEl,n=this.contentEl;!function(t){var n=z.get(t);n&&(n.forEach((function(t){var n=t.elem,e=t.eventName,r=t.handler;n.removeEventListener(e,r,C())})),z.delete(t))}(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),lt.delete(this.containerEl);for(var e=Array.from(n.childNodes);t.firstChild;)t.removeChild(t.firstChild);e.forEach((function(n){t.appendChild(n)})),B(t,{overflow:""}),t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,this._plugins.forEach((function(t){t.onDestroy()})),this._plugins.length=0},t.prototype._init=function(){var t=this;this.update(),Object.keys(r).forEach((function(n){r[n](t)})),this._plugins.forEach((function(t){t.onInit()})),this._render()},t.prototype._updateDebounced=function(){this.update()},t.prototype._shouldPropagateMomentum=function(t,n){void 0===t&&(t=0),void 0===n&&(n=0);var e=this.options,r=this.offset,o=this.limit;if(!e.continuousScrolling)return!1;0===o.x&&0===o.y&&this._updateDebounced();var i=O(t+r.x,0,o.x),u=O(n+r.y,0,o.y),c=!0;return(c=(c=c&&i===r.x)&&u===r.y)&&(r.x===o.x||0===r.x||r.y===o.y||0===r.y)},t.prototype._render=function(){var t=this._momentum;if(t.x||t.y){var n=this._nextTick("x"),e=this._nextTick("y");t.x=n.momentum,t.y=e.momentum,this.setPosition(n.position,e.position)}var r=i({},this._momentum);this._plugins.forEach((function(t){t.onRender(r)})),this._renderID=requestAnimationFrame(this._render.bind(this))},t.prototype._nextTick=function(t){var n=this.options,e=this.offset,r=this._momentum,o=e[t],i=r[t];if(Math.abs(i)<=.1)return{momentum:0,position:o+i};var u=i*(1-n.damping);return n.renderByPixels&&(u|=0),{momentum:u,position:o+i-u}},u([D(100,{leading:!0})],t.prototype,"_updateDebounced",null),t}(),ht="\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n",dt="smooth-scrollbar-style",vt=!1;function yt(){if(!vt&&"undefined"!=typeof window){var t=document.createElement("style");t.id=dt,t.textContent=ht,document.head&&document.head.appendChild(t),vt=!0}}e.d(n,"ScrollbarPlugin",(function(){return tt}));
/*!
 * cast `I.Scrollbar` to `Scrollbar` to avoid error
 *
 * `I.Scrollbar` is not assignable to `Scrollbar`:
 *     "privateProp" is missing in `I.Scrollbar`
 *
 * @see https://github.com/Microsoft/TypeScript/issues/2672
 */
var mt=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}(n,t),n.init=function(t,n){if(!t||1!==t.nodeType)throw new TypeError("expect element to be DOM Element, but got "+t);return yt(),lt.has(t)?lt.get(t):new pt(t,n)},n.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),(function(e){return n.init(e,t)}))},n.has=function(t){return lt.has(t)},n.get=function(t){return lt.get(t)},n.getAll=function(){return Array.from(lt.values())},n.destroy=function(t){var n=lt.get(t);n&&n.destroy()},n.destroyAll=function(){lt.forEach((function(t){t.destroy()}))},n.use=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];t.forEach((function(t){var n=t.pluginName;if(!n)throw new TypeError("plugin name is required");nt.order.add(n),nt.constructors[n]=t}))}.apply(void 0,t)},n.attachStyle=function(){return yt()},n.detachStyle=function(){return function(){if(vt&&"undefined"!=typeof window){var t=document.getElementById(dt);t&&t.parentNode&&(t.parentNode.removeChild(t),vt=!1)}}()},n.version="8.5.1",n.ScrollbarPlugin=tt,n}(pt);n.default=mt}]).default}));
},{}],3:[function(require,module,exports){
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;

},{}],4:[function(require,module,exports){
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],5:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/bytesToUuid":3,"./lib/rng":4}],6:[function(require,module,exports){
"use strict";

require("./modules/circles-plugin");

var _staffSlider = _interopRequireDefault(require("./modules/staffSlider"));

var _header = _interopRequireDefault(require("./modules/header"));

var _menu = _interopRequireDefault(require("./modules/menu"));

var _carousel = _interopRequireDefault(require("./modules/carousel"));

var _tabs = _interopRequireDefault(require("./modules/tabs"));

var _textMediaSlider = _interopRequireDefault(require("./modules/textMediaSlider"));

var _diseasesSlider = _interopRequireDefault(require("./modules/diseasesSlider"));

var _tabsList = _interopRequireDefault(require("./modules/tabs-list"));

var _defaultCarousel = _interopRequireDefault(require("./modules/default-carousel"));

var _pageNav = _interopRequireDefault(require("./modules/page-nav"));

var _feedbackSlider = _interopRequireDefault(require("./modules/feedbackSlider"));

var _fancyboxSettings = _interopRequireDefault(require("./modules/fancyboxSettings"));

var _tabAccordeon = _interopRequireDefault(require("./modules/tab-accordeon"));

var _formValidation = _interopRequireDefault(require("./modules/formValidation"));

var _ourClinicSlidersInit = _interopRequireDefault(require("./modules/our-clinic-sliders-init"));

require("./modules/notifications");

var _listPagination = _interopRequireDefault(require("./modules/listPagination"));

require("./modules/vanilla.tabs");

var _vanillaTabsInit = _interopRequireDefault(require("./modules/vanillaTabsInit"));

var _blogMobilePagination = _interopRequireDefault(require("./modules/blogMobilePagination"));

var _hybridSlider = _interopRequireDefault(require("./modules/hybridSlider"));

var _expandingTextarea = _interopRequireDefault(require("./modules/expandingTextarea"));

var _smoothScrollbar = _interopRequireDefault(require("./modules/smoothScrollbar"));

var _imageSlider = _interopRequireDefault(require("./modules/image-slider"));

var _modalInit = _interopRequireDefault(require("./modules/modal-init"));

var _accessibleNavMenu = _interopRequireDefault(require("./modules/accessibleNavMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-extra-boolean-cast */

/* eslint-disable no-new */

/* eslint-disable no-undef */
// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
// import scrollToContacts from './modules/scrollToContacts';
_modalInit.default.init();

_vanillaTabsInit.default.init();

_smoothScrollbar.default.init();

(function ($) {
  // When DOM is ready
  $(function () {
    _tabAccordeon.default.init();

    var navigation = document.querySelector('.page-nav');

    if (!!navigation) {
      _pageNav.default.init();
    }

    _fancyboxSettings.default.init();

    _staffSlider.default.init();

    _formValidation.default.init();

    _header.default.init();

    _tabsList.default.init();

    _feedbackSlider.default.init();

    _menu.default.init();

    _carousel.default.init();

    _tabs.default.init();

    _textMediaSlider.default.init();

    _diseasesSlider.default.init();

    _formValidation.default.init();

    _defaultCarousel.default.init();

    _ourClinicSlidersInit.default.init();

    _listPagination.default.init();

    _hybridSlider.default.init();

    var blogMobilePagination = new _blogMobilePagination.default(document.querySelector('.blog-list'));
    blogMobilePagination.init();

    _expandingTextarea.default.init();

    _imageSlider.default.init();

    _accessibleNavMenu.default.init(); // scrollToContacts.init();

  });
})(jQuery);

},{"./modules/accessibleNavMenu":7,"./modules/blogMobilePagination":8,"./modules/carousel":9,"./modules/circles-plugin":10,"./modules/default-carousel":12,"./modules/diseasesSlider":13,"./modules/expandingTextarea":14,"./modules/fancyboxSettings":15,"./modules/feedbackSlider":16,"./modules/formValidation":17,"./modules/header":19,"./modules/hybridSlider":21,"./modules/image-slider":22,"./modules/listPagination":23,"./modules/menu":24,"./modules/modal-init":25,"./modules/notifications":27,"./modules/our-clinic-sliders-init":28,"./modules/page-nav":29,"./modules/smoothScrollbar":31,"./modules/staffSlider":32,"./modules/tab-accordeon":33,"./modules/tabs":35,"./modules/tabs-list":34,"./modules/textMediaSlider":36,"./modules/vanilla.tabs":37,"./modules/vanillaTabsInit":38}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable no-useless-return */

/* eslint-disable func-names */
var accessibleNavMenu = function () {
  var menuLink = document.querySelectorAll('.nav-item > a');
  var FOCUS_CLASS_NAME = 'active';

  var _preventEventClick = function _preventEventClick(element, event) {
    if (element.getAttribute('href') === '#') {
      event.preventDefault();
    }
  };

  var _accessibleDesktopMenu = function _accessibleDesktopMenu() {
    menuLink.forEach(function (element) {
      element.addEventListener('click', function (event) {
        _preventEventClick(element, event);

        return;
      });

      if (element.nextElementSibling) {
        element.addEventListener('keyup', function () {
          this.setAttribute('aria-expanded', true);
          this.parentElement.classList.add(FOCUS_CLASS_NAME);

          if (element.nextElementSibling) {
            var subMenu = element.nextElementSibling;
            var subMenuLinks = subMenu.querySelectorAll('a');
            var lastLinkIndex = subMenuLinks.length - 1;
            var lastLink = subMenuLinks[lastLinkIndex];
            lastLink.addEventListener('keydown', function (event) {
              if (event.keyCode === 9 && !(event.shiftKey && event.keyCode === 9)) {
                element.setAttribute('aria-expanded', false);
                element.parentElement.classList.remove(FOCUS_CLASS_NAME);
              }
            });
          }
        });
      }

      element.addEventListener('keydown', function (event) {
        if (element.nextElementSibling && event.shiftKey && event.keyCode === 9) {
          element.parentElement.classList.remove(FOCUS_CLASS_NAME);
        }
      });
    });
  };

  var accessibleMenu = function accessibleMenu() {
    _accessibleDesktopMenu();
  };

  var init = function init() {
    accessibleMenu();
  };

  return {
    init: init
  };
}();

var _default = accessibleNavMenu;
exports.default = _default;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable func-names */

/* eslint-disable prefer-destructuring */
var BlogMobilePagination =
/*#__PURE__*/
function () {
  function BlogMobilePagination(container) {
    _classCallCheck(this, BlogMobilePagination);

    this.container = container;

    if (this.isContainer()) {
      this.paginationItem = this.container.children[0];
    }
  }

  _createClass(BlogMobilePagination, [{
    key: "isContainer",
    value: function isContainer() {
      if (this.container) {
        return true;
      }

      return false;
    }
  }, {
    key: "startPagination",
    value: function startPagination() {
      var ACTIVE = 'active';

      if (this.isContainer()) {
        this.paginationItem.addEventListener('click', function (event) {
          event.preventDefault();
          this.parentNode.classList.toggle(ACTIVE);
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.startPagination();
    }
  }]);

  return BlogMobilePagination;
}();

var _default = BlogMobilePagination;
exports.default = _default;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = _interopRequireDefault(require("./helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-shadow */
var carouselSlider = function carouselSlider() {
  var ARROW_NEXT = '.partners-slider .the-arrow.right';
  var ARROW_PREV = '.partners-slider .the-arrow.left';
  var PAGINATION_ELEMENTS = '.partners-slider .count';
  var SLIDER_CONTAINER = '.swiper-container.partners-slider';
  var carousel;

  var carouselInit = function carouselInit() {
    if (carousel === undefined) {
      carousel = new Swiper(SLIDER_CONTAINER, {
        direction: 'horizontal',
        pagination: {
          el: PAGINATION_ELEMENTS,
          type: 'custom',
          renderCustom: function renderCustom(carousel, current, total) {
            return "<span class=\"".concat(current, "\">").concat(current > 9 || current < 1 ? current : "0".concat(current), "</span>") + "<span class=\"".concat(total, "\">").concat(total > 9 || total < 1 ? total : "0".concat(total), "</span>");
          }
        },
        navigation: {
          nextEl: ARROW_NEXT,
          prevEl: ARROW_PREV
        },
        breakpoints: {
          767: {
            slidesPerView: 4,
            spaceBetween: 15
          },
          520: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 15
          }
        },
        a11y: {
          prevSlideMessage: 'Перейти к предыдущим слайдам',
          nextSlideMessage: 'Перейти к следующим слайдам'
        },
        on: {
          init: function init() {
            var _this = this;

            setTimeout(function () {
              _helpers.default.detectSlidePosition($(_this.$el[0]));
            }, 3000);
          },
          slideChangeTransitionEnd: function slideChangeTransitionEnd() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          },
          transitionEnd: function transitionEnd() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          },
          resize: function resize() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          }
        }
      });
    }
  };

  var init = function init() {
    carouselInit();
  };

  return {
    init: init
  };
};

var _default = carouselSlider();

exports.default = _default;

},{"./helpers":20}],10:[function(require,module,exports){
"use strict";

var _getWindowWidth = _interopRequireDefault(require("./getWindowWidth"));

var _viewportBreakpoints = require("./viewport-breakpoints");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var uuidv4 = require('uuid/v4');

window.circlesPlugin = function (opts) {
  if (typeof opts === 'undefined') {
    opts = {};
  }

  var DENSITY_COEFFICIENT = Math.abs(opts.densityCoefficient) || 7;
  var minCircleDiameter = opts.minCircleDiameter || 24;
  var maxCircleDiameter = opts.maxCircleDiameter || (0, _getWindowWidth.default)() <= _viewportBreakpoints.phone ? 90 : 180;
  var contentOffset = opts.desktopContentOffset || 80;
  var circlesData = opts.circles;

  if ((0, _getWindowWidth.default)() <= _viewportBreakpoints.desktop) {
    contentOffset = opts.tabletContentOffset || 40;
  } else if ((0, _getWindowWidth.default)() <= _viewportBreakpoints.phone) {
    contentOffset = opts.phoneContentOffset || 0;
  }

  var calculateCirclesQuantity = function calculateCirclesQuantity() {
    var body = document.getElementsByTagName('body')[0];
    var width = body.clientWidth;
    var height = body.clientHeight;
    var pageSqr = width * height;
    var circleMedSqr = Math.PI * 2 * ((minCircleDiameter + maxCircleDiameter) / 2 + contentOffset);
    var circlesPercent = Math.sqrt(pageSqr) / circleMedSqr / DENSITY_COEFFICIENT;
    var circlesCount = Math.round(circlesPercent * 100 / 2.5);
    return circlesCount;
  };

  var CIRCLES_WRAPPER_ID = uuidv4();
  var CIRCLES_WRAPPER_CLASS = 'circles-wrapper non-text-node';
  document.body.insertAdjacentHTML('afterbegin', "<div class=\"".concat(CIRCLES_WRAPPER_CLASS, "\" id=\"").concat(CIRCLES_WRAPPER_ID, "\" aria-hidden=\"true\"></div>"));
  var circlesWrapper = document.getElementById(CIRCLES_WRAPPER_ID);
  var LOADER_HEIGHT = parseInt(getComputedStyle(document.querySelector('#p_prldr')).height, 10);
  var CIRCLES_CNT = opts.circlesQuantity || calculateCirclesQuantity();
  var contentTagsDefault = ['a', 'svg', 'figure', 'img', 'button', 'input', 'textarea', 'li', 'p', 'span', 'img', 'picture', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'i', 'strong', 'em', 'b'];
  var contentTags = contentTagsDefault.concat(opts.contentTags || []);

  var s = function s(p) {
    var canvasWidth = parseInt(getComputedStyle(circlesWrapper).width, 10);
    var canvasHeight = parseInt(getComputedStyle(circlesWrapper).height, 10);
    var circles = [];
    var circlesPrototypes = [];
    circlesData.forEach(function (circle) {
      var has = Object.prototype.hasOwnProperty;

      var createCircle = function createCircle(circleToDraw) {
        var img = new Image();

        img.onload = function () {
          p.context.drawImage(img, circleToDraw.x, circleToDraw.y, circleToDraw.side, circleToDraw.side);
        };

        img.src = circle.img;
      };

      if (!has.call(circle, 'freq')) {
        circle.freq = 1;
      }

      for (var i = 0; i < circle.freq; i++) {
        circlesPrototypes.push(createCircle);
      }
    });

    var Circle = function Circle() {
      _classCallCheck(this, Circle);

      this.x = p.random(p.width);
      this.y = p.random(p.height);
      this.side = p.random(minCircleDiameter, maxCircleDiameter);
    };

    p.setup = function () {
      p.createCanvas(canvasWidth, canvasHeight);
      var c = document.querySelector('.p5Canvas');
      p.context = c.getContext('2d');
      var textNodesArr = Array.from(document.querySelectorAll('.text-node'));

      var isTextNode = function isTextNode(node) {
        return !isNaN(parseInt(getComputedStyle(node).width, 10)) && parseInt(getComputedStyle(node).width, 10) > 0 && !node.classList.contains('non-text-node');
      };

      var textNodesCoordinates = textNodesArr.filter(function (node) {
        return isTextNode(node);
      }).map(function (node) {
        return {
          node: node,
          x: node.getBoundingClientRect().left + pageXOffset,
          y: node.getBoundingClientRect().top + pageYOffset - LOADER_HEIGHT,
          width: parseInt(getComputedStyle(node).width, 10),
          height: parseInt(getComputedStyle(node).height, 10)
        };
      });
      textNodesCoordinates.forEach(function (node) {
        node.leftBottomX = node.x;
        node.leftBottomY = node.y + node.height;
        node.rightTopX = node.x + node.width;
        node.rightTopY = node.y;
      });
      var protection = 0;

      while (circles.length < CIRCLES_CNT) {
        if (protection === 10000) {
          break;
        }

        protection++;
        var overlapping = false;
        var proposalCircle = new Circle();

        for (var j = 0; j < circles.length; j++) {
          var existingCircle = circles[j];
          var d = p.dist(proposalCircle.x, proposalCircle.y, existingCircle.x, existingCircle.y);

          if (d < proposalCircle.side + existingCircle.side) {
            overlapping = true;
            break;
          }
        }

        for (var _j = 0; _j < textNodesCoordinates.length; _j++) {
          var textNode = textNodesCoordinates[_j];
          proposalCircle.leftBottomX = proposalCircle.x - contentOffset;
          proposalCircle.leftBottomY = proposalCircle.y + proposalCircle.side + contentOffset;
          proposalCircle.rightTopX = proposalCircle.x + proposalCircle.side + contentOffset;
          proposalCircle.rightTopY = proposalCircle.y - contentOffset;
          var left = p.max(proposalCircle.leftBottomX, textNode.leftBottomX);
          var top = p.max(proposalCircle.rightTopY, textNode.rightTopY);
          var right = p.min(proposalCircle.rightTopX, textNode.rightTopX);
          var bottom = p.min(proposalCircle.leftBottomY, textNode.leftBottomY);
          var width = right - left;
          var height = top - bottom;

          if (height < 0 && width > 0) {
            overlapping = true;
            break;
          }
        }

        if (!overlapping) {
          circles.push(proposalCircle);
          var circlesPrototype = p.random(circlesPrototypes);
          circlesPrototype(proposalCircle);
        }
      }
    };
  };

  function parseTags(tagsArr) {
    tagsArr.forEach(function (tag) {
      Array.from(document.getElementsByTagName(tag)).forEach(function (node) {
        node.classList.add('text-node');
      });
    });
  }

  function parseHTML(startTag) {
    var startTagChildNodes = Array.from(startTag.childNodes);
    startTagChildNodes.forEach(function (childNode) {
      if (childNode.nodeType === Node.ELEMENT_NODE) {
        var isTextOnlyNode = true;

        for (var i = 0; i < childNode.childNodes.length; i++) {
          if (childNode.childNodes[i].nodeType !== Node.TEXT_NODE) {
            isTextOnlyNode = false;
            break;
          }
        }

        if (isTextOnlyNode) {
          childNode.classList.add('text-node');
        } else {
          return parseHTML(childNode);
        }
      }
    });
  }

  parseTags(contentTags);
  parseHTML(document.body);
  new p5(s, CIRCLES_WRAPPER_ID);
};

},{"./getWindowWidth":18,"./viewport-breakpoints":39,"uuid/v4":5}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable prefer-destructuring */
var clinicSlider = function clinicSlider(sliderInitBlock) {
  var prev = sliderInitBlock.getElementsByClassName('arrow-prev')[0];
  var next = sliderInitBlock.getElementsByClassName('arrow-next')[0];
  var slider = sliderInitBlock.getElementsByClassName('our-clinic-content')[0];
  var slide = sliderInitBlock.getElementsByClassName('our-clinic-content-item')[0];
  var slideStyles = window.getComputedStyle(slide);
  var slideWidth = parseInt(slideStyles.getPropertyValue('width'), 10);
  var slidesAmount = slider.children.length;
  var startSlideIndex = 1;
  var slidesCounter = 1;
  var countNumber = sliderInitBlock.getElementsByClassName('count-number')[0];
  var titleMobile = sliderInitBlock.getElementsByClassName('title-mobile-list')[0];
  var titleMobileWidth = 480;
  var titleMobileMargin = 50;
  var imageSlide = sliderInitBlock.getElementsByClassName('our-clinic-image')[0];
  var IS_VISIBLE = 'isVisible';
  var NOT_VISIBLE = 'notVisible';
  var imageSlideAnimDuration = 250;
  window.addEventListener('resize', function () {
    slideWidth = parseInt(slideStyles.getPropertyValue('width'), 10);
    var newSlidePosition = -(slideWidth * (slidesCounter - 1));
    slider.style.left = "".concat(newSlidePosition, "px");
    var newTitlePosition = -(titleMobileWidth * (slidesCounter - 1));
    titleMobile.style.left = "".concat(newTitlePosition, "px");
  });

  var changeImage = function changeImage() {
    imageSlide.classList.add(NOT_VISIBLE);
    setTimeout(function () {
      var imageSlideSrc = imageSlide.getAttribute("data-img".concat(slidesCounter));
      imageSlide.src = imageSlideSrc;
      imageSlide.classList.remove(NOT_VISIBLE);
      imageSlide.classList.add(IS_VISIBLE);
      setTimeout(function () {
        imageSlide.classList.remove(IS_VISIBLE);
      }, imageSlideAnimDuration);
    }, imageSlideAnimDuration);
  };

  var slideNext = function slideNext(event) {
    event.preventDefault();

    if (slidesCounter < slidesAmount) {
      slideWidth = parseInt(slideStyles.getPropertyValue('width'), 10);
      var newSlidePosition = -(slideWidth * slidesCounter);
      slider.style.left = "".concat(newSlidePosition, "px");

      if (slidesCounter === 0) {
        titleMobileWidth -= titleMobileMargin;
      }

      var newTitlePosition = -(titleMobileWidth * slidesCounter);
      titleMobile.style.left = "".concat(newTitlePosition, "px");
      slidesCounter += 1;
      countNumber.innerText = "0".concat(slidesCounter);
      changeImage();
    }
  };

  var slidePrev = function slidePrev(event) {
    event.preventDefault();

    if (slidesCounter > startSlideIndex) {
      slideWidth = parseInt(slideStyles.getPropertyValue('width'), 10);
      var newSlidePosition = -(slideWidth * (slidesCounter - 2));
      slider.style.left = "".concat(newSlidePosition, "px");
      var newTitlePosition = -(titleMobileWidth * (slidesCounter - 2));
      titleMobile.style.left = "".concat(newTitlePosition, "px");
      slidesCounter -= 1;
      countNumber.innerText = "0".concat(slidesCounter);
      changeImage();
    }
  };

  var swipeSliding = function swipeSliding() {
    var initialPoint;
    var finalPoint;
    sliderInitBlock.addEventListener('touchstart', function (event) {
      initialPoint = event.changedTouches[0];
    }, false);
    sliderInitBlock.addEventListener('touchend', function (event) {
      finalPoint = event.changedTouches[0];
      var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
      var minSwipeDuration = 30;

      if (xAbs > minSwipeDuration) {
        if (finalPoint.pageX < initialPoint.pageX) {
          slideNext(event);
        } else if (finalPoint.pageX > initialPoint.pageX) {
          slidePrev(event);
        }
      }
    }, false);
  };

  swipeSliding();
  next.addEventListener('click', slideNext);
  prev.addEventListener('click', slidePrev);
};

var _default = clinicSlider;
exports.default = _default;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = _interopRequireDefault(require("./helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-shadow */
var carouselSlider = function carouselSlider() {
  var ARROW_NEXT = '.default-carousel .the-arrow.right';
  var ARROW_PREV = '.default-carousel .the-arrow.left';
  var PAGINATION_ELEMENTS = '.default-carousel .count';
  var SLIDER_CONTAINER = '.swiper-container.default-carousel';
  var carousel;

  var carouselInit = function carouselInit() {
    if (carousel === undefined) {
      carousel = new Swiper(SLIDER_CONTAINER, {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 60,
        pagination: {
          el: PAGINATION_ELEMENTS,
          type: 'custom',
          renderCustom: function renderCustom(carousel, current, total) {
            return "<span class=\"".concat(current, "\">").concat(current > 9 || current < 1 ? current : "0".concat(current), "</span>") + "<span class=\"".concat(total, "\">").concat(total > 9 || total < 1 ? total : "0".concat(total), "</span>");
          }
        },
        navigation: {
          nextEl: ARROW_NEXT,
          prevEl: ARROW_PREV
        },
        breakpoints: {
          1280: {
            slidesPerView: 4,
            spaceBetween: 58
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 58
          },
          660: {
            slidesPerView: 2,
            spaceBetween: 58
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        },
        a11y: {
          prevSlideMessage: 'Перейти к предыдущим слайдам',
          nextSlideMessage: 'Перейти к следующим слайдам'
        },
        on: {
          init: function init() {
            var _this = this;

            setTimeout(function () {
              _helpers.default.detectSlidePosition($(_this.$el[0]));
            }, 3000);
          },
          slideChangeTransitionEnd: function slideChangeTransitionEnd() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          },
          transitionEnd: function transitionEnd() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          },
          resize: function resize() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          }
        }
      });
    }
  };

  var init = function init() {
    carouselInit();
  };

  return {
    init: init
  };
};

var _default = carouselSlider();

exports.default = _default;

},{"./helpers":20}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = _interopRequireDefault(require("./helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-shadow */
var diseases = function diseases() {
  var WINDOW_WIDTH_TABLET_S = 726;
  var ARROW_NEXT = '.swiper-container.diseases-slider .the-arrow.right';
  var ARROW_PREV = '.swiper-container.diseases-slider .the-arrow.left';
  var SWIPER_CLASS_NAME = 'swiper-container';
  var PAGINATION_ELEMENTS = '.diseases-slider .count';
  var SLIDER_CONTAINER = '.swiper-container.diseases-slider';
  var SLIDER_CONTAINER_SLIDER = '.swiper-container.diseases-slider .swiper-slide';
  var $diseases = $('.diseases-slider');
  var diseasesSlider;

  var diseasesSliderInit = function diseasesSliderInit() {
    var screenWidth = $(window).width();

    if ($diseases.hasClass(SWIPER_CLASS_NAME)) {
      if (screenWidth < WINDOW_WIDTH_TABLET_S && diseasesSlider === undefined) {
        diseasesSlider = new Swiper(SLIDER_CONTAINER, {
          pagination: {
            el: PAGINATION_ELEMENTS,
            type: 'custom',
            renderCustom: function renderCustom(diseasesSlider, current, total) {
              return "<span class=\"".concat(current, "\">").concat(current > 9 || current < 1 ? current : "0".concat(current), "</span>") + "<span class=\"".concat(total, "\">").concat(total > 9 || total < 1 ? total : "0".concat(total), "</span>");
            }
          },
          navigation: {
            nextEl: ARROW_NEXT,
            prevEl: ARROW_PREV
          },
          a11y: {
            prevSlideMessage: 'Перейти к предыдущим слайдам',
            nextSlideMessage: 'Перейти к следующим слайдам'
          },
          on: {
            init: function init() {
              var _this = this;

              setTimeout(function () {
                _helpers.default.detectSlidePosition($(_this.$el[0]));
              }, 3000);
            },
            slideChangeTransitionEnd: function slideChangeTransitionEnd() {
              _helpers.default.detectSlidePosition($(this.$el[0]));
            },
            transitionEnd: function transitionEnd() {
              _helpers.default.detectSlidePosition($(this.$el[0]));
            },
            resize: function resize() {
              _helpers.default.detectSlidePosition($(this.$el[0]));
            }
          },
          spaceBetween: 20
        });
      } else if (screenWidth >= WINDOW_WIDTH_TABLET_S && diseasesSlider !== undefined) {
        diseasesSlider.destroy();
        diseasesSlider = undefined;
        $(SLIDER_CONTAINER).removeAttr('style');
        $(SLIDER_CONTAINER_SLIDER).removeAttr('style');
      }
    }
  };

  var diseasesSliderResize = function diseasesSliderResize() {
    $(window).on('resize', function () {
      diseasesSliderInit();
    });
  };

  var init = function init() {
    diseasesSliderInit();
    diseasesSliderResize();
  };

  return {
    init: init
  };
};

var _default = diseases();

exports.default = _default;

},{"./helpers":20}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable no-param-reassign */
function expandTextarea() {
  var textareaArr = Array.from(document.querySelectorAll('textarea'));

  function hasVScroll(block) {
    return block.scrollHeight > block.clientHeight;
  }

  function changeHeight(block) {
    if (hasVScroll(block)) {
      block.style.height = "".concat(block.scrollHeight + 20, "px");
    }
  }

  textareaArr.forEach(function (textarea) {
    textarea.addEventListener('focus', function () {
      textarea.addEventListener('paste', function () {
        changeHeight(textarea);
      });
      textarea.addEventListener('keyup', function () {
        changeHeight(textarea);
      });
    });
  });

  var init = function init() {
    expandTextarea();
  };

  return {
    init: init
  };
}

var _default = expandTextarea();

exports.default = _default;

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var fancybox = function fancybox() {
  var fancyboxInit = function fancyboxInit() {
    $('[data-fancybox]').fancybox({
      toolbar: true,
      keyboard: true,
      autoFocus: true,
      arrows: true,
      infobar: true,
      closeBtn: true,
      closeClick: false,
      autoResize: true,
      autoCenter: true,
      fitToView: true,
      preventCaptionOverlap: true,
      btnTpl: {
        // Arrows
        arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' + '<div><svg width="49" height="14" viewBox="0 0 49 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.1C.502944 6.1.1 6.50294.1 7 .1 7.49706.502944 7.9 1 7.9V6.1zM48.6364 7.6364C48.9879 7.28492 48.9879 6.71508 48.6364 6.3636L42.9088.636039C42.5574.284567 41.9875.284567 41.636.636039 41.2846.987511 41.2846 1.55736 41.636 1.90883L46.7272 7 41.636 12.0912C41.2846 12.4426 41.2846 13.0125 41.636 13.364 41.9875 13.7154 42.5574 13.7154 42.9088 13.364L48.6364 7.6364zM1 7.9H48V6.1H1V7.9z" fill="#000"/></svg></div>' + '</button>',
        arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' + '<div><svg width="49" height="14" viewBox="0 0 49 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.1C.502944 6.1.1 6.50294.1 7 .1 7.49706.502944 7.9 1 7.9V6.1zM48.6364 7.6364C48.9879 7.28492 48.9879 6.71508 48.6364 6.3636L42.9088.636039C42.5574.284567 41.9875.284567 41.636.636039 41.2846.987511 41.2846 1.55736 41.636 1.90883L46.7272 7 41.636 12.0912C41.2846 12.4426 41.2846 13.0125 41.636 13.364 41.9875 13.7154 42.5574 13.7154 42.9088 13.364L48.6364 7.6364zM1 7.9H48V6.1H1V7.9z" fill="#000"/></svg></div>' + '</button>'
      }
    });
  };

  var init = function init() {
    fancyboxInit();
  };

  return {
    init: init
  };
};

var _default = fancybox();

exports.default = _default;

},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = _interopRequireDefault(require("./helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-shadow */
var feedbackSlider = function feedbackSlider() {
  var ARROW_NEXT = '.swiper-container.feedback-slider .the-arrow.right';
  var ARROW_PREV = '.swiper-container.feedback-slider .the-arrow.left';
  var PAGINATION_ELEMENTS = '.swiper-container.feedback-slider .count';
  var SLIDER_CONTAINER = '.swiper-container.feedback-slider';
  var carousel;

  var carouselInit = function carouselInit() {
    if (carousel === undefined) {
      carousel = new Swiper(SLIDER_CONTAINER, {
        direction: 'horizontal',
        spaceBetween: 60,
        autoHeight: false,
        pagination: {
          el: PAGINATION_ELEMENTS,
          type: 'custom',
          renderCustom: function renderCustom(carousel, current, total) {
            return "<span class=\"".concat(current, "\">").concat(current > 9 || current < 1 ? current : "0".concat(current), "</span>") + "<span class=\"".concat(total, "\">").concat(total > 9 || total < 1 ? total : "0".concat(total), "</span>");
          }
        },
        navigation: {
          nextEl: ARROW_NEXT,
          prevEl: ARROW_PREV
        },
        breakpoints: {
          769: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 1
          }
        },
        a11y: {
          prevSlideMessage: 'Перейти к предыдущим слайдам',
          nextSlideMessage: 'Перейти к следующим слайдам'
        },
        on: {
          init: function init() {
            var _this = this;

            setTimeout(function () {
              _helpers.default.detectSlidePosition($(_this.$el[0]));
            }, 3000);
          },
          slideChangeTransitionEnd: function slideChangeTransitionEnd() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          },
          transitionEnd: function transitionEnd() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          },
          resize: function resize() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          }
        }
      });
    }
  };

  var init = function init() {
    carouselInit();
  };

  return {
    init: init
  };
};

var _default = feedbackSlider();

exports.default = _default;

},{"./helpers":20}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable func-names */
var formValidation = function formValidation() {
  var HAS_ERROR = 'has-error';
  var formsArr = Array.from(document.forms);
  formsArr.forEach(function (form) {
    form.querySelectorAll('.form-field').forEach(function (input) {
      input.addEventListener('invalid', function (event) {
        event.preventDefault();
        this.parentNode.classList.add(HAS_ERROR);
        var message = this.parentNode.querySelector('.message');

        if (message === null) {
          message = document.createElement('span');
          message.classList.add('message');
          this.parentNode.appendChild(message);
        }

        message.innerText = input.validationMessage;
      });
      input.addEventListener('focus', function () {
        this.parentNode.classList.remove(HAS_ERROR);
      });
      input.addEventListener('touch', function () {
        this.parentNode.classList.remove(HAS_ERROR);
      }, false);
    });
  });

  var init = function init() {
    formValidation();
  };

  return {
    init: init
  };
};

var _default = formValidation();

exports.default = _default;

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getWindowWidth = function getWindowWidth() {
  var windowWidthNow = document.body.clientWidth;
  window.addEventListener('resize', function () {
    windowWidthNow = document.body.clientWidth;
  });
  return windowWidthNow;
};

var _default = getWindowWidth;
exports.default = _default;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var header = function header() {
  var $prevScrollpos = window.pageYOffset;
  var $body = $('body');
  var $headerContainer = $('#js-header');
  var $headerHeight = $headerContainer.height();
  var $secondPage = $('.second-page');
  var $langWrapper = $('.lang-wrapper');
  var $menuItem = $('.header-menu').find('ul').find('li');
  var $headerMenu = $('.header-menu');
  var $headerTop = $('.header-top');
  var $hum = $('.mobile-menu-btn');
  var $langList = $('.lang');
  var HEADER_SCROLL = 'scroll';
  var HEADER_SCROLL_DOWN = 'scroll-down';
  var ACTIVE = 'active';
  var LANG_LIST_ACTIVE = 'lang-drop';
  var LANG_ACTIVE_WRAPPER = 'dropdown';
  var SHOW = 'show';
  var DISABLED_SCROLL = 'freez';
  var WINDOW_WIDTH_DESKTOP = 980;
  var FIXED = 'fixed';
  var FIXEDHEADER = 'fixedHeader';

  var headerScroll = function headerScroll() {
    var $currentScrollPos = window.pageYOffset;
    $langWrapper.removeClass(LANG_ACTIVE_WRAPPER);
    $langList.removeClass(LANG_LIST_ACTIVE);

    if ($currentScrollPos > $headerHeight) {
      $headerContainer.addClass(FIXED);
      $secondPage.addClass(FIXEDHEADER);

      if ($prevScrollpos > $currentScrollPos) {
        $headerContainer.removeClass(HEADER_SCROLL);
        $headerContainer.addClass(HEADER_SCROLL_DOWN);
      } else {
        $headerContainer.addClass(HEADER_SCROLL);
        $langWrapper.removeClass(LANG_LIST_ACTIVE);
      }
    } else {
      $headerContainer.removeClass(FIXED);
      $secondPage.removeClass(FIXEDHEADER);
    }

    if ($prevScrollpos < $currentScrollPos) {
      $headerContainer.removeClass(HEADER_SCROLL_DOWN);
    }

    if ($currentScrollPos <= $headerContainer.height()) {
      $headerContainer.removeClass(HEADER_SCROLL_DOWN);
    }

    $prevScrollpos = $currentScrollPos;
    return $prevScrollpos;
  };

  window.addEventListener('scroll', headerScroll);
  window.addEventListener('load', headerScroll);

  var langSwitcher = function langSwitcher() {
    var isOpen = false;
    $langWrapper.on('click', function () {
      $langWrapper.attr('aria-expanded', isOpen = !isOpen);
      $langWrapper.toggleClass(LANG_ACTIVE_WRAPPER);
      $langWrapper.find($langList).toggleClass(LANG_LIST_ACTIVE);
    });
    return $langWrapper;
  };

  var hideDrop = function hideDrop() {
    document.onclick = function (e) {
      if (!$langWrapper.is(e.target) && $langWrapper.has(e.target).length === 0) {
        $langWrapper.removeClass(LANG_ACTIVE_WRAPPER);
        $langWrapper.find($langList).removeClass(LANG_LIST_ACTIVE);
      }

      if (!$menuItem.is(e.target) && $menuItem.has(e.target).length === 0) {
        $menuItem.removeClass(ACTIVE);
      }
    };
  };

  var resizeHeader = function resizeHeader() {
    window.onresize = function () {
      if ($(window).width() <= WINDOW_WIDTH_DESKTOP) {
        $menuItem.on('click', function (event) {
          $menuItem.removeClass(ACTIVE);
          $(event.currentTarget).toggleClass(ACTIVE);
        });
      }

      $langWrapper.removeClass(LANG_LIST_ACTIVE);
      $menuItem.removeClass(ACTIVE);
      $hum.removeClass(SHOW);
      $body.removeClass(DISABLED_SCROLL);
      $headerTop.removeClass(ACTIVE);
      $headerMenu.removeClass(SHOW);
    };
  };

  var init = function init() {
    headerScroll();
    langSwitcher();
    hideDrop();
    resizeHeader();
  };

  return {
    init: init
  };
};

var _default = header();

exports.default = _default;

},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable func-names */
var helpers = function () {
  function detectSlidePosition($parent) {
    if ($parent.length) {
      var $elm = $parent.find('.swiper-slide');
      $elm.each(function () {
        var $this = $(this);
        var off = $this.offset();
        var l = off.left;
        var docW = $parent.width();
        var isEntirelyVisible = l <= docW;

        if (!isEntirelyVisible || l < 0) {
          $this.find('a').attr('tabindex', '-1');
        } else {
          $this.find('a').removeAttr('tabindex', '0');
        }
      });
    }
  }

  return {
    detectSlidePosition: detectSlidePosition
  };
}(jQuery);

var _default = helpers;
exports.default = _default;

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = _interopRequireDefault(require("./helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HybridSlider =
/*#__PURE__*/
function () {
  function HybridSlider(container) {
    _classCallCheck(this, HybridSlider);

    this.container = container;
    this.sliderContainer = this.container.querySelector('.swiper-container');
    this.ARROW_NEXT = this.container.querySelector('.the-arrow.right');
    this.ARROW_PREV = this.container.querySelector('.the-arrow.left');
    this.PAGINATION_ELEMENTS = this.container.querySelector('.count');
    this.desktopImg = this.container.querySelector('.hybrid-desktop-img img');
    this.slidesArr = Array.from(this.container.querySelectorAll('.swiper-slide'));
    this.firstSlideImg = this.slidesArr[0].querySelector('.hybrid-slide-img img');
    this.desktopImg.src = this.firstSlideImg.src;
    this.desktopImg.alt = this.firstSlideImg.alt;
  }

  _createClass(HybridSlider, [{
    key: "hybridSliderActivation",
    value: function hybridSliderActivation() {
      var _this2 = this;

      var slider = new Swiper(this.sliderContainer, {
        direction: 'horizontal',
        spaceBetween: 60,
        autoHeight: true,
        pagination: {
          el: this.PAGINATION_ELEMENTS,
          type: 'custom',
          renderCustom: function renderCustom(slider, current, total) {
            return "<span class=\"".concat(current, "\">").concat(current > 9 || current < 1 ? current : "0".concat(current), "</span>") + "<span class=\"".concat(total, "\">").concat(total > 9 || total < 1 ? total : "0".concat(total), "</span>");
          }
        },
        navigation: {
          nextEl: this.ARROW_NEXT,
          prevEl: this.ARROW_PREV
        },
        slidesPerView: 1,
        on: {
          init: function init() {
            var _this = this;

            setTimeout(function () {
              _helpers.default.detectSlidePosition($(_this.$el[0]));
            }, 3000);
          },
          slideChangeTransitionEnd: function slideChangeTransitionEnd() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          },
          transitionEnd: function transitionEnd() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          },
          resize: function resize() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          }
        }
      });
      this.slider = slider;
      this.slider.on('slideChange', function () {
        var index = slider.realIndex;
        var currentSlide = _this2.slidesArr[index];
        var slideImg = currentSlide.querySelector('.hybrid-slide-img img');
        var FADE_IN = 'fadeIn';
        var animationDuration = 200;
        _this2.desktopImg.src = slideImg.src;
        _this2.desktopImg.alt = slideImg.alt;

        _this2.desktopImg.classList.add(FADE_IN);

        setTimeout(function () {
          _this2.desktopImg.classList.remove(FADE_IN);
        }, animationDuration);
      });
    }
  }]);

  return HybridSlider;
}();

var hybridSlider = function hybridSlider() {
  var hybridSliderInit = function hybridSliderInit() {
    var hybridSlidersArr = document.querySelectorAll('.hybrid-slider-container');
    var hybridSliderInstancesArr = [];

    if (hybridSlidersArr.length !== 0) {
      hybridSlidersArr.forEach(function (hybridSliderItem) {
        var hybridSliderInstance = new HybridSlider(hybridSliderItem);
        hybridSliderInstancesArr.push(hybridSliderInstance);
        hybridSliderInstance.hybridSliderActivation();
      });
    }
  };

  var init = function init() {
    hybridSliderInit();
  };

  return {
    init: init
  };
};

var _default = hybridSlider();

exports.default = _default;

},{"./helpers":20}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = _interopRequireDefault(require("./helpers"));

var _getWindowWidth = _interopRequireDefault(require("./getWindowWidth"));

var _viewportBreakpoints = require("./viewport-breakpoints");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
var imageSlider = function imageSlider() {
  var sliders = Array.from(document.querySelectorAll('.about-clinic-block'));

  var imageSliderInit = function imageSliderInit(initBlock) {
    var PAGINATION_ELEMENTS = initBlock.querySelector('.count');
    var ARROW_NEXT = initBlock.querySelector('.the-arrow.right');
    var ARROW_PREV = initBlock.querySelector('.the-arrow.left');
    var sliderContainer = initBlock.querySelector('.about-clinic-slider');
    var mySwiper = new Swiper(sliderContainer, {
      direction: 'horizontal',
      autoHeight: true,
      pagination: {
        el: PAGINATION_ELEMENTS,
        type: 'custom',
        renderCustom: function renderCustom(slider, current, total) {
          return "<span class=\"".concat(current, "\">").concat(current > 9 || current < 1 ? current : "0".concat(current), "</span>") + "<span class=\"".concat(total, "\">").concat(total > 9 || total < 1 ? total : "0".concat(total), "</span>");
        }
      },
      navigation: {
        nextEl: ARROW_NEXT,
        prevEl: ARROW_PREV
      },
      slidesPerView: 1,
      a11y: {
        prevSlideMessage: 'Перейти к предыдущим слайдам',
        nextSlideMessage: 'Перейти к следующим слайдам'
      },
      on: {
        init: function init() {
          var _this = this;

          setTimeout(function () {
            _helpers.default.detectSlidePosition($(_this.$el[0]));
          }, 3000);
        },
        slideChangeTransitionEnd: function slideChangeTransitionEnd() {
          _helpers.default.detectSlidePosition($(this.$el[0]));
        },
        transitionEnd: function transitionEnd() {
          _helpers.default.detectSlidePosition($(this.$el[0]));
        },
        resize: function resize() {
          _helpers.default.detectSlidePosition($(this.$el[0]));
        }
      }
    });
  };

  var movePagination = function movePagination(slider) {
    var paginationBlock = slider.querySelector('.switch-btn');
    var textContent = slider.querySelector('.about-clinic-content');

    if ((0, _getWindowWidth.default)() <= _viewportBreakpoints.desktop) {
      paginationBlock.remove();
      textContent.parentNode.insertBefore(paginationBlock, textContent);
    } else {
      paginationBlock.remove();
      slider.appendChild(paginationBlock);
    }
  };

  var init = function init() {
    if (sliders.length > 0) {
      sliders.forEach(function (slider) {
        imageSliderInit(slider);
        movePagination(slider);
        window.addEventListener('resize', function () {
          movePagination(slider);
        });
      });
    }
  };

  return {
    init: init
  };
};

var _default = imageSlider();

exports.default = _default;

},{"./getWindowWidth":18,"./helpers":20,"./viewport-breakpoints":39}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _viewportBreakpoints = require("./viewport-breakpoints");

var _getWindowWidth = _interopRequireDefault(require("./getWindowWidth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-mixed-operators */

/* eslint-disable default-case */

/* eslint-disable no-use-before-define */

/* eslint-disable no-param-reassign */

/* eslint-disable no-plusplus */
var listPagination = function listPagination() {
  var containersArr = Array.from(document.querySelectorAll('.pagination-container'));
  var PAGINATION_PHONE_ONLY = 'pagination-phone-only';
  var PAGINATION_DESKTOP_ONLY = 'pagination-desktop-only';
  var HIDDEN = 'hidden';
  var windowWidthAtStart = (0, _getWindowWidth.default)();

  var paginationInit = function paginationInit(container, paginationMode) {
    var windowWidth = (0, _getWindowWidth.default)();
    var desktopItemsQuantity = 6;
    var mobileItemsQuantity = 3;
    var ANIMATED = 'animated';
    var FADE_IN = 'fadeIn';
    var paginationBtn = container.querySelector('.pagination-btn');
    var paginationHolder = container.querySelector('.pagination-wrapper');
    var paginationItemsArr = Array.from(paginationHolder.children);
    paginationItemsArr.forEach(function (item) {
      item.classList.add('pagination-item');
    });
    paginationLayout();

    switch (paginationMode) {
      case 'all':
        if (windowWidth <= _viewportBreakpoints.tabletS) {
          startPagination(mobileItemsQuantity);
        } else {
          startPagination(desktopItemsQuantity);
        }

        break;

      case 'phone':
        if (windowWidth <= _viewportBreakpoints.tabletS) {
          startPagination(mobileItemsQuantity);
        }

        break;

      case 'desktop':
        if (windowWidth > _viewportBreakpoints.tabletS) {
          startPagination(desktopItemsQuantity);
        }

        break;
    }

    function paginationLayout() {
      paginationItemsArr.forEach(function (paginationItem) {
        // eslint-disable-next-line no-param-reassign
        paginationItem.classList.remove(ANIMATED);
        paginationItem.classList.remove(FADE_IN);
        paginationItem.classList.remove(HIDDEN);
      });

      if (paginationMode === 'phone' && windowWidth > _viewportBreakpoints.tabletS || paginationMode === 'desktop' && windowWidth <= _viewportBreakpoints.tabletS) {
        paginationBtn.classList.add(HIDDEN);
      } else {
        paginationBtn.classList.remove(HIDDEN);
      }
    }

    function startPagination(itemsQuantity) {
      if (paginationItemsArr.length <= itemsQuantity) {
        paginationBtn.classList.add(HIDDEN);
        return;
      }

      paginationBtn.removeEventListener('click', buttonClick);
      paginationBtn.classList.remove(HIDDEN);

      for (var i = itemsQuantity; i < paginationItemsArr.length; i++) {
        paginationItemsArr[i].classList.add(HIDDEN);
      }

      var buttonClick = function buttonClick(event) {
        event.preventDefault();
        var currentOffset = itemsQuantity * 2;

        for (var _i = itemsQuantity; _i < currentOffset; _i++) {
          paginationItemsArr[_i].classList.add(ANIMATED);

          paginationItemsArr[_i].classList.add(FADE_IN);

          paginationItemsArr[_i].classList.remove(HIDDEN);

          if (_i === paginationItemsArr.length - 1) {
            paginationBtn.classList.add(HIDDEN);
            paginationBtn.removeEventListener('click', buttonClick);
            break;
          }
        }

        itemsQuantity = currentOffset;
      };

      paginationBtn.addEventListener('click', buttonClick);
    }
  };

  window.addEventListener('load', function () {
    containersArr.forEach(function (container) {
      if (container.classList.contains(PAGINATION_PHONE_ONLY)) {
        paginationInit(container, 'phone');
      } else if (container.classList.contains(PAGINATION_DESKTOP_ONLY)) {
        paginationInit(container, 'desktop');
      } else {
        paginationInit(container, 'all');
      }
    });
  });
  window.addEventListener('resize', function () {
    if ((0, _getWindowWidth.default)() !== windowWidthAtStart) {
      containersArr.forEach(function (container) {
        if (container.classList.contains(PAGINATION_PHONE_ONLY)) {
          paginationInit(container, 'phone');
        } else if (container.classList.contains(PAGINATION_DESKTOP_ONLY)) {
          paginationInit(container, 'desktop');
        } else {
          paginationInit(container, 'all');
        }
      });
    }
  });

  var init = function init() {
    listPagination();
  };

  return {
    init: init
  };
};

var _default = listPagination();

exports.default = _default;

},{"./getWindowWidth":18,"./viewport-breakpoints":39}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pageScrollControl = _interopRequireDefault(require("./pageScrollControl"));

var _getWindowWidth = _interopRequireDefault(require("./getWindowWidth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuControll = function menuControll() {
  var menuTrigger = function menuTrigger() {
    var $hum = $('.mobile-menu-btn');
    var $headerMenu = $('.header-menu');
    var $headerMenuItem = $headerMenu.find('.nav-item');
    var $headerMenuLink = $headerMenuItem.find('a');
    var $headerTop = $('.header-top');
    var $langWrapper = $('.lang-wrapper');
    var $controllAcc = $('.controll-acc'); // const secondaryMenusArr = Array.from(document.querySelectorAll('.secondary-menu'));

    var secondaryMenusBtnsArr = Array.from(document.querySelectorAll('.menu-dropdown'));
    var SHOW = 'showHeaderMobileMenu';
    var ACTIVE = 'active';
    var BUTTON_ACTIVE = 'is-active';
    var FADE_IN = 'fadeIn';
    var FADE_OUT = 'fadeOut';
    var menuIsOpen = false;
    var header = document.querySelector('.header');
    var controlPageScroll = new _pageScrollControl.default();
    var WINDOW_DESKTOP = 980;

    if ((0, _getWindowWidth.default)() > WINDOW_DESKTOP) {
      secondaryMenusBtnsArr.forEach(function (menuBtn) {
        menuBtn.addEventListener('mouseover', function () {
          var secondaryMenu = menuBtn.querySelector('.secondary-menu');
          secondaryMenu.classList.remove(FADE_OUT);
          secondaryMenu.classList.add(FADE_IN);
          secondaryMenu.style.display = 'block';
        });
        menuBtn.addEventListener('mouseleave', function () {
          var secondaryMenu = menuBtn.querySelector('.secondary-menu');
          secondaryMenu.classList.remove(FADE_IN);
          secondaryMenu.classList.add(FADE_OUT);
          setTimeout(function () {
            secondaryMenu.style.display = 'none';
          }, 300);
        });
      });
    }

    $hum.on('click', function () {
      menuIsOpen = !menuIsOpen;

      if (menuIsOpen) {
        $hum.attr('aria-expanded', menuIsOpen);
        controlPageScroll.disableScroll();
        $headerMenu.on('touchmove', function (e) {
          e.preventDefault();
        });
        header.style.top = '0px';
        $controllAcc.addClass(FADE_IN);
        $controllAcc.removeClass(FADE_OUT);
        $langWrapper.addClass(FADE_IN);
        $langWrapper.removeClass(FADE_OUT);
        $headerMenu.addClass(SHOW);
        $headerTop.addClass(ACTIVE);
        $hum.addClass(BUTTON_ACTIVE);
        $headerMenuLink.last().on('keydown', function (event) {
          if (event.keyCode === 9) {
            $('.lang-wrapper').find('.lang > .text-node > a').focus();
          }
        });
      } else {
        $hum.attr('aria-expanded', menuIsOpen);
        controlPageScroll.enableScroll();
        header.style.top = '';
        $controllAcc.removeClass(FADE_IN);
        $controllAcc.addClass(FADE_OUT);
        $langWrapper.removeClass(FADE_IN);
        $langWrapper.addClass(FADE_OUT);
        setTimeout(function () {
          $headerMenu.removeClass(SHOW);
          $headerTop.removeClass(ACTIVE);
          $hum.removeClass(BUTTON_ACTIVE);
        }, 300);
      }
    });
    window.addEventListener('orientationchange', function () {
      $hum.attr('aria-expanded', false);
      $headerMenu.removeClass(SHOW);
      $hum.removeClass(BUTTON_ACTIVE);
      $headerTop.removeClass(ACTIVE);
      controlPageScroll.enableScroll();
      header.style.top = '';
      $controllAcc.removeClass(FADE_IN);
      $controllAcc.addClass(FADE_OUT);
      $langWrapper.removeClass(FADE_IN);
      $langWrapper.addClass(FADE_OUT);
    });
    window.addEventListener('resize', function () {
      if ((0, _getWindowWidth.default)() > WINDOW_DESKTOP && menuIsOpen) {
        controlPageScroll.enableScroll();
        header.style.top = '';
        $controllAcc.removeClass(FADE_IN);
        $controllAcc.addClass(FADE_OUT);
        $langWrapper.removeClass(FADE_IN);
        $langWrapper.addClass(FADE_OUT);
      }
    });

    if ($(window).width() <= WINDOW_DESKTOP) {
      $headerMenuItem.on('click', function (event) {
        $hum.attr('aria-expanded', true);
        $headerMenuItem.removeClass(ACTIVE);
        $(event.currentTarget).toggleClass(ACTIVE);
      });
    }
  };

  var init = function init() {
    menuTrigger();
  };

  return {
    init: init
  };
};

var _default = menuControll();

exports.default = _default;

},{"./getWindowWidth":18,"./pageScrollControl":30}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable func-names */
var modal = function modal() {
  var startModal = function startModal() {
    $('.modal-open-btn').each(function () {
      $(this).animatedModal({
        animatedIn: 'zoomIn',
        animatedOut: 'fadeOut',
        overflow: 'hidden'
      });
    });
  };

  var init = function init() {
    return startModal();
  };

  return {
    init: init
  };
};

var _default = modal();

exports.default = _default;

},{}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WARNING_ICON_SVG = exports.SUCCESS_ICON_SVG = exports.INFO_ICON_SVG = exports.ERROR_ICON_SVG = void 0;
var ERROR_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.01 512.01"><path d="M397.793 42.837C343.982 7.07 279.38-6.964 215.673 3.252a21.909 21.909 0 00-3.327.32C144.992 15.259 86.212 52.477 46.819 108.356c-39.35 55.901-54.6 123.766-42.933 191.142a261.92 261.92 0 008.062 33.186c14.098 45.791 10.621 94.867-9.768 138.184-3.562 7.507-2.389 16.423 2.965 22.8 5.353 6.377 13.842 9.022 21.946 6.846l95.613-26.105c40.481 24.783 86.186 37.601 132.852 37.601 16.956 0 34.039-1.685 51.038-5.119 67.034-13.501 124.79-52.275 162.626-109.199 78.125-117.517 46.09-276.688-71.427-354.855zm35.916 331.245c-31.544 47.455-79.681 79.767-135.518 91.007-55.794 11.24-112.697.064-160.173-31.501a21.391 21.391 0 00-11.816-3.562c-1.877 0-3.775.256-5.631.768L55.478 448.56c10.984-41.931 10.173-86.336-2.794-128.544-2.879-9.192-5.161-18.555-6.761-27.812-9.726-56.135 2.986-112.697 35.788-159.278 32.248-45.791 80.129-76.525 135.092-86.784a24.65 24.65 0 003.05-.32c53.939-9.32 108.751 2.261 154.351 32.568 97.938 65.115 124.619 197.754 59.505 295.692z"/><path d="M256.089 125.909c-11.794 0-21.328 9.534-21.328 21.328v127.968c0 11.794 9.534 21.328 21.328 21.328 11.794 0 21.328-9.555 21.328-21.328V147.237c0-11.794-9.533-21.328-21.328-21.328zM275.69 354.524c-1.066-2.773-2.559-5.119-4.479-7.038-1.066-.853-2.133-1.92-3.412-2.559-1.066-.853-2.346-1.472-3.626-1.92-1.28-.661-2.559-1.066-4.052-1.28-6.804-1.493-14.29.874-19.174 5.759-1.92 1.919-3.412 4.266-4.479 7.038-1.066 2.559-1.706 5.332-1.706 8.105 0 2.773.64 5.545 1.706 8.105 1.066 2.559 2.559 4.905 4.479 7.038 2.133 1.919 4.479 3.412 7.038 4.479 2.559 1.066 5.332 1.706 8.105 1.706 2.773 0 5.524-.64 8.083-1.706 2.559-1.066 4.884-2.559 7.038-4.479 1.92-2.133 3.412-4.479 4.479-7.038 1.066-2.559 1.706-5.332 1.706-8.105 0-2.773-.64-5.546-1.706-8.105z"/></svg>';
exports.ERROR_ICON_SVG = ERROR_ICON_SVG;
var WARNING_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505.403 406.394L295.389 58.102c-8.274-13.721-23.367-22.245-39.39-22.245s-31.116 8.524-39.391 22.246L6.595 406.394c-8.551 14.182-8.804 31.95-.661 46.37 8.145 14.42 23.491 23.378 40.051 23.378h420.028c16.56 0 31.907-8.958 40.052-23.379 8.143-14.421 7.89-32.189-.662-46.369zm-28.364 29.978a12.684 12.684 0 01-11.026 6.436H45.985a12.68 12.68 0 01-11.025-6.435 12.683 12.683 0 01.181-12.765L245.156 75.316A12.732 12.732 0 01256 69.192c4.41 0 8.565 2.347 10.843 6.124l210.013 348.292a12.677 12.677 0 01.183 12.764z"/><path d="M256.154 173.005c-12.68 0-22.576 6.804-22.576 18.866 0 36.802 4.329 89.686 4.329 126.489.001 9.587 8.352 13.607 18.248 13.607 7.422 0 17.937-4.02 17.937-13.607 0-36.802 4.329-89.686 4.329-126.489 0-12.061-10.205-18.866-22.267-18.866zM256.465 353.306c-13.607 0-23.814 10.824-23.814 23.814 0 12.68 10.206 23.814 23.814 23.814 12.68 0 23.505-11.134 23.505-23.814 0-12.99-10.826-23.814-23.505-23.814z"/></svg>';
exports.WARNING_ICON_SVG = WARNING_ICON_SVG;
var SUCCESS_ICON_SVG = '<svg viewBox="0 0 384 384"  xmlns="http://www.w3.org/2000/svg"><path d="M192 384c105.863 0 192-86.129 192-192 0-18.273-2.55-36.281-7.602-53.527-2.488-8.48-11.343-13.352-19.847-10.864-8.489 2.48-13.344 11.368-10.864 19.848C349.872 161.785 352 176.777 352 192c0 88.223-71.777 160-160 160S32 280.223 32 192 103.777 32 192 32c32.063 0 62.91 9.375 89.207 27.105 7.32 4.942 17.273 3 22.207-4.32 4.938-7.328 3.012-17.273-4.316-22.21C267.496 11.264 230.465 0 192 0 86.137 0 0 86.129 0 192s86.137 192 192 192zm0 0"/><path d="M356.688 36.688L192 201.368l-52.688-52.68c-6.25-6.247-16.375-6.247-22.625 0-6.246 6.25-6.246 16.375 0 22.625l64 64C183.817 238.44 187.903 240 192 240s8.184-1.559 11.313-4.688l176-176c6.246-6.25 6.246-16.374 0-22.624-6.25-6.247-16.375-6.247-22.625 0zm0 0"/></svg>';
exports.SUCCESS_ICON_SVG = SUCCESS_ICON_SVG;
var INFO_ICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384" ><path d="M199.992 0C89.719 0 0 89.72 0 200s89.719 200 199.992 200C310.273 400 400 310.28 400 200S310.273 0 199.992 0zm0 373.77C104.18 373.77 26.23 295.816 26.23 200c0-95.817 77.949-173.769 173.762-173.769 95.824 0 173.776 77.953 173.776 173.769.001 95.816-77.952 173.77-173.776 173.77z"/><path d="M196.293 125.97c9.656 0 17.488-7.832 17.488-17.489s-7.832-17.489-17.488-17.489c-9.664 0-17.488 7.832-17.488 17.489s7.824 17.489 17.488 17.489zM224.09 279.586h-10.969V154.564c0-7.243-5.871-13.116-13.113-13.116h-24.094c-7.242 0-13.113 5.873-13.113 13.116s5.871 13.115 13.113 13.115h10.977v111.907h-10.977c-7.242 0-13.113 5.872-13.113 13.115 0 7.242 5.871 13.115 13.113 13.115h48.176c7.246 0 13.117-5.873 13.117-13.115 0-7.243-5.871-13.115-13.117-13.115z"/></svg>';
exports.INFO_ICON_SVG = INFO_ICON_SVG;

},{}],27:[function(require,module,exports){
"use strict";

var _noty = _interopRequireDefault(require("noty"));

var _notificationIcons = require("./notification-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.notify = function (type, text, opt) {
  var NOTIFICATION_ICON;
  var NOTIFICATION_LOCATION;
  var NOTIFICATION_ANIMATION_OPEN;
  var NOTIFICATION_ANIMATION_CLOSE;
  var ERROR_NOTY = 'error';
  var INFO_NOTY = 'info';
  var WARNING_NOTY = 'warning';
  var SUCCESS_NOTY = 'success';
  var PHONE_SCREEN_WIDTH = 480;
  var TABLET_SCREEN_WIDTH = 768;
  var screenWidth = document.documentElement.clientWidth;

  switch (type) {
    case ERROR_NOTY:
      NOTIFICATION_ICON = _notificationIcons.ERROR_ICON_SVG;
      break;

    case INFO_NOTY:
      NOTIFICATION_ICON = _notificationIcons.INFO_ICON_SVG;
      break;

    case SUCCESS_NOTY:
      NOTIFICATION_ICON = _notificationIcons.SUCCESS_ICON_SVG;
      break;

    case WARNING_NOTY:
      NOTIFICATION_ICON = _notificationIcons.WARNING_ICON_SVG;
      break;

    default:
      NOTIFICATION_ICON = '';
      break;
  }

  switch (true) {
    case screenWidth <= PHONE_SCREEN_WIDTH:
      NOTIFICATION_LOCATION = 'topCenter';
      NOTIFICATION_ANIMATION_OPEN = 'animated bounceInRight';
      NOTIFICATION_ANIMATION_CLOSE = 'animated bounceOutRight';
      break;

    case screenWidth <= TABLET_SCREEN_WIDTH:
      NOTIFICATION_LOCATION = 'topRight';
      NOTIFICATION_ANIMATION_OPEN = 'animated bounceInDown';
      NOTIFICATION_ANIMATION_CLOSE = 'animated bounceOutUp';
      break;

    default:
      NOTIFICATION_LOCATION = 'bottomRight';
      NOTIFICATION_ANIMATION_OPEN = 'animated bounceInUp';
      NOTIFICATION_ANIMATION_CLOSE = 'animated bounceOutDown';
      break;
  }

  _noty.default.overrideDefaults({
    theme: 'none',
    animation: {
      open: NOTIFICATION_ANIMATION_OPEN,
      close: NOTIFICATION_ANIMATION_CLOSE
    },
    layout: NOTIFICATION_LOCATION
  });

  var defaultConfig = {
    text: text,
    type: type,
    icon: NOTIFICATION_ICON,
    closeWith: ['button'],
    callbacks: {
      onTemplate: function onTemplate() {
        this.barDom.innerHTML = "<div class=\"notification noty_body ".concat(this.options.type, "\"><div class=\"notification-content\"><div class=\"notification-icon\">").concat(this.options.icon, "</div><p class=\"notification-text\">").concat(this.options.text, "</p></div></div>");
      }
    }
  };

  var config = _objectSpread({}, defaultConfig, {}, opt);

  return new _noty.default(config).show();
};

window.dialog = function (text, opt) {
  var defaultConfig = {
    text: text,
    buttons: [_noty.default.button('YES', 'button', function () {
      confirm.close();
    }, {
      id: 'button1',
      'data-status': 'ok'
    }), _noty.default.button('NO', 'button', function () {
      confirm.close();
    })]
  };

  var config = _objectSpread({}, defaultConfig, {}, opt);

  var confirm = new _noty.default(config);
  return confirm.show();
};

},{"./notification-icons":26,"noty":1}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clinicSlider = _interopRequireDefault(require("./clinic-slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ourClinicSlidersInit = function ourClinicSlidersInit() {
  var specialistsSlider = document.querySelector('.specialists');

  if (specialistsSlider !== null) {
    (0, _clinicSlider.default)(specialistsSlider);
  }

  var laboratorySlider = document.querySelector('.laboratory');

  if (specialistsSlider !== null) {
    (0, _clinicSlider.default)(laboratorySlider);
  }

  var qualitySlider = document.querySelector('.quality');

  if (qualitySlider !== null) {
    (0, _clinicSlider.default)(qualitySlider);
  }

  var surveySlider = document.querySelector('.survey');

  if (surveySlider !== null) {
    (0, _clinicSlider.default)(surveySlider);
  }

  var ourCenterSlider = document.querySelector('.our-center');

  if (ourCenterSlider !== null) {
    (0, _clinicSlider.default)(ourCenterSlider);
  }

  var init = function init() {
    ourClinicSlidersInit();
  };

  return {
    init: init
  };
};

var _default = ourClinicSlidersInit();

exports.default = _default;

},{"./clinic-slider":11}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _smoothScrollbar = _interopRequireDefault(require("smooth-scrollbar"));

var _viewportBreakpoints = require("./viewport-breakpoints");

var _getWindowWidth = _interopRequireDefault(require("./getWindowWidth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-use-before-define */

/* eslint-disable max-len */
var uuidv4 = require('uuid/v4');

var pageNav = function pageNav() {
  var header = document.querySelector('.header');
  var headerNavigation = document.querySelector('.navigation');
  var navigation = document.querySelector('.page-nav');
  var navButton = document.querySelector('.page-nav-button');
  var navMenu = document.querySelector('.page-nav-wrapper');
  var desktopCloseButton = document.querySelector('.desktop-close-button');
  var sectionTitlesArr = Array.from(document.querySelectorAll('.section-title'));
  var desktopCloseArrow = document.querySelector('.desktop-close-arrow');
  var mobileCloseButton = document.querySelector('.mobile-close-button');
  var smallHeaderShadow = 21;
  var NO_HEADER_CLASS = 'scroll';
  var THIN_HEADER_CLASS = 'scroll-down';
  var HEADER_TOP = 'header-at-top';
  var NO_HEADER = 'no-header';
  var THIN_HEADER = 'thin-header';
  var NAV_ITEM_CLASS = 'nav-section-item';
  var NAV_SECTION_CLASS = 'js-nav-section';
  var ACTIVE = 'active';
  var ANIMATE_SCROLL = 700;
  var ANIMATE_ADDITION_TIME = 600;
  var ANIMATION_DURATION = 1100;
  var HIDE = 'hide';
  var SHOW = 'show';
  var NAV_MENU_OPENED = 'nav-menu-opened';
  var ANIMATED = 'animated';
  var FADE_IN_DOWN = 'fadeInDown';
  var FADE_OUT_UP = 'fadeOutUp';
  var ZOOM_IN = 'zoomIn';
  var ZOOM_OUT = 'zoomOut';
  var isScrolled = false;

  var buildUI = function buildUI() {
    var navData = sectionTitlesArr.map(function (section) {
      var navSection = section.parentNode.parentNode;

      if (section.closest('section') === navSection) {
        if (navSection.id === '') {
          navSection.id = uuidv4();
        }

        if (!navSection.classList.contains(NAV_SECTION_CLASS)) {
          navSection.classList.add(NAV_SECTION_CLASS);
        }
      }

      return {
        number: section.querySelector('.section-title-number').innerText,
        title: section.querySelector('.section-title-name').innerText,
        anchor: navSection.id
      };
    });
    navData.forEach(function (itemData) {
      var navItem = document.createElement('div');
      navItem.classList.add(NAV_ITEM_CLASS);
      navItem.innerHTML = "<a href=\"#".concat(itemData.anchor, "\"><span class=\"count-item\">").concat(itemData.number, "</span>").concat(itemData.title, "</a>");
      desktopCloseArrow.parentNode.insertBefore(navItem, desktopCloseArrow);
    });
  };

  var pageNavScroll = function pageNavScroll() {
    var $section = $('.js-nav-section');
    var $scrollLink = $('.page-nav').find('.nav-section-item');
    var scrollPos = 0;
    $scrollLink.first().addClass(ACTIVE);
    window.addEventListener('scroll', function (event) {
      var currentScroll = Math.floor($(event.currentTarget).scrollTop());
      $section.each(function detect(i) {
        var currentOffsetItem = Math.floor($(this).offset().top);
        var startOffsetTop = currentOffsetItem;

        if ((0, _getWindowWidth.default)() <= _viewportBreakpoints.desktop) {
          var mobileHeaderHeight = parseInt(getComputedStyle(header).height, 10);
          startOffsetTop -= mobileHeaderHeight;
        } else if (currentScroll < scrollPos) {
          var smallHeaderHeight = parseInt(getComputedStyle(headerNavigation).height, 10) + smallHeaderShadow;
          startOffsetTop -= smallHeaderHeight;
        }

        var endOffsetTop = currentOffsetItem + $(this).outerHeight(true);

        if (currentScroll >= startOffsetTop && currentScroll <= endOffsetTop) {
          $scrollLink.removeClass(ACTIVE);
          $scrollLink.eq(i).addClass(ACTIVE);
        }
      });
      scrollPos = Math.floor($(event.currentTarget).scrollTop());
    });
  };

  var _scrollHelper = function _scrollHelper(event) {
    var $id = $(event.currentTarget).attr('href');
    var $top = Math.floor($($id).offset().top);
    event.preventDefault();

    if ((0, _getWindowWidth.default)() <= _viewportBreakpoints.desktop) {
      var mobileHeaderHeight = parseInt(getComputedStyle(header).height, 10);
      $top -= mobileHeaderHeight;
    } else if ($top < window.pageYOffset) {
      var smallHeaderHeight = parseInt(getComputedStyle(headerNavigation).height, 10) + smallHeaderShadow;
      $top -= smallHeaderHeight;
    }

    $('body,html').animate({
      scrollTop: $top
    }, ANIMATE_SCROLL);
    setTimeout(function () {
      $($id).attr('tabindex', -1).focus();
    }, ANIMATE_ADDITION_TIME);
  };

  var pageNavHandler = function pageNavHandler() {
    var $scrollLink = $('.page-nav').find('.nav-section-item');
    var $scrollLinkItem = $scrollLink.find('a');
    $scrollLinkItem.on('click', function (event) {
      _scrollHelper(event);

      if ((0, _getWindowWidth.default)() <= _viewportBreakpoints.desktop) {
        isScrolled = true;
        pageNavClose();
      }
    });
    $scrollLinkItem.on('keydown', function (event) {
      if (event.keyCode === 13 || event.keyCode === 32) {
        setTimeout(function () {
          pageNavClose();
        }, 0);

        _scrollHelper(event);
      }
    });
    desktopCloseArrow.addEventListener('focusout', function () {
      $scrollLinkItem[0].focus();
    });
  };

  var pageNavPosition = function pageNavPosition() {
    if (!header.classList.contains(NO_HEADER_CLASS) && !header.classList.contains(THIN_HEADER_CLASS)) {
      navigation.classList.remove(NO_HEADER);
      navigation.classList.remove(THIN_HEADER);
      navigation.classList.add(HEADER_TOP);
    } else if (header.classList.contains(NO_HEADER_CLASS)) {
      navigation.classList.add(NO_HEADER);
      navigation.classList.remove(THIN_HEADER);
      navigation.classList.remove(HEADER_TOP);
    } else if (header.classList.contains(THIN_HEADER_CLASS)) {
      navigation.classList.remove(NO_HEADER);
      navigation.classList.add(THIN_HEADER);
      navigation.classList.remove(HEADER_TOP);
    }
  };

  function pageNavOpen() {
    var windowWidth = (0, _getWindowWidth.default)();
    navMenu.classList.add(SHOW);
    navMenu.classList.add(ANIMATED);
    navButton.classList.add(HIDE);
    navMenu.classList.remove(FADE_OUT_UP);
    navigation.classList.add(NAV_MENU_OPENED);
    navigation.setAttribute('aria-expanded', true);
    navMenu.classList.remove(ZOOM_OUT);

    _smoothScrollbar.default.init(navigation, {
      alwaysShowTracks: true
    });

    setTimeout(function () {
      navigation.style.boxShadow = '0 20px 50px rgba(0,0,0, 0.2)';
    }, ANIMATION_DURATION);

    if (windowWidth <= _viewportBreakpoints.desktop) {
      navMenu.classList.add(ZOOM_IN);
      mobileCloseButton.addEventListener('click', pageNavClose);
      document.body.style.overflow = 'hidden';
    } else {
      navMenu.classList.add(FADE_IN_DOWN);
      desktopCloseButton.addEventListener('click', pageNavClose);
      desktopCloseArrow.addEventListener('click', function () {
        pageNavClose();
        navigation.setAttribute('tabindex', 0);
      });
    }
  }

  function pageNavClose() {
    navigation.style.boxShadow = '';
    var windowWidth = (0, _getWindowWidth.default)();
    document.body.style.overflow = 'auto';

    _smoothScrollbar.default.destroy(navigation);

    navButton.setAttribute('aria-expanded', false);

    if (!isScrolled) {
      ANIMATION_DURATION = 0;
    }

    setTimeout(function () {
      navMenu.classList.remove(SHOW);
      navButton.classList.remove(HIDE);
      navigation.classList.remove(NAV_MENU_OPENED);
      ANIMATION_DURATION = 1100;
    }, ANIMATION_DURATION);
    navMenu.classList.remove(FADE_IN_DOWN);
    navMenu.classList.remove(ZOOM_IN);

    if (windowWidth <= _viewportBreakpoints.desktop) {
      navMenu.classList.add(ZOOM_OUT);
    } else {
      navMenu.classList.add(FADE_OUT_UP);
    }
  }

  var init = function init() {
    buildUI();
    pageNavScroll();
    pageNavHandler();
    window.addEventListener('load', pageNavPosition);
    window.addEventListener('resize', pageNavPosition);
    window.addEventListener('scroll', pageNavPosition);
    navButton.addEventListener('click', pageNavOpen);
  };

  return {
    init: init
  };
};

var _default = pageNav();

exports.default = _default;

},{"./getWindowWidth":18,"./viewport-breakpoints":39,"smooth-scrollbar":2,"uuid/v4":5}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */
var ControlPageScroll =
/*#__PURE__*/
function () {
  function ControlPageScroll() {
    _classCallCheck(this, ControlPageScroll);

    this.body = document.body;
    this.disableScrollClass = 'freez';
  }

  _createClass(ControlPageScroll, [{
    key: "getPageScrollHeight",
    value: function getPageScrollHeight() {
      this.scrollHeight = window.pageYOffset;
    }
  }, {
    key: "disableScroll",
    value: function disableScroll() {
      this.getPageScrollHeight();
      this.body.style.top = "".concat(this.scrollHeight, "px");
      this.body.classList.add(this.disableScrollClass);
      this.body.style.position = 'fixed';
    }
  }, {
    key: "enableScroll",
    value: function enableScroll() {
      this.body.classList.remove(this.disableScrollClass);
      this.body.style.top = '';
      this.body.style.position = '';
      window.scrollTo(0, this.scrollHeight);
    }
  }]);

  return ControlPageScroll;
}();

var _default = ControlPageScroll;
exports.default = _default;

},{}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _smoothScrollbar = _interopRequireDefault(require("smooth-scrollbar"));

var _getWindowWidth = _interopRequireDefault(require("./getWindowWidth"));

var _viewportBreakpoints = require("./viewport-breakpoints");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customScrollbar = function customScrollbar() {
  var headerMenu = document.querySelector('.header-menu-wrapper');

  var customScrollbarActivation = function customScrollbarActivation() {
    if (headerMenu && !_smoothScrollbar.default.has(headerMenu)) {
      _smoothScrollbar.default.init(headerMenu, {
        alwaysShowTracks: true
      });
    }
  };

  var customScrollbarDeactivation = function customScrollbarDeactivation() {
    if (_smoothScrollbar.default.has(headerMenu)) {
      _smoothScrollbar.default.destroy(headerMenu);
    }
  };

  var init = function init() {
    window.addEventListener('load', function () {
      if ((0, _getWindowWidth.default)() < _viewportBreakpoints.desktop) {
        customScrollbarActivation();
      }
    });
    window.addEventListener('resize', function () {
      if ((0, _getWindowWidth.default)() >= _viewportBreakpoints.desktop) {
        customScrollbarDeactivation();
      } else {
        customScrollbarActivation();
      }
    });
  };

  return {
    init: init
  };
};

var _default = customScrollbar();

exports.default = _default;

},{"./getWindowWidth":18,"./viewport-breakpoints":39,"smooth-scrollbar":2}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = _interopRequireDefault(require("./helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var staff = function staff() {
  var ARROW_NEXT = '.staff-slider .the-arrow.right';
  var ARROW_PREV = '.staff-slider .the-arrow.left';
  var PAGINATION_ELEMENTS = '.staff-slider .count';
  var SLIDER_CONTAINER = '.swiper-container.staff-slider';
  var staffSlider;

  var staffSliderInit = function staffSliderInit() {
    if (staffSlider === undefined) {
      staffSlider = new Swiper(SLIDER_CONTAINER, {
        direction: 'horizontal',
        pagination: {
          el: PAGINATION_ELEMENTS,
          type: 'custom',
          renderCustom: function renderCustom(slider, current, total) {
            return "<span class=\"".concat(current, "\">").concat(current > 9 || current < 1 ? current : "0".concat(current), "</span>") + "<span class=\"".concat(total, "\">").concat(total > 9 || total < 1 ? total : "0".concat(total), "</span>");
          }
        },
        navigation: {
          nextEl: ARROW_NEXT,
          prevEl: ARROW_PREV
        },
        breakpoints: {
          981: {
            slidesPerView: 3,
            spaceBetween: 60
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 60
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        },
        a11y: {
          prevSlideMessage: 'Перейти к предыдущим слайдам',
          nextSlideMessage: 'Перейти к следующим слайдам'
        },
        on: {
          init: function init() {
            var _this = this;

            setTimeout(function () {
              _helpers.default.detectSlidePosition($(_this.$el[0]));
            }, 3000);
          },
          slideChangeTransitionEnd: function slideChangeTransitionEnd() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          },
          transitionEnd: function transitionEnd() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          },
          resize: function resize() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          }
        }
      });
    }
  };

  var init = function init() {
    staffSliderInit();
  };

  return {
    init: init
  };
};

var _default = staff();

exports.default = _default;

},{"./helpers":20}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var tabsAccardeon = function tabsAccardeon() {
  var $tabWrapper = $('.tab-accardeon');
  var SHOW = 'show';
  var ACTIVE = 'active';
  var TAB_INIT = 'js-tab-init';
  var TAB_DESTROY = 'js-tab-destroy';
  var WINDOW_TABLET = 768;

  var tabsAccardeonSwitcher = function tabsAccardeonSwitcher() {
    $tabWrapper.each(function cycleWrapper() {
      var $id = $(this).attr('id');
      var $createdWrapperTab = $("#".concat($id)).find('.tab-accardeon-button');
      var $tabWrapperContent = $("#".concat($id)).find('.tab-accardeon-wrapper');
      var $tabAccardeonItem = $tabWrapperContent.find('.title-tab');
      var $tabContent = $tabWrapperContent.find('.tab-inner');
      var html = '';
      var $tabButton;

      if ($(window).width() > WINDOW_TABLET && !$(this).hasClass(TAB_INIT)) {
        if ($(this).hasClass(TAB_DESTROY)) {
          $(this).removeClass(TAB_DESTROY);
        }

        $(this).addClass(TAB_INIT);
        $tabContent.first().addClass(SHOW);
        $tabAccardeonItem.each(function cycleInner() {
          html += "<button type=\"button\">".concat($(this).html(), "</button>");
          $createdWrapperTab.html(html);
        });
        $tabButton = $createdWrapperTab.find('button');
        $tabButton.first().addClass(ACTIVE);
        $tabButton.on('click', function (event) {
          var $thisIndex = $(event.currentTarget).index();
          $($tabContent).removeClass(SHOW);
          $($tabContent).eq($thisIndex).addClass(SHOW);
          $(event.currentTarget).siblings().removeClass(ACTIVE);
          $(event.currentTarget).addClass(ACTIVE);
        });
      }
    });
  };

  var resizeWindow = function resizeWindow() {
    $(window).on('resize', function () {
      tabsAccardeonSwitcher();
    });
  };

  var init = function init() {
    resizeWindow();
    tabsAccardeonSwitcher();
  };

  return {
    init: init
  };
};

var _default = tabsAccardeon();

exports.default = _default;

},{}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable func-names */
var tabs = function tabs() {
  var tabsInit = function tabsInit() {
    var $tabsButton = $('.tabs-list .js-tabs-button');
    var ACTIVE = 'active';
    var SHOW = 'show';
    var ANIMATED = 'animated';
    var FADE_IN = 'fadeIn';
    $tabsButton.on('click', function () {
      $(this).toggleClass(ACTIVE);
      $(this).next().toggleClass(SHOW);
      $(this).next().toggleClass(ANIMATED);
      $(this).next().toggleClass(FADE_IN);

      if ($(this).hasClass(ACTIVE)) {
        $(this).attr('aria-expanded', true);
      } else {
        $(this).attr('aria-expanded', false);
      }
    });
  };

  var init = function init() {
    tabsInit();
  };

  return {
    init: init
  };
};

var _default = tabs();

exports.default = _default;

},{}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var tabsDefault = function tabsDefault() {
  var $mainWrapperTabs = $('.default-main-wrapper');
  var SHOW = 'show';
  var ACTIVE = 'active';
  var TAB_INIT = 'js-tab-init';
  var TAB_DESTROY = 'js-tab-destroy';
  var WINDOW_TABLET = 768;

  var tabsDefaultInit = function tabsDefaultInit() {
    $mainWrapperTabs.each(function wrapperCycle() {
      var $id = $(this).attr('id');
      var $defaultInner = $("#".concat($id)).find('.default-inner');
      var $createdDefaultWrapper = $("#".concat($id)).find('.tab-default-wrapper');
      var $emptyWrapperButton = $("#".concat($id)).find('.tab-default-button');
      var $tabItem = $("#".concat($id)).find('.tab-default-item');

      if ($(window).width() > WINDOW_TABLET && !$mainWrapperTabs.hasClass(TAB_INIT)) {
        $tabItem.removeClass(ACTIVE);
        $defaultInner.removeClass(SHOW);
        $tabItem.first().addClass(ACTIVE);
        $defaultInner.first().addClass(SHOW);
        $tabItem.each(function cycleDefaultItem() {
          var $thisItem = $(this);
          $thisItem.appendTo($emptyWrapperButton);
        });
        $tabItem.on('click', function (event) {
          var $thisIndex = $(event.currentTarget).index();
          $defaultInner.removeClass(SHOW);
          $defaultInner.eq($thisIndex).addClass(SHOW);
          $tabItem.removeClass(ACTIVE);
          $(event.currentTarget).addClass(ACTIVE);
        });
      } else if ($(window).width() < WINDOW_TABLET && !$mainWrapperTabs.hasClass(TAB_DESTROY)) {
        $tabItem.removeClass(ACTIVE);
        $defaultInner.removeClass(SHOW);
        $tabItem.first().addClass(ACTIVE);
        $tabItem.first().next().addClass(SHOW);
        $emptyWrapperButton.find('button').each(function cycleItem(i) {
          var $thisItem = $(this);
          $createdDefaultWrapper.each(function cycleContent(j) {
            var $thisWrapper = $(this);

            if (j === i) {
              $thisItem.prependTo($thisWrapper);
            }
          });
        });
        $tabItem.on('click', function (event) {
          $tabItem.removeClass(ACTIVE);
          $(event.currentTarget).addClass(ACTIVE);
          $defaultInner.removeClass(SHOW);
          $(event.currentTarget).next().addClass(SHOW);
        });
      }
    });
  };

  var resizeWindow = function resizeWindow() {
    $(window).on('resize', function () {
      tabsDefaultInit();
    });
  };

  var init = function init() {
    resizeWindow();
    tabsDefaultInit();
  };

  return {
    init: init
  };
};

var _default = tabsDefault();

exports.default = _default;

},{}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = _interopRequireDefault(require("./helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-shadow */
var textMediaSlider = function textMediaSlider() {
  var ARROW_NEXT = '.text-media-slider .the-arrow.right';
  var ARROW_PREV = '.text-media-slider .the-arrow.left';
  var PAGINATION_ELEMENTS = '.text-media-slider .count';
  var SLIDER_CONTAINER = '.swiper-container.text-media-slider';
  var slider;

  var initTextMediaSlider = function initTextMediaSlider() {
    if (slider === undefined) {
      slider = new Swiper(SLIDER_CONTAINER, {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        slidesPerView: 1,
        pagination: {
          el: PAGINATION_ELEMENTS,
          type: 'custom',
          renderCustom: function renderCustom(slider, current, total) {
            return "<span class=\"".concat(current, "\">").concat(current > 9 || current < 1 ? current : "0".concat(current), "</span>") + "<span class=\"".concat(total, "\">").concat(total > 9 || total < 1 ? total : "0".concat(total), "</span>");
          }
        },
        navigation: {
          nextEl: ARROW_NEXT,
          prevEl: ARROW_PREV
        },
        a11y: {
          prevSlideMessage: 'Перейти к предыдущим слайдам',
          nextSlideMessage: 'Перейти к следующим слайдам'
        },
        on: {
          init: function init() {
            var _this = this;

            setTimeout(function () {
              _helpers.default.detectSlidePosition($(_this.$el[0]));
            }, 3000);
          },
          slideChangeTransitionEnd: function slideChangeTransitionEnd() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          },
          transitionEnd: function transitionEnd() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          },
          resize: function resize() {
            _helpers.default.detectSlidePosition($(this.$el[0]));
          }
        }
      });
    }
  };

  var init = function init() {
    initTextMediaSlider();
  };

  return {
    init: init
  };
};

var _default = textMediaSlider();

exports.default = _default;

},{"./helpers":20}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getWindowWidth = _interopRequireDefault(require("./getWindowWidth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */

/* eslint-disable func-names */

/* eslint-disable no-tabs */

/* eslint-disable no-use-before-define */

/* eslint-disable max-len */

/* eslint-disable no-unused-vars */

/* eslint-disable no-shadow */

/* eslint-disable eqeqeq */

/* eslint-disable no-plusplus */

/* eslint-disable no-empty */

/**
 *
 * Hey there! Here is my *really first* plugin, written using Pure JavaScript / ES5
 * Hope you'll enjoy using it!
 *
 * ToDo: Re-write a plugin using ES6
 *
 */

/**
 * Start writing a plugin using Immediately Invoked Function Expression (IIFE).
 * Function is used to create a private scope: variable, created inside a function
 * is not accessible outside the function
 */
function vanillaTabs() {
  // Constructor function
  var VanillaTabs = function VanillaTabs(opts) {
    this.options = Object.assign(VanillaTabs.defaults, opts);
    this.elems = document.querySelectorAll(this.options.selector);

    this.destroy = function () {
      var _this = this;

      this.elems.forEach(function (el, i) {
        var tabsElem = el;
        tabsElem.classList.add('destroyed');
        var tabsButtonsArr = Array.from(tabsElem.querySelectorAll('.tabs__nav_link'));
        tabsButtonsArr.forEach(function (tabBtn) {
          tabBtn.removeEventListener('click', _this.activateTabs);
        });
      });
    };

    this.init = function () {
      var _this2 = this;

      this.elems.forEach(function (el, i) {
        var tabsElem = el;
        tabsElem.classList.remove('destroyed');
        var tabsButtonsArr = Array.from(tabsElem.querySelectorAll('.tabs__nav_link'));
        tabsButtonsArr.forEach(function (tabBtn) {
          tabBtn.addEventListener('click', _this2.activateTabs);
        });
      });
    };

    buildUI(this);
    handleNavigation(this);
    handleResponsive(this);
  }; // skip building tabs if they were already initialized


  function skipIfInitialized(tabsElem) {
    // skip element if already initialized
    if (tabsElem.classList.contains('tabs__initialized')) {}
  } // Private function to initialize the UI Elements


  function buildUI(tabs) {
    // walk on all tabs on the page
    tabs.elems.forEach(function (el, i) {
      var tabsElem = el;
      var childNodes = tabsElem.childNodes;
      var tabsTitles = [];
      var tabsSubtitle = [];
      var iconClasses = [];
      var tabsStyle = tabs.options.type;
      skipIfInitialized(tabsElem);
      tabsElem.classList.add("style__".concat(tabs.options.type));
      tabsElem.classList.add('tabs__initialized');

      for (var _i = 0; _i < childNodes.length; _i++) {
        var tabItem = childNodes[_i];

        if (tabItem.nodeType != Node.TEXT_NODE) {
          // add tab__content CSS class
          tabItem.classList.add('tabs__content'); // grab tab title from data attribute

          var tabTitle = tabItem.dataset.title ? tabItem.dataset.title : '';
          tabsTitles.push(tabTitle); // grab extra text from data attribute

          var tabSubtitle = tabItem.dataset.subtitle ? tabItem.dataset.subtitle : '';
          tabsSubtitle.push(tabSubtitle); // grab icon from data attribute

          var iconClass = tabItem.dataset.icon ? tabItem.dataset.icon : '';
          iconClasses.push(iconClass); // wrap tab content

          var tabContent = tabItem.innerHTML;
          tabItem.innerHTML = "<div class=\"tabs__content_wrapper\" role=\"tabpanel\" tabindex=\"0\">".concat(tabContent, "</div>"); // insert nav link for accordion navigation

          tabItem.insertAdjacentHTML('afterbegin', "<button role=\"tab\" class=\"tabs__nav_link\" >".concat(tabTitle, "<span class=\"tabs__nav_link-text\">").concat(tabSubtitle, "</span></button>"));
        }
      } // create horizontal / vertical tabs navigation elements


      var navElemsHTML = '';
      tabsTitles.forEach(function (title, index) {
        navElemsHTML = "".concat(navElemsHTML, "<button class=\"tabs__nav_link ").concat(iconClasses[index], "\" role=\"tab\">").concat(title, "\n\t\t\t\t<span class=\"tabs__nav_link-text\">").concat(tabsSubtitle[index], "</span>\n\t\t\t\t</button>");
      });
      tabsElem.insertAdjacentHTML('afterbegin', "<li class=\"tabs__nav\" role=\"tablist\">".concat(navElemsHTML, "</li>")); // set initial active tab

      var activeTabIndex = Number(tabs.options.activeIndex); // validate active tab index. but, you can specify -1 for accordion tabs to make all of them closed by defaults

      if (tabsStyle != 'accordion' && activeTabIndex != -1) {
        if (activeTabIndex > tabsTitles.length - 1) {
          console.warn('VANILLA TABS: Active tab number from settings is bigger than tabs count. Please remember, that index starts from Zero! To avoid crashes, activeIndex option was reverted to 0.');
          activeTabIndex = 0;
        }

        tabsElem.querySelectorAll('.tabs__nav > .tabs__nav_link')[activeTabIndex].classList.add('is__active');
        tabsElem.querySelectorAll('.tabs__content')[activeTabIndex].classList.add('is__active');
        tabsElem.querySelectorAll('.tabs__content > .tabs__nav_link')[activeTabIndex].classList.add('is__active');
        tabsElem.querySelectorAll('.tabs__nav > .tabs__nav_link').forEach(function (element) {
          if (element.classList.contains('is__active')) {
            element.setAttribute('aria-selected', true);
          } else {
            element.setAttribute('aria-selected', false);
          }
        });
      }
    });
  } // Navigation: assign click events


  function handleNavigation(tabs) {
    var tabsStyle = tabs.options.type; // walk on all tabs on the page

    tabs.elems.forEach(function (el, i) {
      var tabsElem = el;
      skipIfInitialized(tabsElem);
      var tabsButtonsArr = Array.from(tabsElem.querySelectorAll('.tabs__nav_link')); // eslint-disable-next-line no-param-reassign

      tabs.activateTabs = function activateTabs(e) {
        e.preventDefault();
        var activeTabIndex; // if we click on main navigation link

        if (this.parentElement.classList.contains('tabs__nav')) {
          activeTabIndex = Array.prototype.slice.call(this.closest('.tabs__nav').children).indexOf(this);
        } else {
          activeTabIndex = Array.prototype.slice.call(this.closest('.tabs').children).indexOf(this.closest('.tabs__content')) - 1;
        }

        var tabsContent = tabsElem.getElementsByClassName('tabs__content');
        var mainNavLinks = tabsElem.querySelectorAll('.tabs__nav > .tabs__nav_link');
        var accordionNavLinks = tabsElem.querySelectorAll('.tabs__content > .tabs__nav_link'); // toggle accordion panel

        if ((tabsStyle == 'accordion' || tabsElem.classList.contains('is__responsive')) && this.classList.contains('is__active')) {
          tabsContent[activeTabIndex].classList.remove('is__active');
          mainNavLinks[activeTabIndex].classList.remove('is__active');
          accordionNavLinks[activeTabIndex].classList.remove('is__active');
          return;
        } // remove active class for inactive tabs


        if ((0, _getWindowWidth.default)() >= tabs.options.responsiveBreak) {
          for (var _i2 = 0; _i2 < tabsContent.length; _i2++) {
            tabsContent[_i2].classList.remove('is__active');
          }
        } // add active class for a current (active) tab


        tabsContent[activeTabIndex].classList.add('is__active'); // add active classes and remove inactive for main nav links

        mainNavLinks.forEach(function (el) {
          el.classList.remove('is__active');
          el.setAttribute('aria-selected', false);
        });
        mainNavLinks[activeTabIndex].classList.add('is__active');
        mainNavLinks[activeTabIndex].setAttribute('aria-selected', true);
        accordionNavLinks[activeTabIndex].classList.add('is__active');
      };

      tabsButtonsArr.forEach(function (tabBtn) {
        // eslint-disable-next-line func-names
        tabBtn.addEventListener('click', tabs.activateTabs);
      });
    });
  } // Responsive: tabs to accordion


  function handleResponsive(tabs) {
    var responsiveClassName = 'is__responsive';
    var tabsStyle = tabs.options.type;
    window.addEventListener('resize', function () {
      // walk on all tabs on the page
      tabs.elems.forEach(function (el, i) {
        var tabsElem = el;
        var tabsContent = tabsElem.getElementsByClassName('tabs__content');
        var mainNavLinks = tabsElem.querySelectorAll('.tabs__nav > .tabs__nav_link');
        var accordionNavLinks = tabsElem.querySelectorAll('.tabs__content > .tabs__nav_link');
        skipIfInitialized(tabsElem);

        for (var _i3 = 0; _i3 < tabsContent.length; _i3++) {
          tabsContent[_i3].classList.remove('is__active');
        }

        for (var _i4 = 0; _i4 < accordionNavLinks.length; _i4++) {
          accordionNavLinks[_i4].classList.remove('is__active');
        }

        accordionNavLinks[0].classList.add('is__active');
        tabsContent[0].classList.add('is__active');
        mainNavLinks[0].classList.add('is__active');

        if (window.innerWidth >= Number(tabs.options.responsiveBreak)) {
          tabsElem.classList.remove(responsiveClassName);
          tabs.init();

          if (tabsStyle != 'accordion') {
            // set first active tab if all of tabs were closed in accordion mode
            var openTabs = tabsElem.querySelectorAll('.tabs__nav_link.is__active');

            if (openTabs.length == 0) {
              tabsContent[0].classList.add('is__active');
              mainNavLinks[0].classList.add('is__active');
              accordionNavLinks[0].classList.add('is__active');
            }
          }
        } else {
          tabsElem.classList.add(responsiveClassName);

          if (tabs.options.isDestroyed) {
            tabs.destroy();
          }
        }
      });
    }); // manually fire resize event

    window.dispatchEvent(new Event('resize'));
  } // Attach our defaults for plugin to the plugin itself


  VanillaTabs.defaults = {
    selector: '.tabs',
    type: 'horizontal',
    responsiveBreak: 840,
    activeIndex: 0,
    isDestroyed: false
  }; // make accessible globally

  window.VanillaTabs = VanillaTabs;
}

var _default = vanillaTabs();

exports.default = _default;

},{"./getWindowWidth":18}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _viewportBreakpoints = require("./viewport-breakpoints");

require("./vanilla.tabs");

/* eslint-disable no-undef */

/* eslint-disable no-new */
var vanillaTabsInit = function vanillaTabsInit() {
  var init = function init() {
    if (document.querySelector('.specialist-extra-info')) {
      new VanillaTabs({
        responsiveBreak: _viewportBreakpoints.tablet,
        isDestroyed: true
      });
    } else {
      new VanillaTabs({
        responsiveBreak: _viewportBreakpoints.tablet
      });
    }
  };

  return {
    init: init
  };
};

var _default = vanillaTabsInit();

exports.default = _default;

},{"./vanilla.tabs":37,"./viewport-breakpoints":39}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minPhone = exports.phone = exports.fablet = exports.tabletS = exports.tablet = exports.desktop = void 0;
var desktop = 981;
exports.desktop = desktop;
var tablet = 768;
exports.tablet = tablet;
var tabletS = 725;
exports.tabletS = tabletS;
var fablet = 600;
exports.fablet = fablet;
var phone = 480;
exports.phone = phone;
var minPhone = 320;
exports.minPhone = minPhone;

},{}]},{},[6]);
