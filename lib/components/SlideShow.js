'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clamp = require('lodash-es/clamp');

var _clamp2 = _interopRequireDefault(_clamp);

var _reactUseGesture = require('react-use-gesture');

var _reactSpring = require('react-spring');

var _Fab = require('@material-ui/core/Fab');

var _Fab2 = _interopRequireDefault(_Fab);

var _AspectRatio = require('@material-ui/icons/AspectRatio');

var _AspectRatio2 = _interopRequireDefault(_AspectRatio);

var _style = require('./style');

var _oversizeImg = require('./oversizeImg');

var _oversizeImg2 = _interopRequireDefault(_oversizeImg);

var _getScreen = require('./utils/getScreen');

var _getScreen2 = _interopRequireDefault(_getScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverData = [{
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

var SlideShow = function SlideShow() {
    var index = (0, _react.useRef)(0);

    var _useWindowDimensions = (0, _getScreen2.default)(),
        width = _useWindowDimensions.width;

    var classes = (0, _style.useStyles)(width)();

    var getImages = function getImages() {
        var data = Object.values(serverData);
        return data;
    };

    var getViewerSize = function getViewerSize() {
        var viewerSize = width > 600 ? 570 : width - 30;
        return viewerSize;
    };

    var _useState = (0, _react.useState)(0),
        _useState2 = _slicedToArray(_useState, 2),
        prevWidth = _useState2[0],
        setPrevWidth = _useState2[1];

    var _useSprings = (0, _reactSpring.useSprings)(getImages().length, function (i) {
        return { x: i * getViewerSize(), sc: 1, display: 'block' };
    }),
        _useSprings2 = _slicedToArray(_useSprings, 2),
        image = _useSprings2[0],
        setImage = _useSprings2[1];

    var _React$useState = _react2.default.useState(0),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        ind = _React$useState2[0],
        setInd = _React$useState2[1];

    var _useState3 = (0, _react.useState)(0),
        _useState4 = _slicedToArray(_useState3, 2),
        scrollFiredOn = _useState4[0],
        setScrollFiredOn = _useState4[1];

    var applyImage = function applyImage(down, distance, xDelta) {
        setImage(function (i) {
            if (i < index.current - 1 || i > index.current + 1) return { display: 'none' };
            var x = (i - index.current) * getViewerSize() + (down ? xDelta : 0);
            var sc = down ? 1 - distance / getViewerSize() / 2 : 1;
            return { x: x, sc: sc, display: 'block' };
        });
    };

    var bind = (0, _reactUseGesture.useGesture)(function (_ref) {
        var down = _ref.down,
            _ref$delta = _slicedToArray(_ref.delta, 1),
            xDelta = _ref$delta[0],
            _ref$direction = _slicedToArray(_ref.direction, 1),
            xDir = _ref$direction[0],
            distance = _ref.distance,
            cancel = _ref.cancel;

        if (down && distance > getViewerSize() / 3 && new Date().getTime() - scrollFiredOn > 500) {
            setScrollFiredOn(new Date().getTime());
            var ii = (0, _clamp2.default)(index.current + (xDir > 0 ? -1 : 1), 0, getImages().length - 1);
            down = false;
            cancel(index.current = ii);
        }
        applyImage(down, distance, xDelta);
        setInd(index.current);
    });

    var _useState5 = (0, _react.useState)(null),
        _useState6 = _slicedToArray(_useState5, 2),
        currentImg = _useState6[0],
        setCurrentImg = _useState6[1];

    var _useState7 = (0, _react.useState)(false),
        _useState8 = _slicedToArray(_useState7, 2),
        isOpenCurrentImg = _useState8[0],
        setIsOpenCurrentImg = _useState8[1];

    var handleClick = function handleClick(currentI) {
        setCurrentImg(currentI);
        setIsOpenCurrentImg(true);
    };
    var handleClose = function handleClose() {
        setIsOpenCurrentImg();
    };

    var data = getImages();

    if (prevWidth !== width) {
        applyImage(true, 1, 1);
        setPrevWidth(width);
    }

    return _react2.default.createElement(
        'div',
        null,
        isOpenCurrentImg ? _react2.default.createElement(_oversizeImg2.default, {
            currentImg: currentImg,
            handleClose: handleClose }) : null,
        _react2.default.createElement(
            'div',
            { className: classes.app },
            _react2.default.createElement(
                _Fab2.default,
                {
                    className: classes.extendedFab,
                    'aria-label': 'info',
                    variant: 'extended',
                    size: width > 600 ? 'large' : 'small',
                    onClick: function onClick() {
                        handleClick(data[ind]);
                    } },
                ind + 1 + '  / ' + data.length,
                _react2.default.createElement(_AspectRatio2.default, { className: classes.extendedIcon })
            ),
            image.map(function (_ref2, i) {
                var x = _ref2.x,
                    display = _ref2.display,
                    sc = _ref2.sc;
                return i < ind + 2 ? _react2.default.createElement(
                    _reactSpring.animated.picture,
                    _extends({ key: i }, bind(), {
                        className: classes.appExt,
                        style: { display: display, transform: x !== undefined && x.interpolate(function (x) {
                                return 'translate3d(' + x + 'px,0,0)';
                            }) } }),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_reactSpring.animated.source, {
                            className: classes.appInt,
                            srcSet: data[i].path,
                            alt: data[i].label }),
                        _react2.default.createElement(
                            _reactSpring.animated.div,
                            { className: classes.imgContainer },
                            _react2.default.createElement(_reactSpring.animated.img, {
                                className: classes.appIntImg,
                                src: data[i].path,
                                alt: data[i].label,
                                style: { display: display, transform: sc !== undefined && sc.interpolate(function (s) {
                                        return 'scale(' + s + ')';
                                    }) } })
                        )
                    )
                ) : null;
            })
        )
    );
};
exports.default = SlideShow;