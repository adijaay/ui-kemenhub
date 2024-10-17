"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCookies = exports.init = void 0;
exports.init = {
    initCookies(inaConst) {
        checkCookie();
    }
};
function initCookies(inaConst) {
    checkCookie();
}
exports.initCookies = initCookies;
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    if (typeof window !== "undefined") {
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
}
function checkCookie() {
    let user = getCookie("token");
    if (user == "") {
        const url = new URL(window.location.href);
        const token = url.searchParams.get("token");
        setCookie("token", token, 365);
    }
}
function getCookie(cname) {
    let name = cname + "=";
    if (typeof window !== "undefined") {
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}
