"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _cls = require("../../../shared/cjs/cls.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _MessageClasses = require("../../../shared/cjs/classes/MessageClasses.js");
var _MessageColors = require("../../../shared/cjs/colors/MessageColors.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable jsx-a11y/alt-text */ // import { useTheme } from '../shared/use-theme.js';
const Message = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    id,
    text,
    name,
    type = 'sent',
    header,
    footer,
    textHeader,
    textFooter,
    avatar,
    ios,
    material,
    children,
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  // const theme = useTheme({ ios, material });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _MessageColors.MessageColors)(colorsProp, dark);
  const c = themeClasses((0, _MessageClasses.MessageClasses)({
    ...props
  }, colors));
  const Component = component;
  const attrs = {
    ...rest
  };
  const classes = (0, _cls.cls)(className, c.message, {
    [c.messageSent]: type === 'sent',
    [c.messageReceived]: type === 'received'
  });
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    id: id,
    ref: elRef,
    className: classes
  }, attrs), avatar && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageAvatar
  }, avatar), /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageContent
  }, name && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageName
  }, name), header && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageHeader
  }, header), /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageBubble
  }, textHeader && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageTextHeader
  }, textHeader), text && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageText
  }, text), textFooter && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageTextFooter
  }, textFooter)), footer && /*#__PURE__*/_react.default.createElement("div", {
    className: c.messageFooter
  }, footer)));
});
Message.displayName = 'Message';
var _default = Message;
exports.default = _default;