/* Explorer configuration. Extend these lists (not the components) to support new devices or version types. */
export const TO_VERIFY = "To Verify";
export const DEFAULT_SCREEN_ID = "MP-HOME-001";

/*
 * Device presets. A preset is a responsive VIEWPORT PROFILE (CSS px) for design review, not a hardware emulator.
 * It does not claim to emulate physical hardware, real device pixel ratio, notch / Dynamic Island, OS status bar,
 * browser chrome or platform safe-area behaviour. Future metadata may add those if required; none is invented here.
 * `cls` only groups presets in the switcher; it never selects a Reference image (see CLASS_DEFAULT_CAPTURE).
 */
export const DEVICES = [
  { id: "iphone-se", label: "iPhone SE", width: 375, height: 667, cls: "mobile" },
  { id: "iphone-16-pro-max", label: "iPhone 16 Pro Max", width: 440, height: 956, cls: "mobile" },
  { id: "ipad-mini", label: "iPad mini", width: 744, height: 1133, cls: "tablet" },
  { id: "ipad-pro-12-9", label: "iPad Pro 12.9", width: 1024, height: 1366, cls: "tablet" }
];
export const DEFAULT_DEVICE = "iphone-16-pro-max";

/* Old links / stored views used the two device classes. They resolve to these presets and are rewritten on load. */
export const LEGACY_DEVICE_ALIASES = { mobile: "iphone-16-pro-max", tablet: "ipad-mini" };

/*
 * Capture preset assumed for a Reference asset that only says which class it came from (data helper devices()).
 * Owner-stated basis: Phase 1 Mobile Reference designs come from the iPhone 16 Pro Max frame, 440 x 956.
 * There is no default for tablet: a tablet asset without an explicit capturePreset is "To Verify" and shown nowhere.
 * Any single asset can override this with { image, capturePreset }.
 */
export const CLASS_DEFAULT_CAPTURE = { mobile: "iphone-16-pro-max" };

/*
 * Explicit "capture preset unknown" marker for a Reference asset. Such an asset is never associated with any device
 * preset (no guessing): it is shown only as a Reference whose capture preset is To Verify. Used for the six Phase 1
 * assets that are 400px wide, which cannot be a 440px-wide capture.
 */
export const TO_VERIFY_CAPTURE = "to-verify";

/* Reviewer zoom for the preview pane. Always written explicitly in Review Links. */
export const VIEW_MODES = [
  { id: "fit", label: "Fit" },
  { id: "100", label: "100%" }
];
export const DEFAULT_VIEW_MODE = "fit";

/* Developer-only Phase A runtime self-test. Reachable by URL only; never listed in the tree, search or inventory. */
export const SELFTEST_KEY = "__selftest";
export const SELFTEST_PROTOTYPE = "prototypes/_selftest/index.html";

/* Highest rank first. The default version shown for a screen is its highest-ranked version. */
export const VERSION_TYPES = [
  { id: "master", label: "Master" },
  { id: "approved", label: "Approved" },
  { id: "draft", label: "Draft" },
  { id: "reference", label: "Reference" }
];

/* Programmers implement from these version types only (never Reference / Draft). */
export const HANDOFF_TYPES = ["approved", "master"];

/* Screen-level fields a version may override (base + override model). Anything not overridden is inherited. */
export const OVERRIDABLE_FIELDS = ["flow", "dependencies", "scopeNote", "route", "actions"];

/* Screen-level design availability, separate from any version's status. "to-verify" = no design supplied yet. */
export const DESIGN_AVAILABILITY = {
  available: "Design available",
  "to-verify": "To Verify — UI not supplied yet"
};

/* Review links. URL shape: <page>?screen=<key>&version=<version>&device=<preset-id>&view=<fit|100> */
export const ROUTE_PARAMS = { screen: "screen", version: "version", device: "device", view: "view" };

/*
 * Same-user fallback. Used ONLY when the URL carries no review state at all (none of the ROUTE_PARAMS, no legacy hash).
 * If the URL carries any review state, missing values use deterministic defaults and storage is never read.
 */
export const STORAGE_KEY = "mp-design-explorer:last-view";

/*
 * Optional canonical address for copied review links, e.g. "https://design.example.com/design-explorer/".
 * Empty = use the address the Explorer is currently opened from (Codespaces today, a stable static URL later).
 */
export const PUBLIC_BASE_URL = "";
