import { h, clear } from "../utils/dom.js";
import { previewState } from "../utils/registry.js";
import { createReferenceRenderer } from "./renderers/referenceRenderer.js";
import { createPrototypeRenderer } from "./renderers/prototypeRenderer.js";

/*
 * Preview dispatcher. Picks the Reference Renderer (screenshots) or the Prototype Renderer (live prototypes) and shows
 * a clear "not available" state otherwise. It never shows another preset's Reference as a substitute.
 * The two renderers know nothing about each other.
 */
export function createUiPreview({ banners, preview }, { onSwitchDevice, onScale, onAssetCheck, onRuntimeReport }) {
  const reference = createReferenceRenderer({ pane: preview, onScale, onAssetCheck });
  const prototype = createPrototypeRenderer({ pane: preview, onScale, onReport: onRuntimeReport });
  let active = null;

  function unavailable(state, resolved) {
    const kids = [
      h("p", { class: "placeholder__title", text: state.message }),
      resolved.status === "To Verify" ? h("p", { text: "Status: To Verify" }) : null
    ];
    if (state.alternate) {
      kids.push(h("button", { type: "button", class: "btn", text: "View " + state.alternate.label + " " + resolved.typeLabel, onclick: () => onSwitchDevice(state.alternate.id) }));
    } else if (resolved.type === "reference" || !resolved.hasDesign) {
      kids.push(h("p", { class: "placeholder__hint", text: "No design has been generated. This entry marks a known missing screen." }));
    }
    return h("div", { class: "placeholder", role: "status" }, kids);
  }

  return {
    render({ resolved, device, viewMode }) {
      clear(banners);
      if (resolved.scopeNote && (resolved.scope === "Future Scope" || resolved.scope === "External UI")) {
        const kind = resolved.scope === "Future Scope" ? "future" : "external";
        banners.appendChild(h("div", { class: "banner banner--" + kind, text: resolved.scope + " — " + resolved.scopeNote }));
      }
      if (resolved.banner) banners.appendChild(h("div", { class: "banner banner--info", text: resolved.banner }));

      const state = previewState(resolved, device);
      if (!state.available) {
        if (active) active.destroy();
        active = null;
        clear(preview);
        preview.appendChild(unavailable(state, resolved));
        onScale(null);
        return;
      }
      const next = state.kind === "prototype" ? prototype : reference;
      if (active && active !== next) active.destroy();
      active = next;
      next.render({ state: state, resolved: resolved, viewMode: viewMode });
    }
  };
}
