"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilesGallery = void 0;
let file = null;
function getFilesGallery() {
    const el = document.createElement("input");
    el.setAttribute("id", "inpFile");
    el.setAttribute("title", "Input File");
    el.setAttribute("hidden", "");
    el.setAttribute("type", "file");
    el.onchange = onFileChange;
    el.click();
    el.remove();
    return file;
}
exports.getFilesGallery = getFilesGallery;
function onFileChange(event) {
    file = event.target.files[0];
    return event.target.files[0];
}
