"use strict";

exports.__esModule = true;
exports.NotificationsColors = void 0;
var _cls = require("../cls.js");
const NotificationsColors = (colorsProp, dark) => {
  return {
    bgIos: (0, _cls.cls)('bg-white', dark('dark:bg-[#1e1e1e]')),
    bgMaterial: (0, _cls.cls)('bg-md-light-surface-5', dark('dark:bg-md-dark-surface-5')),
    titleIos: (0, _cls.cls)('text-black', dark('dark:text-white')),
    titleRightIos: (0, _cls.cls)('text-opacity-45 text-black', dark('dark:text-white dark:text-opacity-45')),
    titleRightMd: (0, _cls.cls)('text-md-light-on-surface-variant before:bg-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant before:dark:bg-md-dark-on-surface-variant')),
    subtitleIos: (0, _cls.cls)('text-black ', dark('dark:text-white')),
    textMaterial: (0, _cls.cls)('text-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant ')),
    deleteIconIos: (0, _cls.cls)('fill-stone-400 active:fill-stone-200', dark('dark:fill-stone-500 dark:active:fill-stone-700')),
    deleteIconMd: (0, _cls.cls)('text-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant')),
    ...colorsProp
  };
};
exports.NotificationsColors = NotificationsColors;