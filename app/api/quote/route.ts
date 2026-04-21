import { NextResponse } from "next/server";

/**
 * Quote form endpoint.
 *
 * Right now this just validates and logs the submission. To actually
 * deliver enquiries, plug in an email provider such as Resend, SendGrid
 * or Postmark below. Keep secrets in environment variables, not in code.
 *
 * Minimal Resend example (after `npm install resend`):
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "Fresh Finish <noreply@freshfinish-cs.co.uk>",
 *     to: process.env.QUOTE_FORM_TO_EMAIL!,
 *     subject: `New enquiry — ${data.name}`,
 *     text: JSON.stringify(data, null, 2),
 *   });
 */

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  property?: string;
  location?: string;
  preferred_date?: string;
  message?: string;
  /** Honeypot — bots fill, humans don't. */
  company?: string;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 }
    );
  }

  // Spam check
  if (data.company && data.company.length > 0) {
    // Pretend success to avoid signalling to the bot.
    return NextResponse.json({ ok: true });
  }

  // Basic validation
  const required: (keyof Payload)[] = [
    "name",
    "email",
    "phone",
    "service",
    "property",
    "location",
  ];
  for (const key of required) {
    if (!data[key] || String(data[key]).trim().length === 0) {
      return NextResponse.json(
        { ok: false, error: `Missing field: ${key}` },
        { status: 400 }
      );
    }
  }

  // Log so you can see submissions in Vercel logs during setup.
  // Replace with a real email/CRM integration when ready.
  console.log("[quote] new enquiry", {
    ...data,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
