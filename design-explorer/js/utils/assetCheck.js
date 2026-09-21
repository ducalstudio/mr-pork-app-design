/*
 * Compares a Reference asset's pixel size with its logical capture preset.
 * The logical capture preset is authoritative for design viewing: an asset exported at 2x / 3x density is still
 * shown as its logical 440 x 956 (etc.) capture, never visually enlarged. The source asset is never modified.
 *
 * status
 *   exact            pixels equal the preset viewport (1x)
 *   density          integer multiple of the preset viewport (2x, 3x ...), full frame
 *   partial-height   width matches (1x or an integer multiple) but height differs: a cropped state, sheet, dialog or
 *                    scrolled capture, or a small height difference
 *   width-mismatch   width is not the preset width or an integer multiple of it
 * matches = exact | density. Everything else is reported, never silently accepted.
 * scale = integer density divisor applied for logical size (1 unless the width is an integer multiple >= 2).
 */
export function assetCheck(natural, preset) {
  const nw = natural.width;
  const nh = natural.height;
  const k = nw % preset.width === 0 && nw / preset.width >= 2 ? nw / preset.width : 1;
  const widthOk = nw === preset.width * k;
  let status;
  if (!widthOk) status = "width-mismatch";
  else if (nh === preset.height * k) status = k === 1 ? "exact" : "density";
  else status = "partial-height";
  return {
    status: status,
    matches: status === "exact" || status === "density",
    scale: k,
    natural: { width: nw, height: nh },
    logical: { width: nw / k, height: nh / k },
    preset: { width: preset.width, height: preset.height }
  };
}

export function describeAssetCheck(c) {
  if (c.status === "capture-unverified") return c.natural.width + " × " + c.natural.height + " px — shown at natural size (1×). Its capture preset is To Verify, so there is nothing to compare it with and it is not associated with any device preset.";
  const px = c.natural.width + " × " + c.natural.height + " px";
  const vp = c.preset.width + " × " + c.preset.height;
  if (c.status === "exact") return px + " — matches the capture preset viewport (" + vp + ", 1×).";
  if (c.status === "density") return px + " — " + c.scale + "× density of the capture preset viewport (" + vp + "). Shown at its logical " + c.logical.width + " × " + c.logical.height + " size.";
  if (c.status === "partial-height") return px + " — width matches the capture preset (" + c.scale + "×) but height differs from the full " + vp + " frame (cropped state, sheet, dialog or scrolled capture). Not a full-frame match.";
  return px + " — width does not match the capture preset width (" + c.preset.width + "). Shown at natural size (1×). Not a match.";
}
