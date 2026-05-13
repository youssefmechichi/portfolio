const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'youssefmechichi@outlook.com';
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

async function readProviderError(providerResponse) {
  const contentType = providerResponse.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    const body = await providerResponse.json();
    return body.message || body.error || 'Email provider rejected the message';
  }

  return providerResponse.text();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(500).json({ error: 'Email service is not configured' });
  }

  const { name, email, message } = request.body || {};

  if (
    typeof name !== 'string' ||
    name.trim().length < 2 ||
    typeof email !== 'string' ||
    !isValidEmail(email) ||
    typeof message !== 'string' ||
    message.trim().length < 10
  ) {
    return response.status(400).json({ error: 'Invalid contact form submission' });
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_TO_EMAIL,
        reply_to: email.trim(),
        subject: `Portfolio message from ${name.trim()}`,
        text: [
          `Name: ${name.trim()}`,
          `Email: ${email.trim()}`,
          '',
          message.trim()
        ].join('\n')
      })
    });

    if (!resendResponse.ok) {
      const providerError = await readProviderError(resendResponse);
      return response.status(502).json({ error: providerError });
    }
  } catch (error) {
    return response.status(502).json({ error: 'Email provider is unreachable' });
  }

  return response.status(200).json({ ok: true });
}
