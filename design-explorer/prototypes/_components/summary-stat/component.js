/* summary-stat behavior: number formatting (proposed rule) and value fitting. Classic script. */
(function (root) {
  "use strict";
  var NS = (root.MPProto = root.MPProto || {});
  var money = new Intl.NumberFormat("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  var whole = new Intl.NumberFormat("en-MY", { maximumFractionDigits: 0 });

  /* Steps the value's font size down until it fits its box, never below `min` px. Returns true if it fits. */
  function fit(valueEl, min) {
    valueEl.style.fontSize = "";
    var size = parseFloat(getComputedStyle(valueEl).fontSize) || 16; // start from the CSS size
    valueEl.style.fontSize = size + "px";
    while (valueEl.scrollWidth > valueEl.clientWidth && size > min) {
      size -= 1;
      valueEl.style.fontSize = size + "px";
    }
    return valueEl.scrollWidth <= valueEl.clientWidth;
  }

  NS.summaryStat = {
    formatMoney: function (n) { return money.format(n); },
    formatCount: function (n) { return whole.format(n); },
    fit: fit
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
