import { h, clear } from "../utils/dom.js";
import { FILTERS } from "../utils/searchFilter.js";

export function createSearchBar({ input, chips, count }, { onQuery, onFilter }) {
  input.addEventListener("input", () => onQuery(input.value.trim()));
  return {
    render({ filter, filterCounts, shown, total }) {
      clear(chips);
      FILTERS.forEach((f) => {
        chips.appendChild(
          h("button", {
            type: "button",
            class: "chip" + (filter === f.id ? " is-active" : ""),
            "aria-pressed": filter === f.id ? "true" : "false",
            text: f.label + " (" + filterCounts[f.id] + ")",
            onclick: () => onFilter(f.id)
          })
        );
      });
      count.textContent = shown + " of " + total + " designs";
    }
  };
}
