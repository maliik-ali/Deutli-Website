import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { terms } from "@/data/legal";

export const metadata: Metadata = { title: "Terms of Service | Deutli", description: terms.intro };

export default function Page() {
  return <LegalPage doc={terms} />;
}
