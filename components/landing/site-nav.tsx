"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, ChevronDown, Clock3, Flame, LineChart, Menu, MessageCircleQuestion, PlayCircle, X } from "lucide-react";
import { reviews } from "@/data/reviews";
import { cn } from "@/lib/utils";

// B1 Course, B1 Playbook and Speaking club links are intentionally hidden for now.
const featureItems = [
  { icon: BookOpenCheck, title: "Teacher-checked homework", desc: "AI marks it in seconds, a teacher confirms." },
  { icon: Clock3, title: "Timed mock exams", desc: "Goethe and telc style, real exam timing." },
  { icon: LineChart, title: "Readiness score", desc: "Know when you're ready to book." },
  { icon: Flame, title: "Daily words and streaks", desc: "10 B1 words a day, with Urdu meanings." },
  { icon: PlayCircle, title: "Video lessons and notes", desc: "Short lessons in English and Urdu." },
  { icon: MessageCircleQuestion, title: "Ask a teacher", desc: "Get an answer within 24 hours." },
];
const links = [
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  ...(reviews.length ? [{ href: "#reviews", label: "Reviews" }] : []),
  { href: "#faq", label: "FAQ" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && (setOpen(false), setMenu(false));
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-[1180px] items-center justify-between gap-4 rounded-full border px-3 py-2 pl-5 transition-all duration-300",
          scrolled || menu ? "border-white/10 bg-[#0b1230]/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl" : "border-transparent bg-transparent",
        )}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/deutli-owl.png" alt="" width={32} height={34} className="h-[34px] w-8" priority />
          <span className="text-[19px] font-extrabold tracking-tight">Deutli</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button
              type="button"
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpen((v) => !v)}
              onFocus={() => setOpen(true)}
              className={cn("flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors", open ? "bg-white/10 text-white" : "text-white/75 hover:text-white")}
            >
              Features <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
            </button>
            <div
              className={cn(
                "absolute left-0 top-full w-[640px] pt-3 transition-all duration-200",
                open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
              )}
            >
              <div className="rounded-2xl border border-white/10 bg-[#0b1230]/95 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                <div className="grid grid-cols-2">
                  {featureItems.map(({ icon: Icon, title, desc }) => (
                    <a key={title} href="#features" onClick={() => setOpen(false)} className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.06]">
                      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#2a1f55]"><Icon className="size-4 text-[#a79fff]" /></span>
                      <span>
                        <span className="block text-sm font-semibold">{title}</span>
                        <span className="mt-0.5 block text-[13px] leading-snug text-muted-foreground">{desc}</span>
                      </span>
                    </a>
                  ))}
                </div>
                <a href="#features" onClick={() => setOpen(false)} className="mt-1 flex items-center justify-between rounded-xl bg-white/[0.05] px-3 py-3 text-sm font-semibold transition-colors hover:bg-white/10">
                  All features <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="https://app.deutli.com/login" className="hidden px-3 text-sm font-medium text-white/75 transition-colors hover:text-white sm:block">Sign in</a>
          <a href="https://app.deutli.com/signup" className="inline-flex h-10 items-center rounded-full bg-white px-5 text-sm font-semibold text-[#081028] transition-transform hover:scale-[1.03]">Start free</a>
          <button type="button" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu((v) => !v)} className="flex size-10 items-center justify-center rounded-full border border-white/15 md:hidden">
            {menu ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menu && (
        <div className="mx-auto mt-2 max-w-[1180px] rounded-3xl border border-white/10 bg-[#0b1230]/95 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden">
          <a href="#features" onClick={() => setMenu(false)} className="block rounded-xl px-4 py-3 text-[15px] font-semibold">Features</a>
          {links.map((l) => (<a key={l.href} href={l.href} onClick={() => setMenu(false)} className="block rounded-xl px-4 py-3 text-[15px] font-semibold">{l.label}</a>))}
          <a href="https://app.deutli.com/login" className="block rounded-xl px-4 py-3 text-[15px] font-semibold text-muted-foreground">Sign in</a>
        </div>
      )}
    </header>
  );
}
