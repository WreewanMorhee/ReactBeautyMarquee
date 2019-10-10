"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowHeightConsumer = exports.WindowHeightProvider = exports.WindowHeightContext = exports.WindowWidthConsumer = exports.WindowWidthProvider = exports.WindowWidthContext = exports.useWindowSize = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useWindowSize = function useWindowSize() {
  var _useState = (0, _react.useState)(getSize()),
      _useState2 = _slicedToArray(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  (0, _react.useEffect)(function () {
    window.addEventListener('resize', handleResize(setWindowSize));
    return function () {
      window.removeEventListener('resize', handleResize(setWindowSize));
    };
  }, []);
  return windowSize;
};

exports.useWindowSize = useWindowSize;

var getSize = function getSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

var handleResize = function handleResize(setWindowSize) {
  return function () {
    setWindowSize(getSize());
  };
};

var WindowWidthContext = _react["default"].createContext(window.innerWidth);

exports.WindowWidthContext = WindowWidthContext;
var WindowWidthProvider = WindowWidthContext.Provider;
exports.WindowWidthProvider = WindowWidthProvider;
var WindowWidthConsumer = WindowWidthContext.Consumer;
exports.WindowWidthConsumer = WindowWidthConsumer;

var WindowHeightContext = _react["default"].createContext(window.innerHeight);

exports.WindowHeightContext = WindowHeightContext;
var WindowHeightProvider = WindowHeightContext.Provider;
exports.WindowHeightProvider = WindowHeightProvider;
var WindowHeightConsumer = WindowHeightContext.Consumer;
exports.WindowHeightConsumer = WindowHeightConsumer;
