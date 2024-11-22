"use strict";

exports.__esModule = true;
exports.TableCellColors = void 0;
var _cls = require("../cls.js");
const TableCellColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    textHeaderIos: (0, _cls.cls)('text-black/45', dark('dark:text-white/55')),
    textHeaderMaterial: (0, _cls.cls)('text-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant')),
    ...colorsProp
  };
};
exports.TableCellColors = TableCellColors;