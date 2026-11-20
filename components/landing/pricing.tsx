"use client";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";
import { SectionHead } from "./section";

/**
 * Pro plans. These must match the plans set in the app (app.deutli.com/admin/payments).
 * Pro is a one-time payment in advance for a fixed number of months. Nothing renews automatically.
 */
const PLANS = [
  { months: 1, price: 2299 },
  { months: 3, price: 5999 },
  { months: 12, price: 16999 },
] as const;
const monthly = PLANS[0].price;
const pkr = (n: number) => `PKR ${n.toLocaleString("en-PK")}`;
const plans = PLANS.map((p) => {
  const full = monthly * p.months;
  const save = p.months > 1 && full > p.price ? full - p.price : 0;
  return { ...p, perMonth: Math.round(p.price / p.months), save, savePct: save ? Math.round((save / full) * 100) : 0 };
});

/** Only things that exist are ticked. What is still being built carries "Soon". */
const freeYes = [
  "1 free telc B1 mock exam",
  "Marked on screen with answer review",
  "“Why?” AI explanation of answers",
  "AI writing check",
  "A1 vocabulary list and word games",
  "Improve Accent: speak along",
];
const freeNo = ["More mock exams", "A2, B1 and B2 vocabulary lists", "Grammar lessons and exercises"];
const proFeatures: { t: string; soon?: boolean }[] = [
  { t: "Every mock exam, new ones as we publish them" },
  { t: "Certificate for every exam" },
  { t: "A2, B1 and B2 vocabulary lists", soon: true },
  { t: "Grammar lessons and exercises", soon: true },
  { t: "Speaking practice in small groups", soon: true },
];

export function Pricing() {
  const [months, setMonths] = useState<number>(3);
  const p = plans.find((x) => x.months === months) ?? plans[1];
  return (
    <section id="pricing" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionHead eyebrow="Pricing" title="Start free. Upgrade when you're ready." sub="Less than the cost of one private lesson a month." />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <div role="group" aria-label="Choose how long Pro lasts" className="inline-flex rounded-xl border border-border bg-card p-1">
            {plans.map((o) => (
              <button
                key={o.months}
                type="button"
                aria-pressed={months === o.months}
                onClick={() => setMonths(o.months)}
                className={cn("rounded-lg px-3 py-2 text-sm font-semibold transition-colors sm:px-4", months === o.months ? "dl-gradient text-white" : "text-muted-foreground hover:text-white")}
              >
                {o.months === 1 ? "1 month" : `${o.months} months`}
                {o.savePct ? <span className="hidden sm:inline"> · save {o.savePct}%</span> : null}
              </button>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-[900px] gap-6 md:grid-cols-2">
          <BlurFade inView>
            <div className="flex h-full flex-col rounded-[20px] border border-border bg-card p-8">
              <h3 className="text-xl font-bold">Free</h3>
              <div className="mt-4 flex items-baseline gap-2"><span className="text-5xl font-extrabold">PKR 0</span><span className="text-muted-foreground">forever</span></div>
              <p className="mt-3 text-muted-foreground">Try the platform and see how we teach.</p>
              <ul className="mt-6 flex-1 space-y-3 text-[15px]">
                {freeYes.map((t) => (
                  <li key={t} className="flex items-start gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-[#39ffac]" />{t}</li>
                ))}
                {freeNo.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-muted-foreground/60"><X className="mt-0.5 size-4 shrink-0" />{t}</li>
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
              <div className="mt-4 flex items-baseline gap-2"><span className="text-5xl font-extrabold">{pkr(p.perMonth)}</span><span className="text-muted-foreground">/ month</span></div>
              <p className="mt-3 min-h-[3rem] text-muted-foreground">
                {p.months === 1
                  ? "One payment for 1 month. Choose a longer plan and save."
                  : `One payment of ${pkr(p.price)} for ${p.months} months.${p.save ? ` You save ${pkr(p.save)}.` : ""} Nothing renews automatically.`}
              </p>
              <ul className="mt-4 flex-1 space-y-3 text-[15px]">
                <li className="flex items-start gap-2.5 font-semibold"><Check className="mt-0.5 size-4 shrink-0 text-[#39ffac]" />Everything in Free, plus:</li>
                {proFeatures.map((f) => (
                  <li key={f.t} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#39ffac]" />
                    <span>{f.t}{f.soon && <span className="ml-2 rounded-full bg-[#1d2560] px-2 py-0.5 align-middle text-[11px] font-semibold text-[#a79fff]">Soon</span>}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[13px] text-muted-foreground">Features marked Soon are included in Pro the day they go live.</p>
              <a href="https://app.deutli.com/signup" className="dl-gradient mt-6 inline-flex h-12 items-center justify-center rounded-xl text-[15px] font-semibold transition-opacity hover:opacity-90">Get Pro</a>
            </div>
          </BlurFade>
        </div>
        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span>✓ 14-day full refund</span><span>✓ One payment, no auto-renewal</span><span>✓ Pay by card, bank transfer, JazzCash or Easypaisa</span>
        </p>
        <p className="mt-3 text-center text-xs text-muted-foreground/70">Prices are in Pakistani rupees and are final prices; they include VAT where applicable. You pay once for the plan you choose; nothing renews automatically. See our <a href="/terms#withdrawal" className="underline underline-offset-2 hover:text-white">Terms and right of withdrawal</a>.</p>
      </div>
    </section>
  );
}
