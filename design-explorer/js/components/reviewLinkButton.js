import { copyText } from "../utils/clipboard.js";
import { buildReviewLink } from "../utils/reviewLink.js";

/* Header "Copy Review Link". Builds the link from the current view (not from the address bar text). */
export function createReviewLinkButton(el, { getRoute, notices }) {
  el.addEventListener("click", () => {
    const url = buildReviewLink(getRoute(), { href: location.href });
    copyText(url).then((ok) => {
      if (ok) notices.toast("Review link copied");
      else notices.manualCopy(url);
    });
  });
}
