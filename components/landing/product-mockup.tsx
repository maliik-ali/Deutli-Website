import { Award, CheckCircle2, Flame, Home, Languages, MessageCircleQuestion, Mic, PenLine, Sparkles, Speech, Timer, CalendarDays } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";

// Mirrors the real app.deutli.com student dashboard (sidebar, readiness, writing feedback, mock exam, saved words).
const nav = [
  { l: "Dashboard", i: Home, active: true },
  { l: "Improve Accent", i: Speech },
  { l: "My B1 Exam", i: Timer },
  { l: "Homework", i: PenLine, soon: true },
  { l: "Vocabulary", i: Languages },
  { l: "Speaking club", i: Mic, soon: true },
  { l: "Ask a teacher", i: MessageCircleQuestion, soon: true },
  { l: "Certificates", i: Award },
];
const skills = [
  { n: "Lesen", e: "Reading", v: 82 },
  { n: "Hören", e: "Listening", v: 74 },
  { n: "Schreiben", e: "Writing", v: 55, focus: true },
  { n: "Sprechen", e: "Speaking", v: 61 },
];
const words = [
  ["die Vermieterin", "landlady", "مالک مکان"],
  ["der Termin", "appointment", "ملاقات کا وقت"],
  ["die Bewerbung", "application", "درخواست"],
];

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`relative rounded-2xl border border-border bg-card p-5 text-left ${className}`}>{children}</div>;
}

export function ProductMockup() {
  return (
    <div className="relative rounded-t-3xl border border-border bg-card p-3.5 pb-0 shadow-[0_-20px_80px_rgba(113,97,255,0.25)]">
      <BorderBeam size={300} duration={10} colorFrom="#7f25fb" colorTo="#cb3cff" />
      <div className="flex items-center gap-2 px-1.5 pb-3">
        <span className="size-[11px] rounded-full bg-border" /><span className="size-[11px] rounded-full bg-border" /><span className="size-[11px] rounded-full bg-border" />
        <span className="ml-4 rounded-lg bg-[#081028] px-3.5 py-1.5 text-xs text-muted-foreground">app.deutli.com/dashboard</span>
      </div>
      <div className="flex overflow-hidden rounded-t-[14px] border border-b-0 border-border bg-[#081028]">
        <aside className="hidden w-60 shrink-0 border-r border-border bg-card p-4 md:block">
          <div className="flex items-center gap-2.5 px-2 pb-5 pt-1 text-base font-extrabold"><img src="/deutli-owl.png" alt="" width={24} height={26} className="h-[26px] w-6" />Deutli</div>
          <ul className="grid gap-1">
            {nav.map(({ l, i: Icon, active, soon }) => (
              <li key={l} className={`flex h-11 items-center gap-3 rounded-full px-4 text-[15px] font-medium ${active ? "bg-[#1d2560] font-semibold text-white" : "text-muted-foreground"}`}>
                <Icon className={`size-[18px] ${active ? "text-[#a79fff]" : ""}`} aria-hidden />
                <span className="flex-1">{l}</span>
                {soon && <span className="rounded-full bg-[#12245c] px-2 py-0.5 text-[11px] font-semibold">Soon</span>}
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 flex-1 space-y-5 p-4 md:p-7">
          <div className="flex flex-wrap items-end justify-between gap-4 text-left">
            <div>
              <div className="text-[26px] font-extrabold leading-tight md:text-[30px]">Guten Morgen, Ayesha</div>
              <p className="mt-2 flex items-center gap-2 text-[15px] text-muted-foreground">
                <CalendarDays className="size-4 shrink-0" aria-hidden />
                <span>Your exam is in <b className="text-white">41 days</b> · Goethe-Zertifikat B1</span>
              </p>
            </div>
            <div className="flex gap-2 text-sm font-semibold">
              <span className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-4"><Flame className="size-4 text-[#a79fff]" />12-day practice streak</span>
              <span className="hidden h-10 items-center gap-2 rounded-full border border-border bg-card px-4 sm:inline-flex"><Sparkles className="size-4 text-[#a79fff]" />Go Pro</span>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <Card>
              <BorderBeam size={140} duration={9} colorFrom="#7161ff" colorTo="#cb3cff" borderWidth={1.5} />
              <div className="flex items-start justify-between gap-2">
                <div><div className="font-bold">B1 readiness</div><div className="text-sm text-muted-foreground">From your 3 mock exams</div></div>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold">From your results</span>
              </div>
              <p className="mt-5 flex items-baseline gap-2"><span className="whitespace-nowrap text-[52px] font-extrabold leading-none tracking-tight"><NumberTicker value={68} />%</span><span className="text-sm text-muted-foreground">ready · pass mark 60%</span></p>
              <ul className="mt-5 grid gap-3.5">
                {skills.map((s) => (
                  <li key={s.n} className="grid gap-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{s.n} <span className="font-normal text-muted-foreground">· {s.e}</span></span>
                      <span className="flex items-center gap-2 font-semibold">{s.focus && <span className="rounded-full bg-[#2a1f55] px-2 py-0.5 text-[11px] text-[#e9adff]">Focus</span>}{s.v}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#12245c]"><div className={`h-2 rounded-full ${s.focus ? "dl-gradient" : "bg-[#a79fff]/70"}`} style={{ width: `${s.v}%` }} /></div>
                  </li>
                ))}
              </ul>
              <div className="dl-gradient mt-5 inline-flex h-10 items-center rounded-full px-5 text-sm font-semibold">Practise Schreiben</div>
            </Card>

            <div className="grid gap-5 lg:col-span-2">
              <Card>
                <div className="flex items-start justify-between gap-2">
                  <div><div className="text-[13px] font-medium text-muted-foreground">Writing feedback</div><div className="mt-1 text-lg font-bold">Your email · Mock exam 1</div><div className="text-sm text-muted-foreground">Schriftlicher Ausdruck · 112 words</div></div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#0e3b33] px-2.5 py-1 text-xs font-semibold text-[#39ffac]"><CheckCircle2 className="size-3.5" />Teacher reviewed</span>
                </div>
                <p className="mt-4 flex items-baseline gap-2"><span className="text-[44px] font-extrabold leading-none">31</span><span className="text-muted-foreground">of 45 · your teacher&apos;s score</span></p>
                <div className="mt-3 rounded-xl bg-[#12245c] p-3 text-sm leading-relaxed">
                  <span className="text-[#00c2ff] line-through">weil ich habe keine Zeit</span> <span className="font-semibold">weil ich keine Zeit habe</span>
                  <div className="mt-1 text-xs text-muted-foreground">After “weil”, the verb goes to the end.</div>
                </div>
              </Card>
              <div className="grid gap-5 sm:grid-cols-2">
                <Card>
                  <div className="flex items-start justify-between"><div><div className="text-[13px] font-medium text-muted-foreground">Mock exam</div><div className="mt-1 text-lg font-bold">telc B1 · Mock 2</div></div><span className="grid size-10 place-items-center rounded-xl bg-[#12245c]"><Timer className="size-5" /></span></div>
                  <p className="mt-3 text-sm text-muted-foreground">Reading, grammar and listening · 3 h 10 min with writing</p>
                  <p className="mt-1 text-sm text-muted-foreground">Last score: 64 of 90 points.</p>
                </Card>
                <Card>
                  <div className="font-bold">Your saved words</div>
                  <ul className="mt-3 divide-y divide-border text-sm">
                    {words.map(([de, en, ur]) => (
                      <li key={de} className="flex items-center justify-between gap-3 py-2"><span className="font-semibold">{de}</span><span className="text-muted-foreground">{en} · <span dir="rtl" lang="ur">{ur}</span></span></li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
