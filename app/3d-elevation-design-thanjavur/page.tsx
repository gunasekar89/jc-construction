import type { Metadata } from "next";
import Link from "next/link";
import ContactLeadForm from "@/components/ContactLeadForm";
import FaqBlock from "@/components/FaqBlock";

export const metadata: Metadata = {
  title: "3D Elevation Design in Thanjavur",
  description:
    "Get 3D elevation design in Thanjavur from JC Designs & Consulting. Compare options, finalize facade style, and move to execution with confidence.",
  alternates: {
    canonical: "/3d-elevation-design-thanjavur",
  },
};

const deliverables = [
  "Front elevation design options based on your plan",
  "Material and color palette suggestion",
  "Day and evening view previews",
  "Facade details aligned with structural feasibility",
];

const benefits = [
  "Avoid costly facade revisions during construction",
  "Get stakeholder approval faster with clear visual output",
  "Align architecture, interiors, and exterior character early",
  "Move from concept to working drawings without confusion",
];

const faqs = [
  {
    question: "What is included in your 3D elevation design package?",
    answer:
      "Our package includes facade concept options, material and color direction, detailed visual output, and design refinement based on your feedback.",
  },
  {
    question: "Can you create elevation design from my existing floor plan?",
    answer:
      "Yes. If you already have a plan, we can develop facade options aligned to your layout, style preference, and budget direction.",
  },
  {
    question: "How does 3D elevation help before construction?",
    answer:
      "It reduces guesswork, improves family/stakeholder approval, and helps avoid expensive exterior design changes during execution.",
  },
];

const whatsappHref =
  "https://wa.me/917604955226?text=Hello%20JC%20Designs%20%26%20Consulting.%20I%20need%203D%20elevation%20design%20in%20Thanjavur.";

export default function ElevationDesignThanjavurPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <section className="max-w-4xl border border-black/10 bg-white p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">Thanjavur 3D Design</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-black/90 sm:text-5xl">
          3D Elevation Design in Thanjavur
        </h1>
        <p className="mt-5 text-base leading-relaxed tracking-tight text-black/70 sm:text-lg">
          We create realistic 3D elevations that help you finalize style, proportion, and materials
          before construction starts. JC Designs &amp; Consulting provides practical design output
          that is both visually strong and buildable on site.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="cta-primary"
          >
            Request 3D Elevation Quote
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
        {deliverables.map((item) => (
          <article key={item} className="border border-black/10 bg-white p-5">
            <p className="text-sm tracking-tight text-black/75">{item}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 max-w-4xl border border-black/10 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">Why clients choose this</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {benefits.map((item) => (
            <li key={item} className="border border-black/10 bg-[#F2F2F2] px-4 py-3 text-sm text-black/75">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <FaqBlock title="FAQs: 3D Elevation Design in Thanjavur" faqs={faqs} />

      <section className="mt-8 max-w-5xl">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">
          Book Your Consultation
        </h2>
        <p className="mt-2 text-sm tracking-tight text-black/65">
          Share your plan and preferred style. We will guide you on the right 3D elevation package.
        </p>
        <ContactLeadForm />
      </section>
    </main>
  );
}
