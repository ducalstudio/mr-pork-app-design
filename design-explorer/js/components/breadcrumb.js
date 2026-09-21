import { h, clear } from "../utils/dom.js";

export function createBreadcrumb(el) {
  return {
    render({ path }) {
      clear(el);
      path.forEach((label, i) => {
        if (i) el.appendChild(h("span", { class: "crumb__sep", "aria-hidden": "true", text: ">" }));
        el.appendChild(h("span", { class: "crumb__item" + (i === path.length - 1 ? " is-current" : ""), text: label }));
      });
    }
  };
}
