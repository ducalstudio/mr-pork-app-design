/* promo-carousel behavior. Classic script. No autoplay, no looping. Dots follow the visible slide. */
(function (root) {
  "use strict";
  var NS = (root.MPProto = root.MPProto || {});

  NS.promoCarousel = {
    init: function (el) {
      var scroller = el.querySelector(".promo-carousel__scroller");
      var slides = el.querySelectorAll(".promo-carousel__slide");
      var dotsBox = el.querySelector(".promo-carousel__dots");
      var status = el.querySelector(".promo-carousel__status");
      var total = slides.length;
      var dots = [];
      for (var i = 0; i < total; i++) {
        var d = document.createElement("span");
        d.className = "promo-carousel__dot";
        dotsBox.appendChild(d);
        dots.push(d);
      }
      var current = -1;
      function update() {
        var w = scroller.clientWidth || 1;
        var idx = Math.max(0, Math.min(total - 1, Math.round(scroller.scrollLeft / w)));
        if (idx === current) return;
        current = idx;
        dots.forEach(function (dot, n) { dot.classList.toggle("is-active", n === idx); });
        if (status) status.textContent = "Slide " + (idx + 1) + " of " + total;
      }
      scroller.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      update();
    }
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
