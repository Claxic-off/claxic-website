const DEFAULT_WHATSAPP_NUMBER = '9342296583';

export function normalizeWhatsAppNumber(rawValue) {
  if (typeof rawValue !== 'string') return '';

  const candidate = rawValue.trim();
  if (!candidate) return '';

  const digitsOnly = candidate.replace(/\D/g, '');
  if (digitsOnly.length < 8 || digitsOnly.length > 15) {
    return '';
  }

  return candidate.includes('+') ? `+${digitsOnly}` : digitsOnly;
}

export function buildWhatsAppUrl(rawValue, message = "Hi Claxic, I'd like to know more!") {
  const normalized = normalizeWhatsAppNumber(rawValue);
  if (!normalized) return null;

  const compact = normalized.replace(/\+/g, '');
  return `https://wa.me/${compact}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppConfig(rawValue = import.meta.env.VITE_CLAXIC_WHATSAPP ?? DEFAULT_WHATSAPP_NUMBER) {
  const number = normalizeWhatsAppNumber(rawValue);

  return {
    number,
    url: number ? buildWhatsAppUrl(number, "Hi Claxic, I'd like to know more!") : null,
  };
}
