// Legal page content for Deutli, operated from Stuttgart, Germany.
// Structured after common free generator templates (TermsFeed / Termly style) and adapted to GDPR,
// the German TDDDG and DDG. Not legal advice: have it reviewed before relying on it.
export const COMPANY = {
  name: "Deutli",
  owner: "Malik Asad Ali",
  vatId: "DE461504397",
  legalForm: "sole proprietor (Einzelunternehmer)",
  operator: "Malik Asad Ali, sole proprietor (Einzelunternehmer), trading as Deutli",
  phone: "+49 1521 5126840",
  email: "hello@deutli.com",
  privacyEmail: "hello@deutli.com",
  partnersEmail: "hello@deutli.com",
  street: "Europaplatz 22A",
  city: "70565 Stuttgart",
  country: "Germany",
  address: "Europaplatz 22A, 70565 Stuttgart, Germany",
  governingLaw: "the laws of the Federal Republic of Germany",
  supervisoryAuthority: "Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW), Lautenschlagerstraße 20, 70173 Stuttgart",
};

export type Block = { p?: string; ul?: string[] };
export type Section = { id: string; title: string; blocks: Block[] };
export type LegalDoc = { slug: string; title: string; updated: string; intro: string; sections: Section[] };

const updated = "November 18, 2026";
const C = COMPANY;

export const terms: LegalDoc = {
  slug: "terms",
  title: "Terms of Service",
  updated,
  intro: "These terms govern your use of the Deutli website, app and services. Please read them before you create an account.",
  sections: [
    { id: "introduction", title: "1. Introduction", blocks: [
      { p: `These Terms of Service (the “Terms”) apply to your use of deutli.com, app.deutli.com and related services (the “Services”), operated by ${C.operator}, ${C.address} (“Deutli”, “we”, “us”, “our”). By creating an account or using the Services you agree to these Terms. If you do not agree, please do not use the Services.` },
    ] },
    { id: "services", title: "2. What Deutli offers", blocks: [
      { p: "Deutli is an online platform that helps learners prepare for the Goethe-Zertifikat B1 and telc Deutsch B1 exams. Depending on your plan, the Services include:" },
      { ul: ["Timed mock exams that follow the format of the real exams", "AI-checked homework and writing, reviewed by teachers on paid plans", "A B1 readiness score across reading, listening, writing and speaking", "Daily words, video lessons, downloadable notes and the option to ask a teacher a question", "Explanations in English and Urdu"] },
      { p: "Deutli is an independent service. We are not affiliated with, endorsed by or connected to Goethe-Institut or telc gGmbH." },
    ] },
    { id: "accounts", title: "3. Your account", blocks: [
      { ul: ["You must be at least 16 years old to use the Services.", "You must give accurate information when you sign up and keep it up to date.", "You are responsible for keeping your login details secure and for activity under your account.", "Accounts are personal. Please do not share your login with others.", "We may suspend or close an account that breaks these Terms or is used unlawfully. Where reasonable, we will warn you first."] },
    ] },
    { id: "plans", title: "4. Plans, payments and renewals", blocks: [
      { p: "Deutli offers a free plan and a paid Pro plan. The price, currency and billing period are shown at checkout before you order, as final prices including any applicable taxes. You can pay in two ways:" },
      { p: "a) Card subscription (Stripe). You choose monthly or yearly billing. Monthly plans are charged each month; yearly plans are charged once for the full year in advance. Your subscription renews automatically at the end of each billing period at the price you agreed, until you cancel. You can cancel at any time in your account, at the latest before the end of the current billing period; Pro then stays active until the end of the period you have paid for and does not renew. Card payments are processed by Stripe. We never see or store your full card details." },
      { p: "b) Manual payment (bank transfer, JazzCash or Easypaisa). You pay for one month of Pro in advance and send us the transaction ID. Pro starts once we have confirmed your payment and lasts one month. It does not renew automatically and nothing is charged without your action. Before the month ends we remind you to pay again. If you do not, your account moves to the free plan when the paid month ends. Your account and learning data are kept." },
      { ul: [
        "Pro access is personal and non-transferable.",
        "We may change our prices. A change never applies to a period you have already paid for. For card subscriptions we will tell you at least 30 days before a new price applies to your renewal, so you can cancel before it takes effect.",
        "If a card payment for a renewal fails, we will let you know and may move your account to the free plan until the payment succeeds.",
      ] },
    ] },
    { id: "withdrawal", title: "5. Right of withdrawal (Widerrufsbelehrung)", blocks: [
      { p: "If you are a consumer, you have the following statutory right of withdrawal." },
      { p: "Right of withdrawal: You have the right to withdraw from this contract within 14 days without giving any reason. The withdrawal period is 14 days from the day the contract is concluded." },
      { p: `To exercise the right of withdrawal, you must inform us (${C.owner}, Deutli, ${C.address}, phone ${C.phone}, email ${C.email}) of your decision to withdraw from this contract by an unequivocal statement (for example a letter sent by post or an email). You may use the model withdrawal form below, but it is not obligatory. To meet the withdrawal deadline, it is sufficient for you to send your notice before the withdrawal period has expired.` },
      { p: "Effects of withdrawal: If you withdraw from this contract, we shall reimburse all payments received from you without undue delay and in any event not later than 14 days from the day on which we are informed about your decision to withdraw. We will use the same means of payment you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement. If you requested to begin the performance of services during the withdrawal period, you shall pay us an amount which is in proportion to what has been provided until you have communicated your withdrawal, in comparison with the full coverage of the contract." },
      { p: "Our 14-day money-back promise: in addition to your statutory rights and wherever you live, if you email us within 14 days of your first payment, we will refund you in full." },
    ] },
    { id: "withdrawal-form", title: "6. Model withdrawal form", blocks: [
      { p: "(Complete and return this form only if you wish to withdraw from the contract.)" },
      { ul: [
        `To: ${C.owner}, Deutli, ${C.address}, email ${C.email}`,
        "I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract for the provision of the following service (*):",
        "Ordered on (*) / received on (*):",
        "Name of consumer(s):",
        "Address of consumer(s):",
        "Signature of consumer(s) (only if this form is notified on paper):",
        "Date:",
      ] },
      { p: "(*) Delete as appropriate." },
    ] },
    { id: "content", title: "7. Content and intellectual property", blocks: [
      { p: "All lessons, mock exams, notes, videos, text, graphics, software and the Deutli name and logo belong to us or our licensors and are protected by copyright and other laws. We give you a limited, personal, non-commercial, non-transferable licence to use them for your own exam preparation." },
      { p: "Content you submit, such as written answers, recordings or questions to a teacher, stays yours. You give us a non-exclusive licence to store, process and review it only as needed to provide and improve the Services." },
    ] },
    { id: "conduct", title: "8. Acceptable use", blocks: [
      { p: "You agree not to:" },
      { ul: ["share, resell or publish your account or our materials", "copy, scrape or redistribute our mock exams, lessons or other content", "bypass access limits or payment requirements", "give false information or impersonate someone else", "interfere with or damage the Services, or upload malicious code", "use the Services for anything unlawful, abusive or harassing toward other learners or teachers"] },
    ] },
    { id: "ai", title: "9. AI feedback and teacher review", blocks: [
      { p: "Deutli uses AI to mark mistakes and explain them quickly. AI can be wrong. On paid plans a teacher reviews your homework and writing and confirms or corrects each mark. Feedback, scores and the readiness score are study aids, not an official assessment, and they do not guarantee your result in a real exam." },
    ] },
    { id: "third-party", title: "10. Third-party services", blocks: [
      { p: "Parts of the Services rely on third parties such as Stripe, JazzCash, Easypaisa, Supabase, Google sign-in, Anthropic (AI feedback) and LanguageTool (grammar checking). Their own terms apply to your use of their services, and we are not responsible for their availability." },
    ] },
    { id: "availability", title: "11. Availability and changes", blocks: [
      { p: "We aim to keep Deutli available and to announce planned maintenance in advance, but we cannot promise uninterrupted service. We may improve or change features, provided paid core features are not reduced during a period you have already paid for." },
    ] },
    { id: "liability", title: "12. Liability", blocks: [
      { p: "We are liable without limitation for intent and gross negligence, for injury to life, body or health, under the German Product Liability Act, and where we have given a guarantee." },
      { p: "For slight negligence we are liable only for breach of an essential contractual obligation (an obligation that makes proper performance of the contract possible and on which you may regularly rely), and only up to the damage that was foreseeable and typical for this kind of contract. Otherwise, liability for slight negligence is excluded." },
      { p: "We do not guarantee that you will pass any exam. Your result depends on many factors, including your own preparation." },
    ] },
    { id: "termination", title: "13. Ending the agreement", blocks: [
      { p: "You can stop using Deutli and delete your account at any time. We may end the agreement for free accounts with 30 days’ notice, and for any account immediately for serious breach of these Terms. Paid periods are refunded pro rata if we end the agreement without a breach on your part." },
    ] },
    { id: "changes", title: "14. Changes to these Terms", blocks: [
      { p: "We may update these Terms for legitimate reasons, such as new features or changes in the law. We will tell you by email at least 30 days before material changes take effect. If you do not object within that time, the new Terms apply; we will remind you of this and of your right to object and cancel in our notice." },
    ] },
    { id: "law", title: "15. Governing law and disputes", blocks: [
      { p: `These Terms are governed by ${C.governingLaw}, excluding the UN Convention on Contracts for the International Sale of Goods. If you are a consumer, this choice does not take away the protection of mandatory laws of the country where you normally live.` },
      { p: "We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board (§ 36 VSBG)." },
    ] },
    { id: "severability", title: "16. Severability", blocks: [
      { p: "If any part of these Terms is invalid, the rest stays in effect." },
    ] },
    { id: "contact", title: "17. Contact us", blocks: [
      { p: `Questions about these Terms? Email ${C.email} or write to ${C.owner} (Deutli), ${C.address}.` },
    ] },
  ],
};

export const privacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  updated,
  intro: "This policy explains what personal data Deutli collects, why, who we share it with and the rights you have under the GDPR.",
  sections: [
    { id: "controller", title: "1. Who is responsible", blocks: [
      { p: `The controller for data processing on deutli.com and app.deutli.com under the EU General Data Protection Regulation (GDPR) is ${C.operator}, ${C.address}. Email: ${C.privacyEmail}. Phone: ${C.phone}.` },
      { p: "We have not appointed a data protection officer because we are not legally required to. Please send any privacy question to the email address above." },
    ] },
    { id: "collect", title: "2. Data we collect", blocks: [
      { p: "Data you give us:" },
      { ul: ["Account data: name, email address, password (stored only in hashed form), and optionally your phone number and profile photo", "If you sign in with Google: your name, email address and profile picture from your Google account", "Profile and study preferences, such as exam type, target date and preferred explanation language", "Your mock exam answers, homework, writing, speaking practice, saved words and questions to teachers", "Your time zone, detected from your device, so reminders and deadlines match your local time", "Payment data: plan, amount, payment status and, for card subscriptions, the Stripe customer and subscription reference. For bank transfer, JazzCash or Easypaisa: the transaction ID and any payment proof you send us. Card details are entered directly with Stripe and never reach us", "Messages you send us by email"] },
      { p: "Data collected automatically:" },
      { ul: ["Server log data: IP address, date and time, browser, operating system and pages requested", "Learning data: mock exam results, progress, streaks and readiness score", "Usage statistics from Google Analytics, only if you consent"] },
    ] },
    { id: "purposes", title: "3. Why we use it and our legal basis", blocks: [
      { ul: [
        "To create your account and provide the Services, including marking, teacher review and progress tracking (Art. 6(1)(b) GDPR, performance of a contract)",
        "To process payments and keep accounting records (Art. 6(1)(b) and (c) GDPR, contract and legal obligations under German tax and commercial law)",
        "To keep the website and app secure and working, using server logs (Art. 6(1)(f) GDPR, our legitimate interest in a secure, stable service)",
        "To answer your questions and send service messages about your account or subscription (Art. 6(1)(b) and (f) GDPR)",
        "To measure how the website is used with Google Analytics (Art. 6(1)(a) GDPR and § 25(1) TDDDG, your consent)",
        "To check your writing automatically and translate saved words with AI, so you get instant feedback (Art. 6(1)(b) GDPR). Only the text needed for the check is sent, not your name or email address",
        "To remind you before a manually paid Pro month ends (Art. 6(1)(b) GDPR)",
        "To send newsletters or offers, only if you agreed (Art. 6(1)(a) GDPR)",
      ] },
      { p: "AI-generated feedback on your work is a study aid and is checked by teachers on paid plans. We do not make decisions with legal or similarly significant effects based solely on automated processing (Art. 22 GDPR)." },
    ] },
    { id: "processors", title: "4. Service providers we use", blocks: [
      { p: "We share data only with providers who help us run Deutli, under data processing agreements where required:" },
      { ul: [
        "Supabase Inc., USA: authentication, database and file storage (profile photos, payment proofs) for app.deutli.com",
        "Anthropic PBC, USA: AI model that checks your writing and translates saved words. Anthropic does not use this data to train its models",
        "LanguageTooler GmbH, Germany: grammar and spelling check of your German writing",
        "Google Ireland Ltd., Ireland: “Continue with Google” sign-in, only if you choose it",
        "Vercel Inc., USA: hosting of deutli.com, including server logs",
        "Stripe Payments Europe Ltd., Ireland: card payments and subscriptions. Stripe acts as an independent controller for fraud prevention and legal obligations",
        "Your bank, JazzCash (Mobilink Microfinance Bank Ltd., Pakistan) or Easypaisa (Telenor Microfinance Bank Ltd., Pakistan): manual payments, if you choose them. You send the payment yourself, so they act as independent controllers",
        "Google Ireland Ltd., Ireland (with Google LLC, USA): Google Analytics, only with your consent",
        "Teachers working with Deutli, and the academy you study with if you joined through one, who see your results, writing and questions to review them",
      ] },
      { p: "We do not sell your personal data. We may also disclose data where we are legally required to." },
    ] },
    { id: "transfers", title: "5. Transfers outside the EU", blocks: [
      { p: "Some providers process data in the USA. Transfers to US companies certified under the EU-U.S. Data Privacy Framework are based on the European Commission’s adequacy decision (Art. 45 GDPR); otherwise we use the EU Standard Contractual Clauses (Art. 46 GDPR)." },
      { p: "If you pay by Pakistani bank transfer, JazzCash or Easypaisa, payment data goes to Pakistan, which has no EU adequacy decision. This transfer is necessary to perform the payment you request (Art. 49(1)(b) GDPR)." },
    ] },
    { id: "analytics", title: "6. Google Analytics", blocks: [
      { p: "With your consent we use Google Analytics 4 to understand how visitors use our website. Google Analytics uses cookies and similar technologies to collect data such as pages visited, time spent, device and approximate location. IP addresses are not stored in Google Analytics 4. Data is kept for 14 months." },
      { p: "You can withdraw your consent at any time with effect for the future via “Cookie settings” in the website footer or by clearing cookies in your browser. More information: policies.google.com/privacy." },
    ] },
    { id: "retention", title: "7. How long we keep data", blocks: [
      { ul: ["Account and learning data: while your account is active, and deleted within 30 days after you delete your account", "Server logs: up to 30 days, unless needed to investigate a security incident", "Invoices and payment records: 10 years, as required by German tax and commercial law (§ 147 AO, § 257 HGB)", "Emails with us: up to 3 years after the matter is closed, unless longer retention is required by law"] },
    ] },
    { id: "rights", title: "8. Your rights", blocks: [
      { p: "Under the GDPR you have the right to:" },
      { ul: ["access the data we hold about you (Art. 15)", "correct inaccurate data (Art. 16)", "have your data deleted (Art. 17)", "restrict processing (Art. 18)", "receive your data in a portable format (Art. 20)", "withdraw consent at any time, with effect for the future (Art. 7(3))"] },
      { p: "Right to object (Art. 21 GDPR): where we process data based on legitimate interests, you can object at any time on grounds relating to your particular situation. You can object to direct marketing at any time without giving reasons." },
      { p: `To use any of these rights, email ${C.privacyEmail}. You also have the right to complain to a data protection supervisory authority. The authority responsible for us is ${C.supervisoryAuthority}.` },
    ] },
    { id: "security", title: "9. Security", blocks: [
      { p: "We use TLS encryption for all connections, access controls and regular backups. No system is completely secure, but we work to protect your data." },
    ] },
    { id: "required", title: "10. Do you have to provide data?", blocks: [
      { p: "You need to give an email address and password to create an account, and payment details to buy a paid plan. Without them we cannot provide those Services. Everything else is optional." },
    ] },
    { id: "children", title: "11. Children", blocks: [
      { p: "Deutli is not intended for anyone under 16. If we learn that we have collected data from a child under 16, we will delete it." },
    ] },
    { id: "changes", title: "12. Changes to this policy", blocks: [
      { p: "We may update this policy when our Services or the law change. The current version is always on this page, and we will tell you about important changes by email or in the app." },
    ] },
  ],
};

export const cookies: LegalDoc = {
  slug: "cookies",
  title: "Cookie Policy",
  updated,
  intro: "This policy explains which cookies and similar technologies Deutli uses and how you can control them.",
  sections: [
    { id: "introduction", title: "1. What cookies are", blocks: [
      { p: "Cookies are small text files stored on your device by your browser. Similar technologies include local storage. Under § 25 TDDDG, we may only store or read information on your device without your consent where it is strictly necessary for a service you asked for. Everything else needs your consent." },
    ] },
    { id: "your-choice", title: "2. Your choice", blocks: [
      { p: "On your first visit we ask whether optional cookies may be used. Nothing optional is set until you decide, and declining is as easy as accepting. You can change or withdraw your choice at any time with “Cookie settings” in the footer of every page, or by deleting cookies in your browser settings. Your choice is remembered for 6 months." },
    ] },
    { id: "essential", title: "3. Strictly necessary", blocks: [
      { p: "These are always on and need no consent (§ 25(2) No. 2 TDDDG):" },
      { ul: ["Supabase authentication (sb-*): keeps you signed in on app.deutli.com. Session, up to 1 week if you stay signed in", "Cookie consent (deutli_consent): remembers your cookie choice. 6 months", "Stripe (__stripe_mid, __stripe_sid): fraud prevention during checkout. Up to 1 year", "Partner referral: remembers a partner link you arrived through, so the right discount applies. 30 days"] },
    ] },
    { id: "analytics", title: "4. Analytics (optional)", blocks: [
      { p: "Only with your consent (Art. 6(1)(a) GDPR, § 25(1) TDDDG):" },
      { ul: ["Google Analytics (_ga, _ga_*): distinguishes visitors and sessions so we can see which pages help learners. Provider: Google Ireland Ltd. Up to 2 years"] },
      { p: "Google may process this data in the USA under the EU-U.S. Data Privacy Framework. See our Privacy Policy for details." },
    ] },
    { id: "storage", title: "5. Local storage", blocks: [
      { p: "The Deutli app stores your preferences and in-progress exam answers in your browser’s local storage, so you do not lose work if your connection drops. This is necessary for the function you use and stays on your device." },
    ] },
    { id: "embedded", title: "6. Embedded content", blocks: [
      { p: "If we embed videos or other third-party content, it is loaded only after you click to play it, and the provider may then set its own cookies. Please check that provider’s policy." },
    ] },
    { id: "contact", title: "7. Contact us", blocks: [
      { p: `Questions about cookies? Email ${C.privacyEmail}.` },
    ] },
  ],
};

export const impressum: LegalDoc = {
  slug: "impressum",
  title: "Impressum",
  updated,
  intro: "Legal notice under § 5 DDG (Digitale-Dienste-Gesetz).",
  sections: [
    { id: "provider", title: "Angaben gemäß § 5 DDG", blocks: [
      { p: `${C.owner}` },
      { p: "Einzelunternehmer, handelnd unter der Bezeichnung „Deutli“" },
      { p: `${C.street}, ${C.city}, ${C.country}` },
    ] },
    { id: "contact", title: "Kontakt", blocks: [
      { p: `Telefon: ${C.phone}` },
      { p: `E-Mail: ${C.email}` },
    ] },
    { id: "vat", title: "Umsatzsteuer-ID", blocks: [
      { p: `Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: ${C.vatId}` },
    ] },
    { id: "responsible", title: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV", blocks: [
      { p: `${C.owner}, ${C.address}` },
    ] },
    { id: "dispute", title: "Verbraucherstreitbeilegung", blocks: [
      { p: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen." },
    ] },
    { id: "disclaimer", title: "Hinweis", blocks: [
      { p: "Deutli ist ein unabhängiges Angebot und steht in keiner Verbindung zum Goethe-Institut oder zur telc gGmbH." },
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
