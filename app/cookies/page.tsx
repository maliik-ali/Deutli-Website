import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { cookies } from "@/data/legal";

export const metadata: Metadata = { title: "Cookie Policy | Deutli", description: cookies.intro };

export default function Page() {
  return <LegalPage doc={cookies} />;
}
