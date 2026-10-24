import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, getWhatsAppConfig } from '../lib/whatsapp';

const { number: WHATSAPP_NUMBER } = getWhatsAppConfig();

/**
 * WhatsApp CTA button with optional prefilled message.
 *
 * Props:
 *  - message: string — prefilled WhatsApp message
 *  - label: string — button label
 *  - variant: 'primary' | 'outline' | 'ghost'
 *  - className: string
 */
export default function WhatsAppButton({
  message = "Hi Claxic, I'd like to know more!",
  label = 'Chat on WhatsApp',
  variant = 'primary',
  className = '',
}) {
  const url = buildWhatsAppUrl(WHATSAPP_NUMBER, message);

  const base = 'inline-flex items-center gap-2 font-bold text-sm px-5 py-3 rounded-full transition-all duration-200 hover:scale-105 active:scale-95';

  const variants = {
    primary: 'bg-[#25D366] hover:bg-[#1eb357] text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white',
    ghost: 'text-[#25D366] hover:underline px-0 py-0 hover:scale-100',
  };

  if (!url) {
    return null;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
      aria-label={`${label} (opens WhatsApp)`}
    >
      <MessageCircle size={16} strokeWidth={2.5} aria-hidden="true" />
      {label}
    </a>
  );
}
