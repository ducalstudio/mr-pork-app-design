/* Tiny DOM builder: h("div", { class: "x", text: "y", onclick: fn }, [children]). */
export function h(tag, attrs, children) {
  const n = document.createElement(tag);
  Object.keys(attrs || {}).forEach((k) => {
    const v = attrs[k];
    if (k === "text") n.textContent = v;
    else if (k === "class") n.className = v;
    else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), v);
    else if (v !== null && v !== undefined) n.setAttribute(k, v);
  });
  (children || []).forEach((c) => {
    if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  });
  return n;
}

export function clear(el) {
  el.innerHTML = "";
  return el;
}
