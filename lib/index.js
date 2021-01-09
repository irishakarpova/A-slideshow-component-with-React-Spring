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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var images = [{
    id: "10",
    label: 'Keel-billed toucan',
    path: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Keel-billed_Toucan_%2816201157519%29.jpg'
}, {
    id: "20",
    label: 'Rainbow_Lorikeet.',
    path: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Rainbow_Lorikeet_%28Trichoglossus_moluccanus%29_at_Adelaide_Airport_1.jpg'
}, {
    id: "30",
    label: 'Australian ringneck',
    path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mallee_ringneck_42_-_Patchewollock.jpg/1920px-Mallee_ringneck_42_-_Patchewollock.jpg'
}, {
    id: "40",
    label: 'Rainbow Lorikeet',
    path: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Atlantic_Puffin_Fratercula_arctica.jpg'
}, {
    id: "50",
    label: 'Rainbow_Lorikeet.',
    path: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/BlueAndYellowMacaw_AraArarauna.jpg'
}, {
    id: "60",
    label: 'Rainbow_Lorikeet.',
    path: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Trichoglossus_moluccanus_with_open_wings%2C_Brisbane.jpg'
}];

_reactDom2.default.render(_react2.default.createElement(
    _styles.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(
        _react2.default.StrictMode,
        null,
        _react2.default.createElement(_App2.default, {
            serverData: images,
            container: 600,
            containerRatio: 1.4,
            containerShadow: true,
            imageShadow: true,
            showNextPtev: false
        })
    )
), document.getElementById('root'));

(0, _reportWebVitals2.default)();