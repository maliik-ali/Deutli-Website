import { Marquee } from "@/components/ui/marquee";

const items = ["Goethe-Zertifikat B1", "telc Deutsch B1", "Teacher-checked homework", "Timed mock exams", "English + Urdu explanations", "B1 readiness score", "Daily words and streaks", "Video lessons and notes"];

export function MarqueeStrip() {
  return (
    <section aria-label="What Deutli covers" className="border-y border-border/60 py-6">
      <Marquee pauseOnHover className="[--duration:40s] [--gap:3.5rem]">
        {items.map((t) => (
          <span key={t} className="flex items-center gap-3 text-[15px] font-semibold text-muted-foreground">
            <span aria-hidden className="text-[#a79fff]">✦</span>{t}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
