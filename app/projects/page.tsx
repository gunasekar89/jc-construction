const focusAreas = [
  {
    title: "3D Exterior / Interior",
    description:
      "High-clarity design visuals that help clients finalize material, style, and massing decisions.",
  },
  {
    title: "Walkthrough",
    description:
      "Immersive walkthrough presentations for better understanding before site execution.",
  },
  {
    title: "PMC Consulting",
    description:
      "Project management consulting to align design, drawings, and on-site construction quality.",
  },
];

const businessProfile = [
  { label: "Followers", value: "0 Followers" },
  { label: "Business", value: "JC Designs & Consulting" },
  { label: "Category", value: "Architects & Building Designers" },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8">
      <section className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">Business Profile</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-black/90 sm:text-5xl">
          Construction-focused architecture delivery.
        </h1>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {businessProfile.map((item) => (
          <article key={item.label} className="border border-black/10 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-black/50">{item.label}</p>
            <p className="mt-2 text-sm tracking-tight text-black/80">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {focusAreas.map((area) => (
          <article key={area.title} className="border border-black/10 bg-white p-6">
            <h2 className="text-xl font-medium tracking-tight text-black/90">{area.title}</h2>
            <p className="mt-3 text-sm leading-relaxed tracking-tight text-black/60">
              {area.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
