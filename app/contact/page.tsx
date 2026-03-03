import ContactLeadForm from "@/components/ContactLeadForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Architect in Thanjavur",
  description:
    "Contact JC Designs & Consulting, Thanjavur architecture firm for residential and commercial design, drawings, and project consulting.",
  alternates: {
    canonical: "/contact",
  },
};

const branchLocations = [
  "Chennai (ECR - Main Office)",
  "Thanjavur (Main Office)",
  "Bangalore (KR Puram)",
  "Trichy",
  "Pudukkottai",
];

const phoneHref = "tel:+917604955226";
const gmailComposeHref =
  "https://mail.google.com/mail/?view=cm&fs=1&to=jcdesigntnj@gmail.com";

const localLandingPages = [
  { href: "/residential-architect-thanjavur", title: "Residential Architect in Thanjavur" },
  { href: "/commercial-architect-thanjavur", title: "Commercial Architect in Thanjavur" },
  { href: "/3d-elevation-design-thanjavur", title: "3D Elevation Design in Thanjavur" },
  { href: "/architect-kumbakonam", title: "Architect in Kumbakonam" },
  { href: "/architect-trichy", title: "Architect in Trichy" },
  { href: "/architect-pudukkottai", title: "Architect in Pudukkottai" },
];

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <section className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">Contact</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-black/90 sm:text-5xl">
          Let&apos;s discuss your project.
        </h1>
        <p className="mt-6 text-base leading-relaxed tracking-tight text-black/60 sm:text-lg">
          3D Exterior / Interior / Walkthrough / PMC Consulting - by JC Designs &amp; Consulting.
        </p>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="border border-black/10 bg-white p-5">
          <p className="text-xs uppercase tracking-[0.15em] text-black/50">Phone</p>
          <a
            href={phoneHref}
            className="mt-2 inline-flex text-sm tracking-tight text-black/80 underline-offset-4 transition-colors hover:text-black hover:underline"
          >
            +91 76049 55226
          </a>
        </article>
        <article className="border border-black/10 bg-white p-5">
          <p className="text-xs uppercase tracking-[0.15em] text-black/50">Email</p>
          <a
            href={gmailComposeHref}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex text-sm tracking-tight text-black/80 underline-offset-4 transition-colors hover:text-black hover:underline"
          >
            jcdesigntnj@gmail.com
          </a>
        </article>
        <article className="border border-black/10 bg-white p-5">
          <p className="text-xs uppercase tracking-[0.15em] text-black/50">Website</p>
          <a
            href="https://www.jcdesignsconsulting.in"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-sm tracking-tight text-black/80 underline"
          >
            www.jcdesignsconsulting.in
          </a>
        </article>
        <article className="border border-black/10 bg-white p-5">
          <p className="text-xs uppercase tracking-[0.15em] text-black/50">Main Address</p>
          <p className="mt-2 text-sm tracking-tight text-black/80">
            12th Street, Anna Nagar, Thanjavur, Tamil Nadu, India - 613001
          </p>
        </article>
      </section>

      <section className="mt-4 border border-black/10 bg-white p-6">
        <h2 className="text-xl font-medium tracking-tight text-black/90">Branch Presence</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {branchLocations.map((location) => (
            <span
              key={location}
              className="inline-flex items-center border border-black/15 bg-[#E6E6E6] px-3 py-2 text-xs tracking-tight text-black/70 sm:text-sm"
            >
              {location}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-4 border border-black/10 bg-white p-6">
        <h2 className="text-xl font-medium tracking-tight text-black/90">Local Service Pages</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
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
      </section>

      <ContactLeadForm />
    </main>
  );
}
