import Link from "next/link";

export const metadata = { title: "Problem z formularzem | 123PCI" };

export default function ContactErrorPage() {
  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#f7fafb" }}><section style={{ maxWidth: 620, padding: "48px 36px", textAlign: "center", background: "#fff", border: "1px solid #e3e9ed", borderRadius: 24 }}><p style={{ fontSize: 30, margin: 0 }}>!</p><h1 style={{ margin: "10px 0 16px", fontSize: "clamp(30px, 5vw, 42px)" }}>Nie udało się wysłać zgłoszenia.</h1><p style={{ color: "#536778", lineHeight: 1.65 }}>Spróbuj ponownie za chwilę albo napisz bezpośrednio na <a href="mailto:rluczak@123pci.pl">rluczak@123pci.pl</a>.</p><Link href="/#kontakt" style={{ display: "inline-block", marginTop: 28, padding: "14px 21px", borderRadius: 999, color: "#fff", background: "#124e59", fontWeight: 800 }}>Wróć do formularza</Link></section></main>;
}
