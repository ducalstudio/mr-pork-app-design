/*
 * Fit-to-pane / 100% viewing. Shared by the Reference and Prototype renderers.
 * This is reviewer zoom only: a uniform CSS scale around the content. It never resizes or reflows the content.
 */

/* Uniform scale that fits content (w x h) inside avail (w x h). Never above 100%. */
export function fitScale(avail, content) {
  if (!(avail.w > 0) || !(avail.h > 0) || !(content.w > 0) || !(content.h > 0)) return 1;
  return Math.min(1, avail.w / content.w, avail.h / content.h);
}

/*
 * createFitHost(pane, { reserveH, onScale })
 *   build(contentEl, w, h)  -> layout box element to place in the pane (content is w x h CSS px)
 *   setMode("fit" | "100"), setSize(w, h), destroy()
 * onScale(scale, mode) fires whenever the applied scale changes.
 */
export function createFitHost(pane, opts) {
  const o = opts || {};
  let mode = "fit";
  let size = { w: 0, h: 0 };
  let box = null;
  let inner = null;
  let scale = 1;
  let ro = null;

  function available() {
    const cs = getComputedStyle(pane);
    const w = pane.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - 1;
    const h = pane.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) - (o.reserveH || 0) - 1;
    return { w: w, h: h };
  }

  function apply() {
    if (!box) return;
    scale = mode === "fit" ? fitScale(available(), size) : 1;
    box.style.width = size.w * scale + "px";
    box.style.height = size.h * scale + "px";
    inner.style.width = size.w + "px";
    inner.style.height = size.h + "px";
    inner.style.transform = scale === 1 ? "none" : "scale(" + scale + ")";
    if (o.onScale) o.onScale(scale, mode);
  }

  return {
    build(contentEl, w, h) {
      this.destroy();
      size = { w: w, h: h };
      inner = document.createElement("div");
      inner.className = "fit__inner";
      inner.appendChild(contentEl);
      box = document.createElement("div");
      box.className = "fit__box";
      box.appendChild(inner);
      if (typeof ResizeObserver !== "undefined") {
        ro = new ResizeObserver(() => { if (mode === "fit") apply(); });
        ro.observe(pane);
      }
      apply();
      return box;
    },
    setMode(m) {
      mode = m === "100" ? "100" : "fit";
      apply();
    },
    setSize(w, h) {
      size = { w: w, h: h };
      apply();
    },
    scale: () => scale,
    destroy() {
      if (ro) ro.disconnect();
      ro = null;
      box = null;
      inner = null;
    }
  };
}
