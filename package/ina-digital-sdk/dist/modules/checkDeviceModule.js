"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDevice = void 0;
const Bowser = require("bowser");
function getDevice() {
    const parser = Bowser.getParser(navigator.userAgent);
    return parser;
}
exports.getDevice = getDevice;
