import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { affiliate } from "@/data/legal";

export const metadata: Metadata = { title: "Partner Program Terms | Deutli", description: affiliate.intro };

export default function Page() {
  return <LegalPage doc={affiliate} />;
}
