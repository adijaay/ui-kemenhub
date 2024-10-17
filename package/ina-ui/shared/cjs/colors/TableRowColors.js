"use strict";

exports.__esModule = true;
exports.TableRowColors = void 0;
var _cls = require("../cls.js");
const TableRowColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: (0, _cls.cls)('hover:bg-black/5', dark('dark:hover:bg-white/10')),
    bgMaterial: (0, _cls.cls)('hover:bg-md-light-secondary-container', dark('dark:hover:bg-md-dark-secondary-container')),
    dividerMaterial: (0, _cls.cls)('border-md-light-outline', dark('dark:border-md-dark-outline')),
    ...colorsProp
  };
};
exports.TableRowColors = TableRowColors;