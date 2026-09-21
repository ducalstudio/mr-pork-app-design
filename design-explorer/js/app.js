/*
 * Mr Pork Design Explorer — bootstrap and wiring.
 * Design review tool only. Not the production Customer App.
 * State lives in one store; components are pure "render(props)" modules; data comes from data/index.js.
 */
import { modules } from "../data/index.js";
import { DEFAULT_DEVICE, DEFAULT_VIEW_MODE, DEVICES, SELFTEST_KEY, SELFTEST_PROTOTYPE } from "./config.js";
import { buildRegistry, resolve, availability, screenStatus, previewState } from "./utils/registry.js";
import { filterScreens, FILTERS } from "./utils/searchFilter.js";
import { createStore } from "./utils/store.js";
import { createRouter } from "./utils/router.js";
import { slug } from "./utils/slug.js";
import { createDesignTree } from "./components/designTree.js";
import { createUiPreview } from "./components/uiPreview.js";
import { createDesignInfo } from "./components/designInfo.js";
import { createBreadcrumb } from "./components/breadcrumb.js";
import { createDeviceSwitcher } from "./components/deviceSwitcher.js";
import { createViewModeToggle } from "./components/viewModeToggle.js";
import { createVersionSwitcher } from "./components/versionSwitcher.js";
import { createSearchBar } from "./components/searchBar.js";
import { createNotices } from "./components/notice.js";
import { createReviewLinkButton } from "./components/reviewLinkButton.js";
import { resolveInitialView, resolveExplicit } from "./utils/viewResolver.js";
import { loadView, saveView } from "./utils/viewStorage.js";

const registry = buildRegistry(modules);
registry.problems.forEach((p) => console.error("[Explorer data]", p));

const $ = (id) => document.getElementById(id);
const shell = $("shell");

const store = createStore({
  key: null,
  versionKey: null,
  device: DEFAULT_DEVICE,
  viewMode: DEFAULT_VIEW_MODE,
  selftest: false,
  query: "",
  filter: "all",
  open: {}
});

/* ------------------------------------------------------------ state helpers */
const screenOf = (key) => registry.byKey[key] || registry.byKey[registry.defaultKey];

function openAncestors(screen, open) {
  const next = Object.assign({}, open);
  for (let i = 1; i < screen.path.length; i++) next[screen.path.slice(0, i).map(slug).join("/")] = true;
  return next;
}

function closeDrawers() {
  shell.classList.remove("drawer-tree", "drawer-info");
}

/* ------------------------------------------------------------ router / share links */
const notices = createNotices({ toast: $("toast"), notices: $("notices") });

const router = createRouter({
  onChange(urlRoute) {
    // The URL changed while the Explorer is open (manual edit, legacy hash, history): treat as an explicit selection.
    showView(resolveInitialView({ url: urlRoute, stored: loadView(), registry: registry }));
  }
});

/* Current view as a route: device and view mode are always explicit so a shared link cannot drift. */
function currentRoute() {
  const st = store.get();
  return { key: st.selftest ? SELFTEST_KEY : st.key, version: st.selftest ? null : st.versionKey, device: st.device, view: st.viewMode };
}

/* Keep the address bar (shareable) and the same-user fallback in sync with the current view. The dev-only self-test is never stored. */
function writeRoute() {
  const route = currentRoute();
  router.write(route);
  if (!store.get().selftest) saveView(route);
}

function showView(resolution) {
  const v = resolution.view;
  if (v.selftest) {
    store.set({ selftest: true, device: v.device, viewMode: v.viewMode });
    closeDrawers();
    notices.show(resolution.notices);
    writeRoute();
    return;
  }
  const screen = screenOf(v.key);
  store.set({ selftest: false, key: screen.key, versionKey: v.version, device: v.device, viewMode: v.viewMode, open: openAncestors(screen, store.get().open) });
  closeDrawers();
  notices.show(resolution.notices);
  writeRoute();
}

/* ------------------------------------------------------------ actions */
const actions = {
  select(key) {
    const screen = screenOf(key);
    const st = store.get();
    // Keep the chosen version type if the new screen has it; otherwise use that screen's default.
    const versionKey = screen.versions[st.versionKey] ? st.versionKey : screen.defaultVersionKey;
    store.set({ selftest: false, key: screen.key, versionKey: versionKey, open: openAncestors(screen, st.open) });
    closeDrawers();
    notices.clear();
    writeRoute();
  },
  setVersion(versionKey) {
    store.set({ versionKey: versionKey });
    writeRoute();
  },
  setDevice(device) {
    store.set({ device: device });
    writeRoute();
  },
  setViewMode(viewMode) {
    store.set({ viewMode: viewMode });
    writeRoute();
  },
  toggle(pathKey) {
    const open = Object.assign({}, store.get().open);
    open[pathKey] = !open[pathKey];
    store.set({ open: open });
  },
  setQuery(query) {
    store.set({ query: query });
  },
  setFilter(filter) {
    store.set({ filter: filter });
  }
};

/* ------------------------------------------------------------ components */
const tree = createDesignTree({ el: $("tree"), empty: $("tree-empty") }, { onSelect: actions.select, onToggle: actions.toggle });
const search = createSearchBar({ input: $("search"), chips: $("filters"), count: $("result-count") }, { onQuery: actions.setQuery, onFilter: actions.setFilter });
const breadcrumb = createBreadcrumb($("breadcrumb"));
const versions = createVersionSwitcher($("versions"), { onChange: actions.setVersion });
const devices = createDeviceSwitcher($("devices"), { onChange: actions.setDevice });
const viewModes = createViewModeToggle({ group: $("view-modes"), label: $("scale-label") }, { onChange: actions.setViewMode });

/* Diagnostics reported by the renderers. Kept outside the store: updating them must not re-render the preview. */
let assetChecks = {};
let runtimeReport = null;
const renderInfo = () => {
  const st = store.get();
  const resolved = currentResolved(st);
  const ps = previewState(resolved, st.device);
  info.render({ resolved: resolved, device: st.device, assetCheck: ps.kind === "reference" ? assetChecks[ps.image] : null, runtime: runtimeReport });
};

const preview = createUiPreview({ banners: $("banners"), preview: $("preview") }, {
  onSwitchDevice: actions.setDevice,
  onScale: (scale, mode) => viewModes.setScale(scale, mode),
  onAssetCheck: (image, check) => { assetChecks[image] = check; renderInfo(); },
  onRuntimeReport: (report) => { runtimeReport = report; renderInfo(); }
});
const info = createDesignInfo($("info"), { nameOf: (key) => (registry.byKey[key] ? registry.byKey[key].path.join(" > ") : key) });

createReviewLinkButton($("copy-link"), { getRoute: currentRoute, notices: notices });

/* ------------------------------------------------------------ render */
/* The dev-only self-test is a synthetic prototype entry: not a screen, not a version, not in the registry. */
function selftestResolved() {
  return {
    selftest: true,
    screen: { key: SELFTEST_KEY, path: ["Phase A self-test (developer only)"] },
    type: "selftest",
    typeLabel: "Self-test",
    hasDesign: true,
    status: "Self-test",
    scope: "Current Scope",
    scopeNote: null,
    captures: {},
    prototype: SELFTEST_PROTOTYPE,
    banner: "Developer-only runtime self-test. A neutral page: not a Mr Pork screen and not a design version."
  };
}

function currentResolved(st) {
  return st.selftest ? selftestResolved() : resolve(screenOf(st.key), st.versionKey);
}

function render(st) {
  const resolved = currentResolved(st);
  const screen = st.selftest ? null : screenOf(st.key);
  const visible = filterScreens(registry.screens, st.query, st.filter);
  const visibleKeys = {};
  visible.forEach((s) => { visibleKeys[s.key] = true; });
  const filterCounts = {};
  FILTERS.forEach((f) => { filterCounts[f.id] = filterScreens(registry.screens, "", f.id).length; });

  tree.render({
    tree: registry.tree,
    visibleKeys: visibleKeys,
    selectedKey: screen ? screen.key : null,
    open: st.open,
    expandAll: !!st.query || st.filter !== "all",
    statusOf: screenStatus
  });
  search.render({ filter: st.filter, filterCounts: filterCounts, shown: visible.length, total: registry.screens.length });
  breadcrumb.render({ path: resolved.screen.path });
  versions.render({
    versions: screen ? screen.versionKeys.map((k) => ({ key: k, label: screen.versions[k].label, status: screen.versions[k].status })) : [],
    selected: screen ? resolved.versionKey : null
  });
  devices.render({ device: st.device, availability: availability(resolved) });
  viewModes.render({ viewMode: st.viewMode });
  preview.render({ resolved: resolved, device: st.device, viewMode: st.viewMode });
  renderInfo();

  if (st.selftest) {
    $("footer-path").textContent = "Developer-only Phase A runtime self-test";
    document.title = "Phase A self-test — Mr Pork Design Explorer";
    return;
  }
  $("footer-path").textContent =
    "Reference path: " + screen.path.join(" > ") + " · " + (resolved.hasDesign ? resolved.label : "No design supplied") + (screen.id !== "To Verify" ? "  ·  " + screen.id : "");
  document.title = screen.name + " — Mr Pork Design Explorer";
}

store.subscribe(render);

/* ------------------------------------------------------------ chrome: drawers + keyboard */
$("toggle-tree").addEventListener("click", () => {
  shell.classList.toggle("drawer-tree");
  shell.classList.remove("drawer-info");
});
$("toggle-info").addEventListener("click", () => {
  shell.classList.toggle("drawer-info");
  shell.classList.remove("drawer-tree");
});

// Up / Down step through the currently visible designs (ignored while typing).
document.addEventListener("keydown", (e) => {
  if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
  const tag = ((e.target && e.target.tagName) || "").toLowerCase();
  if (tag === "input" || tag === "textarea") return;
  const st = store.get();
  const vis = filterScreens(registry.screens, st.query, st.filter);
  const i = vis.map((s) => s.key).indexOf(st.key);
  const next = vis[i + (e.key === "ArrowDown" ? 1 : -1)];
  if (next) {
    e.preventDefault();
    actions.select(next.key);
    const btn = $("tree").querySelector('[data-key="' + next.key + '"]');
    if (btn) btn.focus();
  }
});

/* ------------------------------------------------------------ init */
if (!registry.screens.length) {
  $("preview").textContent = "No screens found. Check data/index.js.";
} else {
  // Any review state in the URL -> URL + deterministic defaults (storage ignored). No URL state -> storage -> default.
  showView(resolveInitialView({ url: router.read(), stored: loadView(), registry: registry }));
}
