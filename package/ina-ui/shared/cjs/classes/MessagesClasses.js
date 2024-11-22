"use strict";

exports.__esModule = true;
exports.MessagesClasses = void 0;
var _cls = require("../cls.js");
const MessagesClasses = () => {
  return {
    base: {
      common: (0, _cls.cls)('flex flex-col relative z-1 px-2'),
      ios: 'mb-12',
      material: 'mb-16'
    }
  };
};
exports.MessagesClasses = MessagesClasses;