import { Hero } from "@/components/landing/hero";
import { SiteNav } from "@/components/landing/site-nav";
import { MarqueeStrip } from "@/components/landing/marquee-strip";
import { Problem } from "@/components/landing/problem";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Features } from "@/components/landing/features";
import { Pricing } from "@/components/landing/pricing";
import { Faq, FinalCta, Footer } from "@/components/landing/faq-cta-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <MarqueeStrip />
        <Problem />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
