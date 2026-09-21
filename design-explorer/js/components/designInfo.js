import { h, clear } from "../utils/dom.js";
import { DEVICES, TO_VERIFY, HANDOFF_TYPES, DESIGN_AVAILABILITY } from "../config.js";
import { previewState, availability } from "../utils/registry.js";
import { describeAssetCheck } from "../utils/assetCheck.js";
import { designBadges } from "./badges.js";

/* Extra sections appear only when a version carries the data (Approved / Master handoff, design details). */
const EXTRA_SECTIONS = [
  {
    title: "Design details",
    fields: [
      ["UI component usage", (r) => r.version.components],
      ["Visual / interaction differences", (r) => r.version.visualDifferences],
      ["Responsive notes", (r) => r.version.responsiveNotes]
    ]
  },
  {
    title: "Programmer handoff",
    fields: [
      ["States", (r) => r.version.handoff.states],
      ["Interactions", (r) => r.version.handoff.interactions],
      ["Validation", (r) => r.version.handoff.validation],
      ["Backend / API dependencies", (r) => r.version.handoff.backendDependencies],
      ["CMS dependencies", (r) => r.version.handoff.cmsDependencies],
      ["Business rules", (r) => r.version.handoff.businessRules],
      ["Assets", (r) => r.version.handoff.assets],
      ["Programmer notes", (r) => r.version.programmerNotes],
      ["Acceptance criteria", (r) => r.version.acceptanceCriteria]
    ]
  }
];

const asList = (v) => (Array.isArray(v) ? v : v ? [v] : []);

function field(label, value, opts) {
  const dd = h("dd", { class: !value || value === TO_VERIFY ? "is-muted" : "", text: value || TO_VERIFY });
  return h("div", { class: "field" }, [h("dt", { text: label }, [opts && opts.overridden ? h("span", { class: "tag", text: "version override" }) : null]), dd]);
}

function listField(label, items, opts) {
  const ul = h("ul", { class: "field__list" });
  (items && items.length ? items : ["—"]).forEach((i) => ul.appendChild(h("li", { text: i })));
  return h("div", { class: "field" }, [h("dt", { text: label }, [opts && opts.overridden ? h("span", { class: "tag", text: "version override" }) : null]), h("dd", {}, [ul])]);
}

function runtimeSection(runtime) {
  const r = runtime || {};
  return section("Prototype runtime", [
    field("Reported tier", r.timedOut ? "Prototype did not report" : r.tier || "Waiting for prototype…"),
    field("Reported viewport (CSS px)", r.width !== null && r.width !== undefined ? r.width + " × " + r.height : "—"),
    h("p", { class: "field__hint", text: "Reported by the prototype through the validated postMessage bridge. Prototype tiers are design-review tiers, not a production framework contract." })
  ]);
}

function renderSelftest(el, device, runtime) {
  clear(el);
  const d = DEVICES.filter((x) => x.id === device)[0];
  el.appendChild(h("h2", { class: "info__title", text: "Phase A self-test" }));
  el.appendChild(h("div", { class: "callout callout--future", text: "Developer-only runtime check. A neutral page: not a Mr Pork screen, not a design version, and not part of the app navigation." }));
  el.appendChild(section("Selected preset", [field("Preset", d.label), field("Viewport profile (CSS px)", d.width + " × " + d.height)]));
  el.appendChild(runtimeSection(runtime));
}

function section(title, children) {
  return h("section", { class: "info__section" }, [h("h3", { text: title }), h("dl", {}, children)]);
}

export function createDesignInfo(el, { nameOf }) {
  return {
    render({ resolved, device, assetCheck, runtime }) {
      if (resolved.selftest) return renderSelftest(el, device, runtime);
      const s = resolved.screen;
      const o = (f) => resolved.overridden.indexOf(f) !== -1;
      clear(el);

      el.appendChild(h("h2", { class: "info__title", text: s.path.length > 2 ? s.path.slice(-2).join(" — ") : s.name }));
      el.appendChild(h("div", { class: "info__badges" }, designBadges(resolved)));
      if (resolved.scopeNote) {
        el.appendChild(h("div", { class: "callout callout--" + (s.scope === "External UI" ? "external" : "future"), text: resolved.scopeNote }));
      }

      const ps = previewState(resolved, device);
      const avail = availability(resolved);
      const identity = [field("Screen ID", s.id)];
      if (s.id === TO_VERIFY) {
        identity.push(field("Explorer key (internal)", s.key));
        identity.push(h("p", { class: "field__hint", text: "The Explorer key is an internal slug, not an approved product Screen ID." }));
      }
      identity.push(field("Canonical screen name", s.name));
      identity.push(field("Module", s.module));
      identity.push(field("State", s.state || "—"));
      identity.push(field("Product route / destination", resolved.route, { overridden: o("route") }));
      const presetNote = ps.unverified ? " — no design for this preset (the Reference shown has capture preset To Verify)" : ps.available ? " — design available" : " — not available";
      identity.push(field("Selected device preset", ps.preset.label + " — " + ps.preset.width + " × " + ps.preset.height + " CSS viewport profile" + presetNote));
      if (!ps.available) identity.push(field("Availability note", ps.message));
      identity.push(listField("Preset availability", DEVICES.map((d) => d.label + " — " + (avail[d.id] ? "available" : "not available yet"))));
      identity.push(h("p", { class: "field__hint", text: "A preset is a responsive viewport profile, not a hardware emulator (no device pixel ratio, notch, status bar, browser chrome or safe-area emulation)." }));
      el.appendChild(section("Identity", identity));

      if (ps.kind === "reference") {
        const cp = DEVICES.filter((d) => d.id === ps.capturePreset)[0];
        const rows = [field("Capture preset", ps.unverified ? TO_VERIFY : cp.label + " (" + cp.width + " × " + cp.height + ")")];
        if (ps.unverified) rows.push(h("p", { class: "field__hint", text: "Not associated with any device preset. Do not read this as an iPhone or iPad Reference." }));
        rows.push(field("Asset pixels vs capture preset", assetCheck ? describeAssetCheck(assetCheck) : "Measuring…"));
        rows.push(h("p", { class: "field__hint", text: "Reviewer zoom only. The source asset is never modified or downsampled." }));
        el.appendChild(section("Reference asset", rows));
      }
      if (ps.kind === "prototype") el.appendChild(runtimeSection(runtime));

      const handoffReady = HANDOFF_TYPES.indexOf(resolved.type) !== -1;
      const hasHandoff = EXTRA_SECTIONS[1].fields.some((f) => asList(f[1](resolved)).length);
      el.appendChild(
        section("Status", [
          field("Design availability", DESIGN_AVAILABILITY[s.designAvailability]),
          field("Design version", resolved.hasDesign ? resolved.label : "None — no design version exists"),
          field("Design status", resolved.status),
          field("Scope", s.scope),
          field("Programmer handoff", handoffReady ? (hasHandoff ? "Attached to this version" : "Not yet attached") : resolved.hasDesign ? "Not an implementation source (" + resolved.typeLabel + " design)" : "Not an implementation source (no design supplied)")
        ])
      );

      el.appendChild(section("Product definition", [field("Core purpose", s.purpose), field("Business capability", s.capability), listField("Related screens", s.related.map(nameOf))]));
      el.appendChild(section("Description", [h("p", { class: "info__text", text: resolved.description || "—" })]));
      el.appendChild(section("Actions", [field("Primary action", resolved.primaryAction, { overridden: o("actions") }), listField("Secondary actions", resolved.secondaryActions, { overridden: o("actions") })]));
      el.appendChild(section("Flow", [field("Entry point", resolved.flow.entryPoint, { overridden: o("flow") }), field("Next step", resolved.flow.nextStep, { overridden: o("flow") })]));
      el.appendChild(section("Dependencies", [listField("Depends on", resolved.dependencies, { overridden: o("dependencies") })]));
      el.appendChild(section("Notes", [listField("Known issues / review notes", resolved.notes)]));

      EXTRA_SECTIONS.forEach((sec) => {
        const rows = sec.fields.filter((f) => asList(f[1](resolved)).length).map((f) => listField(f[0], asList(f[1](resolved))));
        if (rows.length) el.appendChild(section(sec.title, rows));
      });
    }
  };
}
