import { Award, BookOpenCheck, Clock3, Languages, LineChart, MessageCircleQuestion, PlayCircle, Flame } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedList } from "@/components/ui/animated-list";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { MagicCard } from "@/components/ui/magic-card";
import { SectionHead } from "./section";

function Card({ icon: Icon, title, desc, className = "", children }: { icon: React.ElementType; title: string; desc: string; className?: string; children?: React.ReactNode }) {
  return (
    <MagicCard className={`h-full rounded-[20px] ${className}`} gradientColor="#1d1a52" gradientFrom="#7f25fb" gradientTo="#cb3cff">
      <div className="flex h-full flex-col p-6">
        <div className="flex size-11 items-center justify-center rounded-xl bg-[#2a1f55]"><Icon className="size-5 text-[#a79fff]" strokeWidth={1.8} /></div>
        <h3 className="mt-4 text-xl font-bold">{title}</h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">{desc}</p>
        {children && <div className="mt-6 flex-1">{children}</div>}
      </div>
    </MagicCard>
  );
}

const feedback = [
  { who: "AI", msg: "Found 3 mistakes in 4 seconds", tone: "#00c2ff" },
  { who: "Rule", msg: "Movement verbs use “sein” in the Perfekt", tone: "#a79fff" },
  { who: "Frau Sana", msg: "Confirmed. Use “Sehr geehrte Frau …”", tone: "#39ffac" },
  { who: "Score", msg: "17 / 20 · up 2 points from last letter", tone: "#cb3cff" },
];
const words = [["der", "Termin", "ملاقات کا وقت"], ["die", "Wohnung", "فلیٹ"], ["das", "Ergebnis", "نتیجہ"], ["der", "Kuchen", "کیک"], ["die", "Bewerbung", "درخواست"], ["das", "Zeugnis", "سرٹیفکیٹ"]];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionHead eyebrow="The platform" title="Everything you need to pass B1, in one place" sub="AI makes practice fast. Teachers make it right. You always see both." />
        <div className="mt-14 grid auto-rows-[minmax(0,auto)] gap-5 md:grid-cols-6">
          <BlurFade inView className="md:col-span-4">
            <Card icon={BookOpenCheck} title="Teacher-checked homework" desc="AI marks mistakes in seconds with an explanation in English or Urdu. Your teacher confirms or corrects it within 24 hours.">
              <AnimatedList delay={1800} className="gap-2.5">
                {[...feedback].reverse().map((f) => (
                  <div key={f.msg} className="flex w-full items-center gap-3 rounded-xl border border-border bg-[#12245c]/70 px-4 py-3 text-sm">
                    <span className="rounded-md px-2 py-0.5 text-xs font-bold text-[#081028]" style={{ background: f.tone }}>{f.who}</span>
                    <span>{f.msg}</span>
                  </div>
                ))}
              </AnimatedList>
            </Card>
          </BlurFade>
          <BlurFade inView delay={0.1} className="md:col-span-2">
            <Card icon={LineChart} title="Readiness score" desc="Your level in all four skills, so you know when to book before paying the exam fee.">
              <div className="flex items-baseline gap-1"><span className="dl-text-gradient text-6xl font-extrabold"><NumberTicker value={68} /></span><span className="text-2xl font-bold text-muted-foreground">%</span></div>
              <div className="mt-3 h-2 rounded-full bg-[#12245c]"><div className="dl-gradient h-2 w-[68%] rounded-full" /></div>
            </Card>
          </BlurFade>
          <BlurFade inView className="md:col-span-2">
            <Card icon={Clock3} title="Timed B1 mock exams" desc="Full Goethe- and telc-style mocks for Lesen, Hören and Schreiben, under real exam timing." />
          </BlurFade>
          <BlurFade inView delay={0.1} className="md:col-span-4">
            <Card icon={Flame} title="Daily words and streaks" desc="10 B1 words a day with article, audio, example sentence and Urdu meaning. Keep your streak and earn coins for free notes.">
              <Marquee pauseOnHover className="[--duration:30s] [--gap:0.75rem] p-0">
                {words.map(([a, w, u]) => (
                  <span key={w} className="whitespace-nowrap rounded-xl border border-border bg-[#12245c]/70 px-4 py-2.5 text-sm"><b className="text-[#a79fff]">{a}</b> {w} · <span dir="rtl">{u}</span></span>
                ))}
              </Marquee>
            </Card>
          </BlurFade>
          <BlurFade inView className="md:col-span-2"><Card icon={PlayCircle} title="Video lessons and notes" desc="Short lessons with subtitles and downloadable notes, with grammar explained in English and Urdu." /></BlurFade>
          <BlurFade inView delay={0.1} className="md:col-span-2"><Card icon={MessageCircleQuestion} title="Ask a teacher" desc="Stuck on a question? Send it and get a teacher's answer within 24 hours." /></BlurFade>
          <BlurFade inView delay={0.2} className="md:col-span-2"><Card icon={Award} title="Certificates" desc="Earn a Deutli certificate for every finished module to share on your CV or LinkedIn." /></BlurFade>
          <BlurFade inView className="md:col-span-6">
            <div className="flex flex-wrap items-center gap-4 rounded-[20px] border border-border bg-card px-6 py-5">
              <Languages className="size-6 text-[#a79fff]" strokeWidth={1.8} />
              <p className="flex-1 text-[15px] text-muted-foreground"><b className="text-white">Explained in English and Urdu.</b> Grammar rules, mistake explanations and vocabulary all come with Urdu support, so you understand why, not just what.</p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
