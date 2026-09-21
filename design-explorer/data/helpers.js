/*
 * Authoring helpers for module data files. They only shape data; normalisation and validation
 * happen in js/utils/registry.js.
 *
 * Data model
 *   screen   = canonical product definition (stable identity, scope, route, purpose, base flow / dependencies …)
 *   versions = design-specific definitions keyed by version: reference | draft | approved | master
 *              (a second draft may use a key like "draft-2"; the type is taken from the key prefix or `type`)
 *   A version inherits every screen-level field unless it lists it under `overrides`
 *   (flow, dependencies, scopeNote, route, actions).
 *
 * A screen with no supplied UI has `versions: {}` and `designAvailability: "to-verify"`. It is never given a
 * fake Reference version. When a real design arrives, add the first version normally and remove designAvailability.
 *
 * Adding a design later never edits an existing version:
 *   versions: {
 *     reference: { … },                                   // kept untouched
 *     draft: { status: "Draft", devices: devices({ mobile: img, tablet: img }), overrides: { flow: { … } } }
 *   }
 * Handoff data for Approved / Master versions goes in `handoff` (states, interactions, validation,
 * backendDependencies, cmsDependencies, businessRules, assets) plus components, responsiveNotes,
 * visualDifferences, programmerNotes and acceptanceCriteria on the version itself.
 */

import { CLASS_DEFAULT_CAPTURE, TO_VERIFY_CAPTURE } from "../js/config.js";

/* Use as capturePreset in devices() when a Reference asset's device preset is not known. */
export const TO_VERIFY_PRESET = TO_VERIFY_CAPTURE;

/* Asset path builders (relative to design-explorer/index.html). Future groups: draft-ui/, approved-ui/, master-ui/. */
export const phase1 = (p) => "../reference-ui/phase-1/" + p;

/*
 * devices({ mobile: path, tablet: path }) — the asset for each class; a class without a path has no asset.
 * An entry may also be { image, capturePreset } to say exactly which device preset the asset represents.
 * A Reference is only ever displayed for its capture preset. Mobile assets default to the preset in
 * CLASS_DEFAULT_CAPTURE (iPhone 16 Pro Max); a tablet asset with no capturePreset stays "To Verify" and is not shown.
 */
export function devices(map) {
  const m = map || {};
  const one = (cls) => {
    const raw = m[cls];
    const image = raw && typeof raw === "object" ? raw.image : raw;
    const capturePreset = (raw && typeof raw === "object" && raw.capturePreset) || CLASS_DEFAULT_CAPTURE[cls] || null;
    return { available: !!image, image: image || null, capturePreset: image ? capturePreset : null };
  };
  return { mobile: one("mobile"), tablet: one("tablet") };
}

export const screen = (s) => s;
export const defineModule = (m) => m;
