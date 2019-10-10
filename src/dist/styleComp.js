"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetStyle = exports.MarqueeText = exports.MarqueeItem = exports.MarqueeList = exports.MarqueeBox = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: auto;\n  height: auto;\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: ", "\n  width: auto;\n  height: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n  display: flex;\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MarqueeBox = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var vertical = _ref.vertical,
      reverse = _ref.reverse;
  return !vertical && "justify-content: ".concat(reverse ? 'flex-start' : 'flex-end', ";");
}, function (_ref2) {
  var vertical = _ref2.vertical,
      reverse = _ref2.reverse;
  return vertical && "align-items: ".concat(reverse ? 'flex-start' : 'flex-end', ";");
});

exports.MarqueeBox = MarqueeBox;

var MarqueeList = _styledComponents["default"].ul(_templateObject2(), function (_ref3) {
  var vertical = _ref3.vertical;
  return vertical ? 'column' : 'row';
});

exports.MarqueeList = MarqueeList;

var MarqueeItem = _styledComponents["default"].li(_templateObject3(), function (_ref4) {
  var vertical = _ref4.vertical,
      item_size = _ref4.item_size;
  return !vertical && item_size > 0 && "min-width: ".concat(item_size, "px;");
}, function (_ref5) {
  var vertical = _ref5.vertical,
      item_size = _ref5.item_size;
  return vertical && item_size > 0 && "min-height: ".concat(item_size, "px;");
});

exports.MarqueeItem = MarqueeItem;

var MarqueeText = _styledComponents["default"].span(_templateObject4());

exports.MarqueeText = MarqueeText;
var ResetStyle = (0, _styledComponents.createGlobalStyle)(_templateObject5());
exports.ResetStyle = ResetStyle;
