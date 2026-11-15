"use client";

import { useState } from "react";
import { Play, Star } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { reviews, type Review } from "@/data/reviews";
import { SectionHead } from "./section";

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`size-3.5 ${i < n ? "fill-[#ffb800] text-[#ffb800]" : "text-white/20"}`} />
      ))}
    </div>
  );
}
function Avatar({ r }: { r: Review }) {
  return r.photo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={r.photo} alt="" className="size-7 rounded-full object-cover" />
  ) : (
    <span className="flex size-7 items-center justify-center rounded-full bg-[#2a1f55] text-[11px] font-bold text-[#e9adff]">
      {r.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
    </span>
  );
}

function ReviewCard({ r }: { r: Review }) {
  if (r.video) {
    return (
      <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1739]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={r.video.poster} alt="" className="aspect-[4/5] w-full object-cover" />
        <a href={r.video.url} target="_blank" rel="noreferrer" aria-label={`Play ${r.name}'s video review`} className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-[#081028] shadow-lg transition-transform group-hover:scale-110"><Play className="size-5 fill-white text-white" /></span>
        </a>
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/75 to-transparent p-3.5">
          <span><span className="block text-sm font-semibold">{r.name}</span>{r.date && <span className="text-xs text-white/70">{r.date}</span>}</span>
          <Stars n={r.rating} />
        </figcaption>
      </figure>
    );
  }
  return (
    <figure className="rounded-2xl border border-white/10 bg-[#0b1739] p-4 transition-colors hover:border-[#7161ff]/60">
      <div className="flex items-center justify-between"><Stars n={r.rating} />{r.date && <span className="text-xs text-muted-foreground">{r.date}</span>}</div>
      <blockquote className="mt-3 text-[15px] leading-relaxed text-white/90">{r.text}</blockquote>
      <figcaption className="mt-4 flex items-center gap-2.5">
        <Avatar r={r} />
        <span className="min-w-0"><span className="block truncate text-sm font-semibold">{r.name}</span>{r.detail && <span className="block truncate text-xs text-muted-foreground">{r.detail}</span>}</span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const [all, setAll] = useState(false);
  if (reviews.length === 0) return null;
  const shown = all ? reviews : reviews.slice(0, 8);
  return (
    <section id="reviews" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionHead eyebrow="Reviews" title="You'll love Deutli." sub="Don't just take our word. Hear from our students." />
        <div className="relative mt-14">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
            {shown.map((r, i) => (
              <BlurFade key={`${r.name}-${i}`} inView delay={0.05 * (i % 4)}><ReviewCard r={r} /></BlurFade>
            ))}
          </div>
          {!all && reviews.length > 8 && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-40 items-end justify-center bg-gradient-to-t from-[#081028] to-transparent">
              <button type="button" onClick={() => setAll(true)} className="pointer-events-auto mb-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#081028] transition-transform hover:scale-105">Show more</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
