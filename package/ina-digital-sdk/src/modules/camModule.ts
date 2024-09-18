let file: any = null;

export function getFilesGallery() {
  const el = document.createElement("input");
  el.setAttribute("id", "inpFile");
  el.setAttribute("title", "Input File");
  el.setAttribute("hidden", "");
  el.setAttribute("type", "file");
  el.onchange = onFileChange;
  el.click();
  el.remove();
  return file
}

function onFileChange (event: any) {
  file = event.target.files[0];
  return event.target.files[0];
}