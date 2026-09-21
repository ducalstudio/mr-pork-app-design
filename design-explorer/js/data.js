/*
 * Explorer data layer: normalises the manifest, derives internal keys, builds the tree.
 * The internal `key` is for URLs / lookups only. It is NOT a product Screen ID.
 */
(function () {
  "use strict";

  function slug(s) {
    return String(s)
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  var screens = (window.MP_SCREENS || []).map(function (s) {
    var copy = {};
    Object.keys(s).forEach(function (k) { copy[k] = s[k]; });
    copy.key = s.path.map(slug).join("/");
    copy.name = s.path[s.path.length - 1];
    copy.module = s.path[0];
    return copy;
  });

  var byKey = {};
  screens.forEach(function (s) {
    if (byKey[s.key]) console.warn("[Explorer] Duplicate key:", s.key);
    byKey[s.key] = s;
  });

  // Tree: { label, pathKey, children: [], screen }
  var root = { label: "", pathKey: "", children: [], screen: null };
  screens.forEach(function (s) {
    var node = root;
    s.path.forEach(function (label, i) {
      var pathKey = s.path.slice(0, i + 1).map(slug).join("/");
      var child = node.children.filter(function (c) { return c.label === label; })[0];
      if (!child) {
        child = { label: label, pathKey: pathKey, children: [], screen: null };
        node.children.push(child);
      }
      node = child;
    });
    if (node.children.length) console.warn("[Explorer] Screen is also a group:", s.key);
    node.screen = s;
  });

  var defaultScreen =
    screens.filter(function (s) { return s.id === "MP-HOME-001"; })[0] || screens[0];

  window.MPData = {
    screens: screens,
    byKey: byKey,
    tree: root,
    defaultKey: defaultScreen ? defaultScreen.key : null,
    slug: slug
  };
})();
