/*
 * Mr Pork Design Explorer — Phase 1 UI logic (vanilla JS, no dependencies).
 * Design review tool only. Not the production Customer App.
 */
(function () {
  "use strict";

  var D = window.MPData;
  var Q = window.MPSearch;

  var state = { key: null, device: "mobile", query: "", filter: "all", open: {} };

  var el = {
    tree: document.getElementById("tree"),
    treeEmpty: document.getElementById("tree-empty"),
    search: document.getElementById("search"),
    filters: document.getElementById("filters"),
    count: document.getElementById("result-count"),
    crumb: document.getElementById("breadcrumb"),
    banners: document.getElementById("banners"),
    preview: document.getElementById("preview"),
    info: document.getElementById("info"),
    footer: document.getElementById("footer-path"),
    devices: document.getElementById("devices"),
    shell: document.getElementById("shell")
  };

  /* ------------------------------------------------------------ helpers */
  function h(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "class") n.className = attrs[k];
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return n;
  }

  function badge(text, kind) {
    return h("span", { class: "badge badge--" + kind, text: text });
  }

  function statusBadges(s) {
    var out = [badge(s.status.toUpperCase(), s.status === "To Verify" ? "verify" : "reference")];
    if (s.scope === "Future Scope") out.push(badge("FUTURE SCOPE", "future"));
    if (s.scope === "External UI") out.push(badge("EXTERNAL UI", "external"));
    return out;
  }

  /* ------------------------------------------------------------ URL hash */
  function readHash() {
    var raw = decodeURIComponent(location.hash.replace(/^#/, ""));
    var parts = raw.split("@");
    return { key: parts[0], device: parts[1] === "tablet" ? "tablet" : "mobile" };
  }

  function writeHash() {
    var next = "#" + state.key + (state.device === "tablet" ? "@tablet" : "");
    if (location.hash !== next) history.replaceState(null, "", next);
  }

  /* ------------------------------------------------------------ visible set */
  function visibleScreens() {
    return Q.filter(D.screens, state.query, state.filter);
  }

  function openAncestors(screen) {
    for (var i = 1; i < screen.path.length; i++) {
      state.open[screen.path.slice(0, i).map(D.slug).join("/")] = true;
    }
  }

  /* ------------------------------------------------------------ tree */
  function renderTree() {
    var visible = visibleScreens();
    var visibleKeys = {};
    visible.forEach(function (s) { visibleKeys[s.key] = true; });
    var searching = !!state.query || state.filter !== "all";

    el.tree.innerHTML = "";

    function hasVisible(node) {
      if (node.screen) return !!visibleKeys[node.screen.key];
      return node.children.some(hasVisible);
    }

    function build(node, depth) {
      if (!hasVisible(node)) return null;
      if (node.screen) {
        var s = node.screen;
        var selected = s.key === state.key;
        var btn = h(
          "button",
          {
            class: "tree__leaf" + (selected ? " is-selected" : ""),
            type: "button",
            "data-key": s.key,
            "aria-current": selected ? "true" : null,
            onclick: function () { select(s.key); }
          },
          [
            h("span", { class: "tree__label", text: node.label }),
            s.scope === "Future Scope" ? badge("FUTURE", "future") : null,
            s.scope === "External UI" ? badge("EXTERNAL", "external") : null,
            s.status === "To Verify" ? badge("TO VERIFY", "verify") : null
          ]
        );
        return h("li", { class: "tree__item" }, [btn]);
      }
      var isOpen = searching || !!state.open[node.pathKey];
      var toggle = h(
        "button",
        {
          class: "tree__group depth-" + Math.min(depth, 3),
          type: "button",
          "aria-expanded": isOpen ? "true" : "false",
          onclick: function () {
            state.open[node.pathKey] = !state.open[node.pathKey];
            renderTree();
          }
        },
        [h("span", { class: "tree__chevron", "aria-hidden": "true", text: isOpen ? "▾" : "▸" }), h("span", { class: "tree__label", text: node.label })]
      );
      var li = h("li", { class: "tree__item" }, [toggle]);
      if (isOpen) {
        var ul = h("ul", { class: "tree__list" });
        node.children.forEach(function (c) {
          var built = build(c, depth + 1);
          if (built) ul.appendChild(built);
        });
        li.appendChild(ul);
      }
      return li;
    }

    var rootUl = h("ul", { class: "tree__list tree__list--root" });
    D.tree.children.forEach(function (c) {
      var built = build(c, 0);
      if (built) rootUl.appendChild(built);
    });
    el.tree.appendChild(rootUl);

    el.treeEmpty.hidden = visible.length > 0;
    el.count.textContent = visible.length + " of " + D.screens.length + " designs";

    var sel = el.tree.querySelector(".is-selected");
    if (sel && sel.scrollIntoView) sel.scrollIntoView({ block: "nearest" });
  }

  function renderFilters() {
    el.filters.innerHTML = "";
    Q.FILTERS.forEach(function (f) {
      var count = Q.filter(D.screens, "", f.id).length;
      el.filters.appendChild(
        h("button", {
          class: "chip" + (state.filter === f.id ? " is-active" : ""),
          type: "button",
          "aria-pressed": state.filter === f.id ? "true" : "false",
          text: f.label + " (" + count + ")",
          onclick: function () {
            state.filter = f.id;
            renderFilters();
            renderTree();
          }
        })
      );
    });
  }

  /* ------------------------------------------------------------ center */
  function renderBreadcrumb(s) {
    el.crumb.innerHTML = "";
    s.path.forEach(function (label, i) {
      if (i) el.crumb.appendChild(h("span", { class: "crumb__sep", "aria-hidden": "true", text: ">" }));
      el.crumb.appendChild(h("span", { class: "crumb__item" + (i === s.path.length - 1 ? " is-current" : ""), text: label }));
    });
  }

  function renderBanners(s) {
    el.banners.innerHTML = "";
    if (state.device === "tablet") {
      el.banners.appendChild(
        h("div", { class: "banner banner--info", role: "status" }, [
          h("strong", { text: "Tablet design not available yet." }),
          h("span", { text: " Mobile Reference shown below." })
        ])
      );
    }
    if (s.scope === "Future Scope") {
      el.banners.appendChild(h("div", { class: "banner banner--future", text: "Future Scope — " + s.scopeNote }));
    }
    if (s.scope === "External UI") {
      el.banners.appendChild(h("div", { class: "banner banner--external", text: "External UI — " + s.scopeNote }));
    }
  }

  function renderPreview(s) {
    el.preview.innerHTML = "";
    if (s.missing || !s.image) {
      el.preview.appendChild(
        h("div", { class: "placeholder" }, [
          h("p", { class: "placeholder__title", text: "UI not supplied yet." }),
          h("p", { text: "Status: To Verify" }),
          h("p", { class: "placeholder__hint", text: "No design has been generated. This entry marks a known missing screen." })
        ])
      );
      return;
    }
    var img = h("img", {
      class: "frame__img",
      src: s.image,
      alt: s.path.join(" > ") + " (Reference screenshot)",
      onerror: function () {
        img.replaceWith(h("div", { class: "placeholder" }, [h("p", { class: "placeholder__title", text: "Image failed to load." }), h("p", { class: "placeholder__hint", text: s.image })]));
      }
    });
    el.preview.appendChild(h("div", { class: "frame" }, [img, h("div", { class: "frame__caption", text: "Reference screenshot — unmodified" })]));
    el.preview.scrollTop = 0;
  }

  /* ------------------------------------------------------------ info */
  function field(label, value) {
    return h("div", { class: "field" }, [h("dt", { text: label }), h("dd", { text: value || "—" })]);
  }

  function list(label, items) {
    var ul = h("ul", { class: "field__list" });
    (items && items.length ? items : ["—"]).forEach(function (i) { ul.appendChild(h("li", { text: i })); });
    return h("div", { class: "field" }, [h("dt", { text: label }), h("dd", {}, [ul])]);
  }

  function section(title, fields) {
    return h("section", { class: "info__section" }, [h("h3", { text: title }), h("dl", {}, fields)]);
  }

  function renderInfo(s) {
    el.info.innerHTML = "";
    el.info.appendChild(h("h2", { class: "info__title", text: s.path.length > 2 ? s.path.slice(-2).join(" — ") : s.name }));
    el.info.appendChild(h("div", { class: "info__badges" }, statusBadges(s)));

    if (s.scopeNote) {
      el.info.appendChild(h("div", { class: "callout callout--" + (s.scope === "External UI" ? "external" : "future"), text: s.scopeNote }));
    }

    var idText = s.id;
    var idFields = [field("Screen ID", idText)];
    if (s.id === "To Verify") {
      idFields.push(field("Explorer key (internal)", s.key));
      idFields.push(h("p", { class: "field__hint", text: "The Explorer key is an internal slug, not an approved product Screen ID." }));
    }
    idFields.push(field("Design name", s.name));
    idFields.push(field("Module", s.module));
    idFields.push(field("State", s.state || "—"));
    idFields.push(field("Device", state.device === "tablet" ? "Tablet (not available) — Mobile Reference shown" : s.device));
    el.info.appendChild(section("Identity", idFields));

    el.info.appendChild(section("Status", [field("Design status", s.status), field("Scope", s.scope)]));
    el.info.appendChild(section("Description", [h("p", { class: "info__text", text: s.description || "—" })]));
    el.info.appendChild(
      section("Actions", [field("Primary action", s.primaryAction), list("Secondary actions", s.secondaryActions)])
    );
    el.info.appendChild(section("Flow", [field("Entry point", s.entryPoint), field("Next step", s.nextStep)]));
    el.info.appendChild(section("Dependencies", [list("Depends on", s.dependencies)]));
    el.info.appendChild(section("Notes", [list("Known issues / review notes", s.notes)]));
  }

  /* ------------------------------------------------------------ select */
  function select(key, opts) {
    var s = D.byKey[key] || D.byKey[D.defaultKey];
    state.key = s.key;
    openAncestors(s);
    renderTree();
    renderBreadcrumb(s);
    renderBanners(s);
    renderPreview(s);
    renderInfo(s);
    el.footer.textContent = "Reference path: " + s.path.join(" > ") + (s.id !== "To Verify" ? "  ·  " + s.id : "");
    document.title = s.name + " — Mr Pork Design Explorer";
    if (!opts || !opts.silent) writeHash();
    el.shell.classList.remove("drawer-tree", "drawer-info");
  }

  function setDevice(device) {
    state.device = device;
    Array.prototype.forEach.call(el.devices.querySelectorAll("button"), function (b) {
      var on = b.getAttribute("data-device") === device;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    select(state.key); // preserves selected screen + state
  }

  /* ------------------------------------------------------------ events */
  el.devices.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-device]");
    if (b) setDevice(b.getAttribute("data-device"));
  });

  el.search.addEventListener("input", function () {
    state.query = el.search.value.trim();
    renderTree();
  });

  window.addEventListener("hashchange", function () {
    var hs = readHash();
    if (hs.key && hs.key !== state.key) {
      setDevice(hs.device);
      select(hs.key, { silent: true });
    } else if (hs.device !== state.device) {
      setDevice(hs.device);
    }
  });

  document.getElementById("toggle-tree").addEventListener("click", function () {
    el.shell.classList.toggle("drawer-tree");
    el.shell.classList.remove("drawer-info");
  });
  document.getElementById("toggle-info").addEventListener("click", function () {
    el.shell.classList.toggle("drawer-info");
    el.shell.classList.remove("drawer-tree");
  });

  // Up / Down arrows step through the currently visible designs (ignored while typing).
  document.addEventListener("keydown", function (e) {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea") return;
    var vis = visibleScreens();
    var i = vis.map(function (s) { return s.key; }).indexOf(state.key);
    var next = vis[i + (e.key === "ArrowDown" ? 1 : -1)];
    if (next) {
      e.preventDefault();
      select(next.key);
      var btn = el.tree.querySelector('[data-key="' + next.key + '"]');
      if (btn) btn.focus();
    }
  });

  /* ------------------------------------------------------------ init */
  (function init() {
    if (!D.screens.length) {
      el.preview.textContent = "No screens found. Check data/screens.js.";
      return;
    }
    var hs = readHash();
    state.device = hs.device;
    state.key = D.byKey[hs.key] ? hs.key : D.defaultKey;
    renderFilters();
    setDevice(state.device);
  })();
})();
