import FAQAccordion from '../components/FAQAccordion';
import SEO from '../components/SEO';
import { faqs } from '../data/faq';
import WhatsAppButton from '../components/WhatsAppButton';

export default function FAQPage() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions | Claxic"
        description="Find answers to frequent questions about Claxic Technologies, Claxic Academy, and how to get in touch with the team."
        canonicalPath="/faq"
        robots="index, follow"
        ogType="website"
      />
      {/* ── Hero ── */}
      <section className="bg-white pt-14 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF2B12] mb-4">Help Centre</p>
          <h1 className="text-4xl sm:text-5xl font-black text-[#151515] mb-5 leading-tight">
            Frequently asked questions
          </h1>
          <p className="text-[#555B65] text-lg leading-relaxed">
            Find quick answers about Claxic Technologies, Claxic Academy and how everything works. Can't find what you need? Ask us directly.
          </p>
        </div>
      </section>

      {/* ── Accordion ── */}
      <section className="bg-[#F4F5F6] py-12 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={faqs} />

          {/* Still have questions */}
          <div className="mt-14 bg-[#151515] rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-black text-white mb-3">Still have questions?</h2>
            <p className="text-gray-400 mb-6 text-sm">
              If you couldn't find what you were looking for, we're just a message away.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <WhatsAppButton
                message="Hi Claxic, I have a question that wasn't answered in your FAQ."
                label="Ask on WhatsApp"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
