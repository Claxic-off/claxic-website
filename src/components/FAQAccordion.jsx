import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * FAQAccordion — renders an accessible accordion from FAQ data.
 *
 * Props:
 *  - faqs: Array<{ category: string, items: Array<{ q: string, a: string }> }>
 */
export default function FAQAccordion({ faqs }) {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => setOpenKey((prev) => (prev === key ? null : key));

  return (
    <div className="space-y-10">
      {faqs.map((section) => (
        <section key={section.category}>
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#FF2B12] mb-4">
            {section.category}
          </h2>
          <div className="space-y-2">
            {section.items.map((item, idx) => {
              const key = `${section.category}-${idx}`;
              const isOpen = openKey === key;

              return (
                <div
                  key={key}
                  className="border border-gray-100 rounded-2xl overflow-hidden bg-white"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-[#151515] font-semibold text-sm hover:bg-gray-50 transition-colors"
                    onClick={() => toggle(key)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${key}`}
                    id={`faq-question-${key}`}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#FF2B12] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={`faq-answer-${key}`}
                    role="region"
                    aria-labelledby={`faq-question-${key}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="px-5 pb-5 text-sm text-[#555B65] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
