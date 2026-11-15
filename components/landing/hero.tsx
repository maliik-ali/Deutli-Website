import { ArrowRight } from "lucide-react";
import { ProductMockup } from "./product-mockup";

const words: { w: string; shine?: boolean }[] = [
  { w: "Pass" }, { w: "your" }, { w: "German" }, { w: "B1" }, { w: "exam," },
  { w: "and", shine: true }, { w: "finally", shine: true }, { w: "speak", shine: true }, { w: "with", shine: true }, { w: "confidence", shine: true },
];

export function Hero() {
  return (
    <section className="dl-hero" style={{ padding: "136px 0 0" }}>
      <div className="dl-stars" aria-hidden="true" />
      <div className="dl-grid" aria-hidden="true" />
      <div className="dl-aurora" aria-hidden="true" style={{ width: 560, height: 560, left: -160, top: 20, background: "#7F25FB" }} />
      <div className="dl-aurora" aria-hidden="true" style={{ width: 480, height: 480, right: -140, top: 180, background: "#00C2FF", opacity: 0.28, animationDelay: "-7s" }} />
      <div className="dl-aurora" aria-hidden="true" style={{ width: 420, height: 420, left: "38%", top: 420, background: "#CB3CFF", opacity: 0.3, animationDelay: "-12s" }} />
      <div className="dl-planet" aria-hidden="true" style={{ top: 640 }} />

      <div className="mx-auto max-w-[1200px] px-5 text-center">
        <div className="dl-in" style={{ margin: "0 0 22px" }}>
          <span className="dl-pill">
            <span className="dl-dot" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-white">For Goethe and telc B1 candidates</span>
          </span>
        </div>
        <h1 className="mx-auto max-w-[920px] text-[38px] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-[64px]">
          {words.map(({ w, shine }, i) => (
            <span key={w}>
              <span className="dl-word" style={{ animationDelay: `${(0.1 + i * 0.07).toFixed(2)}s` }}>
                {shine ? <span className="dl-shine">{w}</span> : w}
              </span>{" "}
            </span>
          ))}
        </h1>
        <p className="dl-in mx-auto mt-6 max-w-[680px] text-lg leading-relaxed text-muted-foreground md:text-[19px]" style={{ animationDelay: "0.9s" }}>
          Deutli is the B1 learning platform where AI checks your homework in seconds and a real teacher confirms every correction. Mock exams, daily practice and an accent trainer, explained in English and Urdu.
        </p>
        <div className="dl-in mt-9 flex flex-wrap justify-center gap-3" style={{ animationDelay: "1.05s" }}>
          <a href="https://app.deutli.com/signup" className="dl-gradient inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-[15px] font-semibold text-white transition-opacity hover:opacity-90">
            Start free <ArrowRight className="size-4" />
          </a>
          <a href="#features" className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-6 text-[15px] font-semibold text-white transition-colors hover:border-white">
            See what&apos;s inside
          </a>
        </div>
        <p className="dl-in mt-5 text-sm text-muted-foreground" style={{ animationDelay: "1.2s" }}>
          ✓ First module free &nbsp;&nbsp; ✓ No card needed &nbsp;&nbsp; ✓ Cancel anytime
        </p>
      </div>

      <div className="dl-tilt mx-auto mt-16 max-w-[1200px] px-5">
        <ProductMockup />
      </div>
    </section>
  );
}
