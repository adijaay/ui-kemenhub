"use strict";
/**
 * @example
 *  ---- router.query = { status: "ALL", type: "", name: "Karen" }
 * eliminateObjectFalseValue(router.query);
 * => { status: "ALL", name: "Karen" }
 */
Object.defineProperty(exports, "__esModule", { value: true });
function eliminateObjectFalseValue(query) {
    if (!(query instanceof Object)) {
        throw new Error("query must be an object");
    }
    let data = {};
    Object.entries(query !== null && query !== void 0 ? query : {}).forEach(([key, value]) => (value !== "" && value !== null && value !== undefined) && (data = {
        ...data,
        [key]: value,
    }));
    return data;
}
exports.default = eliminateObjectFalseValue;
