import { NextResponse } from "next/server";

const maxLength = 2_000;
type Locale = "pl" | "en" | "de";

function text(value: FormDataEntryValue | null, limit = 160) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

function locale(value: FormDataEntryValue | null): Locale {
  const valueAsText = text(value, 2);
  return valueAsText === "en" || valueAsText === "de" ? valueAsText : "pl";
}

function pagePath(page: "dziekujemy" | "blad-formularza", currentLocale: Locale) {
  return currentLocale === "pl" ? `/${page}` : `/${currentLocale}/${page}`;
}

export async function POST(request: Request) {
  const form = await request.formData();
  const currentLocale = locale(form.get("locale"));
  if (text(form.get("website"))) return NextResponse.redirect(new URL(pagePath("dziekujemy", currentLocale), request.url), 303);
  const name = text(form.get("name"));
  const company = text(form.get("company"));
  const email = text(form.get("email"));
  const phone = text(form.get("phone"), 50);
  const business = text(form.get("business"));
  const message = text(form.get("message"), maxLength);
  if (!name || !company || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.redirect(new URL(`${pagePath("blad-formularza", currentLocale)}?reason=validation`, request.url), 303);

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_EMAIL ?? "rluczak@123pci.pl";
  if (!apiKey || !from) return NextResponse.redirect(new URL(`${pagePath("blad-formularza", currentLocale)}?reason=configuration`, request.url), 303);

  try {
    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [to], reply_to: email, subject: `123PCI - nowe zapytanie: ${company}`, text: `Imię i nazwisko: ${name}\nFirma: ${company}\nE-mail: ${email}\nTelefon: ${phone}\nRodzaj działalności: ${business}\n\nWiadomość:\n${message}` }) });
    return NextResponse.redirect(new URL(response.ok ? pagePath("dziekujemy", currentLocale) : `${pagePath("blad-formularza", currentLocale)}?reason=delivery`, request.url), 303);
  } catch {
    return NextResponse.redirect(new URL(`${pagePath("blad-formularza", currentLocale)}?reason=delivery`, request.url), 303);
  }
}
