'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = useWindowDimensions;

var _react = require('react');

function getWindowDimensions() {
  var _window = window,
      width = _window.innerWidth,
      height = _window.innerHeight;

  return {
    width: width,
    height: height
  };
}

function useWindowDimensions() {
  var _useState = (0, _react.useState)(getWindowDimensions()),
      _useState2 = _slicedToArray(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  (0, _react.useEffect)(function () {
    function handleResize() {
      setWindowSize(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}