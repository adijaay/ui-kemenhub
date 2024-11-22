"use strict";

exports.__esModule = true;
exports.DialogButtonClasses = void 0;
var _cls = require("../cls.js");
const DialogButtonClasses = (props, colors) => {
  const {
    strong,
    disabled
  } = props;
  return {
    base: {
      ios: (0, _cls.cls)('text-center text-[17px] flex items-center justify-center h-11 w-full hairline-r rtl:hairline-l relative first:rounded-bl-xl last:rounded-br-xl rtl:first:rounded-br-xl rtl:first:rounded-bl-none rtl:last:rounded-bl-xl rtl:last:rounded-br-none', disabled ? colors.disabledTextIos : colors.textIos, strong && 'font-semibold', !disabled && colors.activeBgIos)
    }
  };
};
exports.DialogButtonClasses = DialogButtonClasses;