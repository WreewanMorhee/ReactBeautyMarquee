"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _gsap = require("gsap");

var _WindowSizeContext = require("./WindowSizeContext");

var _styleComp = require("./styleComp");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BeautyMarquee = function BeautyMarquee(_ref) {
  var _ref$desktop_speed = _ref.desktop_speed,
      desktop_speed = _ref$desktop_speed === void 0 ? 200 : _ref$desktop_speed,
      _ref$mobile_speed = _ref.mobile_speed,
      mobile_speed = _ref$mobile_speed === void 0 ? 100 : _ref$mobile_speed,
      children = _ref.children,
      _ref$vertical = _ref.vertical,
      vertical = _ref$vertical === void 0 ? false : _ref$vertical,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === void 0 ? false : _ref$reverse,
      _ref$stop_on_box_hove = _ref.stop_on_box_hover,
      stop_on_box_hover = _ref$stop_on_box_hove === void 0 ? false : _ref$stop_on_box_hove,
      _ref$stop_on_content_ = _ref.stop_on_content_hover,
      stop_on_content_hover = _ref$stop_on_content_ === void 0 ? false : _ref$stop_on_content_,
      _ref$turn_on = _ref.turn_on,
      turn_on = _ref$turn_on === void 0 ? true : _ref$turn_on;
  if (!turn_on) return _react["default"].createElement(_react["default"].Fragment, null, children);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      box_size = _useState2[0],
      set_box_size = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      item_size = _useState4[0],
      set_item_size = _useState4[1];

  var UlRef = (0, _react.useRef)(null);
  var BoxRef = (0, _react.useRef)(null);
  var LiRef = (0, _react.useRef)(null);
  var MarqueeController = new _gsap.TimelineMax();
  var windowWidth = (0, _WindowSizeContext.useWindowSize)().width;
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      set_ref_size(vertical, BoxRef, LiRef, set_box_size, set_item_size);
    }, 1);

    if (box_size > 0 && item_size > 0) {
      run_marquee(MarqueeController, reverse, UlRef, vertical, item_size, get_duration({
        item_size: item_size,
        windowWidth: windowWidth,
        desktop_speed: desktop_speed,
        mobile_speed: mobile_speed
      }));
    }
  }, [windowWidth, box_size, item_size]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_styleComp.ResetStyle, null), _react["default"].createElement(_styleComp.MarqueeBox, {
    ref: BoxRef,
    vertical: vertical,
    reverse: reverse,
    className: "beauty-marquee-box",
    onMouseOver: hoverToToggle(MarqueeController, true, stop_on_box_hover),
    onMouseLeave: hoverToToggle(MarqueeController, false, stop_on_box_hover)
  }, _react["default"].createElement(_styleComp.MarqueeList, {
    vertical: vertical,
    className: "beauty-marquee-list",
    ref: UlRef
  }, Array(2).fill().map(function (_, index) {
    return _react["default"].createElement(_styleComp.MarqueeItem, {
      vertical: vertical,
      item_size: item_size,
      className: "beauty-marquee-item",
      key: "index-".concat(index + 1),
      ref: LiRef
    }, _react["default"].createElement(_styleComp.MarqueeText, {
      onMouseOver: hoverToToggle(MarqueeController, true, stop_on_content_hover),
      onMouseLeave: hoverToToggle(MarqueeController, false, stop_on_content_hover)
    }, children));
  }))));
};

var get_duration = function get_duration(_ref2) {
  var item_size = _ref2.item_size,
      windowWidth = _ref2.windowWidth,
      desktop_speed = _ref2.desktop_speed,
      mobile_speed = _ref2.mobile_speed;
  var speed = windowWidth > 768 ? desktop_speed : mobile_speed;
  return item_size / speed;
};

var set_ref_size = function set_ref_size(vertical, BoxRef, LiRef, set_box_size, set_item_size) {
  var _box_size = vertical ? BoxRef.current.clientHeight : BoxRef.current.clientWidth;

  var _item_size = vertical ? LiRef.current.clientHeight : LiRef.current.clientWidth;

  set_box_size(_box_size);

  if (_item_size > 0) {
    set_item_size(_item_size > _box_size ? _item_size : _box_size);
  }
};

var run_marquee = function run_marquee(MarqueeController, reverse, UlRef, vertical, item_size, duration) {
  var direction = reverse ? -1 : 1;
  MarqueeController.to(UlRef.current, 0, {
    x: 0,
    y: 0
  });
  MarqueeController.to(UlRef.current, duration, {
    x: vertical ? 0 : item_size * direction,
    y: vertical ? item_size * direction : 0,
    repeat: -1,
    ease: _gsap.Power0.easeNone
  }); // MarqueeController.kill()
};

var get_gap = function get_gap(gap, item_size, box_size, windowWidth) {
  return typeof gap === 'number' ? gap : item_size > box_size ? 50 * windowWidth / 1920 : 0;
};

var hoverToToggle = function hoverToToggle(MarqueeController, hover, stopWhenHover) {
  return function () {
    if (!stopWhenHover) return;

    if (hover) {
      MarqueeController.pause();
    } else {
      MarqueeController.resume();
    }
  };
};

var _default = BeautyMarquee;
exports["default"] = _default;
