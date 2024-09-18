function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { MessagesTitleClasses } from '../../../shared/esm/classes/MessagesTitleClasses.js';
import { MessagesTitleColors } from '../../../shared/esm/colors/MessagesTitleColors.js';
const MessagesTitle = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    ios,
    material,
    id,
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
  const dark = useDarkClasses();
  const colors = MessagesTitleColors(colorsProp, dark);
  const c = themeClasses(MessagesTitleClasses({
    ...props
  }, colors));
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
MessagesTitle.displayName = 'MessagesTitle';
export default MessagesTitle;