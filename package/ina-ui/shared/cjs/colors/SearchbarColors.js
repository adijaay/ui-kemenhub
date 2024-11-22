"use strict";

exports.__esModule = true;
exports.SearchbarColors = void 0;
var _cls = require("../cls.js");
const SearchbarColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    inputBgIos: '',
    inputBgMaterial: (0, _cls.cls)('bg-md-light-secondary-container', dark('dark:bg-md-dark-secondary-container')),
    placeholderIos: '',
    placeholderMaterial: (0, _cls.cls)('placeholder-md-light-on-surface-variant', dark('dark:placeholder-md-dark-on-surface-variant')),
    ...colorsProp
  };
};
exports.SearchbarColors = SearchbarColors;