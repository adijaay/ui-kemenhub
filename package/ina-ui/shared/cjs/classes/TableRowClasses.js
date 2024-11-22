"use strict";

exports.__esModule = true;
exports.TableRowClasses = void 0;
var _cls = require("../cls.js");
const TableRowClasses = (props, colors) => {
  const {
    header
  } = props;
  return {
    base: {
      common: 'align-middle relative',
      ios: header ? '' : (0, _cls.cls)(colors.bgIos, 'hairline-b last:hairline-transparent'),
      material: header ? '' : (0, _cls.cls)(colors.bgMaterial, `border-t ${colors.dividerMaterial}`)
    }
  };
};
exports.TableRowClasses = TableRowClasses;