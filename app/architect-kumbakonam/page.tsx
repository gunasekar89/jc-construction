import type { Metadata } from "next";
import Link from "next/link";
import ContactLeadForm from "@/components/ContactLeadForm";
import FaqBlock from "@/components/FaqBlock";

export const metadata: Metadata = {
  title: "Architect in Kumbakonam",
  description:
    "Looking for an architect in Kumbakonam? JC Designs & Consulting offers planning, 3D design, working drawings, and project support for homes and commercial spaces.",
  alternates: {
    canonical: "/architect-kumbakonam",
  },
};

const servicePoints = [
  "House planning and 3D elevation design",
  "Commercial layout and facade planning",
  "Working drawings with coordinated details",
  "Execution guidance and site support",
];

const faqs = [
  {
    question: "Do you provide architecture services in Kumbakonam?",
    answer:
      "Yes. We work on residential and commercial architecture projects in Kumbakonam, including design and technical documentation support.",
  },
  {
    question: "Can I approach you for only floor plan and elevation?",
    answer:
      "Yes. You can choose design-only services like floor plans, 3D elevation, and walkthrough based on your project stage.",
  },
  {
    question: "How do we start a new project discussion?",
    answer:
      "Share your plot details, budget range, and timeline through our consultation form or WhatsApp. We will guide the next steps.",
  },
];

const whatsappHref =
  "https://wa.me/917604955226?text=Hello%20JC%20Designs%20%26%20Consulting.%20I%20need%20an%20architect%20in%20Kumbakonam.";

export default function ArchitectKumbakonamPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <section className="max-w-4xl border border-black/10 bg-white p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">Nearby Service Area</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-black/90 sm:text-5xl">
          Architect in Kumbakonam
        </h1>
        <p className="mt-5 text-base leading-relaxed tracking-tight text-black/70 sm:text-lg">
          JC Designs &amp; Consulting supports clients in Kumbakonam with practical architecture
          planning, visualization, and build-ready drawings. We focus on design clarity and
          execution confidence.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="cta-primary"
          >
            Book Free Consultation
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="cta-secondary"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {servicePoints.map((item) => (
          <article key={item} className="border border-black/10 bg-white p-5">
            <p className="text-sm tracking-tight text-black/75">{item}</p>
          </article>
        ))}
      </section>

      <FaqBlock title="FAQs: Architect in Kumbakonam" faqs={faqs} />

      <section className="mt-8 max-w-5xl">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">Book Your Consultation</h2>
        <p className="mt-2 text-sm tracking-tight text-black/65">
          Tell us your project type and location details. Our team will contact you with a suitable
          plan.
        </p>
        <ContactLeadForm />
      </section>
    </main>
  );
}
