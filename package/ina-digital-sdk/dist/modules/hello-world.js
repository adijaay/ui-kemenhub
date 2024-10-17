"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayGoodbyeV2 = exports.sayGoodbye = exports.sayHello = void 0;
function sayHello() {
    console.log('hi');
}
exports.sayHello = sayHello;
function sayGoodbye() {
    console.log('goodbye');
}
exports.sayGoodbye = sayGoodbye;
function sayGoodbyeV2(token) {
    generateName(token);
}
exports.sayGoodbyeV2 = sayGoodbyeV2;
function generateName(token) {
    return 'hi' + token;
}
