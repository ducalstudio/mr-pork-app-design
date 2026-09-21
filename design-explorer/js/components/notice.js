import { h, clear } from "../utils/dom.js";

/* Lightweight feedback: a self-dismissing toast, and a dismissible notice bar for link problems. */
export function createNotices({ toast, notices }) {
  let timer = null;
  return {
    toast(text) {
      toast.textContent = text;
      toast.classList.toggle("is-visible", true);
      toast.hidden = false;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => { toast.hidden = true; toast.textContent = ""; }, 2200);
    },
    show(messages) {
      clear(notices);
      notices.hidden = !messages.length;
      messages.forEach((m) => {
        notices.appendChild(h("div", { class: "notice", role: "alert" }, [h("span", { text: m }), h("button", { type: "button", class: "notice__close", "aria-label": "Dismiss", text: "×", onclick: () => this.clear() })]));
      });
    },
    /* Clipboard unavailable: show the link so it can be copied by hand. */
    manualCopy(url) {
      clear(notices);
      notices.hidden = false;
      const input = h("input", { class: "notice__input", type: "text", readonly: "", value: url, "aria-label": "Review link" });
      notices.appendChild(h("div", { class: "notice", role: "alert" }, [h("span", { text: "Could not copy automatically. Copy this review link:" }), input, h("button", { type: "button", class: "notice__close", "aria-label": "Dismiss", text: "×", onclick: () => this.clear() })]));
      if (input.select) input.select();
    },
    clear() {
      clear(notices);
      notices.hidden = true;
    }
  };
}
