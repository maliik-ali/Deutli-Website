// Legal page content. Adapted in structure from common edtech terms; review with a lawyer before relying on it.
// Fill in COMPANY details below once your legal entity is registered.
export const COMPANY = {
  name: "Deutli",
  email: "hello@deutli.com",
  privacyEmail: "hello@deutli.com",
  partnersEmail: "hello@deutli.com",
  // Set these when known, e.g. "Deutli Ltd, 1 Example Street, City, Country"
  address: "",
  governingLaw: "", // e.g. "the laws of England and Wales"
};

export type Block = { p?: string; ul?: string[] };
export type Section = { id: string; title: string; blocks: Block[] };
export type LegalDoc = { slug: string; title: string; updated: string; intro: string; sections: Section[] };

const updated = "November 16, 2026";

export const terms: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  updated,
  intro: "These terms govern your use of the Deutli website, app and services. Please read them before you create an account.",
  sections: [
    { id: "introduction", title: "1. Introduction", blocks: [
      { p: "Welcome to Deutli. These Terms of Service (the “Terms”) apply to your use of our website, app and related services (the “Services”), operated by Deutli (“we”, “us”, “our”). By creating an account or using the Services you agree to these Terms. If you do not agree, please do not use the Services." },
    ] },
    { id: "services", title: "2. What Deutli offers", blocks: [
      { p: "Deutli is an online platform that helps learners prepare for the Goethe-Zertifikat B1 and telc Deutsch B1 exams. Depending on your plan, the Services include:" },
      { ul: ["Timed mock exams that follow the format of the real exams", "AI-checked homework and writing, reviewed by teachers on paid plans", "A B1 readiness score across reading, listening, writing and speaking", "Daily words, video lessons, downloadable notes and the option to ask a teacher a question", "Explanations in English and Urdu"] },
      { p: "Deutli is an independent service. We are not affiliated with, endorsed by or connected to Goethe-Institut or telc gGmbH." },
    ] },
    { id: "accounts", title: "3. Your account", blocks: [
      { ul: ["You must provide accurate information when you sign up and keep it up to date.", "You must be at least 16 years old to use the Services.", "You are responsible for keeping your login details secure and for all activity under your account.", "Accounts are personal. Please do not share your login with others.", "We may suspend or close an account that breaks these Terms or is used unlawfully."] },
    ] },
    { id: "plans", title: "4. Plans, payments and refunds", blocks: [
      { p: "Deutli offers a free plan and a paid Pro plan, billed monthly or yearly. Prices are shown on our pricing section in PKR or EUR before you pay. Payment can be made by debit or credit card, and in Pakistan also by JazzCash or Easypaisa, through third-party payment providers. We do not store your full card details." },
      { ul: [
        "Pro access lasts for the period you have paid for and is personal and non-transferable.",
        "Subscriptions renew automatically at the end of each billing period until you cancel. You can cancel in two clicks from your account, and access continues until the end of the period you have paid for.",
        "Refunds: if you email us within 14 days of paying, we will refund you in full.",
        "We may decline a refund where an account has been closed for breaking these Terms, or where we find abuse of the refund policy.",
        "We may change our prices. Changes never apply to a period you have already paid for, and we will tell you before a new price applies to your renewal.",
      ] },
    ] },
    { id: "content", title: "5. Content and intellectual property", blocks: [
      { p: "All lessons, mock exams, notes, videos, text, graphics, software and the Deutli name and logo belong to us or our licensors and are protected by copyright and other laws. We give you a limited, personal, non-commercial licence to use them for your own exam preparation." },
      { p: "If you submit content to us, such as written answers or questions to a teacher, you keep ownership but give us a non-exclusive licence to store and use it to provide and improve the Services, including having a teacher review it. Third-party content stays under the rights of its owners." },
    ] },
    { id: "conduct", title: "6. Acceptable use", blocks: [
      { p: "You agree not to:" },
      { ul: ["share, resell or publish your account or our materials", "copy, scrape or redistribute our mock exams, lessons or other content", "bypass access limits or payment requirements", "give false information or impersonate someone else", "interfere with or damage the Services, or upload malicious code", "use the Services for anything unlawful, abusive or harassing toward other learners or teachers"] },
    ] },
    { id: "ai", title: "7. AI feedback and teacher review", blocks: [
      { p: "Deutli uses AI to mark mistakes and explain them quickly. AI can be wrong. On paid plans a teacher reviews your homework and writing and confirms or corrects each mark. Feedback, scores and the readiness score are study aids, not an official assessment, and we do not guarantee that they predict your result in a real exam." },
    ] },
    { id: "privacy", title: "8. Privacy", blocks: [
      { p: "We handle personal data as described in our Privacy Policy and in line with applicable data protection laws." },
    ] },
    { id: "third-party", title: "9. Third-party services", blocks: [
      { p: "Parts of the Services may rely on or link to third-party services such as payment providers, video and audio hosting. These are governed by their own terms and we are not responsible for their availability or content." },
    ] },
    { id: "availability", title: "10. Availability", blocks: [
      { p: "We work hard to keep Deutli available and will try to give notice of planned maintenance. We cannot promise uninterrupted service, and we are not liable for interruptions caused by events outside our reasonable control, such as internet or hosting failures." },
    ] },
    { id: "warranties", title: "11. Disclaimer", blocks: [
      { p: "The Services are provided “as is” and “as available”. To the extent permitted by law, we do not guarantee that you will pass any exam, that content is free from errors, or that the Services will be uninterrupted. Your exam result depends on many factors, including your own preparation." },
    ] },
    { id: "liability", title: "12. Limitation of liability", blocks: [
      { p: "To the extent permitted by law, we are not liable for indirect or consequential losses, loss of profits or data, service interruptions, actions of third parties, or exam results. Nothing in these Terms limits liability that cannot be limited by law, and nothing affects your statutory consumer rights." },
    ] },
    { id: "changes", title: "13. Changes to these Terms", blocks: [
      { p: "We may update these Terms from time to time. We will post the new version on this page and change the date at the top. If you keep using the Services after a change, you accept the updated Terms." },
    ] },
    { id: "law", title: "14. Governing law", blocks: [
      { p: COMPANY.governingLaw ? `These Terms are governed by ${COMPANY.governingLaw}.` : "These Terms are governed by the law that applies to Deutli’s operating company, and nothing in them removes mandatory consumer protections that apply where you live." },
    ] },
    { id: "accessibility", title: "15. Accessibility", blocks: [
      { p: "We want Deutli to be usable by as many learners as possible. If you find an accessibility problem, please tell us and we will work to fix it." },
    ] },
    { id: "severability", title: "16. Severability", blocks: [
      { p: "If any part of these Terms is found to be unenforceable, the rest stays in effect." },
    ] },
    { id: "contact", title: "17. Contact us", blocks: [
      { p: `Questions about these Terms? Email ${COMPANY.email}.${COMPANY.address ? ` Postal address: ${COMPANY.address}.` : ""}` },
    ] },
  ],
};

export const privacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  updated,
  intro: "This policy explains what personal data Deutli collects, why we collect it, and the choices you have.",
  sections: [
    { id: "introduction", title: "1. Introduction", blocks: [
      { p: "Deutli (“we”, “us”, “our”) respects your privacy. This Privacy Policy explains how we collect, use, share and protect information when you use our website, app and services. By using the Services you accept the practices described here." },
    ] },
    { id: "collect", title: "2. Information we collect", blocks: [
      { p: "Information you give us:" },
      { ul: ["Account details such as your name and email address", "Payment information, which is handled by our payment providers (we do not store full card details)", "Your profile and study preferences, such as exam type and target date", "Your homework, writing, speaking answers and questions to teachers"] },
      { p: "Information collected automatically:" },
      { ul: ["Device and log data such as browser, device type, IP address and pages visited", "Your mock exam results, progress and readiness score", "Usage analytics and error reports that help us find and fix problems"] },
      { p: "Cookies and similar technologies: essential cookies are always on. Analytics and marketing cookies are used only with your consent. See our Cookie Policy for details." },
    ] },
    { id: "use", title: "3. How we use your information", blocks: [
      { ul: [
        "To provide the Services: run your account, deliver lessons and mock exams, mark and review your work, process payments and track your progress",
        "To improve the Services: understand how Deutli is used, develop new features, test changes and prevent problems",
        "To communicate with you: send service updates and technical notices, reply to your questions, tell you about your subscription, and send marketing only if you have agreed to it",
      ] },
      { p: "Where the law requires a legal basis, we rely on performing our contract with you, our legitimate interests in running and improving Deutli, compliance with legal obligations, and your consent where we ask for it." },
    ] },
    { id: "sharing", title: "4. Sharing your information", blocks: [
      { p: "We do not sell your personal data. We share it only as needed:" },
      { ul: [
        "With service providers who help us run Deutli, such as payment processing, authentication, analytics, hosting, email and customer support",
        "With teachers who review your homework and answer your questions on paid plans",
        "When required by law, to protect rights and safety, to prevent fraud, or to respond to valid legal requests",
      ] },
    ] },
    { id: "security", title: "5. Data security", blocks: [
      { p: "We use measures such as encryption in transit, access controls, backups and regular security reviews to protect your data. No system is completely secure, but we work to keep your information safe." },
    ] },
    { id: "retention", title: "6. How long we keep data", blocks: [
      { p: "We keep your data while your account is active and as long as needed to provide the Services, meet legal obligations, resolve disputes and enforce our agreements. You can ask us to delete your account and data at any time." },
    ] },
    { id: "rights", title: "7. Your rights", blocks: [
      { p: "Depending on where you live, you may have the right to:" },
      { ul: ["access the personal data we hold about you", "correct inaccurate data", "ask us to delete your data", "object to or restrict certain processing", "receive your data in a portable format", "withdraw consent at any time", "complain to your local data protection authority"] },
      { p: `To use any of these rights, email ${COMPANY.privacyEmail}. We will reply as soon as we can.` },
    ] },
    { id: "transfers", title: "8. International transfers", blocks: [
      { p: "Our learners are in many countries, and our providers may process data outside your own country. Where we transfer personal data internationally, we use appropriate safeguards such as standard contractual clauses." },
    ] },
    { id: "children", title: "9. Children", blocks: [
      { p: "Deutli is not intended for anyone under 16. If we learn that we have collected data from a child under 16, we will delete it." },
    ] },
    { id: "changes", title: "10. Changes to this policy", blocks: [
      { p: "We may update this policy. We will post the new version here with a new date and, for important changes, tell you by email or in the app. Continuing to use the Services means you accept the update." },
    ] },
    { id: "links", title: "11. Third-party links", blocks: [
      { p: "Our Services may link to or embed third-party sites and content. We are not responsible for their privacy practices, so please read their policies." },
    ] },
    { id: "marketing", title: "12. Marketing messages", blocks: [
      { p: "We send marketing emails only with your consent. You can unsubscribe at any time using the link in any email, from your account settings, or by contacting us." },
    ] },
    { id: "contact", title: "13. Contact us", blocks: [
      { p: `For privacy questions or requests, email ${COMPANY.privacyEmail}.${COMPANY.address ? ` Postal address: ${COMPANY.address}.` : ""}` },
    ] },
  ],
};

export const cookies: LegalDoc = {
  slug: "cookies",
  title: "Cookie Policy",
  updated,
  intro: "This policy explains which cookies and similar technologies Deutli uses and how you can control them.",
  sections: [
    { id: "introduction", title: "1. Introduction", blocks: [
      { p: "This Cookie Policy explains how Deutli (“we”, “us”) uses cookies and similar technologies on deutli.com. It supplements our Privacy Policy." },
    ] },
    { id: "your-choice", title: "2. Your choice", blocks: [
      { p: "On your first visit we ask whether optional cookies may be used. Nothing optional is set until you decide, and declining is as easy as accepting. You can change your mind at any time by using “Cookie settings” in the footer or by clearing your browser’s cookies. Your choice is remembered for six months." },
    ] },
    { id: "categories", title: "3. Categories of cookies", blocks: [
      { p: "Essential cookies (always on, no consent needed). These are required for core functions such as signing in, remembering your cookie choice and keeping checkout secure. Partner referral cookies, if you arrive through a partner link, last 30 days." },
      { p: "Analytics cookies (optional). With your consent, analytics tools help us understand how the site is used so we can improve it. They may be kept for up to 2 years." },
      { p: "Marketing cookies (optional). With your consent, advertising and measurement tools help us show relevant ads and measure sign-ups. They may be kept for up to 13 months." },
      { p: "Providers of optional cookies may process data outside your country. Optional cookies are never set without your consent." },
    ] },
    { id: "storage", title: "4. Local storage", blocks: [
      { p: "Deutli also stores information in your browser’s local storage, such as your session, preferences and in-progress exam answers, so the app works properly. Partner discount codes from referral links are kept for 30 days. This data stays on your device and in our own systems." },
    ] },
    { id: "embedded", title: "5. Embedded content", blocks: [
      { p: "Third-party embeds, such as videos, may set their own cookies when you interact with them. We do not control these cookies, so please check the provider’s policy." },
    ] },
    { id: "contact", title: "6. Contact us", blocks: [
      { p: `Questions about cookies? Email ${COMPANY.privacyEmail}.` },
    ] },
  ],
};

export const affiliate: LegalDoc = {
  slug: "affiliate-terms",
  title: "Partner Program Terms",
  updated,
  intro: "These terms apply to anyone who joins the Deutli partner (affiliate) program, alongside our general Terms of Service.",
  sections: [
    { id: "introduction", title: "1. Introduction", blocks: [
      { p: "These terms govern the Deutli Partner Program (“Program”). They apply together with our Terms of Service. By joining the Program you agree to them." },
    ] },
    { id: "eligibility", title: "2. Who can join", blocks: [
      { ul: ["You must be at least 18 years old", "You must give a valid email address and payout details", "You must apply through our partner page and be approved by us", "You must follow all laws that apply to your promotion"] },
      { p: "The Program suits German teachers, language creators, education bloggers and anyone who genuinely helps learners prepare for German exams." },
    ] },
    { id: "commission", title: "3. Commission and payment", blocks: [
      { ul: [
        "Partners earn a commission on qualifying paid subscriptions made with their unique code or link. Current rates and any discount for learners are shown in your partner dashboard.",
        "Sales are tracked through your code or link and shown in your partner dashboard.",
        "Commission becomes payable after a holding period that covers our refund window. Minimum payout amounts and payout methods are shown in your dashboard.",
        "No commission is paid on fraudulent orders or chargebacks. Refunded sales are deducted from future payouts, and we may withhold payment while we verify activity.",
      ] },
    ] },
    { id: "obligations", title: "4. Your obligations", blocks: [
      { p: "You must clearly disclose that you are a partner when you promote Deutli, use only honest claims, and never promise or guarantee that anyone will pass an exam. You must not:" },
      { ul: ["send spam or unsolicited messages", "bid on Deutli keywords in paid search or use our name in domains or social handles", "create fake accounts or buy through your own code", "post your code on public coupon or deal sites", "present yourself as Deutli, Goethe-Institut or telc"] },
    ] },
    { id: "materials", title: "5. Marketing materials", blocks: [
      { p: "You may use the logos and materials we provide for the Program. You may not change them without our written permission." },
    ] },
    { id: "termination", title: "6. Term and termination", blocks: [
      { p: "The agreement lasts until either of us ends it. Either side can end it with written notice, and we may end it immediately if you break these terms. We may update these terms by posting the new version; continuing in the Program means you accept it." },
    ] },
    { id: "confidentiality", title: "7. Confidentiality", blocks: [
      { p: "Non-public information we share with you, such as commission rates and marketing plans, must be kept confidential." },
    ] },
    { id: "relationship", title: "8. Relationship", blocks: [
      { p: "You are an independent contractor. Nothing here creates a partnership, agency or employment between you and Deutli." },
    ] },
    { id: "liability", title: "9. Liability and indemnity", blocks: [
      { p: "To the extent permitted by law, Deutli is not liable for indirect losses, lost profits, service interruptions or changes to the Program. You agree to cover Deutli against claims that result from your promotion or your breach of these terms." },
    ] },
    { id: "law", title: "10. Governing law and entire agreement", blocks: [
      { p: COMPANY.governingLaw ? `These terms are governed by ${COMPANY.governingLaw}.` : "These terms are governed by the law that applies to Deutli’s operating company." },
      { p: "These terms replace any earlier agreement about the Program." },
    ] },
    { id: "contact", title: "11. Contact us", blocks: [
      { p: `Partner questions: ${COMPANY.partnersEmail}.` },
    ] },
  ],
};
