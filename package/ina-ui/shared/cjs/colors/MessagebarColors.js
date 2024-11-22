"use strict";

exports.__esModule = true;
exports.MessagebarColors = void 0;
var _cls = require("../cls.js");
const MessagebarColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    toolbarIconIos: (0, _cls.cls)('fill-primary', dark('dark:fill-md-dark-primary')),
    toolbarIconMd: (0, _cls.cls)('fill-black'),
    inputBgIos: (0, _cls.cls)('bg-transparent'),
    borderIos: (0, _cls.cls)('border-[#c8c8cd]', dark('dark:border-white dark:border-opacity-30')),
    inputBgMd: (0, _cls.cls)('bg-md-light-surface-2', dark('dark:bg-md-dark-surface-variant')),
    placeholderIos: (0, _cls.cls)(dark('dark:placeholder-white dark:placeholder-opacity-40')),
    placeholderMd: (0, _cls.cls)('placeholder-md-light-on-surface-variant', dark('dark:placeholder-md-dark-on-surface-variant')),
    bgIos: (0, _cls.cls)('bg-white', dark('dark:bg-black')),
    bgMaterial: (0, _cls.cls)('bg-md-light-surface', dark('dark:bg-md-dark-surface')),
    ...colorsProp
  };
};
exports.MessagebarColors = MessagebarColors;