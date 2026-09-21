/*
 * Explorer side: creates the sandboxed prototype iframe.
 * sandbox="allow-scripts" WITHOUT allow-same-origin: the prototype gets an opaque origin, so the Explorer can never
 * reach into its DOM and the prototype can never reach the Explorer's. All communication is postMessage.
 */
export function createFrame({ src, width, height, title }) {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("sandbox", "allow-scripts");
  iframe.setAttribute("referrerpolicy", "no-referrer");
  iframe.setAttribute("title", title || "Prototype preview");
  iframe.className = "proto-frame";
  setFrameSize(iframe, width, height);
  iframe.src = src; // set after the bridge is attached by the caller if it needs the first message
  return iframe;
}

export function setFrameSize(iframe, width, height) {
  iframe.style.width = width + "px";
  iframe.style.height = height + "px";
}
