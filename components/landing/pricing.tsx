"use client";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";
import { SectionHead } from "./section";

type Cur = "PKR" | "EUR";
const price = {
  PKR: { free: "PKR 0", monthly: "PKR 1,999", yearly: "PKR 1,199", noteY: "Billed PKR 14,388 per year. You save PKR 9,600." },
  EUR: { free: "€0", monthly: "€12", yearly: "€7", noteY: "Billed €84 per year. You save €60." },
};
const freeFeatures: [string, boolean][] = [
  ["First learning module", true], ["5 daily words with streaks", true], ["1 mock exam section (Lesen)", true], ["1 AI-checked writing task", true],
  ["Teacher review", false], ["Unlimited mock exams", false],
];
const proFeatures = [
  "Teacher-reviewed homework and writing (8 per month)", "Unlimited timed mock exams", "B1 readiness score across all four skills",
  "10 daily words with audio and Urdu meaning", "Video lessons and downloadable notes", "Ask a teacher, answered within 24 hours", "Certificates for every module",
];

function Toggle<T extends string>({ value, onChange, options }: { value: T; onChange: (v: T) => void; options: { v: T; l: string }[] }) {
  return (
    <div className="inline-flex rounded-xl border border-border bg-card p-1">
      {options.map((o) => (
        <button key={o.v} type="button" onClick={() => onChange(o.v)} aria-pressed={value === o.v}
          className={cn("rounded-lg px-4 py-2 text-sm font-semibold transition-colors", value === o.v ? "dl-gradient text-white" : "text-muted-foreground hover:text-white")}>{o.l}</button>
      ))}
    </div>
  );
}

export function Pricing() {
  const [yearly, setYearly] = useState<"monthly" | "yearly">("yearly");
  const [cur, setCur] = useState<Cur>("PKR");
  const p = price[cur];
  const isY = yearly === "yearly";
  return (
    <section id="pricing" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionHead eyebrow="Pricing" title="Start free. Upgrade when you're ready." sub="Less than the cost of one private lesson a month." />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Toggle value={yearly} onChange={setYearly} options={[{ v: "monthly", l: "Monthly" }, { v: "yearly", l: "Yearly · save 40%" }]} />
          <Toggle value={cur} onChange={setCur} options={[{ v: "PKR", l: "PKR" }, { v: "EUR", l: "EUR" }]} />
        </div>
        <div className="mx-auto mt-10 grid max-w-[900px] gap-6 md:grid-cols-2">
          <BlurFade inView>
            <div className="flex h-full flex-col rounded-[20px] border border-border bg-card p-8">
              <h3 className="text-xl font-bold">Free</h3>
              <div className="mt-4 flex items-baseline gap-2"><span className="text-5xl font-extrabold">{p.free}</span><span className="text-muted-foreground">forever</span></div>
              <p className="mt-3 text-muted-foreground">Try the platform and see how we teach.</p>
              <ul className="mt-6 flex-1 space-y-3 text-[15px]">
                {freeFeatures.map(([t, on]) => (
                  <li key={t} className={cn("flex items-start gap-2.5", !on && "text-muted-foreground/60")}>
                    {on ? <Check className="mt-0.5 size-4 shrink-0 text-[#39ffac]" /> : <X className="mt-0.5 size-4 shrink-0" />}{t}
                  </li>
                ))}
              </ul>
              <a href="https://app.deutli.com/signup" className="mt-8 inline-flex h-12 items-center justify-center rounded-xl border border-border text-[15px] font-semibold transition-colors hover:border-[#a79fff]">Start free</a>
            </div>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-[#7161ff]/60 bg-[#0d1a45] p-8 shadow-[0_0_80px_rgba(113,97,255,0.25)]">
              <ShineBorder shineColor={["#7f25fb", "#cb3cff", "#00c2ff"]} borderWidth={2} />
              <span className="dl-gradient absolute right-6 top-6 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide">BEST FOR EXAM PREP</span>
              <h3 className="text-xl font-bold">Pro</h3>
              <div className="mt-4 flex items-baseline gap-2"><span className="text-5xl font-extrabold">{isY ? p.yearly : p.monthly}</span><span className="text-muted-foreground">/ month</span></div>
              <p className="mt-3 min-h-[3rem] text-muted-foreground">{isY ? p.noteY : "Billed monthly. Switch to yearly and save 40%."}</p>
              <ul className="mt-4 flex-1 space-y-3 text-[15px]">
                <li className="flex items-start gap-2.5 font-semibold"><Check className="mt-0.5 size-4 shrink-0 text-[#39ffac]" />Everything in Free, plus:</li>
                {proFeatures.map((t) => (<li key={t} className="flex items-start gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-[#39ffac]" />{t}</li>))}
              </ul>
              <a href="https://app.deutli.com/signup" className="dl-gradient mt-8 inline-flex h-12 items-center justify-center rounded-xl text-[15px] font-semibold transition-opacity hover:opacity-90">Get Pro</a>
            </div>
          </BlurFade>
        </div>
        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>✓ 14-day full refund</span><span>✓ Cancel anytime in 2 clicks</span><span>✓ Pay by card, JazzCash or Easypaisa</span>
        </p>
      </div>
    </section>
  );
}
