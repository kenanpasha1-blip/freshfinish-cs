import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

/**
 * Quote form endpoint — validates input, sends an email via Resend.
 *
 * Env vars required in .env.local and in your Vercel project settings:
 *   - RESEND_API_KEY        (from https://resend.com/api-keys)
 *   - QUOTE_FORM_TO_EMAIL   (where enquiries are delivered, e.g. info@freshfinish-cs.co.uk)
 *   - QUOTE_FORM_FROM_EMAIL (optional — defaults to Resend's onboarding address)
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
  /** Honeypot — bots fill it, humans don't. */
  company?: string;
};

function labelFor(kind: "service" | "property", value?: string) {
  if (!value) return "(not provided)";
  if (kind === "service") {
    return services.find((s) => s.slug === value)?.name ?? value;
  }
  const properties: Record<string, string> = {
    studio: "Studio",
    "1-bed": "1-bedroom flat",
    "2-bed": "2-bedroom flat or house",
    "3-bed": "3-bedroom property",
    "4-bed-plus": "4+ bedroom property",
    "office-small": "Small office",
    other: "Other",
  };
  return properties[value] ?? value;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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

  // Spam honeypot — silently accept so the bot thinks it worked.
  if (data.company && data.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

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

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.QUOTE_FORM_TO_EMAIL || site.contact.email;
  const fromEmail =
    process.env.QUOTE_FORM_FROM_EMAIL ||
    "Fresh Finish Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("[quote] RESEND_API_KEY is not set — enquiry not delivered");
    console.log("[quote] enquiry payload:", data);
    return NextResponse.json(
      { ok: false, error: "Email service not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const subject = `New enquiry — ${data.name} (${labelFor("service", data.service)})`;

  const rows: [string, string][] = [
    ["Name", data.name!],
    ["Phone", data.phone!],
    ["Email", data.email!],
    ["Service", labelFor("service", data.service)],
    ["Property size/type", labelFor("property", data.property)],
    ["Location/postcode", data.location!],
    ["Preferred date", data.preferred_date || "(not provided)"],
    ["Message", data.message?.trim() || "(no message)"],
  ];

  const text =
    `New enquiry from the Fresh Finish website\n\n` +
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\n---\nSent via freshfinish-cs.co.uk`;

  const html = `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
    <div style="border-left: 4px solid #07bce5; padding-left: 16px; margin-bottom: 24px;">
      <h1 style="color: #06455b; font-size: 20px; margin: 0;">New enquiry</h1>
      <p style="color: #566a74; margin: 4px 0 0; font-size: 14px;">Via freshfinish-cs.co.uk</p>
    </div>
    <table style="width:100%; border-collapse: collapse;">
      ${rows
        .map(
          ([k, v]) => `
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eef3f6; color: #566a74; font-size: 13px; width: 160px; vertical-align: top;">${escapeHtml(k)}</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eef3f6; color: #0b1c22; font-size: 14px;">${escapeHtml(v)}</td>
        </tr>`
        )
        .join("")}
    </table>
    <p style="margin-top: 24px; color: #566a74; font-size: 13px;">
      Reply directly to this email to respond to <strong>${escapeHtml(data.name!)}</strong>.
    </p>
  </div>`;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[quote] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send enquiry" },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[quote] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
