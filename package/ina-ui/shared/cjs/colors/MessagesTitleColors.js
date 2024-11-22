"use strict";

exports.__esModule = true;
exports.MessagesTitleColors = void 0;
var _cls = require("../cls.js");
const MessagesTitleColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    titleIos: (0, _cls.cls)('text-black text-opacity-45', dark('dark:text-white dark:text-opacity-45')),
    titleMd: (0, _cls.cls)('text-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant')),
    ...colorsProp
  };
};
exports.MessagesTitleColors = MessagesTitleColors;