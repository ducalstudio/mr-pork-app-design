/* bottom-nav-reference behavior (review view only): renders the four Reference tabs and switches the selected tab.
   Tapping a tab only changes the selected state here; it does not navigate. Classic script.
   Icons are TEMPORARY PLACEHOLDERS / NOT SOURCE ASSETS (line icons drawn for review). */
(function (root) {
  "use strict";
  var NS = (root.MPProto = root.MPProto || {});
  var svg = function (d) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + "</svg>"; };
  var TABS = [
    { key: "home", label: "Home", icon: svg('<path d="M4 11.5 12 5l8 6.5V20H4z"/><path d="M10 20v-5h4v5"/>') },
    { key: "shop", label: "Shop", icon: svg('<path d="M3.5 4.5H6l2 10.5h10l2-7.5H7"/><circle cx="9.5" cy="19" r="1.3"/><circle cx="17" cy="19" r="1.3"/>') },
    { key: "rewards", label: "Rewards", icon: svg('<rect x="4" y="10" width="16" height="10" rx="1"/><rect x="3" y="7" width="18" height="3" rx="1"/><path d="M12 7v13"/><path d="M12 7c-1.5-3-5-3-5-1.2S10.5 7 12 7zm0 0c1.5-3 5-3 5-1.2S13.5 7 12 7z"/>') },
    { key: "account", label: "Account", icon: svg('<circle cx="12" cy="8" r="3.8"/><path d="M4.5 20c0-3.8 3.4-5.8 7.5-5.8s7.5 2 7.5 5.8"/>') }
  ];

  /* container: the .bottom-nav__inner element. onChange(key) is called after the selected tab changes. */
  function render(container, selectedKey, onChange) {
    container.innerHTML = "";
    TABS.forEach(function (t) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "bottom-nav__item";
      b.setAttribute("data-tab", t.key);
      b.innerHTML = '<span class="bottom-nav__icon" data-asset="temporary-placeholder">' + t.icon + '</span><span class="bottom-nav__label">' + t.label + "</span>";
      if (t.key === selectedKey) b.setAttribute("aria-current", "page");
      b.addEventListener("click", function () { select(container, t.key); if (onChange) onChange(t.key); });
      container.appendChild(b);
    });
  }
  function select(container, key) {
    Array.prototype.forEach.call(container.children, function (b) {
      if (b.getAttribute("data-tab") === key) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current");
    });
  }
  function isTab(key) { return TABS.some(function (t) { return t.key === key; }); }

  NS.bottomNav = { tabs: TABS, render: render, select: select, isTab: isTab };
})(typeof globalThis !== "undefined" ? globalThis : this);
