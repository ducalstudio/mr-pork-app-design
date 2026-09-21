/*
 * Decides which view to open. Pure: no DOM, no storage access, no URL access.
 *
 *   URL carries ANY review state  ->  URL values + deterministic defaults. Storage is never read.
 *   URL carries no review state   ->  stored last view  ->  default view.
 *
 * Why: mixing a partial URL with the reviewer's own stored view would make the same link open differently for
 * different reviewers. Deterministic defaults: screen = default screen, version = that screen's highest-ranked
 * version, device = DEFAULT_DEVICE, view = DEFAULT_VIEW_MODE.
 *
 * Invalid values are treated as missing (same defaults) and reported with a notice. Legacy device classes
 * (mobile / tablet) resolve silently through LEGACY_DEVICE_ALIASES. Callers rewrite the URL with every value explicit.
 */
import { DEVICES, DEFAULT_DEVICE, LEGACY_DEVICE_ALIASES, VIEW_MODES, DEFAULT_VIEW_MODE, SELFTEST_KEY } from "../config.js";

const isDevice = (d) => DEVICES.some((x) => x.id === d);
const isViewMode = (v) => VIEW_MODES.some((x) => x.id === v);
const deviceLabel = (id) => DEVICES.filter((d) => d.id === id)[0].label;

function resolveDevice(wanted, notices) {
  if (!wanted) return DEFAULT_DEVICE;
  if (isDevice(wanted)) return wanted;
  if (Object.prototype.hasOwnProperty.call(LEGACY_DEVICE_ALIASES, wanted)) return LEGACY_DEVICE_ALIASES[wanted];
  if (notices) notices.push('Device "' + wanted + '" is not supported. Showing ' + deviceLabel(DEFAULT_DEVICE) + ".");
  return DEFAULT_DEVICE;
}

function resolveViewMode(wanted, notices) {
  if (!wanted) return DEFAULT_VIEW_MODE;
  if (isViewMode(wanted)) return wanted;
  if (notices) notices.push('View mode "' + wanted + '" is not supported. Showing ' + DEFAULT_VIEW_MODE + ".");
  return DEFAULT_VIEW_MODE;
}

function completeView(screen, wanted, notices) {
  let version = screen.defaultVersionKey;
  if (wanted.version) {
    if (screen.versions[wanted.version]) version = wanted.version;
    else if (notices) {
      notices.push(
        screen.defaultVersionKey
          ? 'Version "' + wanted.version + '" is not available for this screen. Showing ' + screen.versions[screen.defaultVersionKey].label + "."
          : 'Version "' + wanted.version + '" is not available: this screen has no design version yet.'
      );
    }
  }
  return { key: screen.key, version: version, device: resolveDevice(wanted.device, notices), viewMode: resolveViewMode(wanted.view, notices) };
}

/* An explicit selection from the URL (also used when the URL changes while the Explorer is open). */
export function resolveExplicit(urlRoute, registry) {
  const notices = [];
  if (urlRoute.key === SELFTEST_KEY) {
    return {
      view: { key: SELFTEST_KEY, version: null, device: resolveDevice(urlRoute.device, notices), viewMode: resolveViewMode(urlRoute.view, notices), selftest: true },
      source: "url",
      notices: notices
    };
  }
  let screen = urlRoute.key ? registry.byKey[urlRoute.key] : null;
  if (!screen) {
    if (urlRoute.key) notices.push('The review link points to a design that was not found ("' + urlRoute.key + '"). Showing the default view.');
    screen = registry.byKey[registry.defaultKey];
    return { view: completeView(screen, urlRoute, notices), source: urlRoute.key ? "default-fallback" : "url", notices: notices };
  }
  return { view: completeView(screen, urlRoute, notices), source: "url", notices: notices };
}

export function resolveInitialView({ url, stored, registry }) {
  if (url && url.hasState) return resolveExplicit(url, registry);
  if (stored && registry.byKey[stored.key]) {
    return { view: completeView(registry.byKey[stored.key], stored, null), source: "storage", notices: [] };
  }
  return { view: completeView(registry.byKey[registry.defaultKey], {}, null), source: "default", notices: [] };
}
