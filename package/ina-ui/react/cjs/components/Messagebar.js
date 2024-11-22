"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _MessagebarClasses = require("../../../shared/cjs/classes/MessagebarClasses.js");
var _MessagebarColors = require("../../../shared/cjs/colors/MessagebarColors.js");
var _Toolbar = _interopRequireDefault(require("./Toolbar.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // import Link from './Link.js';
const Messagebar = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    id,
    style,
    name,
    placeholder = 'Message',
    value,
    outline = false,
    // eslint-disable-next-line
    leftClassName = '',
    // eslint-disable-next-line
    rightClassName = '',
    textareaId,
    disabled,
    size,
    left,
    right,
    ios,
    material,
    onInput,
    onChange,
    onFocus,
    children,
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  const areaElRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    areaElRef: areaElRef.current
  }));
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _MessagebarColors.MessagebarColors)(colorsProp, dark);
  const onFocusInternal = e => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };
  const c = themeClasses((0, _MessagebarClasses.MessagebarClasses)({
    ...props
  }, colors, {
    isFocused
  }));
  const Component = component;
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    id: id,
    style: style,
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    colors: colors,
    outline: outline
  }, left && /*#__PURE__*/_react.default.createElement("div", {
    className: c.left
  }, left), /*#__PURE__*/_react.default.createElement("div", {
    className: c.messagebarArea
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    id: textareaId,
    ref: areaElRef,
    type: "textarea",
    className: c.messagebarInput,
    placeholder: placeholder,
    name: name,
    size: size,
    disabled: disabled,
    onInput: onInput,
    onChange: onChange,
    onFocus: onFocusInternal,
    value: value
  })), right && /*#__PURE__*/_react.default.createElement("div", {
    className: c.right
  }, right)));
});
Messagebar.displayName = 'Messagebar';
var _default = Messagebar;
exports.default = _default;