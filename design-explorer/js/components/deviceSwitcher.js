import { h, clear } from "../utils/dom.js";
import { DEVICES } from "../config.js";

/* Buttons are generated from config DEVICES. `availability` only dims a button; selection is never blocked. */
export function createDeviceSwitcher(el, { onChange }) {
  return {
    render({ device, availability }) {
      clear(el);
      DEVICES.forEach((d) => {
        const on = d.id === device;
        const avail = availability[d.id];
        el.appendChild(
          h("button", {
            type: "button",
            "data-device": d.id,
            class: (on ? "is-active" : "") + (avail ? "" : " is-unavailable"),
            "aria-pressed": on ? "true" : "false",
            title: d.label + " — " + d.width + " × " + d.height + " CSS viewport profile" + (avail ? "" : " (no design for this preset)"),
            text: d.label,
            onclick: () => onChange(d.id)
          })
        );
      });
    }
  };
}
