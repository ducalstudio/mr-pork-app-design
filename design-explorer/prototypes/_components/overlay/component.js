/* overlay behavior: initial focus, focus trap, Escape / scrim dismissal (Draft-only convenience). Classic script. */
(function (root) {
  "use strict";
  var NS = (root.MPProto = root.MPProto || {});
  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),[tabindex]:not([tabindex="-1"])';

  function focusables(el) {
    return Array.prototype.slice.call(el.querySelectorAll(FOCUSABLE)).filter(function (n) { return n.offsetParent !== null; });
  }

  /* opts.dismissible: Escape and scrim tap hide the overlay. Whether the real app allows dismissal is To Verify. */
  function init(overlay, opts) {
    opts = opts || {};
    var panel = overlay.querySelector("[role='dialog']");
    var scrim = overlay.querySelector(".overlay__scrim");
    function dismiss() { overlay.hidden = true; if (opts.onDismiss) opts.onDismiss(); }
    if (opts.dismissible) {
      if (scrim) scrim.addEventListener("click", dismiss);
      overlay.addEventListener("keydown", function (e) { if (e.key === "Escape") dismiss(); });
      var closers = overlay.querySelectorAll("[data-dismiss]");
      Array.prototype.forEach.call(closers, function (c) { c.addEventListener("click", dismiss); });
    }
    overlay.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var list = focusables(overlay);
      if (!list.length) { e.preventDefault(); return; }
      var first = list[0], last = list[list.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    if (panel) panel.focus(); // the panel, not a control: no focus ring appears before the reviewer interacts
    return { dismiss: dismiss };
  }

  NS.overlay = { init: init };
})(typeof globalThis !== "undefined" ? globalThis : this);
