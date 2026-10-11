import { NextResponse } from "next/server";

/**
 * PUBLIC on purpose: every visitor's browser calls this (components/HqBeacon),
 * so it cannot sit behind a login. It forwards one page view, server to server,
 * to the Fresh Finish portal's /api/track with a shared secret.
 *
 * Stores nothing here and sends no cookie, IP or identifier: just the path,
 * the referring site's host, the country Vercel derives from the request, and
 * a screen-size bucket.
 *
 * Env: PORTAL_TRACK_URL (optional), TRACK_SECRET (must match the portal's).
 */
export const runtime = "nodejs";

const PORTAL = process.env.PORTAL_TRACK_URL || "https://portal.freshfinish-cs.co.uk/api/track";
const BOT = /bot|crawl|spider|slurp|preview|headless|lighthouse|facebookexternalhit|bingpreview/i;
const DEVICES = new Set(["phone", "tablet", "desktop"]);

export async function POST(req: Request) {
  const secret = process.env.TRACK_SECRET;
  if (!secret || BOT.test(req.headers.get("user-agent") ?? "")) return new NextResponse(null, { status: 204 });

  let body: { path?: unknown; referrer?: unknown; device?: unknown };
  try {
    body = await req.json();
  } catch {
    return new NextResponse(null, { status: 400 });
  }

  const path = typeof body.path === "string" ? body.path.slice(0, 300) : "";
  if (!path.startsWith("/") || path.startsWith("/api/")) return new NextResponse(null, { status: 400 });

  let referrerHost: string | null = null;
  if (typeof body.referrer === "string" && body.referrer) {
    try {
      referrerHost = new URL(body.referrer).hostname.replace(/^www\./, "").slice(0, 120);
    } catch {}
  }

  const country = (req.headers.get("x-vercel-ip-country") ?? "").toUpperCase();
  const device = typeof body.device === "string" && DEVICES.has(body.device) ? body.device : null;

  try {
    await fetch(PORTAL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-track-secret": secret },
      body: JSON.stringify({ path, referrer_host: referrerHost, country: /^[A-Z]{2}$/.test(country) ? country : null, device }),
      cache: "no-store",
    });
  } catch {}
  return new NextResponse(null, { status: 204 });
}
