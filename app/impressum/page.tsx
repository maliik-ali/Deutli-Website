import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { impressum } from "@/data/legal";

export const metadata: Metadata = { title: "Impressum | Deutli", description: impressum.intro };

export default function Page() {
  return <LegalPage doc={impressum} />;
}
