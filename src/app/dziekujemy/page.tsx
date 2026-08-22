import Link from "next/link";

export const metadata = { title: "Dziękujemy | 123PCI" };

export default function ThankYouPage() {
  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "linear-gradient(135deg, #edf8ee, #f6fafb)" }}><section style={{ maxWidth: 620, padding: "48px 36px", textAlign: "center", background: "#fff", border: "1px solid #dce9df", borderRadius: 24, boxShadow: "0 14px 50px #124e5915" }}><p style={{ display: "grid", placeItems: "center", width: 58, height: 58, margin: "0 auto 20px", borderRadius: "50%", background: "#46b24e", color: "#063217", fontSize: 30, fontWeight: 900 }}>✓</p><p style={{ color: "#3a9a42", fontWeight: 800, letterSpacing: 1.2, fontSize: 12 }}>ZGŁOSZENIE WYSŁANE</p><h1 style={{ margin: "10px 0 16px", fontSize: "clamp(30px, 5vw, 46px)", lineHeight: 1.08 }}>Dziękujemy za kontakt.</h1><p style={{ color: "#536778", fontSize: 17, lineHeight: 1.65 }}>Twoje zgłoszenie zostało wysłane. Odezwemy się w ciągu jednego dnia roboczego z wstępną oceną zakresu PCI DSS.</p><Link href="/" style={{ display: "inline-block", marginTop: 28, padding: "14px 21px", borderRadius: 999, color: "#fff", background: "#124e59", fontWeight: 800 }}>Wróć na stronę główną</Link></section></main>;
}
