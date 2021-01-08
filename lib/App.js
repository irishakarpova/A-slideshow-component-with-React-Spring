'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CssBaseline = require('@material-ui/core/CssBaseline');

var _CssBaseline2 = _interopRequireDefault(_CssBaseline);

var _SlideShow = require('./components/SlideShow');

var _SlideShow2 = _interopRequireDefault(_SlideShow);

var _styles = require('@material-ui/core/styles');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(props) {

  return _react2.default.createElement(
    _styles.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(_CssBaseline2.default, null),
    _react2.default.createElement(_SlideShow2.default, {
      imageRatio: props.containerRatio,
      containerMaxWidth: props.container,
      containerShadow: props.containerShadow,
      imageShadow: props.imageShadow,
      serverData: props.serverData,
      showNextPtev: props.showNextPtev })
  );
}
exports.default = App;