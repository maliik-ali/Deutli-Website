import { Plus } from "lucide-react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Meteors } from "@/components/ui/meteors";
import { Particles } from "@/components/ui/particles";
import { Ripple } from "@/components/ui/ripple";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SectionHead } from "./section";

const faqs: [string, string][] = [
  ["Which exams does this prepare me for?", "Goethe-Zertifikat B1 and telc Deutsch B1. Both test reading, listening, writing and speaking, and our mock exams follow their formats and timing. We are not affiliated with Goethe-Institut or telc."],
  ["What level do I need to start?", "You should have finished A2 or be close to it. Start with the free plan and see how the first module feels."],
  ["Is the AI correction reliable?", "The AI marks mistakes fast and explains them, but it can be wrong. That's why on Pro a teacher reviews your homework and writing and confirms or corrects every mark. You always see both."],
  ["How fast do teachers reply?", "Teacher reviews and questions are answered within 24 hours."],
  ["Can I use Deutli in Urdu?", "Yes. Grammar explanations, mistake feedback and vocabulary come with English and Urdu support."],
  ["How can I pay from Pakistan?", "You can pay in PKR by debit or credit card, JazzCash or Easypaisa. International students can pay in EUR by card."],
  ["Can I cancel anytime?", "Yes. Cancel in two clicks from your account, and email us within 14 days of paying for a full refund."],
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-[820px] px-5">
        <SectionHead eyebrow="FAQ" title="Questions, answered" sub="Can't find your answer? Write to hello@deutli.com." />
        <BlurFade inView className="mt-12">
          {faqs.map(([q, a], i) => (
            <details key={q} open={i === 0} className="group border-b border-border py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold [&::-webkit-details-marker]:hidden">
                {q}<Plus className="size-5 shrink-0 text-[#a79fff] transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </BlurFade>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-5 pb-24">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[28px] border border-border bg-gradient-to-b from-[#1a1f5c] to-[#0b1739] px-6 py-24 text-center">
        <div aria-hidden className="dl-aurora" style={{ zIndex: 0, width: 420, height: 420, left: -120, top: -80, background: "#7F25FB", opacity: 0.45 }} />
        <div aria-hidden className="dl-aurora" style={{ zIndex: 0, width: 380, height: 380, right: -100, bottom: -100, background: "#00C2FF", opacity: 0.25, animationDelay: "-8s" }} />
        <div aria-hidden className="dl-aurora" style={{ zIndex: 0, width: 300, height: 300, left: "42%", top: "30%", background: "#CB3CFF", opacity: 0.25, animationDelay: "-13s" }} />
        <Ripple mainCircleSize={260} mainCircleOpacity={0.14} numCircles={7} className="[&>div]:border-[#a79fff]/30 [&>div]:bg-[#a79fff]/[0.06] [&>div]:shadow-none" />
        <Meteors number={14} minDuration={4} maxDuration={11} className="bg-[#a79fff] before:from-[#a79fff]" />
        <Particles className="absolute inset-0" quantity={60} ease={80} color="#a79fff" refresh />
        <div className="relative">
          <Image src="/deutli-owl.png" alt="" width={56} height={60} className="mx-auto h-[60px] w-14" />
          <h2 className="mx-auto mt-5 max-w-[680px] text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">Ready to see exactly what to fix before exam day?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Start with the free plan. No card needed.</p>
          <a href="https://app.deutli.com/signup" className="mt-8 inline-block">
            <ShimmerButton background="linear-gradient(135deg,#7f25fb 30%,#cb3cff 91%)" className="h-12 px-8 text-[15px] font-semibold">Start free →</ShimmerButton>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2.5"><Image src="/deutli-owl.png" alt="" width={24} height={26} /><span className="font-bold text-white">Deutli</span><span>© 2026</span></div>
        <p>Not affiliated with Goethe-Institut or telc gGmbH.</p>
        <div className="flex gap-5">
          <a href="mailto:hello@deutli.com" className="hover:text-white">hello@deutli.com</a>
          <a href="https://app.deutli.com/login" className="hover:text-white">Sign in</a>
        </div>
      </div>
    </footer>
  );
}
