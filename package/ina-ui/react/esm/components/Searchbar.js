function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/* eslint-disable no-console */
import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { SearchbarClasses } from '../../../shared/esm/classes/SearchbarClasses.js';
import { SearchbarColors } from '../../../shared/esm/colors/SearchbarColors.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { cls } from '../../../shared/esm/cls.js';
import { useTheme } from '../shared/use-theme.js';
import { useDarkClasses } from '../shared/use-dark-classes.js';
import DeleteIcon from './icons/DeleteIcon.js';
import SearchIcon from './icons/SearchIcon.js';
import BackIcon from './icons/BackIcon.js';
const Searchbar = /*#__PURE__*/forwardRef((props, ref) => {
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
  const searchElRef = useRef(null);
  const elRef = useRef(null);
  const disableButtonRef = useRef(null);
  const [disableButtonWidth, setDisableButtonWidth] = useState(0);
  const disableTimeout = useRef(null);
  const allowTransition = useRef(false);
  useImperativeHandle(ref, () => ({
    el: elRef.current,
    searchEl: searchElRef.current
  }));
  const [isEnabled, setIsEnabled] = useState(false);
  const theme = useTheme({
    ios,
    material
  });
  const themeClasses = useThemeClasses({
    ios,
    material
  });
  const dark = useDarkClasses();
  const colors = SearchbarColors(colorsProp, dark);
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
  useEffect(() => {
    if (disableButtonRef.current) {
      setDisableButtonWidth(disableButtonRef.current.offsetWidth);
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        allowTransition.current = true;
      });
    });
  }, []);
  const c = themeClasses(SearchbarClasses({
    ...props
  }, colors, {
    isEnabled,
    darkClasses: dark
  }));
  const CancelButton = theme === 'ios' ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    ref: disableButtonRef,
    style: {
      marginRight: isEnabled ? 0 : `-${disableButtonWidth}px`,
      transitionDuration: !allowTransition.current ? '0ms' : ''
    },
    className: c.cancelButton,
    onClick: handleDisableButton,
    onPointerDown: e => e.preventDefault()
  }, disableButtonText) : /*#__PURE__*/React.createElement(BackIcon, {
    theme: theme,
    onClick: handleDisableButton,
    className: cls(c.cancelButton),
    onPointerDown: e => e.preventDefault()
  });
  const Component = component;
  const attrs = {
    ...rest
  };
  return /*#__PURE__*/React.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs, {
    onBlurCapture: onGlobalBlur,
    onFocusCapture: onGlobalFocus
  }), /*#__PURE__*/React.createElement("div", {
    className: c.inner
  }, /*#__PURE__*/React.createElement("span", {
    className: c.searchIconWrap
  }, /*#__PURE__*/React.createElement(SearchIcon, {
    ios: ios,
    material: material,
    className: c.searchIcon
  })), /*#__PURE__*/React.createElement("input", {
    id: inputId,
    ref: searchElRef,
    className: cls(c.input),
    style: inputStyle,
    type: "text",
    name: "search",
    placeholder: placeholder,
    value: value,
    onInput: handleInput,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  }), value && clearButton && /*#__PURE__*/React.createElement("button", {
    className: c.clearButton,
    onClick: onClear,
    type: "button"
  }, /*#__PURE__*/React.createElement(DeleteIcon, {
    theme: theme,
    className: c.deleteIcon
  }))), disableButton && CancelButton);
});
Searchbar.displayName = 'Searchbar';
export default Searchbar;