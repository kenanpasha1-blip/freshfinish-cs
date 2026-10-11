"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Counts page views for the Traffic page in the Fresh Finish portal (Vercel
// Analytics has no API). No cookie, storage or identifier: path, referring
// site and screen size. Production only, so localhost looks dead on purpose.
function device(): "phone" | "tablet" | "desktop" {
  const w = window.innerWidth;
  return w < 640 ? "phone" : w < 1024 ? "tablet" : "desktop";
}

export function TrafficBeacon() {
  const pathname = usePathname();
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
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
