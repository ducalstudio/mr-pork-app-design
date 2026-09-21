import { h, clear } from "../utils/dom.js";
import { VIEW_MODES } from "../config.js";

/* Fit-to-pane / 100% toggle plus a live scale label ("Fit 62%" / "100%"). The label is updated by the renderers. */
export function createViewModeToggle({ group, label }, { onChange }) {
  return {
    render({ viewMode }) {
      clear(group);
      VIEW_MODES.forEach((m) => {
        const on = m.id === viewMode;
        group.appendChild(h("button", { type: "button", "data-view": m.id, class: on ? "is-active" : "", "aria-pressed": on ? "true" : "false", text: m.label, onclick: () => onChange(m.id) }));
      });
    },
    setScale(scale, mode) {
      label.textContent = scale === null ? "" : mode === "fit" ? "Fit " + Math.round(scale * 100) + "%" : "100%";
    }
  };
}
