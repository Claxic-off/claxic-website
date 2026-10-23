import { ContactIllustration } from '../assets/illustrations';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';
import { MessageCircle, Laptop, BookOpen, Briefcase } from 'lucide-react';

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

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white pt-14 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#FF2B12] mb-4">Get in Touch</p>
            <h1 className="text-5xl sm:text-6xl font-black text-[#151515] mb-5 leading-none">
              Let's Talk.
            </h1>
            <p className="text-[#555B65] text-lg leading-relaxed mb-8">
              Whether you have a project, a question about a course, or just want to find out more — we'd love to hear from you.
            </p>

            {/* Enquiry type cards */}
            <div className="space-y-3">
              {ENQUIRY_OPTIONS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 bg-[#FFF9F2] border border-gray-100 rounded-2xl p-4">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0EC] flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#FF2B12]" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#151515]">{title}</p>
                    <p className="text-xs text-[#555B65]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <ContactIllustration className="w-full max-w-xs sm:max-w-sm" />
          </div>
        </div>
      </section>

      {/* ── Form + WhatsApp ── */}
      <section className="bg-[#F4F5F6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-[#151515] mb-1.5">Send us a message</h2>
            <p className="text-sm text-[#555B65] mb-6">
              Fill in the form below and we'll get back to you. Required fields are marked with{' '}
              <span className="text-[#FF2B12]">*</span>
            </p>
            <ContactForm />
          </div>

          {/* WhatsApp sidebar */}
          <div className="flex flex-col gap-5">
            <div className="bg-[#151515] rounded-3xl p-7 text-white flex flex-col gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center">
                <MessageCircle size={22} className="text-white" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-black text-lg mb-1.5">Prefer WhatsApp?</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  WhatsApp is the fastest way to reach us. Start a conversation and we'll respond promptly.
                </p>
                <WhatsAppButton
                  message="Hi Claxic, I'd like to get in touch."
                  label="Chat on WhatsApp"
                  className="w-full justify-center"
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-[#151515] mb-2 text-sm">Response time</h3>
              <p className="text-xs text-[#555B65] leading-relaxed">
                We aim to respond to all enquiries as promptly as possible. WhatsApp is generally the fastest route.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-[#151515] mb-2 text-sm">Privacy</h3>
              <p className="text-xs text-[#555B65] leading-relaxed">
                Information you share through this form is used only to respond to your enquiry. We do not sell or share your details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
