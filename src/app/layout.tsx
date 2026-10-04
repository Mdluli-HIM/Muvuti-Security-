import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import MobileTacticalFeedback from "@/components/effects/MobileTacticalFeedback";
import TacticalCursor from "@/components/effects/TacticalCursor";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Muvuti Security Services",
  description:
    "Professional security guarding, patrol, surveillance, VIP protection and event security services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={GeistSans.variable}
      data-scroll-behavior="smooth"
    >
      <body className={`${GeistSans.className} antialiased`}>
        <TacticalCursor />
        <MobileTacticalFeedback />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
