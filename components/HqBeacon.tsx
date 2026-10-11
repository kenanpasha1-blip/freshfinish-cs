"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Counts page views in Integraite HQ's traffic report (Vercel Analytics has no
// API). No cookie, storage or identifier: path, referring site and screen size.
const HQ = "https://hq.integraite-ai.com/api/track";

function device(): "phone" | "tablet" | "desktop" {
  const w = window.innerWidth;
  return w < 640 ? "phone" : w < 1024 ? "tablet" : "desktop";
}

export function HqBeacon() {
  const pathname = usePathname();
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    fetch(HQ, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        site: "freshfinish",
        path: pathname,
        referrer: document.referrer && !document.referrer.includes(location.host) ? document.referrer : null,
        device: device(),
      }),
      keepalive: true,
      cache: "no-store",
    }).catch(() => {});
  }, [pathname]);
  return null;
}
