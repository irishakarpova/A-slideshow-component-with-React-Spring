'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = BigImage;

var _Fab = require('@material-ui/core/Fab');

var _Fab2 = _interopRequireDefault(_Fab);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BigImage(_ref) {
    var handleClose = _ref.handleClose,
        currentImg = _ref.currentImg;

    var classes = (0, _style.useStyles)();
    return React.createElement(
        _Paper2.default,
        null,
        React.createElement(
            _Fab2.default,
            {
                onClick: handleClose,
                className: classes.fabClose },
            React.createElement(_Close2.default, null)
        ),
        React.createElement(
            'div',
            { className: classes.rootOversize },
            React.createElement('img', {
                className: classes.oversizeImg,
                src: currentImg.path,
                alt: currentImg.label
            })
        )
    );
}