"use strict";

exports.__esModule = true;
exports.MessageColors = void 0;
var _cls = require("../cls.js");
const MessageColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    messageSent: 'text-white',
    messageReceived: 'text-inherit',
    messageNameIos: (0, _cls.cls)('text-black text-opacity-45', dark('dark:text-white dark:text-opacity-45')),
    messageNameMd: (0, _cls.cls)('text-md-light-on-surface-variant', dark('dark:text-md-dark-on-surface-variant')),
    bubbleSentIos: (0, _cls.cls)('bg-primary'),
    bubbleSentMd: (0, _cls.cls)('bg-md-light-primary', dark('dark:bg-md-dark-primary dark:text-md-dark-on-primary')),
    bubbleReceivedIos: (0, _cls.cls)('bg-[#e5e5ea]', dark('dark:bg-[#252525]')),
    bubbleReceivedMd: (0, _cls.cls)(dark('dark:bg-md-dark-surface-variant'), 'bg-[#e5e5ea]'),
    ...colorsProp
  };
};
exports.MessageColors = MessageColors;