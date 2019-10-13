"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recompose = require("recompose");

var _gsap = require("gsap");

var _WindowSizeContext = require("./WindowSizeContext");

var _styleComp = require("./styleComp");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BeautyMarquee = function BeautyMarquee(_ref) {
  var desktop_speed = _ref.desktop_speed,
      mobile_speed = _ref.mobile_speed,
      children = _ref.children,
      vertical = _ref.vertical,
      reverse = _ref.reverse,
      stop_on_box_hover = _ref.stop_on_box_hover,
      stop_on_content_hover = _ref.stop_on_content_hover,
      turn_on = _ref.turn_on,
      windowWidth = _ref.windowWidth,
      set_ref_size = _ref.set_ref_size,
      run_marquee = _ref.run_marquee,
      item_size = _ref.item_size,
      box_size = _ref.box_size,
      setBoxRef = _ref.setBoxRef,
      setUlRef = _ref.setUlRef,
      setLiRef = _ref.setLiRef,
      hoverToToggle = _ref.hoverToToggle;
  if (!turn_on) return _react["default"].createElement(_react["default"].Fragment, null, children);
  var MarqueeController = new _gsap.TimelineMax();
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      set_ref_size();
    }, 3);

    if (box_size > 0 && item_size > 0) {
      run_marquee(MarqueeController);
    }
  }, [windowWidth, box_size, item_size]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_styleComp.ResetStyle, null), _react["default"].createElement(_styleComp.MarqueeBox, {
    ref: setBoxRef,
    vertical: vertical,
    reverse: reverse,
    className: "beauty-marquee-box",
    onMouseOver: hoverToToggle(true, stop_on_box_hover, MarqueeController),
    onMouseLeave: hoverToToggle(false, stop_on_box_hover, MarqueeController)
  }, _react["default"].createElement(_styleComp.MarqueeList, {
    vertical: vertical,
    className: "beauty-marquee-list",
    ref: setUlRef
  }, Array(2).fill().map(function (_, index) {
    return _react["default"].createElement(_styleComp.MarqueeItem, {
      vertical: vertical,
      item_size: item_size,
      className: "beauty-marquee-item",
      key: "index-".concat(index + 1)
    }, _react["default"].createElement(_styleComp.MarqueeText, {
      ref: setLiRef,
      onMouseOver: hoverToToggle(true, stop_on_content_hover, MarqueeController),
      onMouseLeave: hoverToToggle(false, stop_on_content_hover, MarqueeController)
    }, children));
  }))));
};

var stateBox1 = (0, _recompose.withState)('box_size', 'set_box_size', 0);
var stateBox2 = (0, _recompose.withState)('item_size', 'set_item_size', 0);
var logicBox = (0, _recompose.withHandlers)(function () {
  var BoxRef;
  var UlRef;
  var LiRef;
  return {
    set_ref_size: function set_ref_size(_ref2) {
      var vertical = _ref2.vertical,
          set_box_size = _ref2.set_box_size,
          set_item_size = _ref2.set_item_size;
      return function () {
        var _box_size = vertical ? BoxRef.clientHeight : BoxRef.clientWidth;

        var _item_size = vertical ? LiRef.clientHeight : LiRef.clientWidth;

        set_box_size(_box_size);

        if (_item_size > 0) {
          set_item_size(_item_size > _box_size ? _item_size : _box_size);
        }
      };
    },
    run_marquee: function run_marquee(_ref3) {
      var reverse = _ref3.reverse,
          vertical = _ref3.vertical,
          item_size = _ref3.item_size,
          mobile_speed = _ref3.mobile_speed,
          desktop_speed = _ref3.desktop_speed,
          windowWidth = _ref3.windowWidth;
      return function (MarqueeController) {
        var duration = get_duration({
          item_size: item_size,
          windowWidth: windowWidth,
          desktop_speed: desktop_speed,
          mobile_speed: mobile_speed
        });
        var direction = reverse ? -1 : 1;
        MarqueeController.to(UlRef, 0, {
          x: 0,
          y: 0
        });
        MarqueeController.to(UlRef, duration, {
          x: vertical ? 0 : item_size * direction,
          y: vertical ? item_size * direction : 0,
          repeat: -1,
          ease: _gsap.Power0.easeNone
        });
      };
    },
    hoverToToggle: function hoverToToggle(_ref4) {
      var stop_on_box_hover = _ref4.stop_on_box_hover;
      return function (hover, stopWhenHover, MarqueeController) {
        return function () {
          if (!stopWhenHover) return;

          if (hover) {
            MarqueeController.pause();
          } else {
            MarqueeController.resume();
          }
        };
      };
    },
    setBoxRef: function setBoxRef() {
      return function (ref) {
        return BoxRef = ref;
      };
    },
    setUlRef: function setUlRef() {
      return function (ref) {
        return UlRef = ref;
      };
    },
    setLiRef: function setLiRef() {
      return function (ref) {
        return LiRef = ref;
      };
    }
  };
});

var get_duration = function get_duration(_ref5) {
  var item_size = _ref5.item_size,
      windowWidth = _ref5.windowWidth,
      desktop_speed = _ref5.desktop_speed,
      mobile_speed = _ref5.mobile_speed;
  var speed = windowWidth > 768 ? desktop_speed : mobile_speed;
  return item_size / speed;
};

var _default = (0, _recompose.compose)((0, _recompose.mapProps)(function (_ref6) {
  var _ref6$desktop_speed = _ref6.desktop_speed,
      desktop_speed = _ref6$desktop_speed === void 0 ? 200 : _ref6$desktop_speed,
      _ref6$mobile_speed = _ref6.mobile_speed,
      mobile_speed = _ref6$mobile_speed === void 0 ? 100 : _ref6$mobile_speed,
      _ref6$vertical = _ref6.vertical,
      vertical = _ref6$vertical === void 0 ? false : _ref6$vertical,
      _ref6$reverse = _ref6.reverse,
      reverse = _ref6$reverse === void 0 ? false : _ref6$reverse,
      _ref6$stop_on_box_hov = _ref6.stop_on_box_hover,
      stop_on_box_hover = _ref6$stop_on_box_hov === void 0 ? false : _ref6$stop_on_box_hov,
      _ref6$stop_on_content = _ref6.stop_on_content_hover,
      stop_on_content_hover = _ref6$stop_on_content === void 0 ? false : _ref6$stop_on_content,
      _ref6$turn_on = _ref6.turn_on,
      turn_on = _ref6$turn_on === void 0 ? true : _ref6$turn_on,
      children = _ref6.children;
  return {
    desktop_speed: desktop_speed,
    mobile_speed: mobile_speed,
    vertical: vertical,
    reverse: reverse,
    stop_on_box_hover: stop_on_box_hover,
    stop_on_content_hover: stop_on_content_hover,
    turn_on: turn_on,
    children: children,
    windowWidth: (0, _WindowSizeContext.useWindowSize)().width
  };
}), stateBox1, stateBox2, logicBox)(BeautyMarquee);

exports["default"] = _default;
