function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef,
// useState,
forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { cls } from '../../../shared/esm/cls.js';
// import { useTheme } from '../shared/use-theme.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { MessageClasses } from '../../../shared/esm/classes/MessageClasses.js';
import { MessageColors } from '../../../shared/esm/colors/MessageColors.js';
const Message = /*#__PURE__*/forwardRef((props, ref) => {
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
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  // const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = MessageColors(colorsProp, dark);
  const c = themeClasses(MessageClasses({
    ...props
  }, colors));
  const Component = component;
  const attrs = {
    ...rest
  };
  const classes = cls(className, c.message, {
    [c.messageSent]: type === 'sent',
    [c.messageReceived]: type === 'received'
  });
  return /*#__PURE__*/React.createElement(Component, _extends({
    id: id,
    ref: elRef,
    className: classes
  }, attrs), avatar && /*#__PURE__*/React.createElement("div", {
    className: c.messageAvatar
  }, avatar), /*#__PURE__*/React.createElement("div", {
    className: c.messageContent
  }, name && /*#__PURE__*/React.createElement("div", {
    className: c.messageName
  }, name), header && /*#__PURE__*/React.createElement("div", {
    className: c.messageHeader
  }, header), /*#__PURE__*/React.createElement("div", {
    className: c.messageBubble
  }, textHeader && /*#__PURE__*/React.createElement("div", {
    className: c.messageTextHeader
  }, textHeader), text && /*#__PURE__*/React.createElement("div", {
    className: c.messageText
  }, text), textFooter && /*#__PURE__*/React.createElement("div", {
    className: c.messageTextFooter
  }, textFooter)), footer && /*#__PURE__*/React.createElement("div", {
    className: c.messageFooter
  }, footer)));
});
Message.displayName = 'Message';
export default Message;