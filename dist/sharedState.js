'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// ES6 React utility function written by Collin Schneider
var sharedStateObject = {};

function sharedState(newStateObject) {
  if ((typeof newStateObject === 'undefined' ? 'undefined' : _typeof(newStateObject)) === 'object') {
    sharedStateObject = Object.assign({}, sharedStateObject, newStateObject);

    var event = new CustomEvent('sharedState', {
      detail: sharedStateObject
    });

    window.dispatchEvent(event);
  }

  return sharedStateObject;
}

function attachSharedState(context, callback) {
  context.sharedStateEventHandler = function (_ref) {
    var detail = _ref.detail;

    if (typeof callback === 'function') {
      callback(detail);
    } else {
      context.setState(detail);
    }
  };

  window.addEventListener('sharedState', context.sharedStateEventHandler);
}

function detachSharedState(context) {
  window.removeEventListener('sharedState', context.sharedStateEventHandler);
}

exports.sharedState = sharedState;
exports.attachSharedState = attachSharedState;
exports.detachSharedState = detachSharedState;