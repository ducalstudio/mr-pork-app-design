/* otp-input behavior: typing a digit advances to the next box, Backspace on an empty box returns to the previous one.
   Draft convenience, not in the Reference capture (a static image cannot show interaction). */
window.MPProto = window.MPProto || {};
MPProto.otpInput = {
  init(root) {
    const boxes = Array.from(root.querySelectorAll(".otp-input__box"));
    boxes.forEach((box, i) => {
      box.addEventListener("input", () => {
        box.value = box.value.replace(/[^0-9]/g, "").slice(-1);
        if (box.value && boxes[i + 1]) boxes[i + 1].focus();
      });
      box.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !box.value && boxes[i - 1]) boxes[i - 1].focus();
      });
    });
  }
};
