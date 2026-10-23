import { useState } from 'react';
import { Send, AlertCircle, CheckCircle2, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = import.meta.env.VITE_CLAXIC_WHATSAPP || '';

const ENQUIRY_TYPES = [
  { value: '', label: 'Select an enquiry type' },
  { value: 'business', label: 'General business enquiry' },
  { value: 'project', label: 'Software / project enquiry' },
  { value: 'academy', label: 'Academy / course enquiry' },
  { value: 'other', label: 'Other' },
];

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';

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

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    enquiryType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle | submitting | success | error | no-endpoint
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

  const buildWhatsAppFallback = () => {
    const msg = `Hi Claxic,\n\nName: ${fields.name}\nEmail: ${fields.email}\nEnquiry type: ${fields.enquiryType}\n\n${fields.message}`;
    return WHATSAPP_NUMBER
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
      : null;
  };

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
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error(`Server responded with ${res.status}`);
      setSubmitStatus('success');
      setFields({ name: '', email: '', enquiryType: '', message: '' });
      setTouched({});
    } catch (err) {
      console.error('[ContactForm] Submission failed:', err);
      setSubmitStatus('error');
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-[#151515] placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF2B12] focus:border-transparent ${
      errors[field]
        ? 'border-red-400 bg-red-50'
        : 'border-gray-200 bg-white hover:border-gray-300'
    }`;

  const whatsappFallback = buildWhatsAppFallback();

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle2 size={40} className="text-green-500 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-[#151515] mb-2">Message sent!</h3>
        <p className="text-sm text-[#555B65]">
          Thanks for reaching out. We'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      {/* Name */}
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

      {/* Email */}
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

      {/* Enquiry type */}
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

      {/* Message */}
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

      {/* Error state */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          Something went wrong. Please try again or use WhatsApp.
        </div>
      )}

      {/* No endpoint fallback notice */}
      {submitStatus === 'no-endpoint' && (
        <div className="bg-[#FFF4D8] border border-yellow-200 rounded-xl p-4 text-sm text-[#555B65]">
          <p className="font-semibold mb-1">Form submission isn't configured yet.</p>
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
                instead — your details above have been prepared.
              </>
            ) : (
              'Please contact us via WhatsApp to send your message.'
            )}
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitStatus === 'submitting'}
        className="w-full flex items-center justify-center gap-2 bg-[#FF2B12] hover:bg-[#e02410] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-sm py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
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

      {/* Always-available WhatsApp fallback */}
      {WHATSAPP_NUMBER && (
        <p className="text-center text-xs text-[#555B65]">
          Prefer WhatsApp?{' '}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Claxic%2C%20I%27d%20like%20to%20get%20in%20touch.`}
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
