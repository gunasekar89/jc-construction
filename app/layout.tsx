import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jcdesignsconsulting.in"),
  title: {
    default: "JC Designs & Consulting | Architects in Thanjavur",
    template: "%s | JC Designs & Consulting",
  },
  description:
    "JC Designs & Consulting is an architecture and construction consulting firm in Thanjavur offering design, drawings, 3D walkthroughs, and on-site support.",
  keywords: [
    "architect thanjavur",
    "architects in thanjavur",
    "thanjavur architecture firm",
    "jc designs consulting",
    "residential architect thanjavur",
    "commercial architect thanjavur",
    "3D elevation design thanjavur",
    "PMC consulting thanjavur",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JC Designs & Consulting | Architects in Thanjavur",
    description:
      "Architecture and construction consulting in Thanjavur for residential and commercial projects.",
    url: "https://www.jcdesignsconsulting.in",
    siteName: "JC Designs & Consulting",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white font-sans tracking-tight text-black antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
