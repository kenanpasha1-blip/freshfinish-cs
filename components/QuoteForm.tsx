"use client";

import { useState, type FormEvent } from "react";
import Button from "./Button";
import Icon from "./Icon";
import { services } from "@/lib/services";

type State = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg(null);

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setState("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call us."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl bg-accent-500/10 border border-accent-500/40 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-500 text-white">
          <Icon name="check" size={24} />
        </div>
        <h3 className="mt-4 text-xl font-bold text-brand-900">
          Thanks — we've got your enquiry
        </h3>
        <p className="mt-3 text-ink-700 max-w-md mx-auto leading-relaxed">
          We'll review the details and come back to you shortly to discuss
          the property, confirm pricing and agree a date. Your booking isn't
          confirmed until we both sign off on it.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Your name"
          name="name"
          required
          autoComplete="name"
          placeholder="Jane Doe"
        />
        <Field
          label="Phone"
          name="phone"
          required
          type="tel"
          autoComplete="tel"
          placeholder="07961 860128"
        />
      </div>

      <Field
        label="Email"
        name="email"
        required
        type="email"
        autoComplete="email"
        placeholder="you@email.com"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Select
          label="Service needed"
          name="service"
          required
          options={[
            { value: "", label: "Select a service" },
            ...services.map((s) => ({ value: s.slug, label: s.name })),
            { value: "other", label: "Something else" },
          ]}
        />
        <Select
          label="Property size / type"
          name="property"
          required
          options={[
            { value: "", label: "Select one" },
            { value: "studio", label: "Studio" },
            { value: "1-bed", label: "1-bedroom flat" },
            { value: "2-bed", label: "2-bedroom flat or house" },
            { value: "3-bed", label: "3-bedroom property" },
            { value: "4-bed-plus", label: "4+ bedroom property" },
            { value: "office-small", label: "Small office" },
            { value: "other", label: "Other" },
          ]}
        />
      </div>

      <Field
        label="Location / postcode"
        name="location"
        required
        placeholder="e.g. N1 9AB or Islington"
      />

      <Field
        label="Preferred date"
        name="preferred_date"
        type="date"
      />

      <label className="block">
        <span className="block text-sm font-medium text-brand-900 mb-1.5">
          Anything else we should know?
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="Condition of the property, extras (oven, carpets, windows), any access notes…"
          className="w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand-400"
        />
      </label>

      {/* Honeypot — bots fill it, humans don't see it */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <p className="text-xs text-ink-500 leading-relaxed">
        By submitting this form you agree for us to contact you about your
        enquiry. Bookings and quotes are reviewed and confirmed before they're
        final — submitting this form doesn't confirm a booking.
      </p>

      <div className="flex flex-wrap gap-3 items-center">
        <Button type="submit" size="lg" disabled={state === "submitting"}>
          {state === "submitting" ? "Sending…" : "Request a Quote"}
          <Icon name="arrow-right" size={16} />
        </Button>
        {state === "error" && (
          <p className="text-sm text-red-700">{errorMsg}</p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-brand-900 mb-1.5">
        {label} {required && <span className="text-accent-600">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-300 focus:border-brand-400"
      />
    </label>
  );
}

function Select({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-brand-900 mb-1.5">
        {label} {required && <span className="text-accent-600">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-ink-900 focus:border-brand-400"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} disabled={o.value === ""}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
