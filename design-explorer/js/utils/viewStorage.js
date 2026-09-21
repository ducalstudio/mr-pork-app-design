/* Same-user "last view" fallback (read only when the URL has no review state at all). Every access is guarded: storage can be blocked or throw. */
import { STORAGE_KEY } from "../config.js";

export function loadView() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const v = raw && JSON.parse(raw);
    return v && typeof v.key === "string" ? { key: v.key, version: v.version || null, device: v.device || null, view: v.view || null } : null;
  } catch (e) {
    return null;
  }
}

export function saveView(route) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ key: route.key, version: route.version || null, device: route.device || null, view: route.view || null }));
  } catch (e) { /* storage unavailable: the URL still carries the view */ }
}
