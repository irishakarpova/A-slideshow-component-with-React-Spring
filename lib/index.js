'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _reportWebVitals = require('./reportWebVitals');

var _reportWebVitals2 = _interopRequireDefault(_reportWebVitals);

var _styles = require('@material-ui/core/styles');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _images = require('./images');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _styles.ThemeProvider,
  { theme: _theme2.default },
  _react2.default.createElement(
    _react2.default.StrictMode,
    null,
    _react2.default.createElement(_App2.default, {
      serverData: _images.images,
      containerMaxWidth: 600,
      containerRatio: 1.4,
      containerShadow: true,
      imageShadow: true,
      showNextPrev: true
    })
  )
), document.getElementById('root'));

(0, _reportWebVitals2.default)();