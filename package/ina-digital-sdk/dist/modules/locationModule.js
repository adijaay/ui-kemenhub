"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocation = void 0;
let positions = null;
function getLocation() {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });
}
exports.getLocation = getLocation;
