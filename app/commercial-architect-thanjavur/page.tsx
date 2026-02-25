import type { Metadata } from "next";
import Link from "next/link";
import ContactLeadForm from "@/components/ContactLeadForm";
import FaqBlock from "@/components/FaqBlock";

export const metadata: Metadata = {
  title: "Commercial Architect in Thanjavur",
  description:
    "Hire a commercial architect in Thanjavur for offices, retail, clinics, and mixed-use spaces. JC Designs & Consulting delivers design, documentation, and execution support.",
  alternates: {
    canonical: "/commercial-architect-thanjavur",
  },
};

const commercialSegments = [
  "Office and workspace planning",
  "Retail showroom and storefront design",
  "Clinic, school, and institutional planning",
  "Facade upgrades and renovation strategy",
];

const executionSupport = [
  "Space planning for customer flow and operations",
  "Statutory and approval drawing support",
  "Material and cost-planning coordination",
  "Site coordination for timeline and quality",
];

const faqs = [
  {
    question: "Which commercial project types do you handle in Thanjavur?",
    answer:
      "We work on offices, retail spaces, clinics, educational and institutional spaces, and renovation-focused commercial upgrades.",
  },
  {
    question: "Can you support approval drawings and execution documents?",
    answer:
      "Yes. We prepare approval drawing support, coordinated technical documents, and practical details required for smoother execution.",
  },
  {
    question: "How do you control budget and timeline risk in commercial projects?",
    answer:
      "We prioritize planning clarity, material coordination, and phased documentation to reduce rework and improve on-site decision speed.",
  },
];

const whatsappHref =
  "https://wa.me/917604955226?text=Hello%20JC%20Designs%20%26%20Consulting.%20I%20need%20a%20commercial%20architect%20in%20Thanjavur.";

export default function CommercialArchitectThanjavurPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <section className="max-w-4xl border border-black/10 bg-white p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">Thanjavur Commercial</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-black/90 sm:text-5xl">
          Commercial Architect in Thanjavur
        </h1>
        <p className="mt-5 text-base leading-relaxed tracking-tight text-black/70 sm:text-lg">
          For commercial spaces, design decisions directly impact branding, customer experience,
          and operating efficiency. JC Designs &amp; Consulting helps businesses in Thanjavur with
          design-led planning and construction-ready documentation.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center border border-black/80 bg-black px-5 text-sm tracking-tight text-white"
          >
            Get Project Estimate
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center border border-black/30 bg-white px-5 text-sm tracking-tight text-black/80"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {commercialSegments.map((item) => (
          <article key={item} className="border border-black/10 bg-white p-5">
            <p className="text-sm tracking-tight text-black/75">{item}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 max-w-4xl border border-black/10 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">Execution-focused support</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {executionSupport.map((item) => (
            <li key={item} className="border border-black/10 bg-[#F2F2F2] px-4 py-3 text-sm text-black/75">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <FaqBlock title="FAQs: Commercial Architect in Thanjavur" faqs={faqs} />

      <section className="mt-8 max-w-5xl">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">
          Book Your Consultation
        </h2>
        <p className="mt-2 text-sm tracking-tight text-black/65">
          Tell us your business type, area requirement, and timeline. We will suggest the right
          project approach.
        </p>
        <ContactLeadForm />
      </section>
    </main>
  );
}
