import { h, clear } from "../utils/dom.js";
import { scopeBadges, badge } from "./badges.js";

/* Collapsible Parent > Child > Sub-child > Screen > State tree. */
export function createDesignTree({ el, empty }, { onSelect, onToggle }) {
  return {
    render({ tree, visibleKeys, selectedKey, open, expandAll, statusOf }) {
      const scrollTop = el.scrollTop;
      clear(el);

      const hasVisible = (n) => (n.screen ? !!visibleKeys[n.screen.key] : n.children.some(hasVisible));

      function build(node, depth) {
        if (!hasVisible(node)) return null;
        if (node.screen) {
          const s = node.screen;
          const selected = s.key === selectedKey;
          return h("li", { class: "tree__item" }, [
            h(
              "button",
              {
                class: "tree__leaf" + (selected ? " is-selected" : ""),
                type: "button",
                "data-key": s.key,
                "aria-current": selected ? "true" : null,
                onclick: () => onSelect(s.key)
              },
              [h("span", { class: "tree__label", text: node.label })]
                .concat(scopeBadges(s.scope, true))
                .concat(statusOf(s) === "To Verify" ? [badge("TO VERIFY", "verify")] : [])
            )
          ]);
        }
        const isOpen = expandAll || !!open[node.pathKey];
        const li = h("li", { class: "tree__item" }, [
          h(
            "button",
            {
              class: "tree__group depth-" + Math.min(depth, 3),
              type: "button",
              "aria-expanded": isOpen ? "true" : "false",
              onclick: () => onToggle(node.pathKey)
            },
            [h("span", { class: "tree__chevron", "aria-hidden": "true", text: isOpen ? "▾" : "▸" }), h("span", { class: "tree__label", text: node.label })]
          )
        ]);
        if (isOpen) {
          const ul = h("ul", { class: "tree__list" });
          node.children.forEach((c) => {
            const built = build(c, depth + 1);
            if (built) ul.appendChild(built);
          });
          li.appendChild(ul);
        }
        return li;
      }

      const rootUl = h("ul", { class: "tree__list tree__list--root" });
      tree.children.forEach((c) => {
        const built = build(c, 0);
        if (built) rootUl.appendChild(built);
      });
      el.appendChild(rootUl);
      empty.hidden = Object.keys(visibleKeys).length > 0;

      el.scrollTop = scrollTop;
      const sel = el.querySelector(".is-selected");
      if (sel && sel.scrollIntoView) sel.scrollIntoView({ block: "nearest" });
    }
  };
}
