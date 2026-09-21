/* Search + filters. Search matches name, Screen ID, module, state, path and version type / status. */
import { screenStatus } from "./registry.js";

export const FILTERS = [
  { id: "all", label: "All", test: () => true },
  { id: "reference", label: "Reference", test: (s) => screenStatus(s) === "Reference" },
  { id: "future", label: "Future Scope", test: (s) => s.scope === "Future Scope" },
  { id: "toverify", label: "To Verify", test: (s) => screenStatus(s) === "To Verify" }
];

function matches(screen, query) {
  if (!query) return true;
  const versions = screen.versionKeys.map((k) => screen.versions[k].label + " " + screen.versions[k].status).join(" ");
  const hay = [screen.name, screen.designAvailability, screen.id, screen.module, screen.state, screen.path.join(" "), versions].join(" ").toLowerCase();
  return query.toLowerCase().split(/\s+/).filter(Boolean).every((t) => hay.indexOf(t) !== -1);
}

export function filterScreens(screens, query, filterId) {
  const f = FILTERS.filter((x) => x.id === filterId)[0] || FILTERS[0];
  return screens.filter((s) => f.test(s) && matches(s, query));
}
