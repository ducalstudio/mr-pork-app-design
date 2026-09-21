/*
 * Explorer side of the iframe bridge. Owns message receipt only:
 *   1. ignore anything whose event.source is not the registered iframe's window (event.origin is "null" for a sandboxed
 *      iframe, so it cannot identify the sender);
 *   2. validate the shape and values with MPProtocol.validate;
 *   3. drop everything else silently. Nothing received is ever used as HTML, and the iframe DOM is never accessed.
 * The reported tier / viewport feed the info panel and self-test readout only; they are never trusted for layout.
 */
export function createParentBridge({ onReport, timeoutMs }) {
  const wait = timeoutMs || 4000;
  let target = null;
  let timer = null;
  let report = null;

  function emit() { if (onReport) onReport(Object.assign({}, report)); }

  function onMessage(event) {
    if (!target || event.source !== target.contentWindow) return;
    const P = window.MPProtocol;
    const T = window.MPTiers;
    if (!P || !T) return;
    const msg = P.validate(event.data, T.names);
    if (!msg) return;
    if (timer) { clearTimeout(timer); timer = null; }
    report.timedOut = false;
    if (msg.type === "ready") report.ready = true;
    if (msg.tier) report.tier = msg.tier;
    if (msg.width !== undefined) { report.width = msg.width; report.height = msg.height; }
    emit();
  }

  window.addEventListener("message", onMessage);

  return {
    /* Call BEFORE the iframe's src is set / it is inserted, so the first message is never missed. */
    attach(iframe) {
      if (timer) clearTimeout(timer);
      target = iframe;
      report = { ready: false, tier: null, width: null, height: null, timedOut: false };
      timer = setTimeout(() => { timer = null; report.timedOut = true; emit(); }, wait);
      emit();
    },
    detach() {
      if (timer) clearTimeout(timer);
      timer = null;
      target = null;
      report = null;
    }
  };
}
