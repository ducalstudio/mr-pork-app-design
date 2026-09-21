/*
 * Explorer search + filters.
 * Search matches: screen name, Screen ID, module, state, and full path.
 */
(function () {
  "use strict";

  var FILTERS = [
    { id: "all", label: "All", test: function () { return true; } },
    { id: "reference", label: "Reference", test: function (s) { return s.status === "Reference"; } },
    { id: "future", label: "Future Scope", test: function (s) { return s.scope === "Future Scope"; } },
    { id: "toverify", label: "To Verify", test: function (s) { return s.status === "To Verify"; } }
  ];

  function matches(screen, query) {
    if (!query) return true;
    var hay = [screen.name, screen.id, screen.module, screen.state, screen.path.join(" ")]
      .join(" ")
      .toLowerCase();
    return query
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .every(function (term) { return hay.indexOf(term) !== -1; });
  }

  function filter(screens, query, filterId) {
    var f = FILTERS.filter(function (x) { return x.id === filterId; })[0] || FILTERS[0];
    return screens.filter(function (s) { return f.test(s) && matches(s, query); });
  }

  window.MPSearch = { FILTERS: FILTERS, filter: filter };
})();
