import { h, clear } from "../utils/dom.js";
import { statusBadge } from "./badges.js";

/* Hidden while a screen has a single version. Ready for Reference / Draft / Approved / Master. */
export function createVersionSwitcher(el, { onChange }) {
  return {
    render({ versions, selected }) {
      clear(el);
      el.hidden = versions.length < 2;
      if (el.hidden) return;
      el.appendChild(h("span", { class: "versions__label", text: "Version" }));
      versions.forEach((v) => {
        const on = v.key === selected;
        el.appendChild(
          h("button", { type: "button", class: "chip" + (on ? " is-active" : ""), "aria-pressed": on ? "true" : "false", onclick: () => onChange(v.key) }, [
            v.label + " ",
            statusBadge(v.status)
          ])
        );
      });
    }
  };
}
