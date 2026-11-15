import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const description =
  "Deutli is the German B1 learning platform: AI-checked homework confirmed by real teachers, timed mock exams, a readiness score and daily words, explained in English and Urdu.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deutli.com"),
  title: "Deutli – Pass your German B1 exam",
  description,
  icons: { icon: "/deutli-owl.png" },
  openGraph: { title: "Deutli – Pass your German B1 exam", description, type: "website", url: "https://www.deutli.com" },
};
export const viewport: Viewport = { themeColor: "#081028" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} dark`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
