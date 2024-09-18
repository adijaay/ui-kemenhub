function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { TableClasses } from '../../../shared/esm/classes/TableClasses.js';
const Table = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    className,
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
  const c = themeClasses(TableClasses({
    ...props
  }));
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/React.createElement("table", _extends({
    className: c.base,
    ref: elRef
  }, attrs), children);
});
Table.displayName = 'Table';
export default Table;