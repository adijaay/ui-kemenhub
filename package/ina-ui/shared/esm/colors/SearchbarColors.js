import { cls } from '../cls.js';
export const SearchbarColors = function (colorsProp, dark) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    inputBgIos: '',
    inputBgMaterial: cls('bg-md-light-secondary-container', dark('dark:bg-md-dark-secondary-container')),
    placeholderIos: '',
    placeholderMaterial: cls('placeholder-md-light-on-surface-variant', dark('dark:placeholder-md-dark-on-surface-variant')),
    ...colorsProp
  };
};