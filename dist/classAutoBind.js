'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// ES6 utility function written by Collin Schneider
function classAutoBind(context) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.getOwnPropertyNames(Object.getPrototypeOf(context))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var method = _step.value;

      if (method !== 'constructor') {
        context[method] = context[method].bind(context);
      }
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
}

exports.default = classAutoBind;