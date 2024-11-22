"use strict";
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
function debugLog(...optionalParams) {
    if (process.env.NODE_ENV === "development") {
        console.log("DEBUG_APP_LOG 👀", ...optionalParams);
    }
}
function debugError(...optionalParams) {
    if (process.env.NODE_ENV === "development") {
        console.error("DEBUG_APP_ERROR ❌", ...optionalParams);
    }
}
function debugSocket(...optionalParams) {
    if (process.env.NODE_ENV === "development") {
        console.log("DEBUG_APP_SOCKET 🔂", ...optionalParams);
    }
}
const debug = {
    log: debugLog,
    error: debugError,
    socket: debugSocket,
};
exports.default = debug;
