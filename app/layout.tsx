import type { Metadata } from "next";
import { Geist, Geist_Mono, Prata } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prata = Prata({
  weight: "400",
  variable: "--font-prata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instituto Ágora - Un lugar seguro para recuperar tu vida",
  description: "En Ágora acompañamos a personas que están atravesando problemas relacionados con consumos que interfieren en su bienestar y su día a día.",
  keywords: ["desintoxicación", "adicciones", "rehabilitación", "Huelva", "centro de rehabilitación", "tratamiento adicciones"],
  authors: [{ name: "Instituto Ágora" }],
  creator: "Instituto Ágora",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-270.png", sizes: "270x270", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  openGraph: {
    title: "Instituto Ágora - Un lugar seguro para recuperar tu vida",
    description: "En Ágora acompañamos a personas que están atravesando problemas relacionados con consumos que interfieren en su bienestar y su día a día.",
    type: "website",
    locale: "es_ES",
    siteName: "Instituto Ágora",
    images: [
      {
        url: "/agora-logo.png",
        width: 1200,
        height: 630,
        alt: "Instituto Ágora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituto Ágora - Un lugar seguro para recuperar tu vida",
    description: "En Ágora acompañamos a personas que están atravesando problemas relacionados con consumos que interfieren en su bienestar y su día a día.",
    images: ["/agora-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${prata.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
