type FAQItem = {
  question: string;
  answer: string;
};

type FaqBlockProps = {
  title: string;
  faqs: FAQItem[];
};

export default function FaqBlock({ title, faqs }: FaqBlockProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="mt-8 max-w-4xl border border-black/10 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-medium tracking-tight text-black/90">{title}</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((item) => (
            <article key={item.question} className="border border-black/10 bg-[#F2F2F2] p-4">
              <h3 className="text-base font-medium tracking-tight text-black/90">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed tracking-tight text-black/70">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
