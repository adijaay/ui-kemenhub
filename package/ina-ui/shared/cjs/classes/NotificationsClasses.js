"use strict";

exports.__esModule = true;
exports.NotificationsClasses = void 0;
var _cls = require("../cls.js");
var _positionClass = require("../position-class.js");
const NotificationsClasses = (props, colors, classes) => {
  const {
    opened,
    translucent
  } = props;
  return {
    base: {
      common: (0, _cls.cls)((0, _positionClass.positionClass)('absolute', classes), 'z-50 transform transition-transform-opacity box-border duration-500', !opened && '-translate-y-full opacity-0 pointer-events-none transition duration-500', 'md:w-[568px] md:end-auto md:start-1/2 md:-ms-[256px]'),
      ios: (0, _cls.cls)('rounded-xl px-2.5 py-2.5 start-2 end-2 top-2 shadow-lg', colors.bgIos, translucent && 'translucent'),
      material: (0, _cls.cls)('rounded-2xl py-5 px-4 start-4 end-4 top-4', colors.bgMaterial)
    },
    content: {
      common: '',
      ios: 'mt-2.5 ',
      material: (0, _cls.cls)('mt-2')
    },
    header: {
      common: (0, _cls.cls)('flex justify-start'),
      ios: 'items-center',
      material: 'items-start'
    },
    icon: {
      ios: (0, _cls.cls)('me-2'),
      material: 'me-4'
    },
    contentTitle: {
      material: (0, _cls.cls)('flex flex-row items-center')
    },
    title: {
      ios: (0, _cls.cls)('tracking-wide text-[13px] uppercase', colors.titleIos),
      material: (0, _cls.cls)('font-medium')
    },
    titleRightText: {
      ios: (0, _cls.cls)('me-1 ms-auto text-[13px]', colors.titleRightIos),
      material: (0, _cls.cls)('ms-1 text-xs before:w-0.75 before:h-0.75 before:rounded-full before:inline-block before:align-middle before:me-1', colors.titleRightMd)
    },
    button: {
      ios: (0, _cls.cls)('me-1 ms-auto cursor-pointer'),
      material: (0, _cls.cls)('ms-auto cursor-pointer')
    },
    deleteIcon: {
      ios: (0, _cls.cls)('w-5 h-5', colors.deleteIconIos),
      material: (0, _cls.cls)('w-6 h-6', colors.deleteIconMd)
    },
    subtitle: {
      ios: (0, _cls.cls)('text-[15px] font-semibold', colors.subtitleIos),
      material: (0, _cls.cls)('text-sm')
    },
    text: {
      ios: (0, _cls.cls)('text-[15px]'),
      material: (0, _cls.cls)('text-sm', colors.textMaterial)
    }
  };
};
exports.NotificationsClasses = NotificationsClasses;