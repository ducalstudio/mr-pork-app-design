import { h } from "../utils/dom.js";

export function badge(text, kind) {
  return h("span", { class: "badge badge--" + kind, text: text });
}

export function statusBadge(status) {
  return badge(String(status).toUpperCase(), status === "To Verify" ? "verify" : status === "Draft" ? "draft" : "reference");
}

export function scopeBadges(scope, short) {
  const out = [];
  if (scope === "Future Scope") out.push(badge(short ? "FUTURE" : "FUTURE SCOPE", "future"));
  if (scope === "External UI") out.push(badge(short ? "EXTERNAL" : "EXTERNAL UI", "external"));
  return out;
}

/* Full badge set for the Design Info header. */
export function designBadges(resolved) {
  return [statusBadge(resolved.status)].concat(scopeBadges(resolved.scope, false));
}
