import { h, clear } from "../../utils/dom.js";
import { createFitHost } from "../../../prototype-runtime/fit.js";
import { assetCheck } from "../../utils/assetCheck.js";

/*
 * Reference Renderer: an unmodified screenshot, shown only under the preset it was captured for (decided by the
 * caller). Reviewer zoom only: Fit scales the picture uniformly; 100% is the LOGICAL capture size (an asset exported
 * at 2x / 3x is not visually enlarged). The source file is never modified or downsampled; sizing is display-time CSS.
 */
export function createReferenceRenderer({ pane, onScale, onAssetCheck }) {
  let current = null; // { image, presetId, host, caption, check }
  let token = 0;

  function captionText(cur, scale, mode) {
    // A Reference whose capture preset is To Verify is never labelled with any device preset.
    const base = cur.unverified ? "Reference — capture preset To Verify — unmodified screenshot" : cur.preset.label + " Reference — unmodified screenshot";
    if (mode === "fit") return base + " · viewing scale " + Math.round(scale * 100) + "% (reviewer zoom)";
    return base + " · 100% = " + (cur.unverified ? "natural size " : "logical ") + cur.check.logical.width + " × " + cur.check.logical.height + " CSS px";
  }

  function failed(image) {
    clear(pane);
    pane.appendChild(h("div", { class: "placeholder" }, [h("p", { class: "placeholder__title", text: "Image failed to load." }), h("p", { class: "placeholder__hint", text: image })]));
  }

  return {
    render({ state, resolved, viewMode }) {
      const memoId = state.unverified ? "to-verify" : state.preset.id;
      if (current && current.image === state.image && current.presetId === memoId && pane.contains(current.frame)) {
        current.host.setMode(viewMode);
        return;
      }
      this.destroy();
      const my = ++token;
      clear(pane);
      pane.appendChild(h("p", { class: "placeholder__hint", text: "Loading Reference…" }));
      const probe = new Image();
      probe.onerror = () => { if (my === token) failed(state.image); };
      probe.onload = () => {
        if (my !== token) return;
        const natural = { width: probe.naturalWidth, height: probe.naturalHeight };
        // Capture preset To Verify: nothing to compare with. Natural size, 1x; no device preset is implied.
        const check = state.unverified
          ? { status: "capture-unverified", matches: false, scale: 1, natural: natural, logical: natural, preset: null }
          : assetCheck(natural, state.preset);
        if (state.unverified) console.warn("[Explorer asset]", state.image, "capture preset is To Verify; shown at natural size", natural);
        else if (!check.matches) console.warn("[Explorer asset]", state.image, "does not match capture preset", state.preset.id, check);
        const img = h("img", {
          class: "frame__img",
          src: state.image,
          alt: resolved.screen.path.join(" > ") + " (" + (state.unverified ? "capture preset To Verify" : state.preset.label) + " " + resolved.typeLabel + " screenshot)"
        });
        img.style.width = check.logical.width + "px";
        img.style.height = check.logical.height + "px";
        const caption = h("div", { class: "frame__caption" });
        const cur = { image: state.image, presetId: memoId, preset: state.preset, unverified: !!state.unverified, check: check, caption: caption, host: null, frame: null };
        cur.host = createFitHost(pane, {
          reserveH: 44,
          onScale: (scale, mode) => {
            caption.textContent = captionText(cur, scale, mode);
            if (onScale) onScale(scale, mode);
          }
        });
        const box = cur.host.build(img, check.logical.width, check.logical.height);
        cur.frame = h("div", { class: "frame" }, [box, caption]);
        clear(pane);
        pane.appendChild(cur.frame);
        pane.scrollTop = 0;
        current = cur;
        cur.host.setMode(viewMode);
        if (onAssetCheck) onAssetCheck(state.image, check);
      };
      probe.src = state.image;
    },
    destroy() {
      token++;
      if (current) current.host.destroy();
      current = null;
    }
  };
}
