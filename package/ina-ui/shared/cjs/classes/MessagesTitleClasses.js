"use strict";

exports.__esModule = true;
exports.MessagesTitleClasses = void 0;
var _cls = require("../cls.js");
const MessagesTitleClasses = (props, colors) => {
  return {
    base: {
      common: (0, _cls.cls)('text-center text-xs leading-none'),
      ios: (0, _cls.cls)('w-full mt-2.5', colors.titleIos),
      material: (0, _cls.cls)('mt-4', colors.titleMd)
    }
  };
};
exports.MessagesTitleClasses = MessagesTitleClasses;