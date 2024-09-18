import * as Bowser from 'bowser';

export function getDevice() {
  const parser = Bowser.getParser(navigator.userAgent);
  return parser;
}