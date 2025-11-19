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
