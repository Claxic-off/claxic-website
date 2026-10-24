import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import { buildWhatsAppUrl, getWhatsAppConfig } from '../lib/whatsapp';
import { ArrowRight, Briefcase, BookOpen, Laptop, MessageCircle, Mail, Clock3, ShieldCheck } from 'lucide-react';

const ENQUIRY_OPTIONS = [
  {
    icon: Briefcase,
    title: 'General business enquiry',
    desc: 'Partnerships, information requests or anything else.',
  },
  {
    icon: Laptop,
    title: 'Software project enquiry',
    desc: 'Tell us about a website, app or software project you have in mind.',
  },
  {
    icon: BookOpen,
    title: 'Academy course enquiry',
    desc: 'Ask about a specific course, enrolment or our learning programmes.',
  },
];

const { number: WHATSAPP_NUMBER } = getWhatsAppConfig();
const WHATSAPP_URL = buildWhatsAppUrl(
  WHATSAPP_NUMBER,
  "Hi Claxic, I'd like to get in touch."
);

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Claxic"
        description="Contact Claxic for software projects, course enquiries, partnerships, and general questions about our technology and education services."
        canonicalPath="/contact"
        robots="index, follow"
        ogType="website"
      />
      <section className="bg-[#F3EEE9] px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div className="rounded-[2.2rem] bg-[#F3EEE9] py-4 lg:py-6">
            <p className="mb-4 text-[0.72rem] font-black uppercase tracking-[0.22em] text-[#FF2B12]">Get in touch</p>
            <h1 className="max-w-[620px] text-[3.5rem] font-black leading-[0.85] tracking-[-0.08em] text-[#151515] sm:text-[4.3rem] lg:text-[6.1rem]">
              Let’s build something{' '}
              <span className="mt-2 block text-[#FF2B12]">meaningful.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#566174] sm:text-[1.08rem]" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.02em' }}>
              Tell us about your website project, web application idea, custom software need, or the AI course you want to explore. We’ll help you find the right next step.
            </p>

            <div className="mt-8 space-y-3">
              {ENQUIRY_OPTIONS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-[1.35rem] border border-[#E9D8D1] bg-[#F7EAE4] p-4 sm:p-5"
                >
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF0EC] text-[#FF2B12]">
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[1.04rem] font-bold text-[#151515]">{title}</p>
                      <ArrowRight size={16} className="text-[#FF2B12]" strokeWidth={2.2} aria-hidden="true" />
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[#566174]" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.01em' }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.2rem] border border-[#EBD7CF] bg-[#FFFDFB] px-4 py-4 text-sm text-[#566174] sm:px-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF0EC] text-[#FF2B12]">
                  <Mail size={15} strokeWidth={2} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-[#151515]">We usually respond quickly.</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#566174]" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.01em' }}>
                    Whether it’s a project, a course, or just a simple question — we’ll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[2.2rem] border border-[#E8E2DD] bg-[#f2f2f2] p-5 shadow-[0_12px_28px_rgba(17,17,17,0.04)] sm:p-7 lg:p-8">
              <h2 className="text-[2.2rem] font-black tracking-[-0.07em] text-[#151515] sm:text-[2.8rem]">Send us a message</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#566174]">
                Fill in the form below and we’ll get back to you. Required fields are marked with{' '}
                <span className="font-bold text-[#FF2B12]">*</span>
              </p>

              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-[1.6rem] bg-[#171717] p-5 text-white shadow-sm sm:p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle size={20} strokeWidth={2.2} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-black tracking-[-0.04em] text-white">Prefer WhatsApp?</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#D5DCE6]">
                  WhatsApp is the fastest way to reach us. Start a conversation and we’ll respond promptly.
                </p>
                {WHATSAPP_URL ? (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF2B12] px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#e02410]"
                  >
                    Chat on WhatsApp
                    <ArrowRight size={15} strokeWidth={2.3} aria-hidden="true" />
                  </a>
                ) : (
                  <a
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FF2B12] px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#e02410]"
                  >
                    Contact Us
                    <ArrowRight size={15} strokeWidth={2.3} aria-hidden="true" />
                  </a>
                )}
              </div>

              <div className="rounded-[1.6rem] border border-[#EDE3DF] bg-[#FFFDFB] p-5 sm:p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF0EC] text-[#FF2B12]">
                      <Clock3 size={15} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#151515]">Response time</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#566174]" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.01em' }}>
                        We aim to respond to all enquiries as promptly as possible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF0EC] text-[#FF2B12]">
                      <ShieldCheck size={15} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#151515]">Privacy</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#566174]" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '-0.01em' }}>
                        Information you share through this form is used only to respond to your enquiry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

<SEO
  title="Contact Claxic Technologies | Business & Software Enquiries"
  description="Contact Claxic Technologies for website development, web applications, custom software, AI/ML solutions, partnerships and Claxic Academy course enquiries."
  canonicalPath="/contact"
  robots="index, follow"
  ogType="website"
/>
