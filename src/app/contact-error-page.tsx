import Link from "next/link";

type Locale = "pl" | "en" | "de";

const copy: Record<Locale, { title: string; leadBefore: string; email: string; button: string; form: string }> = {
  pl: {
    title: "Nie udało się wysłać zgłoszenia.",
    leadBefore: "Spróbuj ponownie za chwilę albo napisz bezpośrednio na ",
    email: "kontakt@123pci.pl",
    button: "Wróć do formularza",
    form: "/#kontakt",
  },
  en: {
    title: "We could not send your enquiry.",
    leadBefore: "Please try again shortly or email us directly at ",
    email: "contact@123pci.pl",
    button: "Back to the form",
    form: "/en#kontakt",
  },
  de: {
    title: "Ihre Anfrage konnte nicht gesendet werden.",
    leadBefore: "Bitte versuchen Sie es in Kürze erneut oder schreiben Sie uns direkt an ",
    email: "contact@123pci.pl",
    button: "Zurück zum Formular",
    form: "/de#kontakt",
  },
};

export default function ContactErrorPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#f7fafb" }}><section style={{ maxWidth: 620, padding: "48px 36px", textAlign: "center", background: "#fff", border: "1px solid #e3e9ed", borderRadius: 24 }}><p style={{ fontSize: 30, margin: 0 }}>!</p><h1 style={{ margin: "10px 0 16px", fontSize: "clamp(30px, 5vw, 42px)" }}>{t.title}</h1><p style={{ color: "#536778", lineHeight: 1.65 }}>{t.leadBefore}<a href={`mailto:${t.email}`}>{t.email}</a>.</p><Link href={t.form} style={{ display: "inline-block", marginTop: 28, padding: "14px 21px", borderRadius: 999, color: "#fff", background: "#124e59", fontWeight: 800 }}>{t.button}</Link></section></main>;
}
