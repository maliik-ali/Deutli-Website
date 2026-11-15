import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHead } from "./section";

const steps = [
  { t: "Practise", d: "Write letters, take reading and listening sets, learn 10 new B1 words a day. Everything follows the Goethe and telc formats." },
  { t: "Get checked", d: "AI marks your mistakes in seconds with a plain explanation. A teacher reviews and confirms every correction within 24 hours." },
  { t: "Know when you're ready", d: "Your readiness score updates across Lesen, Hören, Schreiben and Sprechen. Book the exam when the numbers say yes." },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionHead eyebrow="How it works" title="Practise. Get checked. Book with confidence." />
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div aria-hidden className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-gradient-to-r from-transparent via-[#7161ff]/60 to-transparent md:block" />
          {steps.map((s, i) => (
            <BlurFade key={s.t} inView delay={0.12 * i} className="relative text-center">
              <div className="dl-gradient mx-auto flex size-14 items-center justify-center rounded-full text-xl font-extrabold shadow-[0_0_40px_rgba(127,37,251,0.5)]">{i + 1}</div>
              <h3 className="mt-5 text-xl font-bold">{s.t}</h3>
              <p className="mx-auto mt-2 max-w-[320px] leading-relaxed text-muted-foreground">{s.d}</p>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
