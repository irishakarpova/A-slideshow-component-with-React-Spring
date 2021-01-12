'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = BigImage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Fab = require('@material-ui/core/Fab');

var _Fab2 = _interopRequireDefault(_Fab);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _style_ = require('./style_2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BigImage(_ref) {
    var handleClose = _ref.handleClose,
        currentImg = _ref.currentImg;

    var classes = (0, _style_.useStyles)()();
    return _react2.default.createElement(
        _Paper2.default,
        null,
        _react2.default.createElement(
            _Fab2.default,
            {
                onClick: handleClose,
                className: classes.fabClose },
            _react2.default.createElement(_Close2.default, null)
        ),
        _react2.default.createElement(
            'div',
            { className: classes.rootOversize },
            _react2.default.createElement('img', {
                className: classes.oversizeImg,
                src: currentImg.path,
                alt: currentImg.label
            })
        )
    );
}