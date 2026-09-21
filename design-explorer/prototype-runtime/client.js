/*
 * Prototype client: runs INSIDE the sandboxed prototype iframe.
 * Load in <head>, after tiers.js and protocol.js, so data-tier is set before first paint.
 *
 * It reads its own viewport, derives the tier with MPTiers.tierFor(), sets data-tier on <html>, and reports
 * ready / viewport / tier to the Explorer with postMessage. It never touches the parent's DOM.
 */
(function () {
  "use strict";
  var T = window.MPTiers;
  var P = window.MPProtocol;
  if (!T || !P) return; // shared scripts missing: base (compact) styles apply

  var root = document.documentElement;
  var last = { tier: null, width: -1, height: -1 };

  function send(msg) {
    msg.source = P.SOURCE;
    msg.v = P.VERSION;
    try { window.parent.postMessage(msg, "*"); } catch (e) { /* not embedded */ }
  }

  function measure(first) {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var tier = T.tierFor(width);
    root.setAttribute("data-tier", tier);
    if (first) return { tier: tier, width: width, height: height };
    if (width !== last.width || height !== last.height) send({ type: "viewport", width: width, height: height });
    if (tier !== last.tier) send({ type: "tier", tier: tier });
    last = { tier: tier, width: width, height: height };
    return last;
  }

  last = measure(true); // synchronous: before first paint
  window.addEventListener("resize", function () { measure(false); });

  function ready() {
    send({ type: "ready", tier: last.tier, width: last.width, height: last.height });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ready);
  else ready();
})();
