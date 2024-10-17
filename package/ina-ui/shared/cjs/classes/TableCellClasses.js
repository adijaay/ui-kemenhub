"use strict";

exports.__esModule = true;
exports.TableCellClasses = void 0;
var _cls = require("../cls.js");
const TableCellClasses = (props, colors, classes) => {
  const {
    header
  } = props;
  return {
    base: {
      common: (0, _cls.cls)('align-middle', classes),
      ios: (0, _cls.cls)(header ? `text-xs font-semibold overflow-hidden whitespace-nowrap leading-4 h-11 bg-transparent ${colors.textHeaderIos} py-0 px-4` : `h-11 relative py-0 px-4`),
      material: (0, _cls.cls)(header ? `${colors.textHeaderMaterial} px-6 py-0  text-xs font-medium overflow-hidden text-ellipsis whitespace-nowrap leading-4 h-14 bg-transparent` : `py-0 first:px-6 px-7 h-12`)
    }
  };
};
exports.TableCellClasses = TableCellClasses;