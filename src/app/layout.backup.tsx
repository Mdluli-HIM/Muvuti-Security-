import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

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
    <html lang="en" className={GeistSans.variable}>
      <body className={`${GeistSans.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
