import { ArrowRight, Check } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import { ProductMockup } from "./product-mockup";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-20 md:pt-28">
      <AnimatedGridPattern
        numSquares={26}
        maxOpacity={0.18}
        duration={4}
        className={cn("[mask-image:radial-gradient(ellipse_70%_55%_at_50%_20%,#000_30%,transparent_80%)]", "inset-x-0 -z-10 h-[760px] skew-y-0 fill-[#a79fff]/20 stroke-[#a79fff]/20")}
      />
      <div aria-hidden className="absolute -left-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-[#7f25fb] opacity-40 blur-[110px]" />
      <div aria-hidden className="absolute -right-40 top-48 -z-10 h-[460px] w-[460px] rounded-full bg-[#00c2ff] opacity-20 blur-[110px]" />

      <div className="mx-auto max-w-[1200px] px-5 text-center">
        <BlurFade delay={0.05}>
          <div className="inline-flex items-center rounded-full border border-[#a79fff]/35 bg-[#12245c]/60 px-4 py-1.5">
            <AnimatedShinyText className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em]">
              <span className="size-2 animate-pulse rounded-full bg-[#39ffac]" />
              For Goethe and telc B1 candidates
            </AnimatedShinyText>
          </div>
        </BlurFade>

        <TextAnimate as="h1" animation="blurInUp" by="word" once
          className="mx-auto mt-6 max-w-[920px] text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-[68px]">
          Pass your German B1 exam, without guessing what to fix
        </TextAnimate>

        <BlurFade delay={0.5}>
          <p className="mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-muted-foreground md:text-xl">
            Write, practise and take timed mock exams. AI marks your work in seconds, a real teacher confirms every correction, and your readiness score tells you exactly when to book. Explained in English and Urdu.
          </p>
        </BlurFade>

        <BlurFade delay={0.65}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="https://app.deutli.com/signup">
              <ShimmerButton background="linear-gradient(135deg,#7f25fb 30%,#cb3cff 91%)" shimmerColor="#ffffff" className="h-12 gap-2 px-7 text-[15px] font-semibold">
                Start free <ArrowRight className="size-4" />
              </ShimmerButton>
            </a>
            <a href="#features" className="inline-flex h-12 items-center rounded-xl border border-white/20 px-6 text-[15px] font-semibold transition-colors hover:border-white">
              See what you can do
            </a>
          </div>
          <p className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
            {["First module free", "No card needed", "Cancel anytime"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5"><Check className="size-4 text-[#39ffac]" />{t}</span>
            ))}
          </p>
        </BlurFade>
      </div>

      <BlurFade delay={0.8} duration={0.9} className="mx-auto mt-16 max-w-[1200px] px-5">
        <ProductMockup />
      </BlurFade>
    </section>
  );
}
