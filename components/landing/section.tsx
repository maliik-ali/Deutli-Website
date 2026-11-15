import { BlurFade } from "@/components/ui/blur-fade";

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <BlurFade inView className="mx-auto max-w-[760px] text-center">
      <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#a79fff]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{sub}</p>}
    </BlurFade>
  );
}
