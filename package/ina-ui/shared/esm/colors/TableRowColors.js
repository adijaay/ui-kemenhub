import { cls } from '../cls.js';
export const TableRowColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bgIos: cls('hover:bg-black/5', dark('dark:hover:bg-white/10')),
    bgMaterial: cls('hover:bg-md-light-secondary-container', dark('dark:hover:bg-md-dark-secondary-container')),
    dividerMaterial: cls('border-md-light-outline', dark('dark:border-md-dark-outline')),
    ...colorsProp
  };
};