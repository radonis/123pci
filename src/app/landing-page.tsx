import styles from "./page.module.css";

type Locale = "pl" | "en" | "de";

type Copy = {
  nav: [string, string, string];
  contactCta: string;
  badge: string;
  hero: [string, string, string];
  lead: string;
  secondaryCta: string;
  chips: [string, string, string, string];
  progressKicker: string;
  progressTitle: string;
  progressSteps: [string, string, string];
  audienceKicker: string;
  audienceTitle: string;
  featured: string;
  iataTitle: string;
  iataDescription: string;
  iataOffer: string;
  iataFootnote: string;
  iataDetails: string;
  merchantTitle: string;
  merchantDescription: string;
  merchantList: [string, string, string];
  servicesKicker: string;
  servicesTitle: string;
  servicesLink: string;
  services: [string, string, string][];
  processKicker: string;
  processTitle: string;
  processLead: string;
  processSteps: [string, string, string, string];
  processDescription: string;
  offer: string;
  offerFootnote: string;
  contactKicker: string;
  contactTitle: string;
  contactLead: string;
  emailLabel: string;
  contactEmail: string;
  phoneLabel: string;
  formTitle: string;
  fields: [string, string, string, string, string, string];
  businessOptions: [string, string, string, string];
  consentBefore: string;
  privacyLabel: string;
  consentAfter: string;
  submit: string;
  responseNote: string;
  footer: string;
  privacy: string;
  cookies: string;
};

const copy: Record<Locale, Copy> = {
  pl: {
    nav: ["Dla kogo", "Usługi", "Jak to działa"], contactCta: "Skontaktuj się", badge: "Zgodność z PCI DSS v4.0",
    hero: ["PCI DSS Compliance – ", "wspieramy", " w procesie osiągnięcia zgodności."], lead: "Pomagamy małym merchantom oraz biurom turystycznym IATA bezpiecznie przetwarzać dane kart i spełnić wymogi PCI DSS - bez żargonu, bez chaosu, z jasnym planem działania.", secondaryCta: "Zobacz usługi", chips: ["SAQ A / A-EP / D", "Skany ASV", "Biura IATA", "PL · EN · DE"],
    progressKicker: "TWOJA DROGA DO ZGODNOŚCI", progressTitle: "Trzy proste etapy", progressSteps: ["Określenie zakresu", "Zebranie danych", "Przygotowanie dokumentacji"],
    audienceKicker: "DLA KOGO", audienceTitle: "Stworzone dla tych, którzy przyjmują płatności kartą.", featured: "WYRÓŻNIONE", iataTitle: "Biura turystyczne IATA", iataDescription: "Rozliczenia BSP i IATA oznaczają realne przetwarzanie danych kart. Pomagamy przejść przez PCI DSS bez zatrzymywania sprzedaży.", iataOffer: "Oferta dla członków IATA. Pierwszy rok gratis. Kolejny 400 PLN netto", iataFootnote: "Dotyczy biur turystycznych, obsługa SAQ CVT.", iataDetails: "Rozliczenia BSP / IATA · GDS · Płatności online i stacjonarne", merchantTitle: "Mali merchanci", merchantDescription: "Sklepy internetowe i stacjonarne, usługodawcy oraz subskrypcje.", merchantList: ["E-commerce z bramką płatniczą", "Terminale i płatności stacjonarne", "Firmy bez własnego IT/security"],
    servicesKicker: "USŁUGI", servicesTitle: "Wszystko, czego potrzebujesz do zgodności.", servicesLink: "Porozmawiajmy o zakresie", services: [["01", "Wypełnienie SAQ", "Dobieramy właściwy typ ankiety samooceny i przechodzimy przez nią wspólnie."], ["02", "Przygotowanie dokumentacji", "Tworzymy polityki, procedury i dowody wymagane przez standard."], ["03", "Koordynacja skanów ASV", "Pomagamy zorganizować skan, zrozumieć wynik i usunąć wykryte luki."], ["04", "Utrzymanie zgodności", "Pilnujemy terminów, odświeżamy dokumentację i wspieramy Cię w kolejnych latach."]],
    processKicker: "JAK TO DZIAŁA", processTitle: "Cztery kroki. Resztę robimy my.", processLead: "Kontaktujesz się z nami, a dalej prowadzimy Cię przez cały proces.", processSteps: ["Kontakt", "Rozmowa", "Zakres", "Dokumentacja"], processDescription: "Jasny kolejny krok, bez zbędnych formalności.", offer: "Oferta dla członków IATA. Pierwszy rok gratis. Kolejny 400 PLN netto", offerFootnote: "Dotyczy biur turystycznych, obsługa SAQ CVT.",
    contactKicker: "KONTAKT", contactTitle: "Zróbmy pierwszy krok razem.", contactLead: "Zostaw dane, a odezwiemy się z bezpłatną, wstępną oceną zakresu PCI DSS.", emailLabel: "E-mail", contactEmail: "kontakt@123pci.pl", phoneLabel: "Telefon", formTitle: "Wyślij zgłoszenie", fields: ["Imię i nazwisko", "Firma", "E-mail", "Telefon", "Rodzaj działalności", "Wiadomość"], businessOptions: ["Biuro turystyczne (IATA)", "Sklep internetowy", "Handel stacjonarny / terminal", "Inna działalność"], consentBefore: "Zapoznałem/-am się z ", privacyLabel: "polityką prywatności", consentAfter: " i zgadzam się na kontakt.", submit: "Wyślij zgłoszenie", responseNote: "Odpowiadamy zwykle w ciągu jednego dnia roboczego.", footer: "Praktyczne wsparcie w uzyskaniu i utrzymaniu zgodności z PCI DSS.", privacy: "Polityka prywatności", cookies: "Cookies",
  },
  en: {
    nav: ["Who it’s for", "Services", "How it works"], contactCta: "Contact us", badge: "PCI DSS v4.0 compliance",
    hero: ["PCI DSS Compliance – ", "we support you", " throughout the journey to compliance."], lead: "We help small merchants and IATA travel agencies handle cardholder data securely and meet PCI DSS requirements — without jargon or chaos, with a clear plan of action.", secondaryCta: "View services", chips: ["SAQ A / A-EP / D", "ASV scans", "IATA agencies", "PL · EN · DE"],
    progressKicker: "YOUR PATH TO COMPLIANCE", progressTitle: "Three simple stages", progressSteps: ["Defining the scope", "Gathering data", "Preparing documentation"],
    audienceKicker: "WHO IT’S FOR", audienceTitle: "Built for everyone who accepts card payments.", featured: "FEATURED", iataTitle: "IATA travel agencies", iataDescription: "BSP and IATA settlements involve real cardholder data processing. We help you meet PCI DSS requirements without interrupting your sales.", iataOffer: "Offer for IATA members. First year free. Then PLN 400 net", iataFootnote: "Applies to travel agencies; SAQ CVT service.", iataDetails: "BSP / IATA settlements · GDS · Online and in-person payments", merchantTitle: "Small merchants", merchantDescription: "Online and brick-and-mortar shops, service providers and subscriptions.", merchantList: ["E-commerce with a payment gateway", "Terminals and in-person payments", "Businesses without in-house IT/security"],
    servicesKicker: "SERVICES", servicesTitle: "Everything you need to become compliant.", servicesLink: "Let’s discuss the scope", services: [["01", "Completing the SAQ", "We select the right self-assessment questionnaire and complete it with you."], ["02", "Preparing documentation", "We create the policies, procedures and evidence required by the standard."], ["03", "Coordinating ASV scans", "We help arrange scanning, understand the result and remediate identified gaps."], ["04", "Maintaining compliance", "We track deadlines, refresh documentation and support you in the years ahead."]],
    processKicker: "HOW IT WORKS", processTitle: "Four steps. We do the rest.", processLead: "You contact us, and we guide you through the entire process.", processSteps: ["Get in touch", "Conversation", "Scope", "Documentation"], processDescription: "A clear next step, without unnecessary formalities.", offer: "Offer for IATA members. First year free. Then PLN 400 net", offerFootnote: "Applies to travel agencies; SAQ CVT service.",
    contactKicker: "CONTACT", contactTitle: "Let’s take the first step together.", contactLead: "Leave your details and we will get back to you with a free initial PCI DSS scoping assessment.", emailLabel: "Email", contactEmail: "contact@123pci.pl", phoneLabel: "Phone", formTitle: "Send an enquiry", fields: ["Full name", "Company", "Email", "Phone", "Type of business", "Message"], businessOptions: ["Travel agency (IATA)", "Online shop", "In-person retail / terminal", "Other business"], consentBefore: "I have read the ", privacyLabel: "privacy policy", consentAfter: " and agree to be contacted.", submit: "Send an enquiry", responseNote: "We usually respond within one business day.", footer: "Practical support in achieving and maintaining PCI DSS compliance.", privacy: "Privacy policy", cookies: "Cookies",
  },
  de: {
    nav: ["Für wen", "Leistungen", "Ablauf"], contactCta: "Kontaktieren Sie uns", badge: "PCI-DSS-v4.0-Konformität",
    hero: ["PCI-DSS-Konformität – ", "wir begleiten Sie", " auf dem Weg zur Konformität."], lead: "Wir helfen kleinen Händlern und IATA-Reisebüros, Karteninhaberdaten sicher zu verarbeiten und die PCI-DSS-Anforderungen zu erfüllen — ohne Fachjargon und Chaos, mit einem klaren Plan.", secondaryCta: "Leistungen ansehen", chips: ["SAQ A / A-EP / D", "ASV-Scans", "IATA-Reisebüros", "PL · EN · DE"],
    progressKicker: "IHR WEG ZUR KONFORMITÄT", progressTitle: "Drei einfache Schritte", progressSteps: ["Umfang festlegen", "Daten sammeln", "Dokumentation vorbereiten"],
    audienceKicker: "FÜR WEN", audienceTitle: "Für alle, die Kartenzahlungen akzeptieren.", featured: "HERVORGEHOBEN", iataTitle: "IATA-Reisebüros", iataDescription: "BSP- und IATA-Abrechnungen bedeuten eine tatsächliche Verarbeitung von Karteninhaberdaten. Wir helfen Ihnen, PCI DSS zu erfüllen, ohne den Verkauf zu unterbrechen.", iataOffer: "Angebot für IATA-Mitglieder. Erstes Jahr gratis. Danach 400 PLN netto", iataFootnote: "Gilt für Reisebüros; SAQ-CVT-Service.", iataDetails: "BSP- / IATA-Abrechnungen · GDS · Online- und Vor-Ort-Zahlungen", merchantTitle: "Kleine Händler", merchantDescription: "Online- und Ladengeschäfte, Dienstleister und Abonnements.", merchantList: ["E-Commerce mit Payment-Gateway", "Terminals und Vor-Ort-Zahlungen", "Unternehmen ohne eigene IT/Sicherheit"],
    servicesKicker: "LEISTUNGEN", servicesTitle: "Alles, was Sie für die Konformität brauchen.", servicesLink: "Sprechen wir über den Umfang", services: [["01", "SAQ ausfüllen", "Wir wählen den passenden Selbstbewertungsfragebogen und füllen ihn gemeinsam mit Ihnen aus."], ["02", "Dokumentation vorbereiten", "Wir erstellen die vom Standard geforderten Richtlinien, Verfahren und Nachweise."], ["03", "ASV-Scans koordinieren", "Wir helfen bei der Organisation des Scans, der Auswertung und der Behebung von Lücken."], ["04", "Konformität aufrechterhalten", "Wir behalten Fristen im Blick, aktualisieren die Dokumentation und unterstützen Sie in den Folgejahren."]],
    processKicker: "ABLAUF", processTitle: "Vier Schritte. Den Rest übernehmen wir.", processLead: "Sie kontaktieren uns, und wir führen Sie durch den gesamten Prozess.", processSteps: ["Kontakt", "Gespräch", "Umfang", "Dokumentation"], processDescription: "Ein klarer nächster Schritt, ohne unnötige Formalitäten.", offer: "Angebot für IATA-Mitglieder. Erstes Jahr gratis. Danach 400 PLN netto", offerFootnote: "Gilt für Reisebüros; SAQ-CVT-Service.",
    contactKicker: "KONTAKT", contactTitle: "Machen wir gemeinsam den ersten Schritt.", contactLead: "Hinterlassen Sie Ihre Daten; wir melden uns mit einer kostenlosen ersten Einschätzung des PCI-DSS-Umfangs.", emailLabel: "E-Mail", contactEmail: "contact@123pci.pl", phoneLabel: "Telefon", formTitle: "Anfrage senden", fields: ["Vor- und Nachname", "Unternehmen", "E-Mail", "Telefon", "Art der Tätigkeit", "Nachricht"], businessOptions: ["Reisebüro (IATA)", "Online-Shop", "Stationärer Handel / Terminal", "Andere Tätigkeit"], consentBefore: "Ich habe die ", privacyLabel: "Datenschutzerklärung", consentAfter: " gelesen und stimme einer Kontaktaufnahme zu.", submit: "Anfrage senden", responseNote: "Wir antworten in der Regel innerhalb eines Werktags.", footer: "Praktische Unterstützung beim Erreichen und Erhalten der PCI-DSS-Konformität.", privacy: "Datenschutz", cookies: "Cookies",
  },
};

function CardIcon() { return <svg viewBox="0 0 72 52" aria-hidden="true"><rect x="1.5" y="9" width="55" height="37" rx="6" fill="#17636F"/><rect x="8" y="17" width="11" height="8" rx="2" fill="#7FC7D2"/><rect x="8" y="35" width="24" height="3" rx="1.5" fill="#ffffff66"/><rect x="8" y="40.5" width="16" height="3" rx="1.5" fill="#ffffff40"/><path d="M40 30.5 46.5 37 66 12" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/><path d="M40 30.5 46.5 37 66 12" fill="none" stroke="#46B24E" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function Brand() { return <a className={styles.brand} href="#top"><span className={styles.brandMark}><CardIcon /></span><span><b>123</b>PCI</span></a>; }
function Flag({ language, active }: { language: Locale; active: boolean }) { const href = language === "pl" ? "/" : `/${language}`; const shapes = language === "pl" ? <><rect width="24" height="8" fill="#fff"/><rect y="8" width="24" height="8" fill="#DC143C"/></> : language === "en" ? <><rect width="24" height="16" fill="#012169"/><path d="M0 0 24 16M24 0 0 16" stroke="#fff" strokeWidth="3.2"/><path d="M0 0 24 16M24 0 0 16" stroke="#C8102E" strokeWidth="1.6"/><path d="M12 0V16M0 8H24" stroke="#fff" strokeWidth="5"/><path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="3"/></> : <><rect width="24" height="5.34" fill="#000"/><rect y="5.34" width="24" height="5.33" fill="#DD0000"/><rect y="10.67" width="24" height="5.33" fill="#FFCE00"/></>; const label = language === "pl" ? "Polski" : language === "en" ? "English" : "Deutsch"; return <a className={`${styles.flag} ${active ? styles.flagActive : ""}`} href={href} aria-label={label}><svg viewBox="0 0 24 16" aria-hidden="true">{shapes}</svg></a>; }

export default function LandingPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <main id="top">
    <header className={styles.header}><nav className={styles.nav}><Brand /><div className={styles.links}><a href="#dla-kogo">{t.nav[0]}</a><a href="#uslugi">{t.nav[1]}</a><a href="#jak-to-dziala">{t.nav[2]}</a></div><div className={styles.languages}><Flag language="pl" active={locale === "pl"}/><Flag language="en" active={locale === "en"}/><Flag language="de" active={locale === "de"}/></div><a className={styles.navCta} href="#kontakt">{t.contactCta}</a></nav></header>
    <section className={styles.hero}><div className={styles.heroGrid}><div><p className={styles.badge}>● {t.badge}</p><h1>{t.hero[0]}<em>{t.hero[1]}</em>{t.hero[2]}</h1><p className={styles.lead}>{t.lead}</p><div className={styles.actions}><a className={styles.primary} href="#kontakt">{t.contactCta} →</a><a className={styles.secondary} href="#uslugi">{t.secondaryCta}</a></div><div className={styles.chips}>{t.chips.map((chip) => <span key={chip}>{chip}</span>)}</div></div><aside className={styles.progress}><div className={styles.progressHeading}><CardIcon /><div><p className={styles.eyebrow}>{t.progressKicker}</p><h2>{t.progressTitle}</h2></div></div><div className={styles.progressSteps}>{t.progressSteps.map((step) => <p className={styles.progressStep} key={step}><span>✓</span>{step}</p>)}</div></aside></div></section>
    <section id="dla-kogo" className={styles.audience}><p className={styles.kicker}>{t.audienceKicker}</p><h2>{t.audienceTitle}</h2><div className={styles.audienceCards}><article className={styles.iata}><span>{t.featured}</span><h3>{t.iataTitle}</h3><p>{t.iataDescription}</p><p><b>{t.iataOffer}</b><sup>*</sup></p><small>* {t.iataFootnote}</small><div>{t.iataDetails}</div></article><article className={styles.merchants}><h3>{t.merchantTitle}</h3><p>{t.merchantDescription}</p><ul>{t.merchantList.map((item) => <li key={item}>✓ {item}</li>)}</ul></article></div></section>
    <section id="uslugi" className={styles.services}><div className={styles.sectionHead}><div><p className={styles.kicker}>{t.servicesKicker}</p><h2>{t.servicesTitle}</h2></div><a href="#kontakt">{t.servicesLink} →</a></div><div className={styles.serviceGrid}>{t.services.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section id="jak-to-dziala" className={styles.steps}><p className={styles.kicker}>{t.processKicker}</p><h2>{t.processTitle}</h2><p className={styles.sectionLead}>{t.processLead}</p><div className={styles.stepGrid}>{t.processSteps.map((step, index) => <article key={step}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step}</h3><p>{t.processDescription}</p></article>)}</div><div className={styles.offer}><b>{t.offer}<sup>*</sup></b><span>* {t.offerFootnote}</span></div></section>
    <section id="kontakt" className={styles.contact}><div><p className={styles.kicker}>{t.contactKicker}</p><h2>{t.contactTitle}</h2><p className={styles.sectionLead}>{t.contactLead}</p><address className={styles.contactDetails}><a className={styles.contactItem} href={`mailto:${t.contactEmail}`}><span className={styles.contactIcon}>✉</span><span><small>{t.emailLabel}</small>{t.contactEmail}</span></a><a className={styles.contactItem} href="tel:+48500879090"><span className={styles.contactIcon}>☎</span><span><small>{t.phoneLabel}</small><span><span aria-hidden="true">🇵🇱 </span>+48 500 87 90 90</span></span></a></address></div><form className={styles.form} action="/api/contact" method="post"><h3>{t.formTitle}</h3><input name="locale" type="hidden" value={locale} /><input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{position:"absolute",left:"-9999px"}} /><div className={styles.formRow}><label>{t.fields[0]}<input required name="name" /></label><label>{t.fields[1]}<input required name="company" /></label></div><div className={styles.formRow}><label>{t.fields[2]}<input required name="email" type="email" /></label><label>{t.fields[3]}<input name="phone" type="tel" /></label></div><label>{t.fields[4]}<select name="business">{t.businessOptions.map((option) => <option key={option}>{option}</option>)}</select></label><label>{t.fields[5]}<textarea name="message" rows={3} /></label><label className={styles.check}><input required type="checkbox" />{t.consentBefore}<a href="/polityka-prywatnosci">{t.privacyLabel}</a>{t.consentAfter}</label><button type="submit">{t.submit} →</button><small>{t.responseNote}</small></form></section>
    <footer className={styles.footer}><Brand /><p>{t.footer}</p><div><a href="/polityka-prywatnosci">{t.privacy}</a><a href="/cookies">{t.cookies}</a></div><small>© 2026 123PCI. {locale === "de" ? "Alle Rechte vorbehalten." : locale === "en" ? "All rights reserved." : "Wszelkie prawa zastrzeżone."}</small></footer>
  </main>;
}
