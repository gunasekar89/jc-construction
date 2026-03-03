import type { Metadata } from "next";
import Link from "next/link";
import ContactLeadForm from "@/components/ContactLeadForm";
import FaqBlock from "@/components/FaqBlock";

export const metadata: Metadata = {
  title: "Architect in Pudukkottai",
  description:
    "Searching for an architect in Pudukkottai? JC Designs & Consulting offers design planning, 3D visualization, and technical drawing support for quality project delivery.",
  alternates: {
    canonical: "/architect-pudukkottai",
  },
};

const servicePoints = [
  "Functional floor plans for homes and mixed-use projects",
  "Exterior and interior 3D visualization support",
  "Execution-ready technical and working drawings",
  "Coordination guidance for site implementation",
];

const faqs = [
  {
    question: "Do you provide architecture consulting in Pudukkottai?",
    answer:
      "Yes. We provide design consulting and technical drawing services for residential and commercial requirements in Pudukkottai.",
  },
  {
    question: "Can you redesign or renovate an existing home?",
    answer:
      "Yes. We support renovation planning, space reconfiguration, facade updates, and visualization before execution.",
  },
  {
    question: "What details should I share for a consultation?",
    answer:
      "Please share your site location, approximate built-up area, project type, budget direction, and expected timeline.",
  },
];

const whatsappHref =
  "https://wa.me/917604955226?text=Hello%20JC%20Designs%20%26%20Consulting.%20I%20need%20an%20architect%20in%20Pudukkottai.";

export default function ArchitectPudukkottaiPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <section className="max-w-4xl border border-black/10 bg-white p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">Nearby Service Area</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-black/90 sm:text-5xl">
          Architect in Pudukkottai
        </h1>
        <p className="mt-5 text-base leading-relaxed tracking-tight text-black/70 sm:text-lg">
          JC Designs &amp; Consulting helps clients in Pudukkottai with practical architecture
          planning and clear technical output. Our approach combines design quality with
          construction feasibility.
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

      <FaqBlock title="FAQs: Architect in Pudukkottai" faqs={faqs} />

      <section className="mt-8 max-w-5xl">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">Book Your Consultation</h2>
        <p className="mt-2 text-sm tracking-tight text-black/65">
          Submit your project details and we will recommend the right design and documentation path.
        </p>
        <ContactLeadForm />
      </section>
    </main>
  );
}
