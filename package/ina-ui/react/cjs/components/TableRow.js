"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _TableRowClasses = require("../../../shared/cjs/classes/TableRowClasses.js");
var _TableRowColors = require("../../../shared/cjs/colors/TableRowColors.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const TableRow = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    className,
    colors: colorsProp,
    header,
    ios,
    material,
    children,
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _TableRowColors.TableRowColors)(colorsProp, dark);
  const c = themeClasses((0, _TableRowClasses.TableRowClasses)({
    ...props
  }, colors));
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/_react.default.createElement("tr", _extends({
    className: c.base,
    ref: elRef
  }, attrs), children);
});
TableRow.displayName = 'TableRow';
var _default = TableRow;
exports.default = _default;