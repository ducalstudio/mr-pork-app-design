/*
 * postMessage protocol between a prototype iframe (client.js) and the Explorer parent (js/.../parent-bridge.js).
 * Classic script exposing one frozen global, for the same reason as tiers.js.
 *
 *   { source: "mp-prototype", v: 1, type: "ready",    tier, width, height }
 *   { source: "mp-prototype", v: 1, type: "viewport", width, height }
 *   { source: "mp-prototype", v: 1, type: "tier",     tier }
 *
 * The prototype sends; the parent validates. The parent also checks event.source (the iframe's window), because a
 * sandboxed iframe has an opaque origin: event.origin is the string "null" and cannot identify the sender.
 */
(function (root) {
  "use strict";
  var SOURCE = "mp-prototype";
  var VERSION = 1;
  var TYPES = Object.freeze(["ready", "viewport", "tier"]);
  var MAX_DIMENSION = 20000;

  function isDimension(n) {
    return typeof n === "number" && isFinite(n) && Math.floor(n) === n && n >= 0 && n <= MAX_DIMENSION;
  }

  /* Returns a clean copy of a valid message, or null. Anything else is dropped and never treated as HTML. */
  function validate(data, tierNames) {
    if (!data || typeof data !== "object" || Array.isArray(data)) return null;
    if (data.source !== SOURCE || data.v !== VERSION) return null;
    if (TYPES.indexOf(data.type) === -1) return null;
    var out = { type: data.type };
    if (data.type === "ready" || data.type === "viewport") {
      if (!isDimension(data.width) || !isDimension(data.height)) return null;
      out.width = data.width;
      out.height = data.height;
    }
    if (data.type === "ready" || data.type === "tier") {
      if (typeof data.tier !== "string" || tierNames.indexOf(data.tier) === -1) return null;
      out.tier = data.tier;
    }
    return out;
  }

  root.MPProtocol = Object.freeze({ SOURCE: SOURCE, VERSION: VERSION, TYPES: TYPES, validate: validate });
})(typeof globalThis !== "undefined" ? globalThis : this);
