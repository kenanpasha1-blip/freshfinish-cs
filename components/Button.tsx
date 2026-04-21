import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 shadow-sm shadow-brand-900/10",
  secondary:
    "bg-white text-brand-800 border border-brand-200 hover:border-brand-400 hover:text-brand-900",
  ghost: "text-brand-800 hover:text-brand-900 hover:bg-brand-50",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe5b]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AsLink = CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;
type AsButton = CommonProps & { href?: undefined } & ComponentProps<"button">;

export default function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className = "", ...rest } = props;
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link className={cls} {...(rest as ComponentProps<typeof Link>)}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={cls} {...(rest as ComponentProps<"button">)}>
      {props.children}
    </button>
  );
}
