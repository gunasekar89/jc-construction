import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Our Architecture Firm in Thanjavur",
  description:
    "Learn about JC Designs & Consulting, a family-led architecture and construction consulting firm based in Thanjavur, Tamil Nadu.",
  alternates: {
    canonical: "/about",
  },
};

const businessHighlights = [
  { label: "Business Name", value: "JC Designs & Consulting" },
  { label: "Category", value: "Architects & Building Designers" },
  {
    label: "Typical Project Engagement",
    value: "Quoted after reviewing scope, site size, design package, and drawing requirements",
  },
  { label: "Contact Office", value: "+91 76049 55226" },
  { label: "Email", value: "jcdesigntnj@gmail.com" },
  { label: "Website", value: "www.jcdesignsconsulting.in" },
];

const officeLocations = [
  {
    name: "Chennai",
    detail: "ECR - Main Office",
    image: "/locations/chennai.webp",
  },
  {
    name: "Thanjavur",
    detail: "Main Office",
    image: "/locations/thanjavur.webp",
  },
  {
    name: "Bangalore",
    detail: "KR Puram",
    image: "/locations/bangalore.webp",
  },
  {
    name: "Trichy",
    detail: "Regional Office",
    image: "/locations/trichy.webp",
  },
  {
    name: "Pondicherry",
    detail: "Regional Office",
    image: "/locations/pondicherry.webp",
  },
  {
    name: "Pudukkottai",
    detail: "Regional Office",
    image: "/locations/pudukkottai.webp",
  },
];

const principles = [
  "Discipline in execution",
  "Respect for timelines",
  "Commitment to client trust",
];

const localLandingPages = [
  { href: "/residential-architect-thanjavur", title: "Residential Architect in Thanjavur" },
  { href: "/commercial-architect-thanjavur", title: "Commercial Architect in Thanjavur" },
  { href: "/3d-elevation-design-thanjavur", title: "3D Elevation Design in Thanjavur" },
  { href: "/architect-kumbakonam", title: "Architect in Kumbakonam" },
  { href: "/architect-trichy", title: "Architect in Trichy" },
  { href: "/architect-pudukkottai", title: "Architect in Pudukkottai" },
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <section className="max-w-5xl border border-black/10 bg-white p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">About Us</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black/90 sm:text-5xl">
          Construction is not just our profession - it is our legacy.
        </h1>

        <div className="mt-6 space-y-4 text-sm leading-relaxed tracking-tight text-black/70 sm:text-base">
          <p>
            Our journey began with our grandfather,{" "}
            <span className="font-semibold text-black/90">K. Kathmuthu</span>, whose dedication to
            craftsmanship, integrity, and hard work laid the foundation for a proud family
            tradition in construction.
          </p>
          <p>
            His values were carried forward by the next generation through SAMI Construction - K.
            <span className="font-semibold text-black/90">Mathiyalagan</span>, Thanjavur, where our
            father transformed years of practical experience into a structured and trusted
            practice, earning confidence across communities through commitment and reliability.
          </p>
          <p>
            Growing up in this environment, construction became more than buildings and materials -
            it represented responsibility, relationships, and reputation. Nearly every member of
            our family has been connected to the construction field in some capacity, contributing
            to a shared culture of discipline, quality workmanship, and continuous learning.
          </p>
          <p>
            Today, this legacy continues through the next generation. Our firm represents a modern
            evolution of decades of experience, where traditional values blend with contemporary
            methods, technology, and design thinking. With involvement in 100+ residential and
            commercial projects, we have consistently delivered spaces that reflect durability,
            functionality, and the vision of our clients.
          </p>
          <p>
            Some of our works in Thanjavur stand as lasting examples of this commitment, including
            our structural contributions to Sacred Heart Matriculation Higher Secondary School,
            where the construction quality continues to endure strong even after more than 50 years
            - a testament to the strength, precision, and sincerity embedded in our work.
          </p>
          <p>
            Every project we undertake is treated not merely as a contract, but as a
            responsibility - to deliver with professionalism, transparency, and care. As we move
            forward, our mission remains clear: to honor our family heritage while building
            structures that stand as symbols of reliability for generations to come.
          </p>
        </div>
      </section>

      <section className="mt-8 max-w-5xl border border-black/10 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">
          Our Core Construction Principles
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {principles.map((item) => (
            <li
              key={item}
              className="flex min-h-[88px] items-center justify-center border border-black/10 bg-[#E6E6E6] px-4 py-3 text-center text-sm tracking-tight text-black/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {businessHighlights.map((item) => (
          <article key={item.label} className="border border-black/10 bg-white p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-black/50">{item.label}</p>
            <p className="mt-2 text-sm leading-relaxed tracking-tight text-black/80">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 max-w-5xl border border-black/10 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">Current Office Locations</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {officeLocations.map((location) => (
            <article
              key={location.name}
              className="group overflow-hidden border border-black/10 bg-[#E6E6E6] transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={location.image}
                  alt={`${location.name} office`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-base font-medium tracking-tight text-white">{location.name}</p>
                  <p className="text-xs tracking-tight text-white/85">{location.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 max-w-5xl border border-black/10 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">Local Service Pages</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {localLandingPages.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border border-black/10 bg-[#F2F2F2] px-4 py-3 text-sm tracking-tight text-black/80 transition-colors hover:border-black/30 hover:text-black"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
