function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import { TableRowClasses } from '../../../shared/esm/classes/TableRowClasses.js';
import { TableRowColors } from '../../../shared/esm/colors/TableRowColors.js';
const TableRow = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    className,
    colors: colorsProp,
    header,
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
  const dark = useDarkClasses();
  const colors = TableRowColors(colorsProp, dark);
  const c = themeClasses(TableRowClasses({
    ...props
  }, colors));
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/React.createElement("tr", _extends({
    className: c.base,
    ref: elRef
  }, attrs), children);
});
TableRow.displayName = 'TableRow';
export default TableRow;