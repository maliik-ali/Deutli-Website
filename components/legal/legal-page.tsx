import { SiteNav } from "@/components/landing/site-nav";
import { Footer } from "@/components/landing/faq-cta-footer";
import type { LegalDoc } from "@/data/legal";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-[820px] px-5 pb-24 pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a79fff]">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">{doc.title}</h1>
        <p className="mt-3 text-sm text-white/45">Last updated {doc.updated}</p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{doc.intro}</p>

        <nav aria-label="On this page" className="mt-10 rounded-2xl border border-border bg-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">On this page</p>
          <ul className="mt-3 grid gap-x-6 gap-y-2 text-[15px] sm:grid-cols-2">
            {doc.sections.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="text-white/70 transition-colors hover:text-white">{s.title}</a></li>
            ))}
          </ul>
        </nav>

        <div className="mt-12 space-y-10">
          {doc.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight">{s.title}</h2>
              <div className="mt-3 space-y-4 leading-relaxed text-muted-foreground">
                {s.blocks.map((b, i) =>
                  b.ul ? (
                    <ul key={i} className="list-disc space-y-2 pl-6 marker:text-[#a79fff]">
                      {b.ul.map((li) => <li key={li}>{li}</li>)}
                    </ul>
                  ) : (
                    <p key={i}>{b.p}</p>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
