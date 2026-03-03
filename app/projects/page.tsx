import type { Metadata } from "next";

const googleReviewsHref =
  "https://www.google.com/search?sca_esv=e0de6c95d35408ea&sxsrf=ANbL-n7xIUYE7Z0Bhyu7103NB9TTwVxizw:1772544280599&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOW4o88DtE1o9-OYoHFeZVN-HT5Xig0ffI4KRVzHBLKBOvUb7WrfKCJVYkqe88K9roRneq-AnDlUVlD6DdVAeX5wWm2FR44zhEEymUXFWIUM29E9-Zg%3D%3D&q=JC+Designs+%26+Consulting+Reviews&sa=X&ved=2ahUKEwiZlMaB6oOTAxXExjgGHU-FBRQQ0bkNegQIIhAF&biw=1800&bih=1043&dpr=2";

export const metadata: Metadata = {
  title: "Architecture Projects in Thanjavur",
  description:
    "Explore architecture and construction project capabilities from JC Designs & Consulting in Thanjavur.",
  alternates: {
    canonical: "/projects",
  },
};

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

const featuredReviews = [
  {
    author: "Elangovan G",
    meta: "2 reviews · 1 photo",
    quote:
      "If you're looking for high-quality engineering and design work, I highly recommend Er. Jana. His expertise really shows in the quality of the work, and the team at JC Design and Consulting is easy to communicate with.",
  },
  {
    author: "Jacquline Ramesh",
    meta: "5 reviews",
    quote:
      "JC Designs & Consulting exceeded our expectations. Clear communication, quality work, and timely delivery. A dependable team you can trust for your design and consulting needs.",
  },
  {
    author: "Jason Ramesh",
    meta: "1 review",
    quote:
      "Great service and very professional team. They handled everything smoothly and delivered exactly as promised. Honest, reliable, and easy to work with.",
  },
  {
    author: "Dola Ramesh",
    meta: "6 reviews",
    quote:
      "Excellent experience with JC Designs & Consulting. Very professional, responsive, and detail-oriented. They clearly understood our requirements and delivered quality work on time.",
  },
  {
    author: "Ghurhu Ganesh",
    meta: "Local Guide · 13 reviews",
    quote:
      "Architect Janarthanan provided excellent design solutions at a very reasonable price. The quality of planning and attention to detail exceeded our expectations.",
  },
  {
    author: "Prabakaran Mathiyalagan",
    meta: "Local Guide · 167 reviews",
    quote:
      "World class designs and quality at affordable price. I would like to recommend them for those who need their home to be a special one.",
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

      <section className="mt-12 max-w-6xl border border-black/10 bg-white p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">Client Feedback</p>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-black/90">
          Read our Google reviews
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed tracking-tight text-black/65 sm:text-base">
          See what clients say about working with JC Designs &amp; Consulting across planning,
          visualization, technical drawings, and project coordination.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featuredReviews.map((review) => (
            <article
              key={review.author}
              className="border border-black/10 bg-[#F7F7F7] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/25 hover:bg-white hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-medium tracking-tight text-black/90">
                    {review.author}
                  </h3>
                  <p className="mt-1 text-xs tracking-tight text-black/45">{review.meta}</p>
                </div>
                <span className="text-sm tracking-[0.18em] text-[#B8860B]">★★★★★</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed tracking-tight text-black/70">
                {review.quote}
              </p>
            </article>
          ))}
        </div>
        <a
          href={googleReviewsHref}
          target="_blank"
          rel="noreferrer"
          className="cta-primary mt-6"
        >
          View Google Reviews
        </a>
      </section>
    </main>
  );
}
