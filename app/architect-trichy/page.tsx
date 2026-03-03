import type { Metadata } from "next";
import Link from "next/link";
import ContactLeadForm from "@/components/ContactLeadForm";
import FaqBlock from "@/components/FaqBlock";

export const metadata: Metadata = {
  title: "Architect in Trichy",
  description:
    "Need an architect in Trichy? JC Designs & Consulting offers residential and commercial planning, 3D design, and construction documentation.",
  alternates: {
    canonical: "/architect-trichy",
  },
};

const servicePoints = [
  "Residential planning and elevation development",
  "3D interior and exterior design support",
  "Technical drawings for construction stage",
  "Project management consulting for coordination",
];

const faqs = [
  {
    question: "Do you take residential architecture projects in Trichy?",
    answer:
      "Yes. We support villa, independent home, renovation, and apartment planning projects in Trichy.",
  },
  {
    question: "Can you provide 3D walkthrough and technical drawings together?",
    answer:
      "Yes. We can combine concept visuals with execution-ready drawings so project decisions are clear before construction.",
  },
  {
    question: "Do you offer site coordination support in Trichy?",
    answer:
      "Yes. Depending on your package, we provide guidance for site coordination and quality-focused decision support.",
  },
];

const whatsappHref =
  "https://wa.me/917604955226?text=Hello%20JC%20Designs%20%26%20Consulting.%20I%20need%20an%20architect%20in%20Trichy.";

export default function ArchitectTrichyPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <section className="max-w-4xl border border-black/10 bg-white p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">Nearby Service Area</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-black/90 sm:text-5xl">
          Architect in Trichy
        </h1>
        <p className="mt-5 text-base leading-relaxed tracking-tight text-black/70 sm:text-lg">
          JC Designs &amp; Consulting provides architecture and construction support for clients in
          Trichy. We help you move from design concept to on-site clarity through structured
          deliverables.
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

      <FaqBlock title="FAQs: Architect in Trichy" faqs={faqs} />

      <section className="mt-8 max-w-5xl">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">Book Your Consultation</h2>
        <p className="mt-2 text-sm tracking-tight text-black/65">
          Share your site details and preferred timeline. We will suggest the best architecture
          engagement format.
        </p>
        <ContactLeadForm />
      </section>
    </main>
  );
}
