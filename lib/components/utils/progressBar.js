'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LinearDeterminate;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LinearProgress = require('@material-ui/core/LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _style = require('../style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinearDeterminate() {
  var classes = (0, _style.useStyles)();

  return _react2.default.createElement(
    'div',
    { className: classes.rootProgress },
    _react2.default.createElement(_LinearProgress2.default, null)
  );
}