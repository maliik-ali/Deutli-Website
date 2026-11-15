import Image from "next/image";
import Link from "next/link";

// B1 Course, B1 Playbook and Speaking club links are intentionally hidden for now.
const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-[#081028]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/deutli-owl.png" alt="" width={34} height={36} className="h-9 w-[34px]" priority />
          <span className="text-[19px] font-extrabold tracking-tight">Deutli</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://app.deutli.com/login" className="text-sm font-medium text-muted-foreground transition-colors hover:text-white">Sign in</a>
          <a href="https://app.deutli.com/signup" className="dl-gradient inline-flex h-10 items-center rounded-xl px-4 text-sm font-semibold text-white transition-opacity hover:opacity-90">Start free</a>
        </div>
      </div>
    </header>
  );
}
