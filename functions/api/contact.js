const DEFAULT_RECIPIENT = 'support.claxic@gmail.com';

const VALID_ENQUIRY_TYPES = {
  business: 'Claxic Technologies',
  project: 'Claxic Technologies',
  academy: 'Claxic Academy',
  other: 'General enquiry',
};

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });
}

function cleanString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function sanitizeText(value) {
  return cleanString(value).replace(/[\r\n]+/g, ' ');
}

function escapeHtml(value) {
  return cleanString(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function onRequestPost({ request, env }) {
  let payload = {};

  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: 'Request body must be valid JSON.' }, 400);
  }

  const name = sanitizeText(payload.name);
  const email = sanitizeText(payload.email);
  const enquiryType = sanitizeText(payload.enquiryType);
  const message = sanitizeText(payload.message);

  const validationErrors = [];

  if (!name) validationErrors.push('Name is required.');
  if (!email) {
    validationErrors.push('Email is required.');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    validationErrors.push('A valid email address is required.');
  }
  if (!enquiryType) validationErrors.push('Please select an enquiry type.');
  if (!message) {
    validationErrors.push('Message is required.');
  } else if (message.length < 10) {
    validationErrors.push('Message is too short.');
  }

  if (validationErrors.length > 0) {
    return jsonResponse(
      {
        ok: false,
        error: 'Please complete all required fields before submitting.',
        details: validationErrors,
      },
      400
    );
  }

  const recipient = cleanString(env.CONTACT_EMAIL_RECIPIENT || DEFAULT_RECIPIENT);
  const apiKey = cleanString(env.RESEND_API_KEY);
  const fromEmail = cleanString(env.RESEND_FROM_EMAIL);

  if (!apiKey || !fromEmail) {
    return jsonResponse(
      {
        ok: false,
        error:
          'Email delivery is not configured. Add RESEND_API_KEY and RESEND_FROM_EMAIL in Cloudflare Pages environment variables.',
      },
      503
    );
  }

  const enquiryLabel = VALID_ENQUIRY_TYPES[enquiryType] || 'General enquiry';
  const subject = `[Claxic] ${enquiryLabel} from ${name}`;
  const safeMessageHtml = escapeHtml(message).replace(/\n/g, '<br />');

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #151515;">
      <h2 style="margin-bottom: 12px;">New enquiry from ${escapeHtml(name)}</h2>
      <p><strong>Enquiry type:</strong> ${escapeHtml(enquiryLabel)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessageHtml}</p>
    </div>
  `;

  const providerResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [recipient],
      reply_to: email,
      subject,
      html,
    }),
  });

  const providerPayload = await providerResponse.json().catch(() => ({}));

  if (!providerResponse.ok) {
    return jsonResponse(
      {
        ok: false,
        error: providerPayload?.message || 'The configured email provider rejected the message.',
      },
      providerResponse.status >= 500 ? 502 : 400
    );
  }

  return jsonResponse(
    {
      ok: true,
      message: 'Email sent successfully.',
      id: providerPayload?.id || null,
    },
    200
  );
}
