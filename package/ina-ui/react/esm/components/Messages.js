function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { MessagesClasses } from '../../../shared/esm/classes/MessagesClasses.js';
const Messages = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    id,
    ios,
    material,
    children,
    ...rest
  } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current
  }));
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const c = themeClasses(MessagesClasses({
    ...props
  }));
  const Component = component;
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/React.createElement(Component, _extends({
    id: id,
    className: c.base,
    ref: elRef
  }, attrs), children);
});
Messages.displayName = 'Messages';
export default Messages;