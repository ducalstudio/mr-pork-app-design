import { h, clear } from "../../utils/dom.js";
import { createFitHost } from "../../../prototype-runtime/fit.js";
import { createFrame, setFrameSize } from "../../../prototype-runtime/frame.js";
import { createParentBridge } from "../../../prototype-runtime/parent-bridge.js";

/*
 * Prototype Renderer: a live responsive prototype in a sandboxed iframe at the exact preset viewport.
 * The same prototype renders at every preset. The Explorer never touches the iframe DOM: everything it knows about
 * the prototype (ready / viewport / tier) arrives through the validated postMessage bridge.
 */
export function createPrototypeRenderer({ pane, onScale, onReport }) {
  let current = null; // { src, iframe, host, caption, frame, preset, report }

  const bridge = createParentBridge({
    onReport(report) {
      if (!current) return;
      current.report = report;
      paintCaption(current);
      if (onReport) onReport(report, current.preset);
    }
  });

  function paintCaption(cur) {
    const p = cur.preset;
    const r = cur.report || {};
    const runtime = r.timedOut ? "prototype did not report" : r.tier ? "tier " + r.tier : "waiting for prototype";
    cur.caption.textContent = p.label + " · " + p.width + " × " + p.height + " CSS viewport profile · " + runtime + (cur.scaleText ? " · " + cur.scaleText : "");
  }

  return {
    render({ state, resolved, viewMode }) {
      const p = state.preset;
      if (current && current.src === state.src && pane.contains(current.frame)) {
        // Same prototype: resize in place (no reload); the iframe reports its new viewport / tier itself.
        current.preset = p;
        setFrameSize(current.iframe, p.width, p.height);
        current.host.setSize(p.width, p.height);
        current.host.setMode(viewMode);
        paintCaption(current);
        return;
      }
      this.destroy();
      const iframe = createFrame({ src: state.src, width: p.width, height: p.height, title: resolved.screen.path.join(" > ") + " prototype" });
      const caption = h("div", { class: "frame__caption" });
      const cur = { src: state.src, iframe: iframe, caption: caption, preset: p, report: null, scaleText: "", host: null, frame: null };
      cur.host = createFitHost(pane, {
        reserveH: 44,
        onScale: (scale, mode) => {
          cur.scaleText = mode === "fit" ? "Fit " + Math.round(scale * 100) + "%" : "100%";
          paintCaption(cur);
          if (onScale) onScale(scale, mode);
        }
      });
      current = cur;
      bridge.attach(iframe); // before the iframe is inserted, so the first message is never missed
      const box = cur.host.build(iframe, p.width, p.height);
      cur.frame = h("div", { class: "frame" }, [box, caption]);
      clear(pane);
      pane.appendChild(cur.frame);
      pane.scrollTop = 0;
      cur.host.setMode(viewMode);
    },
    destroy() {
      bridge.detach();
      if (current) current.host.destroy();
      current = null;
    }
  };
}
