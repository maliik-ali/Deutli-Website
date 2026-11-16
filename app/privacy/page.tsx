import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";
import { privacy } from "@/data/legal";

export const metadata: Metadata = { title: "Privacy Policy | Deutli", description: privacy.intro };

export default function Page() {
  return <LegalPage doc={privacy} />;
}
