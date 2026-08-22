import { faqJsonLd } from "@/lib/schema";

export interface Faq {
  question: string;
  answer: string;
}

export default function FaqSection({ title = "Frequently asked questions", faqs }: { title?: string; faqs: Faq[] }) {
  if (faqs.length === 0) return null;

  return (
    <section aria-labelledby="faq-heading" className="mt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <h2 id="faq-heading" className="text-2xl font-semibold text-slate-900">
        {title}
      </h2>
      <dl className="mt-6 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt className="font-medium text-slate-900">{faq.question}</dt>
            <dd className="mt-1 text-slate-600">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
