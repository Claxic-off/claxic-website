import { useState } from 'react';
import { Send, AlertCircle, CheckCircle2, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, getWhatsAppConfig } from '../lib/whatsapp';

const { number: WHATSAPP_NUMBER } = getWhatsAppConfig();

const ENQUIRY_TYPES = [
  { value: '', label: 'Select an enquiry type' },
  { value: 'business', label: 'General business enquiry' },
  { value: 'project', label: 'Software project enquiry' },
  { value: 'academy', label: 'Academy course enquiry' },
  { value: 'other', label: 'Other' },
];

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '/api/contact';

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Please enter your name.';
  if (!fields.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.enquiryType) errors.enquiryType = 'Please select an enquiry type.';
  if (!fields.message.trim()) errors.message = 'Please enter a message.';
  else if (fields.message.trim().length < 10) errors.message = 'Message is too short.';
  return errors;
}

function getEnquiryMessage(fields) {
  const topic = {
    business: 'Claxic Technologies',
    project: 'Claxic Technologies',
    academy: 'Claxic Academy',
    other: 'Claxic',
  }[fields.enquiryType] || 'Claxic';

  return `Hi ${topic},\n\nName: ${fields.name}\nEmail: ${fields.email}\nEnquiry type: ${fields.enquiryType || 'General enquiry'}\n\n${fields.message}`;
}

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    enquiryType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [requestError, setRequestError] = useState('');
  const [touched, setTouched] = useState({});

  const update = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...fields, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const blur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(fields);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  };

  const buildWhatsAppFallback = () => buildWhatsAppUrl(WHATSAPP_NUMBER, getEnquiryMessage(fields));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, enquiryType: true, message: true };
    setTouched(allTouched);
    const newErrors = validate(fields);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (!FORM_ENDPOINT) {
      setSubmitStatus('no-endpoint');
      return;
    }

    setSubmitStatus('submitting');
    setRequestError('');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(fields),
      });

      let payload = {};
      try {
        payload = await res.json();
      } catch {
        payload = {};
      }

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error(
            'Cloudflare Pages email delivery is not active in this local build. Deploy to Cloudflare Pages and configure RESEND_API_KEY and RESEND_FROM_EMAIL.'
          );
        }

        throw new Error(payload?.error || `Server responded with ${res.status}.`);
      }

      setSubmitStatus('success');
      setFields({ name: '', email: '', enquiryType: '', message: '' });
      setTouched({});
    } catch (err) {
      console.error('[ContactForm] Submission failed:', err);
      setSubmitStatus('error');
      setRequestError(
        err.message.includes('configured') ||
          err.message.includes('Cloudflare') ||
          err.message.includes('RESEND')
          ? err.message
          : 'We could not send your message right now. Please try again or contact us via WhatsApp.'
      );
    }
  };

  const inputClass = (field) =>
    `w-full rounded-[0.9rem] border px-4 py-3.5 text-[0.98rem] text-[#151515] placeholder:text-[#7A8494] transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF2B12] ${
      errors[field]
        ? 'border-red-400 bg-red-50'
        : 'border-[#D8D8D8] bg-[#F7F7F7] hover:border-[#BFC7D2]'
    }`;

  const whatsappFallback = buildWhatsAppFallback();

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle2 size={40} className="text-green-500 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-[#151515] mb-2">Message sent!</h3>
        <p className="text-sm text-[#555B65]">
          Thanks for reaching out. We’ll review your enquiry and be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-[#151515] mb-1.5">
          Your name <span className="text-[#FF2B12]" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Smith"
          value={fields.name}
          onChange={update}
          onBlur={blur}
          className={inputClass('name')}
          aria-required="true"
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" /> {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-[#151515] mb-1.5">
          Email address <span className="text-[#FF2B12]" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={fields.email}
          onChange={update}
          onBlur={blur}
          className={inputClass('email')}
          aria-required="true"
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" /> {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-type" className="block text-sm font-semibold text-[#151515] mb-1.5">
          Enquiry type <span className="text-[#FF2B12]" aria-hidden="true">*</span>
        </label>
        <select
          id="contact-type"
          name="enquiryType"
          value={fields.enquiryType}
          onChange={update}
          onBlur={blur}
          className={`${inputClass('enquiryType')} appearance-none cursor-pointer`}
          aria-required="true"
          aria-describedby={errors.enquiryType ? 'type-error' : undefined}
          aria-invalid={!!errors.enquiryType}
        >
          {ENQUIRY_TYPES.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={!opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.enquiryType && (
          <p id="type-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" /> {errors.enquiryType}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-[#151515] mb-1.5">
          Message <span className="text-[#FF2B12]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell us what you're looking for…"
          value={fields.message}
          onChange={update}
          onBlur={blur}
          className={`${inputClass('message')} resize-none`}
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" /> {errors.message}
          </p>
        )}
      </div>

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          <p className="font-semibold mb-1">We couldn’t send your message yet.</p>
          <p>{requestError || 'Please try again or contact us via WhatsApp.'}</p>
          {(requestError && (requestError.includes('configured') || requestError.includes('Cloudflare') || requestError.includes('RESEND'))) && (
            <p className="mt-2">
              Add <span className="font-semibold">RESEND_API_KEY</span> and <span className="font-semibold">RESEND_FROM_EMAIL</span> to Cloudflare Pages, and keep <span className="font-semibold">CONTACT_EMAIL_RECIPIENT=support.claxic@gmail.com</span> on the server.
            </p>
          )}
        </div>
      )}

      {submitStatus === 'no-endpoint' && (
        <div className="bg-[#FFF4D8] border border-yellow-200 rounded-xl p-4 text-sm text-[#555B65]">
          <p className="font-semibold mb-1">Form submission isn’t configured yet.</p>
          <p>
            {whatsappFallback ? (
              <>
                Please{' '}
                <a
                  href={whatsappFallback}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF2B12] font-bold underline"
                >
                  send your message via WhatsApp
                </a>{' '}
                instead — your details above are prefilled.
              </>
            ) : (
              <>
                Please use the{' '}
                <a href="/contact" className="text-[#FF2B12] font-bold underline">
                  contact page
                </a>{' '}
                to send your message.
              </>
            )}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitStatus === 'submitting'}
        className="w-full flex items-center justify-center gap-2 bg-[#FF2B12] hover:bg-[#e02410] disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-base py-3.5 rounded-full transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
        aria-live="polite"
      >
        {submitStatus === 'submitting' ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>

      {WHATSAPP_NUMBER && (
        <p className="text-center text-xs text-[#555B65]">
          Prefer WhatsApp?{' '}
          <a
            href={buildWhatsAppUrl(WHATSAPP_NUMBER, 'Hi Claxic, I’d like to get in touch.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF2B12] font-semibold hover:underline inline-flex items-center gap-1"
          >
            <MessageCircle size={12} aria-hidden="true" /> Chat directly
          </a>
        </p>
      )}
    </form>
  );
}
