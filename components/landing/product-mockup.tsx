import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";

const skills = [
  { name: "Lesen · Reading", v: 74 },
  { name: "Hören · Listening", v: 69 },
  { name: "Schreiben · Writing", v: 58 },
  { name: "Sprechen · Speaking", v: 61 },
];
const nav = ["Dashboard", "Learning path", "Homework", "Mock exams", "Vocabulary", "Ask a teacher", "Certificates"];

export function ProductMockup() {
  return (
    <div className="relative rounded-t-3xl border border-border bg-card p-3.5 pb-0 shadow-[0_-20px_80px_rgba(113,97,255,0.25)]">
      <BorderBeam size={260} duration={9} colorFrom="#7f25fb" colorTo="#cb3cff" />
      <div className="flex items-center gap-2 px-1.5 pb-3">
        <span className="size-[11px] rounded-full bg-border" /><span className="size-[11px] rounded-full bg-border" /><span className="size-[11px] rounded-full bg-border" />
        <span className="ml-4 rounded-lg bg-[#081028] px-3.5 py-1.5 text-xs text-muted-foreground">app.deutli.com/dashboard</span>
      </div>
      <div className="flex overflow-hidden rounded-t-[14px] bg-[#12245c]">
        <aside className="hidden w-56 shrink-0 flex-col gap-1 border-r border-border bg-[#081028] p-4 md:flex">
          <div className="px-2.5 pb-4 text-base font-extrabold">Deutli</div>
          {nav.map((n, i) => (
            <div key={n} className={i === 0 ? "rounded-[10px] bg-[#2a1f55] p-2.5 text-sm font-semibold" : "p-2.5 text-sm text-muted-foreground"}>{n}</div>
          ))}
        </aside>
        <div className="min-w-0 flex-1 space-y-4 p-4 text-left md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xl font-extrabold md:text-2xl">Guten Morgen, Ayesha</div>
              <div className="mt-1 text-sm text-muted-foreground">Your B1 exam: in 41 days</div>
            </div>
            <div className="flex gap-2.5 text-sm font-semibold">
              <div className="rounded-xl border border-border bg-[#081028] px-3.5 py-2">23-day streak</div>
              <div className="rounded-xl border border-border bg-[#081028] px-3.5 py-2">340 coins</div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-baseline justify-between"><span className="text-[15px] font-semibold">B1 readiness</span><span className="text-3xl font-extrabold"><NumberTicker value={68} />%</span></div>
              <div className="mt-4 space-y-3 text-[13px] text-muted-foreground">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between"><span>{s.name}</span><span>{s.v}%</span></div>
                    <div className="mt-1.5 h-2 rounded-full bg-[#12245c]"><div className="dl-gradient h-2 rounded-full" style={{ width: `${s.v}%` }} /></div>
                  </div>
                ))}
              </div>
              <div className="mt-3.5 text-xs text-muted-foreground">Focus this week: Schreiben (formal letters)</div>
            </div>
            <div className="space-y-3 rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center justify-between"><span className="text-[15px] font-semibold">Homework feedback</span><span className="rounded-full bg-[#0e3b33] px-2.5 py-1 text-xs font-semibold text-[#39ffac]">Teacher reviewed ✓</span></div>
              <div className="text-[13px] text-muted-foreground">Email to your landlord · AI found 3 mistakes</div>
              <div className="rounded-xl bg-[#12245c] p-3 text-sm leading-relaxed">
                <div className="text-[#00c2ff] line-through">Ich habe gestern nach Berlin gefahren.</div>
                <div className="font-semibold">Ich bin gestern nach Berlin gefahren.</div>
                <div className="mt-1 text-xs text-muted-foreground">Verbs of movement use “sein” in the Perfekt.</div>
              </div>
              <div className="flex items-start gap-2.5 text-[13px] text-muted-foreground">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#12245c] text-[11px] font-semibold text-white">FS</span>
                <span>“Good structure! Use ‘Sehr geehrte Frau …’ for formal letters.” – Frau Sana</span>
              </div>
              <div className="text-sm font-semibold">Score: 17 / 20</div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4">
            <span className="text-[15px] font-semibold">Today’s words · 8 of 10</span>
            <div className="flex flex-wrap gap-2 text-[13px]">
              {[["der", "Kuchen · cake · کیک"], ["die", "Wohnung · flat · فلیٹ"], ["der", "Termin · appointment"]].map(([a, w]) => (
                <span key={w} className="rounded-lg bg-[#12245c] px-2.5 py-1.5"><b>{a}</b> {w}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
