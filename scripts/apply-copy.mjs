#!/usr/bin/env node
// Applies text edits made in Figma to the real landing page source.
//
// Usage:  node scripts/apply-copy.mjs <edited.json> [--all] [--dry]
//   edited.json = { "desktop": {key: text}, "mobile": {key: text} }  (or one flat {key: text})
//   Compared against copy/figma-snapshot.json (the text as it was when the Figma file was built).
//   Only keys whose text changed are touched; the matching old text is replaced in components/landing/*.tsx.
//   --all  also replace when the old text occurs more than once (e.g. every "Start free" button)
//   --dry  show what would change without writing
// After a successful run the snapshot is updated, so the next sync only sees newer edits.
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith("--"));
const ALL = args.includes("--all");
const DRY = args.includes("--dry");
if (!file) { console.error("Usage: node scripts/apply-copy.mjs <edited.json> [--all] [--dry]"); process.exit(1); }

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const snapPath = path.join(root, "copy/figma-snapshot.json");
const snap = JSON.parse(fs.readFileSync(snapPath, "utf8"));
const edited = JSON.parse(fs.readFileSync(file, "utf8"));
const frames = edited.desktop || edited.mobile ? [edited.desktop || {}, edited.mobile || {}] : [edited];

// Keys that are decoration/derived in Figma and must be edited in code instead.
const SKIP = new Set(["hero.title", "hero.note", "footer.product.title", "footer.legal.title", "logo", "logo.footer"]);
const strip = (k, s) => {
  let t = s.replace(/^[✓✕✦]\s+/, "");
  if (/^pricing\.freeFeature\.[56]$/.test(k)) t = t.replace(/\s*\(Pro only\)$/, "");
  return t;
};

const dir = path.join(root, "components/landing");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx")).map((f) => path.join(dir, f));
const src = Object.fromEntries(files.map((f) => [f, fs.readFileSync(f, "utf8")]));

const changes = {};
for (const fr of frames) for (const [k, v] of Object.entries(fr)) {
  if (!(k in snap) || SKIP.has(k) || v === snap[k]) continue;
  if (changes[k] && changes[k] !== v) { console.warn(`CONFLICT  ${k}: desktop and mobile were edited differently - using the first one`); continue; }
  changes[k] = v;
}

let heroDone = false;
// hero.title is built word by word in hero.tsx (words after the first comma get the "shine" effect).
if (frames.some((fr) => fr["hero.title"] && fr["hero.title"] !== snap["hero.title"])) {
  const nt = frames.map((fr) => fr["hero.title"]).find((t) => t && t !== snap["hero.title"]);
  const ws = nt.trim().split(/\s+/); let shine = false;
  const lit = ws.map((w) => { const o = `{ w: ${JSON.stringify(w)}${shine ? ", shine: true" : ""} }`; if (w.endsWith(",")) shine = true; return o; }).join(", ");
  const hp = path.join(dir, "hero.tsx");
  src[hp] = src[hp].replace(/const words: \{ w: string; shine\?: boolean \}\[\] = \[[\s\S]*?\n\];/, `const words: { w: string; shine?: boolean }[] = [\n  ${lit},\n];`).replace("<span key={w}>", "<span key={`${w}-${i}`}>");
  snap["hero.title"] = nt; heroDone = true; console.log(`APPLIED   hero.title -> "${nt}"`);
}

const variants = (s) => [...new Set([s, s.replace(/'/g, "&apos;"), s.replace(/"/g, '\\"'), s.replace(/"/g, "&quot;")])];
const esc = (s) => s.replace(/\$/g, "$$$$");
let applied = heroDone ? 1 : 0;
const report = [];
for (const [k, nv] of Object.entries(changes)) {
  const o = strip(k, snap[k]);
  const n = strip(k, nv);
  if (/[<>{}]/.test(n)) { report.push(`SKIPPED   ${k}: new text contains < > { } - edit in code`); continue; }
  let hits = [];
  for (const f of files) for (const v of variants(o)) {
    let i = -1; while ((i = src[f].indexOf(v, i + 1)) !== -1) hits.push({ f, v });
  }
  if (!hits.length) { report.push(`NOT FOUND ${k}: "${o.slice(0, 60)}" (text is probably built in code, edit manually)`); continue; }
  if (hits.length > 1 && !ALL) { report.push(`AMBIGUOUS ${k}: "${o.slice(0, 40)}" occurs ${hits.length}x - rerun with --all to replace every one`); continue; }
  for (const f of files) for (const v of variants(o)) {
    const nvv = v === o ? n : v.includes("&apos;") ? n.replace(/'/g, "&apos;") : v.includes("&quot;") ? n.replace(/"/g, "&quot;") : n.replace(/"/g, '\\"');
    src[f] = src[f].split(v).join(nvv);
  }
  snap[k] = nv; applied++;
  report.push(`APPLIED   ${k}: "${o.slice(0, 40)}" -> "${n.slice(0, 40)}"`);
}
console.log(report.join("\n") || "No text changes found.");
console.log(`\n${applied} change(s) ${DRY ? "(dry run, nothing written)" : "written"}.`);
if (!DRY && applied) {
  for (const f of files) fs.writeFileSync(f, src[f]);
  fs.writeFileSync(snapPath, JSON.stringify(snap, null, 2) + "\n");
}
