/*
 * URL routing (query string). Pure read / format / write; no design data and no UI here.
 *
 *   <page>?screen=<screen-key>&version=<version>&device=<preset-id>&view=<fit|100>
 *
 * `hasState` is true when the URL carries ANY review state (any ROUTE_PARAM, or a legacy hash). It decides whether the
 * stored last view may be used at all: with review state in the URL, storage is never read.
 * Legacy hash links (#key[@device][~version]) are still read, and are rewritten to the query format on load.
 * Only keys are ever placed in the URL, never image or filesystem paths.
 */
import { ROUTE_PARAMS } from "../config.js";

const LEGACY_HASH = /^([^@~]*)(?:@([a-z0-9-]+))?(?:~([a-z0-9-]+))?$/;

const decode = (s) => {
  try { return decodeURIComponent(s); } catch (e) { return s; }
};

/* Keep "/" readable inside the query value (it is legal there). */
const encodeValue = (v) => encodeURIComponent(v).replace(/%2F/gi, "/");

/* parseLocation({ search, hash }) -> { key, version, device, view, hasState, source: "query" | "legacy-hash" | "none" } */
export function parseLocation(loc) {
  const params = new URLSearchParams(loc.search || "");
  const present = Object.keys(ROUTE_PARAMS).some((k) => params.has(ROUTE_PARAMS[k]));
  if (present) {
    return {
      key: params.get(ROUTE_PARAMS.screen) || null,
      version: params.get(ROUTE_PARAMS.version) || null,
      device: params.get(ROUTE_PARAMS.device) || null,
      view: params.get(ROUTE_PARAMS.view) || null,
      hasState: true,
      source: "query"
    };
  }
  const raw = decode(String(loc.hash || "").replace(/^#/, ""));
  const m = raw && raw.match(LEGACY_HASH);
  if (m && raw) return { key: m[1] || null, version: m[3] || null, device: m[2] || null, view: null, hasState: true, source: "legacy-hash" };
  return { key: null, version: null, device: null, view: null, hasState: false, source: "none" };
}

/*
 * formatQuery({ key, version, device, view }) -> "?screen=…&version=…&device=…&view=…"
 * device and view are always written explicitly, so a link reproduces the exact review state and never depends on a
 * default. Only version is omitted (screens with no design version have none).
 */
export function formatQuery(route) {
  const parts = [ROUTE_PARAMS.screen + "=" + encodeValue(route.key)];
  if (route.version) parts.push(ROUTE_PARAMS.version + "=" + encodeValue(route.version));
  if (route.device) parts.push(ROUTE_PARAMS.device + "=" + encodeValue(route.device));
  if (route.view) parts.push(ROUTE_PARAMS.view + "=" + encodeValue(route.view));
  return "?" + parts.join("&");
}

export function createRouter({ onChange }) {
  const read = () => parseLocation(location);
  window.addEventListener("hashchange", () => onChange(read()));
  window.addEventListener("popstate", () => onChange(read()));
  return {
    read: read,
    /* replaceState (not pushState): browsing with the arrow keys must not flood the history. Also clears any legacy hash. */
    write(route) {
      const next = location.pathname + formatQuery(route);
      if (location.pathname + location.search + location.hash !== next) history.replaceState(null, "", next);
    }
  };
}
