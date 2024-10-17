function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { MessagebarClasses } from '../../../shared/esm/classes/MessagebarClasses.js';
import { MessagebarColors } from '../../../shared/esm/colors/MessagebarColors.js';

// import Link from './Link.js';
import Toolbar from './Toolbar.js';
const Messagebar = /*#__PURE__*/forwardRef((props, ref) => {
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
  const elRef = useRef(null);
  const areaElRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current,
    areaElRef: areaElRef.current
  }));
  const [isFocused, setIsFocused] = useState(false);
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = MessagebarColors(colorsProp, dark);
  const onFocusInternal = e => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };
  const c = themeClasses(MessagebarClasses({
    ...props
  }, colors, {
    isFocused
  }));
  const Component = component;
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    id: id,
    style: style,
    className: c.base
  }, attrs), /*#__PURE__*/React.createElement(Toolbar, {
    colors: colors,
    outline: outline
  }, left && /*#__PURE__*/React.createElement("div", {
    className: c.left
  }, left), /*#__PURE__*/React.createElement("div", {
    className: c.messagebarArea
  }, /*#__PURE__*/React.createElement("textarea", {
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
  })), right && /*#__PURE__*/React.createElement("div", {
    className: c.right
  }, right)));
});
Messagebar.displayName = 'Messagebar';
export default Messagebar;