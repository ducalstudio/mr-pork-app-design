/*
 * Registry: normalises module data, validates it, builds lookups + the design tree,
 * and resolves a screen + version into one effective definition (base + overrides).
 */
import { slug } from "./slug.js";
import { DEVICES, DEFAULT_DEVICE, TO_VERIFY_CAPTURE, VERSION_TYPES, TO_VERIFY, DEFAULT_SCREEN_ID, OVERRIDABLE_FIELDS, DESIGN_AVAILABILITY } from "../config.js";

const typeOf = (id) => VERSION_TYPES.filter((t) => t.id === id)[0];
const rankOf = (id) => VERSION_TYPES.map((t) => t.id).indexOf(id);
const list = (v) => (Array.isArray(v) ? v : v ? [v] : []);

/*
 * Reference assets are indexed by the device preset they were captured for (capturePreset), never by class.
 * An asset whose capture preset is unknown (To Verify) is kept in `unassigned`: it is never associated with any preset.
 */
function normalizeCaptures(raw, problems, where) {
  const captures = {};
  const unassigned = [];
  Object.keys(raw || {}).forEach((cls) => {
    const a = raw[cls];
    if (!a || !a.available || !a.image) return;
    const preset = presetOf(a.capturePreset);
    if (!preset) {
      // Explicit "to-verify" is a declared unknown; anything else (missing / misspelled) is a data problem.
      unassigned.push({ cls: cls, image: a.image });
      if (a.capturePreset !== TO_VERIFY_CAPTURE) problems.push(where + ": " + cls + " asset has no known capturePreset (use capturePreset: 'to-verify' if unknown), so it is not shown under any preset: " + a.image);
      return;
    }
    if (captures[preset.id]) problems.push(where + ": two assets claim capturePreset '" + preset.id + "'");
    captures[preset.id] = { image: a.image, capturePreset: preset.id };
  });
  return { captures: captures, unassigned: unassigned };
}

const presetOf = (id) => DEVICES.filter((d) => d.id === id)[0] || null;

function normalizeVersion(key, raw, problems, screenKey) {
  const typeId = raw.type || key.split("-")[0];
  if (!typeOf(typeId)) problems.push(screenKey + ": unknown version type '" + typeId + "' (key '" + key + "')");
  const t = typeOf(typeId) || { id: typeId, label: typeId };
  Object.keys(raw.overrides || {}).forEach((f) => {
    if (OVERRIDABLE_FIELDS.indexOf(f) === -1) problems.push(screenKey + ": '" + f + "' cannot be overridden by version '" + key + "'");
  });
  const cap = normalizeCaptures(raw.devices, problems, screenKey + " / " + key);
  return Object.assign({}, raw, {
    key: key,
    type: t.id,
    typeLabel: t.label,
    label: raw.label || t.label,
    status: raw.status || t.label,
    description: raw.description || "",
    secondaryActions: list(raw.secondaryActions),
    notes: list(raw.notes),
    captures: cap.captures,
    unassignedCaptures: cap.unassigned,
    prototype: raw.prototype || null,
    overrides: raw.overrides || {},
    handoff: raw.handoff || {}
  });
}

function normalizeScreen(raw, mod, problems) {
  const path = raw.path || [];
  const key = raw.key || path.map(slug).join("/");
  const versions = {};
  Object.keys(raw.versions || {}).forEach((k) => { versions[k] = normalizeVersion(k, raw.versions[k], problems, key); });
  const hasVersions = Object.keys(versions).length > 0;
  const availabilityId = raw.designAvailability || (hasVersions ? "available" : "to-verify");
  if (!DESIGN_AVAILABILITY[availabilityId]) problems.push(key + ": unknown designAvailability '" + availabilityId + "'");
  if (!hasVersions && availabilityId !== "to-verify") problems.push(key + ": no versions, so designAvailability must be 'to-verify'");
  if (hasVersions && availabilityId === "to-verify") problems.push(key + ": has design versions but designAvailability is 'to-verify'");
  const ordered = Object.keys(versions).sort((a, b) =>
    rankOf(versions[a].type) - rankOf(versions[b].type) || (a < b ? -1 : 1));
  return Object.assign({}, raw, {
    key: key,
    path: path,
    name: path[path.length - 1],
    module: raw.module || path[0],
    moduleId: mod.id,
    id: raw.id || TO_VERIFY,
    scope: raw.scope || "Current Scope",
    route: raw.route || null,
    purpose: raw.purpose || null,
    capability: raw.capability || null,
    related: list(raw.related),
    flow: Object.assign({ entryPoint: TO_VERIFY, nextStep: TO_VERIFY }, raw.flow),
    dependencies: list(raw.dependencies),
    versions: versions,
    notes: list(raw.notes),
    designAvailability: availabilityId,
    versionKeys: ordered,
    defaultVersionKey: ordered[0] || null
  });
}

export function buildRegistry(modules) {
  const problems = [];
  const screens = [];
  const byKey = {};
  modules.forEach((mod) => {
    (mod.screens || []).forEach((raw) => {
      const s = normalizeScreen(raw, mod, problems);
      if (byKey[s.key]) problems.push("Duplicate screen key: " + s.key);
      byKey[s.key] = s;
      screens.push(s);
    });
  });

  // Tree: Parent > Child > Sub-child > Screen / Review View > State
  const root = { label: "", pathKey: "", children: [], screen: null };
  screens.forEach((s) => {
    let node = root;
    s.path.forEach((label, i) => {
      const pathKey = s.path.slice(0, i + 1).map(slug).join("/");
      let child = node.children.filter((c) => c.label === label)[0];
      if (!child) {
        child = { label: label, pathKey: pathKey, children: [], screen: null };
        node.children.push(child);
      }
      node = child;
    });
    if (node.screen) problems.push("Two screens share the path: " + s.path.join(" > "));
    node.screen = s;
  });
  (function check(node) {
    if (node.screen && node.children.length) problems.push("Screen is also a group: " + node.pathKey);
    node.children.forEach(check);
  })(root);

  screens.forEach((s) => s.related.forEach((r) => { if (!byKey[r]) problems.push(s.key + ": related screen not found: " + r); }));

  const def = screens.filter((s) => s.id === DEFAULT_SCREEN_ID)[0] || screens[0];
  return { screens: screens, byKey: byKey, tree: root, defaultKey: def ? def.key : null, problems: problems };
}

/* Screen-level status for tree badges / filters: the default version's status, or To Verify when no design exists. */
export function screenStatus(screen) {
  return screen.defaultVersionKey ? screen.versions[screen.defaultVersionKey].status : TO_VERIFY;
}

/* Stand-in used only for display when a screen has no design version. It is not a version and is never listed as one. */
function noDesign(screen) {
  return {
    key: null, type: null, typeLabel: null, label: "None", status: TO_VERIFY, description: "",
    secondaryActions: [], notes: screen.notes, captures: {}, unassignedCaptures: [], prototype: null, overrides: {}, handoff: {}
  };
}

/* Base + override: version.overrides.<field> wins, otherwise the screen's value is inherited. */
export function resolve(screen, versionKey) {
  const key = screen.versions[versionKey] ? versionKey : screen.defaultVersionKey;
  const hasDesign = !!key;
  const v = hasDesign ? screen.versions[key] : noDesign(screen);
  const o = v.overrides;
  const pick = (f) => (o[f] !== undefined ? o[f] : screen[f]);
  const baseActions = screen.actions || {};
  const actions = o.actions || {};
  return {
    screen: screen,
    versionKey: key,
    hasDesign: hasDesign,
    version: v,
    type: v.type,
    typeLabel: v.typeLabel,
    label: v.label,
    status: v.status,
    scope: screen.scope,
    description: hasDesign ? v.description : screen.purpose || "",
    route: pick("route"),
    flow: Object.assign({}, screen.flow, o.flow),
    dependencies: pick("dependencies"),
    scopeNote: pick("scopeNote"),
    primaryAction: actions.primary || v.primaryAction || baseActions.primary || TO_VERIFY,
    secondaryActions: actions.secondary || (v.secondaryActions.length ? v.secondaryActions : list(baseActions.secondary)),
    notes: v.notes,
    captures: v.captures,
    unassignedCaptures: v.unassignedCaptures,
    prototype: v.prototype,
    overridden: Object.keys(o)
  };
}

/*
 * What the preview can show for a resolved design at a device preset.
 *   prototype: a responsive prototype renders at every preset.
 *   reference: a Reference asset is shown ONLY under the preset it was captured for. It is never reused, resized,
 *              substituted or relabelled for another preset (reviewer zoom in the viewer is not adaptation).
 */
export function previewState(resolved, deviceId) {
  const preset = presetOf(deviceId) || presetOf(DEFAULT_DEVICE);
  if (resolved.prototype) return { kind: "prototype", available: true, preset: preset, src: resolved.prototype, message: "", alternate: null };
  const c = resolved.captures[preset.id];
  if (c) return { kind: "reference", available: true, preset: preset, image: c.image, capturePreset: c.capturePreset, message: "", alternate: null };
  const alternate = DEVICES.filter((d) => resolved.captures[d.id])[0] || null;
  // Capture preset To Verify: shown as its own kind of Reference, never as a known device's Reference.
  const unverified = !alternate && resolved.unassignedCaptures && resolved.unassignedCaptures[0];
  if (unverified) return { kind: "reference", available: true, unverified: true, preset: preset, image: unverified.image, capturePreset: null, message: "", alternate: null };
  let message;
  if (alternate) message = preset.label + " " + resolved.typeLabel + " not available. No " + resolved.typeLabel + " was captured for this preset; " + alternate.label + " " + resolved.typeLabel + " is available.";
  else if (resolved.type && resolved.type !== "reference") message = "Prototype not built for this " + resolved.typeLabel + " version.";
  else message = preset.label + " UI not supplied yet.";
  return { kind: "none", available: false, preset: preset, message: message, alternate: alternate };
}

/* Per preset: does a design exist FOR that preset? A To Verify Reference belongs to no preset, so it counts for none. */
export function availability(resolved) {
  const out = {};
  DEVICES.forEach((d) => { const s = previewState(resolved, d.id); out[d.id] = s.available && !s.unverified; });
  return out;
}
