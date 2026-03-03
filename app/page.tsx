import BuildingScroll from "@/components/BuildingScroll";
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://www.jcdesignsconsulting.in";
const localLandingPages = [
  { href: "/residential-architect-thanjavur", title: "Residential Architect in Thanjavur" },
  { href: "/commercial-architect-thanjavur", title: "Commercial Architect in Thanjavur" },
  { href: "/3d-elevation-design-thanjavur", title: "3D Elevation Design in Thanjavur" },
  { href: "/architect-kumbakonam", title: "Architect in Kumbakonam" },
  { href: "/architect-trichy", title: "Architect in Trichy" },
  { href: "/architect-pudukkottai", title: "Architect in Pudukkottai" },
];

export const metadata: Metadata = {
  title: "Architects in Thanjavur",
  description:
    "JC Designs & Consulting is a Thanjavur architecture firm for residential and commercial design, drawings, walkthroughs, and construction support.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    name: "JC Designs & Consulting",
    image: `${siteUrl}/logo.jpeg`,
    url: siteUrl,
    telephone: "+91-76049-55226",
    email: "jcdesigntnj@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12th Street, Anna Nagar",
      addressLocality: "Thanjavur",
      addressRegion: "Tamil Nadu",
      postalCode: "613001",
      addressCountry: "IN",
    },
    areaServed: [
      "Thanjavur",
      "Chennai",
      "Trichy",
      "Pudukkottai",
      "Bangalore",
      "Pondicherry",
    ],
    sameAs: [
      "https://www.jcdesignsconsulting.in",
      "https://jc-design-consulting.business.site",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <BuildingScroll />
      <section className="mx-auto mt-10 w-full max-w-7xl px-5 pb-20 sm:px-8">
        <div className="max-w-4xl border border-black/10 bg-white p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-black/50">
            Architecture in Thanjavur
          </p>
          <h1 className="mt-3 text-4xl font-medium tracking-tight text-black/90 sm:text-5xl">
            Architects in Thanjavur for residential, commercial, and 3D design projects
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed tracking-tight text-black/70 sm:text-lg">
            JC Designs &amp; Consulting supports homeowners, businesses, and builders with
            planning, elevation design, walkthroughs, structural coordination, and
            execution-ready drawings across Thanjavur and nearby cities.
          </p>
        </div>
        <div className="max-w-4xl border border-black/10 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-medium tracking-tight text-black/90">Local Service Pages</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {localLandingPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="interactive-link-card"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
