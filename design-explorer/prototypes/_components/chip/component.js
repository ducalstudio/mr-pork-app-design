/* chip behavior (tab role): roving tabindex, Left / Right / Home / End, selection callback. Classic script. */
(function (root) {
  "use strict";
  var NS = (root.MPProto = root.MPProto || {});
  /* tablist: element with role="tablist" whose children are role="tab" buttons. onSelect(key) is called after selection. */
  function initTabs(tablist, onSelect) {
    function tabs() { return Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]')); }
    function select(tab, focus) {
      tabs().forEach(function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
      });
      if (focus) tab.focus();
      if (onSelect) onSelect(tab.getAttribute("data-key"));
    }
    tablist.addEventListener("click", function (e) {
      var t = e.target.closest('[role="tab"]');
      if (t && tablist.contains(t)) select(t, false);
    });
    tablist.addEventListener("keydown", function (e) {
      var list = tabs(), i = list.indexOf(document.activeElement);
      if (i < 0) return;
      var n = null;
      if (e.key === "ArrowRight") n = list[(i + 1) % list.length];
      else if (e.key === "ArrowLeft") n = list[(i - 1 + list.length) % list.length];
      else if (e.key === "Home") n = list[0];
      else if (e.key === "End") n = list[list.length - 1];
      if (n) { e.preventDefault(); select(n, true); }
    });
  }
  NS.chips = { initTabs: initTabs };
})(typeof globalThis !== "undefined" ? globalThis : this);
