import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { BlurFade } from "@/components/ui/blur-fade";
import { Meteors } from "@/components/ui/meteors";
import { Particles } from "@/components/ui/particles";
import { Ripple } from "@/components/ui/ripple";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SectionHead } from "./section";
import { CookieSettingsButton } from "@/components/consent/cookie-consent";

const faqs: [string, string][] = [
  ["Which exams does this prepare me for?", "Goethe-Zertifikat B1 and telc Deutsch B1. Both test reading, listening, writing and speaking, and our mock exams follow their formats and timing. We are not affiliated with Goethe-Institut or telc."],
  ["What level do I need to start?", "You should have finished A2 or be close to it. Start with the free plan and see how the first module feels."],
  ["Is the AI correction reliable?", "The AI marks mistakes fast and explains them, but it can be wrong. That's why on Pro a teacher reviews your homework and writing and confirms or corrects every mark. You always see both."],
  ["How fast do teachers reply?", "Teacher reviews and questions are answered within 24 hours."],
  ["Can I use Deutli in Urdu?", "Yes. Grammar explanations, mistake feedback and vocabulary come with English and Urdu support."],
  ["How can I pay from Pakistan?", "You can pay in PKR by debit or credit card, bank transfer, JazzCash or Easypaisa. International students can pay in EUR by card."],
  ["Does Pro renew automatically?", "No. You pay once for 1 month or 12 months, and nothing is charged again unless you buy another plan. If Pro isn’t for you, email us within 14 days of paying for a full refund."],
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

const footerCols: { title: string; links: [string, string][] }[] = [
  {
    title: "Product",
    links: [
      ["Modelltests", "#features"],
      ["Pricing", "#pricing"],
      ["For teachers", "/teachers"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Terms", "/terms"],
      ["Privacy", "/privacy"],
      ["Cookies", "/cookies"],
      ["Impressum", "/impressum"],
    ],
  },
];

const socials: { label: string; href: string; path: string }[] = [
  { label: "Instagram", href: "https://instagram.com/deutli", path: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" },
  { label: "Facebook", href: "https://facebook.com/deutli", path: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14A28 28 0 0 0 14.64 2C11.93 2 10 3.66 10 6.7v2.8H7v4h3V22h4v-8.5Z" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060b20]">
      <div aria-hidden className="dl-aurora" style={{ zIndex: 0, width: 520, height: 520, left: -160, top: -260, background: "#7F25FB", opacity: 0.18 }} />
      <div aria-hidden className="dl-aurora" style={{ zIndex: 0, width: 460, height: 460, right: -140, top: -220, background: "#00C2FF", opacity: 0.1, animationDelay: "-9s" }} />
      <AnimatedGridPattern
        numSquares={16}
        maxOpacity={0.18}
        gradients={[["#7f25fb", "#cb3cff"], ["#00c2ff", "#7161ff"], ["#cb3cff", "#7f25fb"]]}
        duration={4}
        repeatDelay={0.6}
        className="pointer-events-none absolute inset-0 h-full w-full fill-[#7161ff]/25 stroke-white/[0.04] [mask-image:radial-gradient(ellipse_80%_90%_at_50%_100%,white,transparent)]"
      />
      <Particles className="pointer-events-none absolute inset-0" quantity={40} ease={80} staticity={60} color="#a79fff" refresh />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7161ff]/70 to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-5 pt-16">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image src="/deutli-owl.png" alt="" width={36} height={38} className="h-[38px] w-9" />
              <span className="text-[22px] font-extrabold tracking-tight">Deutli</span>
            </Link>
            <p className="mt-4 max-w-[380px] leading-relaxed text-muted-foreground">
              Full Modelltests for Goethe B1 and telc B1, with AI-checked homework confirmed by real teachers. Same format, same timing as the real exam.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all hover:-translate-y-0.5 hover:border-[#7161ff]/60 hover:bg-[#7161ff]/15 hover:text-white hover:shadow-[0_0_24px_rgba(113,97,255,0.45)]">
                  <svg viewBox="0 0 24 24" className="size-[18px] fill-current" aria-hidden><path d={s.path} /></svg>
                </a>
              ))}
            </div>
            <a href="https://app.deutli.com/signup" className="mt-7 inline-flex h-10 items-center rounded-full bg-white px-5 text-sm font-semibold text-[#081028] transition-transform hover:scale-[1.03]">Start free →</a>
          </div>

          {footerCols.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">{col.title}</h3>
              <ul className="mt-5 space-y-3.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="group inline-flex items-center gap-1.5 text-[15px] text-white/70 transition-colors hover:text-white">
                      <span className="h-px w-0 bg-[#a79fff] transition-all duration-200 group-hover:w-3" />
                      {label}
                    </Link>
                  </li>
                ))}
                {col.title === "Legal" && (
                  <li>
                    <CookieSettingsButton className="group inline-flex items-center gap-1.5 text-[15px] text-white/70 transition-colors hover:text-white" />
                  </li>
                )}
              </ul>
            </nav>
          ))}
        </div>

        <div aria-hidden className="pointer-events-none mt-14 select-none text-center text-[clamp(72px,20vw,260px)] font-extrabold leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(167,159,255,0.14)] [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]">
          Deutli
        </div>

        <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-white/45">
          <p>© 2026 Deutli · Malik Asad Ali. All rights reserved.</p>
          <p className="text-center">Not affiliated with Goethe-Institut or telc gGmbH.</p>
          <a href="mailto:hello@deutli.com" className="transition-colors hover:text-white">hello@deutli.com</a>
        </div>
      </div>
    </footer>
  );
}
