/* Minimal PNG reader (8-bit, non-interlaced, gray / RGB / RGBA / palette). No dependencies. Used to measure Reference screenshots without a browser. */
import fs from "node:fs";
import zlib from "node:zlib";

export function readPng(file) {
  const b = fs.readFileSync(file);
  if (b.readUInt32BE(0) !== 0x89504e47) throw new Error("not a PNG: " + file);
  let o = 8, w = 0, h = 0, depth = 0, ctype = 0, interlace = 0, plte = null, trns = null; const idat = [];
  while (o < b.length) {
    const len = b.readUInt32BE(o), type = b.toString("ascii", o + 4, o + 8), d = b.subarray(o + 8, o + 8 + len); o += 12 + len;
    if (type === "IHDR") { w = d.readUInt32BE(0); h = d.readUInt32BE(4); depth = d[8]; ctype = d[9]; interlace = d[12]; }
    else if (type === "PLTE") plte = d; else if (type === "tRNS") trns = d; else if (type === "IDAT") idat.push(d); else if (type === "IEND") break;
  }
  if (depth !== 8 || interlace) throw new Error("unsupported PNG (need 8-bit, non-interlaced): " + file);
  const ch = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[ctype]; if (!ch) throw new Error("unsupported colour type " + ctype);
  const raw = zlib.inflateSync(Buffer.concat(idat)), stride = w * ch, px = Buffer.alloc(h * stride);
  for (let y = 0; y < h; y++) {
    const f = raw[y * (stride + 1)], src = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1)), dst = px.subarray(y * stride, (y + 1) * stride), prev = y ? px.subarray((y - 1) * stride, y * stride) : null;
    for (let i = 0; i < stride; i++) {
      const a = i >= ch ? dst[i - ch] : 0, up = prev ? prev[i] : 0, c = prev && i >= ch ? prev[i - ch] : 0; let v = src[i];
      if (f === 1) v += a; else if (f === 2) v += up; else if (f === 3) v += (a + up) >> 1;
      else if (f === 4) { const p = a + up - c, pa = Math.abs(p - a), pb = Math.abs(p - up), pc = Math.abs(p - c); v += pa <= pb && pa <= pc ? a : pb <= pc ? up : c; }
      dst[i] = v & 255;
    }
  }
  const rgba = (x, y) => { const i = (y * w + x) * ch; if (ctype === 6) return [px[i], px[i + 1], px[i + 2], px[i + 3]]; if (ctype === 2) return [px[i], px[i + 1], px[i + 2], 255]; if (ctype === 0) return [px[i], px[i], px[i], 255]; if (ctype === 4) return [px[i], px[i], px[i], px[i + 1]]; const p = px[i]; return [plte[p * 3], plte[p * 3 + 1], plte[p * 3 + 2], trns && p < trns.length ? trns[p] : 255]; };
  return { width: w, height: h, pixel: rgba };
}
export const hex = (c) => "#" + c.slice(0, 3).map((v) => v.toString(16).padStart(2, "0")).join("");

/* Bounding box of pixels that differ from the region's top-left colour by more than `tol` (sum of channel differences). */
export function bbox(img, x0, y0, x1, y1, tol = 90) {
  const bg = img.pixel(x0, y0); let a = 1e9, b = -1, c = 1e9, e = -1;
  for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) { const p = img.pixel(x, y); if (Math.abs(p[0] - bg[0]) + Math.abs(p[1] - bg[1]) + Math.abs(p[2] - bg[2]) > tol) { a = Math.min(a, x); b = Math.max(b, x); c = Math.min(c, y); e = Math.max(e, y); } }
  return b < 0 ? null : { x0: a, x1: b + 1, y0: c, y1: e + 1, w: b - a + 1, h: e - c + 1 };
}
