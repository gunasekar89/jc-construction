const services = [
  "3D Rendering",
  "Architectural Design",
  "Bathroom Design",
  "Building Design",
  "Custom Home",
  "Dining Room Design",
  "Eco Homes",
  "Floor Plans",
  "Green Building",
  "Home Extensions",
  "Home Renovation & Remodeling",
  "Home Restoration",
  "House Plans",
  "Kitchen Design",
  "Landscape Plans",
  "Living Room Design",
  "New Home Construction",
  "Staircase Design",
  "Universal Design",
  "Elevation Design",
  "3D Exterior Design",
  "3D Interior Design",
  "Walkthrough Presentation",
  "PMC Consulting",
  "Working Drawings",
  "Structural Coordination",
  "Electrical & Plumbing Layouts",
  "BOQ & Cost Planning Support",
  "Approval Drawing Support",
  "Site Coordination",
  "Material Selection Support",
  "Turnkey Planning Guidance",
];

const processSteps = [
  {
    title: "01. Discovery",
    detail: "Understand your site, goals, budget range, and timeline expectations.",
  },
  {
    title: "02. Design Development",
    detail: "Concepts, 2D plans, 3D visuals, and walkthroughs for design finalization.",
  },
  {
    title: "03. Technical Documentation",
    detail: "Construction drawings, coordinated layouts, and execution-ready details.",
  },
  {
    title: "04. Build Support",
    detail: "PMC and site coordination support for quality-focused project delivery.",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <section className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">Services</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-black/90 sm:text-5xl">
          End-to-end construction support.
        </h1>
        <p className="mt-6 text-base tracking-tight text-black/60 sm:text-lg">
          Architecture, 3D visualization, construction documentation, and project execution support
          under one team.
        </p>
      </section>

      <section className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service}
            className="group relative overflow-hidden border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:bg-[#F2F2F2] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >
            <span className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-black/70 transition-transform duration-300 group-hover:scale-y-100" />
            <p className="relative pl-2 text-sm tracking-tight text-black/80 transition-colors duration-300 group-hover:text-black/95">
              {service}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">How we deliver</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {processSteps.map((step) => (
            <article
              key={step.title}
              className="group relative overflow-hidden border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:bg-[#F2F2F2] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <span className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-black/70 transition-transform duration-300 group-hover:scale-y-100" />
              <h3 className="relative pl-2 text-lg font-medium tracking-tight text-black/90 transition-colors duration-300 group-hover:text-black">
                {step.title}
              </h3>
              <p className="relative mt-2 pl-2 text-sm tracking-tight text-black/60 transition-colors duration-300 group-hover:text-black/75">
                {step.detail}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
