"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

// Consent is required (§ 25 TDDDG, GDPR) before Google Analytics may set cookies.
// Nothing optional loads until the visitor clicks "Accept". Declining is one click, same as accepting.
const COOKIE = "deutli_consent";
const MAX_AGE = 60 * 60 * 24 * 182; // about 6 months, as stated in the Cookie Policy
const OPEN_EVENT = "deutli:open-cookie-settings";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Choice = "granted" | "denied";

function readChoice(): Choice | null {
  const m = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=(granted|denied)`));
  return m ? (m[1] as Choice) : null;
}

function clearGaCookies() {
  const host = location.hostname;
  const domains = ["", host, `.${host.replace(/^www\./, "")}`];
  document.cookie.split("; ").forEach((c) => {
    const name = c.split("=")[0];
    if (name === "_ga" || name.startsWith("_ga_")) {
      domains.forEach((d) => {
        document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
      });
    }
  });
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function CookieConsent() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Cookies are only readable in the browser, so read them after mount.
    const t = setTimeout(() => {
      const c = readChoice();
      setChoice(c);
      if (!c) setOpen(true);
    }, 0);
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      clearTimeout(t);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  function decide(c: Choice) {
    document.cookie = `${COOKIE}=${c}; Max-Age=${MAX_AGE}; path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
    const withdrew = choice === "granted" && c === "denied";
    setChoice(c);
    setOpen(false);
    if (withdrew) {
      clearGaCookies();
      location.reload(); // unload the already-running analytics script
    }
  }

  return (
    <>
      {GA_ID && choice === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}

      {open && (
        <div role="dialog" aria-modal="false" aria-labelledby="cc-title" className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-[560px] rounded-2xl border border-white/10 bg-[#0d1a45]/95 p-5 text-sm shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur sm:inset-x-6 sm:bottom-6">
          <p id="cc-title" className="text-base font-bold text-white">Cookies on Deutli</p>
          <p className="mt-2 leading-relaxed text-white/70">
            We use essential cookies to make the site work. With your consent we also use Google Analytics to see how the site is used. You can change your choice any time via “Cookie settings” in the footer.{" "}
            <Link href="/cookies" className="underline underline-offset-2 hover:text-white">Cookie Policy</Link> ·{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-white">Privacy Policy</Link>
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <button type="button" onClick={() => decide("denied")} className="h-11 rounded-xl border border-white/20 bg-white/[0.06] font-semibold text-white transition-colors hover:bg-white/[0.12]">Decline</button>
            <button type="button" onClick={() => decide("granted")} className="h-11 rounded-xl border border-white/20 bg-white/[0.06] font-semibold text-white transition-colors hover:bg-white/[0.12]">Accept</button>
          </div>
        </div>
      )}
    </>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Cookie settings
    </button>
  );
}
