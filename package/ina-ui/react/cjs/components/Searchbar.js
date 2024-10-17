"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SearchbarClasses = require("../../../shared/cjs/classes/SearchbarClasses.js");
var _SearchbarColors = require("../../../shared/cjs/colors/SearchbarColors.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _cls = require("../../../shared/cjs/cls.js");
var _useTheme = require("../shared/use-theme.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _DeleteIcon = _interopRequireDefault(require("./icons/DeleteIcon.js"));
var _SearchIcon = _interopRequireDefault(require("./icons/SearchIcon.js"));
var _BackIcon = _interopRequireDefault(require("./icons/BackIcon.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } /* eslint-disable no-console */
const Searchbar = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    placeholder = 'Search',
    value,
    inputId,
    inputStyle,
    disableButton = false,
    disableButtonText = 'Cancel',
    clearButton = true,
    onInput,
    onChange,
    onFocus,
    onBlur,
    onClear,
    onDisable,
    ios,
    material,
    // children,
    ...rest
  } = props;
  const searchElRef = (0, _react.useRef)(null);
  const elRef = (0, _react.useRef)(null);
  const disableButtonRef = (0, _react.useRef)(null);
  const [disableButtonWidth, setDisableButtonWidth] = (0, _react.useState)(0);
  const disableTimeout = (0, _react.useRef)(null);
  const allowTransition = (0, _react.useRef)(false);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current,
    searchEl: searchElRef.current
  }));
  const [isEnabled, setIsEnabled] = (0, _react.useState)(false);
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _SearchbarColors.SearchbarColors)(colorsProp, dark);
  const handleInput = e => {
    if (onInput) onInput(e);
  };
  const handleChange = e => {
    if (onChange) onChange(e);
  };
  const handleFocus = e => {
    setIsEnabled(true);
    if (onFocus) onFocus(e);
  };
  const handleBlur = e => {
    if (onBlur) onBlur(e);
  };
  const onGlobalBlur = () => {
    if (!value) {
      disableTimeout.current = setTimeout(() => {
        setIsEnabled(false);
      });
    }
  };
  const onGlobalFocus = () => {
    clearTimeout(disableTimeout.current);
  };
  const handleDisableButton = e => {
    e.preventDefault();
    setIsEnabled(false);
    if (searchElRef.current) {
      searchElRef.current.blur();
    }
    if (onDisable) onDisable();
    if (onClear) onClear();
  };
  (0, _react.useEffect)(() => {
    if (disableButtonRef.current) {
      setDisableButtonWidth(disableButtonRef.current.offsetWidth);
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        allowTransition.current = true;
      });
    });
  }, []);
  const c = themeClasses((0, _SearchbarClasses.SearchbarClasses)({
    ...props
  }, colors, {
    isEnabled,
    darkClasses: dark
  }));
  const CancelButton = theme === 'ios' ? /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    ref: disableButtonRef,
    style: {
      marginRight: isEnabled ? 0 : `-${disableButtonWidth}px`,
      transitionDuration: !allowTransition.current ? '0ms' : ''
    },
    className: c.cancelButton,
    onClick: handleDisableButton,
    onPointerDown: e => e.preventDefault()
  }, disableButtonText) : /*#__PURE__*/_react.default.createElement(_BackIcon.default, {
    theme: theme,
    onClick: handleDisableButton,
    className: (0, _cls.cls)(c.cancelButton),
    onPointerDown: e => e.preventDefault()
  });
  const Component = component;
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs, {
    onBlurCapture: onGlobalBlur,
    onFocusCapture: onGlobalFocus
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: c.inner
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: c.searchIconWrap
  }, /*#__PURE__*/_react.default.createElement(_SearchIcon.default, {
    ios: ios,
    material: material,
    className: c.searchIcon
  })), /*#__PURE__*/_react.default.createElement("input", {
    id: inputId,
    ref: searchElRef,
    className: (0, _cls.cls)(c.input),
    style: inputStyle,
    type: "text",
    name: "search",
    placeholder: placeholder,
    value: value,
    onInput: handleInput,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  }), value && clearButton && /*#__PURE__*/_react.default.createElement("button", {
    className: c.clearButton,
    onClick: onClear,
    type: "button"
  }, /*#__PURE__*/_react.default.createElement(_DeleteIcon.default, {
    theme: theme,
    className: c.deleteIcon
  }))), disableButton && CancelButton);
});
Searchbar.displayName = 'Searchbar';
var _default = Searchbar;
exports.default = _default;