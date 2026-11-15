import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHead } from "./section";

const problems = [
  { n: "01", t: "Your writing comes back days later, or never", d: "You write a letter, wait a week for corrections and repeat the same mistakes in the exam. Writing improves with fast, specific feedback." },
  { n: "02", t: "You don't know what to fix", d: "B1 isn't hard because of grammar. It's hard because nobody shows you which of your mistakes keep costing you points." },
  { n: "03", t: "You can't tell if you're ready to book", d: "The exam fee is high and your visa, job or university depends on it. Booking too early is expensive. Booking too late costs months." },
];

export function Problem() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionHead eyebrow="Sound familiar?" title="Studying harder doesn't help when you can't see your mistakes" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map((p, i) => (
            <BlurFade key={p.n} inView delay={0.1 * i}>
              <MagicCard className="h-full rounded-[20px]" gradientColor="#1d1a52" gradientFrom="#7f25fb" gradientTo="#cb3cff">
                <div className="p-7">
                  <div className="dl-text-gradient text-4xl font-extrabold">{p.n}</div>
                  <h3 className="mt-4 text-xl font-bold leading-snug">{p.t}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
