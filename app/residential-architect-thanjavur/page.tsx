import type { Metadata } from "next";
import Link from "next/link";
import ContactLeadForm from "@/components/ContactLeadForm";
import FaqBlock from "@/components/FaqBlock";

export const metadata: Metadata = {
  title: "Residential Architect in Thanjavur",
  description:
    "Looking for a residential architect in Thanjavur? JC Designs & Consulting offers house plans, elevation design, 3D walkthroughs, and execution-ready drawings.",
  alternates: {
    canonical: "/residential-architect-thanjavur",
  },
};

const highlights = [
  "Custom house planning for your site size and family needs",
  "Vastu-aware layout optimization without compromising usability",
  "2D plans, 3D elevation, and walkthrough before execution",
  "Structural and MEP coordination for smoother construction",
];

const process = [
  "Site and requirement discussion",
  "Concept options with design direction",
  "Final plan, elevation, and 3D visualization",
  "Working drawings and on-site support",
];

const faqs = [
  {
    question: "What services do you provide for residential projects in Thanjavur?",
    answer:
      "We provide concept planning, 2D floor plans, 3D elevation and walkthrough, working drawings, and coordination support for execution.",
  },
  {
    question: "Can you design based on my plot size and vastu requirements?",
    answer:
      "Yes. We tailor layouts to your plot dimensions, family needs, and vastu preferences while keeping ventilation and usability practical.",
  },
  {
    question: "Do you support only design or complete project execution too?",
    answer:
      "We support both. You can engage us for design-only packages or for design plus technical and site coordination support.",
  },
];

const whatsappHref =
  "https://wa.me/917604955226?text=Hello%20JC%20Designs%20%26%20Consulting.%20I%20need%20a%20residential%20architect%20in%20Thanjavur.";

export default function ResidentialArchitectThanjavurPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <section className="max-w-4xl border border-black/10 bg-white p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">Thanjavur Residential</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-black/90 sm:text-5xl">
          Residential Architect in Thanjavur
        </h1>
        <p className="mt-5 text-base leading-relaxed tracking-tight text-black/70 sm:text-lg">
          JC Designs &amp; Consulting helps homeowners in Thanjavur design practical, beautiful,
          and construction-ready homes. From concept planning to technical drawings, our team
          supports your project from first discussion to execution.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center border border-black/80 bg-black px-5 text-sm tracking-tight text-white"
          >
            Book Free Consultation
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
        {highlights.map((item) => (
          <article key={item} className="border border-black/10 bg-white p-5">
            <p className="text-sm tracking-tight text-black/75">{item}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 max-w-4xl border border-black/10 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">Our design process</h2>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {process.map((step, index) => (
            <li key={step} className="border border-black/10 bg-[#F2F2F2] px-4 py-3 text-sm text-black/75">
              {index + 1}. {step}
            </li>
          ))}
        </ol>
      </section>

      <FaqBlock title="FAQs: Residential Architect in Thanjavur" faqs={faqs} />

      <section className="mt-8 max-w-5xl">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">
          Book Your Consultation
        </h2>
        <p className="mt-2 text-sm tracking-tight text-black/65">
          Share your plot details and project requirement. Our team will get back with the next
          steps.
        </p>
        <ContactLeadForm />
      </section>
    </main>
  );
}
