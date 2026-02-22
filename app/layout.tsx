import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "JC Designs & Consulting",
    template: "%s | JC Designs & Consulting",
  },
  description:
    "Architecture and construction consulting for concept design, technical drawings, and on-site execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#E6E6E6] font-sans tracking-tight text-black antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
