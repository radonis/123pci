import Link from "next/link";

type Locale = "pl" | "en" | "de";

const copy: Record<Locale, { eyebrow: string; title: string; lead: string; button: string; home: string }> = {
  pl: {
    eyebrow: "ZGŁOSZENIE WYSŁANE",
    title: "Dziękujemy za kontakt.",
    lead: "Twoje zgłoszenie zostało wysłane. Odezwemy się w ciągu jednego dnia roboczego z wstępną oceną zakresu PCI DSS.",
    button: "Wróć na stronę główną",
    home: "/",
  },
  en: {
    eyebrow: "ENQUIRY SENT",
    title: "Thank you for getting in touch.",
    lead: "Your enquiry has been sent. We will get back to you within one business day with an initial PCI DSS scoping assessment.",
    button: "Back to the home page",
    home: "/en",
  },
  de: {
    eyebrow: "ANFRAGE GESENDET",
    title: "Vielen Dank für Ihre Kontaktaufnahme.",
    lead: "Ihre Anfrage wurde gesendet. Wir melden uns innerhalb eines Werktags mit einer ersten Einschätzung des PCI-DSS-Umfangs.",
    button: "Zur Startseite",
    home: "/de",
  },
};

export default function ContactResponsePage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "linear-gradient(135deg, #edf8ee, #f6fafb)" }}><section style={{ maxWidth: 620, padding: "48px 36px", textAlign: "center", background: "#fff", border: "1px solid #dce9df", borderRadius: 24, boxShadow: "0 14px 50px #124e5915" }}><p style={{ display: "grid", placeItems: "center", width: 58, height: 58, margin: "0 auto 20px", borderRadius: "50%", background: "#46b24e", color: "#063217", fontSize: 30, fontWeight: 900 }}>✓</p><p style={{ color: "#3a9a42", fontWeight: 800, letterSpacing: 1.2, fontSize: 12 }}>{t.eyebrow}</p><h1 style={{ margin: "10px 0 16px", fontSize: "clamp(30px, 5vw, 46px)", lineHeight: 1.08 }}>{t.title}</h1><p style={{ color: "#536778", fontSize: 17, lineHeight: 1.65 }}>{t.lead}</p><Link href={t.home} style={{ display: "inline-block", marginTop: 28, padding: "14px 21px", borderRadius: 999, color: "#fff", background: "#124e59", fontWeight: 800 }}>{t.button}</Link></section></main>;
}
