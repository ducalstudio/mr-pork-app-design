/*
 * Responsive tiers: the ONE source of truth for the numeric thresholds.
 * Classic script (not an ES module) on purpose: sandboxed prototype iframes have an opaque origin, and module scripts
 * from an opaque origin need CORS headers that a plain static server does not send. The Explorer page loads this same
 * file, so both sides read one copy.
 *
 * These are prototype / design-system tiers for design review. They are NOT a mandatory production framework contract.
 * Screen and component CSS targets the semantic tier ([data-tier="medium"]) and never repeats these numbers.
 */
(function (root) {
  "use strict";
  var TIERS = Object.freeze([
    Object.freeze({ id: "compact", min: 0 }),
    Object.freeze({ id: "medium", min: 600 }),
    Object.freeze({ id: "expanded", min: 900 })
  ]);

  /* Widest tier whose minimum is <= width. Anything invalid or negative is compact. */
  function tierFor(width) {
    var w = Number(width);
    var found = TIERS[0];
    if (!isFinite(w)) return found.id;
    for (var i = 0; i < TIERS.length; i++) if (w >= TIERS[i].min) found = TIERS[i];
    return found.id;
  }

  root.MPTiers = Object.freeze({
    tiers: TIERS,
    names: Object.freeze(TIERS.map(function (t) { return t.id; })),
    tierFor: tierFor
  });
})(typeof globalThis !== "undefined" ? globalThis : this);
