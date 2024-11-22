"use strict";

exports.__esModule = true;
exports.MessageClasses = void 0;
var _cls = require("../cls.js");
const MessageClasses = (props, colors) => {
  const {
    type
  } = props;
  return {
    message: {
      common: 'max-w-[70%] box-border flex relative z-1 transform translate-z-0 mb-2 first:mt-2'
    },
    messageSent: {
      common: (0, _cls.cls)('self-end', colors.messageSent)
    },
    messageReceived: {
      common: colors.messageReceived
    },
    messageName: {
      common: 'text-xs',
      ios: (0, _cls.cls)('mb-0.5 ms-4', colors.messageNameIos),
      material: (0, _cls.cls)('ms-4 mb-0.5', colors.messageNameMd)
    },
    messageHeader: {
      common: 'text-xs',
      ios: (0, _cls.cls)('mb-0.5 ms-4', colors.messageNameIos),
      material: (0, _cls.cls)('ms-4 mb-0.5', colors.messageNameMd)
    },
    messageFooter: {
      common: 'text-xs',
      ios: (0, _cls.cls)('mb-0.5 ms-4', colors.messageNameIos),
      material: (0, _cls.cls)('ms-4 mb-0.5', colors.messageNameMd)
    },
    messageAvatar: {
      common: (0, _cls.cls)('rounded-full relative bg-cover self-end shrink-0 me-1.5 w-8 h-8')
    },
    messageContent: {
      common: 'flex flex-col'
    },
    messageBubble: {
      ...(type === 'sent' && {
        ios: (0, _cls.cls)('rounded-3xl box-border break-words flex flex-col relative rounded-2xl py-1.5 px-4', colors.bubbleSentIos),
        material: (0, _cls.cls)('box-border break-words flex flex-col relative rounded-3xl py-2.5 px-4', colors.bubbleSentMd)
      }),
      ...(type === 'received' && {
        ios: (0, _cls.cls)('rounded-2xl box-border break-words flex flex-col relative rounded-2xl py-1.5 px-4', colors.bubbleReceivedIos),
        material: (0, _cls.cls)('box-border break-words flex flex-col relative rounded-3xl py-2.5 px-4 ', colors.bubbleReceivedMd)
      })
    },
    messageTextHeader: {
      common: 'w-full text-left leading-tight text-sm opacity-80'
    },
    messageTextFooter: {
      common: 'w-full text-left leading-tight text-sm opacity-80'
    },
    messageText: {
      common: 'w-full text-left leading-tight'
    }
  };
};
exports.MessageClasses = MessageClasses;