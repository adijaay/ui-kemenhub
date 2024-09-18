"use strict";

exports.__esModule = true;
exports.MessagebarClasses = void 0;
var _cls = require("../cls.js");
const MessagebarClasses = (props, colors, _ref) => {
  let {
    isFocused
  } = _ref;
  const {
    rightClassName = '',
    rightClass = '',
    leftClassName = '',
    leftClass = ''
  } = props;
  return {
    base: {
      common: 'fixed bottom-0 start-0 w-full'
    },
    toolbar: {
      material: colors.bgMessage
    },
    left: {
      common: (0, _cls.cls)('mt-1 -ms-2', leftClassName || leftClass),
      ios: (0, _cls.cls)('px-2', colors.toolbarIconIos),
      material: (0, _cls.cls)('', colors.toolbarIconMd)
    },
    right: {
      common: (0, _cls.cls)('mt-1 -me-2', rightClassName || rightClass),
      ios: (0, _cls.cls)('px-2', colors.toolbarIconIos)
    },
    messagebarArea: {
      common: 'w-full'
    },
    messagebarInput: {
      common: (0, _cls.cls)('block w-full focus:outline-none resize-none', isFocused && 'outline-offset-0'),
      ios: (0, _cls.cls)('border h-8 rounded-3xl px-4 leading-4 py-1.5', colors.inputBgIos, colors.borderIos, colors.placeholderIos),
      material: (0, _cls.cls)('rounded-3xl h-12 px-4 py-4 leading-4 ', colors.inputBgMd, colors.placeholderMd)
    }
  };
};
exports.MessagebarClasses = MessagebarClasses;