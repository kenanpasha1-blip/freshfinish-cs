import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  className?: string;
  /** Rendered height in pixels. Width auto-scales to preserve aspect ratio. */
  height?: number;
  /** If true, renders without the surrounding <Link/>. */
  asStatic?: boolean;
  /** "light" renders the all-white knockout for use on dark backgrounds. */
  variant?: "default" | "light";
  /** Give Next/Image priority for above-the-fold use (e.g. the header). */
  priority?: boolean;
};

/**
 * Fresh Finish Cleaning Solutions wordmark.
 * Source assets: /public/logo.png (colour) and /public/brand/logo-white.png.
 * Native aspect ratio ≈ 1.7 : 1.
 */
const ASPECT = 1.7;

export default function Logo({
  className = "",
  height = 44,
  asStatic = false,
  variant = "default",
  priority = false,
}: Props) {
  const width = Math.round(height * ASPECT);
  const src = variant === "light" ? "/brand/logo-white.png" : "/logo.png";

  const img = (
    <Image
      src={src}
      alt={`${site.name} logo`}
      width={width * 2}
      height={height * 2}
      priority={priority}
      className={`block object-contain ${className}`}
      style={{ width, height }}
    />
  );

  if (asStatic) return img;
  return (
    <Link href="/" aria-label={`${site.name} home`} className="inline-flex items-center">
      {img}
    </Link>
  );
}
