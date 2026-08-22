import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://123pci.pl"),
  title: { default: "123PCI | Zgodność z PCI DSS", template: "%s | 123PCI" },
  description: "Praktyczne wsparcie PCI DSS dla małych merchantów i biur turystycznych IATA.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pl_PL", siteName: "123PCI", title: "123PCI | Zgodność z PCI DSS", description: "Praktyczne wsparcie PCI DSS dla małych merchantów i biur turystycznych IATA." },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pl"><body>{children}</body></html>; }
