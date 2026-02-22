"use client";

import { FormEvent, useMemo, useState } from "react";

type InquiryType = "general" | "quote";

type FormState = {
  inquiryType: InquiryType;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  location: string;
  budget: string;
  timeline: string;
  message: string;
  website: string;
};

const INITIAL_STATE: FormState = {
  inquiryType: "general",
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  location: "",
  budget: "",
  timeline: "",
  message: "",
  website: "",
};

const WHATSAPP_NUMBER = "917604955226";

export default function ContactLeadForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [leadId, setLeadId] = useState<string | null>(null);

  const whatsappHref = useMemo(() => {
    const text = encodeURIComponent(
      "Hello JC Designs & Consulting. I would like to discuss a construction project.",
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setLeadId(null);

    if (!form.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      setError("Please enter a project message with at least 10 characters.");
      return;
    }

    if (form.inquiryType === "quote" && (!form.projectType.trim() || !form.location.trim())) {
      setError("For quote requests, project type and location are required.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        message?: string;
        leadId?: string;
      };

      if (!response.ok || !data.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSuccess(data.message ?? "Your inquiry has been submitted.");
      setLeadId(data.leadId ?? null);
      setForm({ ...INITIAL_STATE, inquiryType: form.inquiryType });
    } catch {
      setError("Network error. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <article className="border border-black/10 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setForm((prev) => ({ ...prev, inquiryType: "general" }))}
            className={`rounded-full border px-4 py-2 text-xs tracking-tight transition-colors sm:text-sm ${
              form.inquiryType === "general"
                ? "border-black/80 bg-black text-white"
                : "border-black/20 text-black/60 hover:border-black/40"
            }`}
          >
            General Inquiry
          </button>
          <button
            type="button"
            onClick={() => setForm((prev) => ({ ...prev, inquiryType: "quote" }))}
            className={`rounded-full border px-4 py-2 text-xs tracking-tight transition-colors sm:text-sm ${
              form.inquiryType === "quote"
                ? "border-black/80 bg-black text-white"
                : "border-black/20 text-black/60 hover:border-black/40"
            }`}
          >
            Request a Quote
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={(event) => setForm((prev) => ({ ...prev, website: event.target.value }))}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm tracking-tight text-black/70">
              Full Name *
              <input
                value={form.fullName}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, fullName: event.target.value }))
                }
                className="h-11 border border-black/20 bg-[#E6E6E6] px-3 text-sm text-black/90 outline-none transition-colors focus:border-black/50"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm tracking-tight text-black/70">
              Email *
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="h-11 border border-black/20 bg-[#E6E6E6] px-3 text-sm text-black/90 outline-none transition-colors focus:border-black/50"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm tracking-tight text-black/70">
              Phone
              <input
                value={form.phone}
                onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                className="h-11 border border-black/20 bg-[#E6E6E6] px-3 text-sm text-black/90 outline-none transition-colors focus:border-black/50"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm tracking-tight text-black/70">
              Company
              <input
                value={form.company}
                onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
                className="h-11 border border-black/20 bg-[#E6E6E6] px-3 text-sm text-black/90 outline-none transition-colors focus:border-black/50"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm tracking-tight text-black/70">
              Project Type {form.inquiryType === "quote" ? "*" : ""}
              <input
                value={form.projectType}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, projectType: event.target.value }))
                }
                placeholder="Villa, apartment, commercial, interior..."
                className="h-11 border border-black/20 bg-[#E6E6E6] px-3 text-sm text-black/90 outline-none transition-colors focus:border-black/50"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm tracking-tight text-black/70">
              Project Location {form.inquiryType === "quote" ? "*" : ""}
              <input
                value={form.location}
                onChange={(event) => setForm((prev) => ({ ...prev, location: event.target.value }))}
                className="h-11 border border-black/20 bg-[#E6E6E6] px-3 text-sm text-black/90 outline-none transition-colors focus:border-black/50"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm tracking-tight text-black/70">
              Estimated Budget
              <input
                value={form.budget}
                onChange={(event) => setForm((prev) => ({ ...prev, budget: event.target.value }))}
                placeholder="INR 50L - 1Cr"
                className="h-11 border border-black/20 bg-[#E6E6E6] px-3 text-sm text-black/90 outline-none transition-colors focus:border-black/50"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm tracking-tight text-black/70">
              Expected Timeline
              <input
                value={form.timeline}
                onChange={(event) => setForm((prev) => ({ ...prev, timeline: event.target.value }))}
                placeholder="Design in 6 weeks"
                className="h-11 border border-black/20 bg-[#E6E6E6] px-3 text-sm text-black/90 outline-none transition-colors focus:border-black/50"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm tracking-tight text-black/70">
            Message *
            <textarea
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              rows={6}
              className="border border-black/20 bg-[#E6E6E6] px-3 py-3 text-sm text-black/90 outline-none transition-colors focus:border-black/50"
              placeholder="Tell us about your project scope, site status, and priorities."
            />
          </label>

          {error && <p className="text-sm tracking-tight text-red-700">{error}</p>}
          {success && (
            <p className="text-sm tracking-tight text-green-700">
              {success} {leadId ? `Reference: ${leadId}` : ""}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex h-11 items-center justify-center border border-black/80 bg-black px-6 text-sm tracking-tight text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting
              ? "Submitting..."
              : form.inquiryType === "quote"
                ? "Request Quote"
                : "Send Inquiry"}
          </button>
        </form>
      </article>

      <article className="space-y-4">
        <div className="border border-black/10 bg-white p-6">
          <h2 className="text-xl font-medium tracking-tight text-black/90">WhatsApp Fast Track</h2>
          <p className="mt-3 text-sm leading-relaxed tracking-tight text-black/60">
            Need a quick response? Share your plot size, location, and requirement summary directly
            on WhatsApp.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-11 items-center justify-center border border-black/80 bg-black px-5 text-sm tracking-tight text-white"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="border border-black/10 bg-white p-6">
          <h3 className="text-lg font-medium tracking-tight text-black/90">What happens next</h3>
          <ul className="mt-3 space-y-2 text-sm tracking-tight text-black/60">
            <li>1. We review your inquiry and documents.</li>
            <li>2. We schedule a discovery call.</li>
            <li>3. We share scope, timeline, and fees.</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
