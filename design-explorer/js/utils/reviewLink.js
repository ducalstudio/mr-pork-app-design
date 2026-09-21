/* Builds the shareable review URL from the current view. Contains keys only; no filesystem or asset paths. */
import { formatQuery } from "./router.js";
import { PUBLIC_BASE_URL } from "../config.js";

/* Page address without query or hash: works on Codespaces, a sub-path, or a stable static host. */
export function pageBase(href) {
  return String(href).split("#")[0].split("?")[0];
}

export function buildReviewLink(route, opts) {
  const o = opts || {};
  const base = pageBase(o.baseUrl || PUBLIC_BASE_URL || o.href);
  return base + formatQuery(route);
}
