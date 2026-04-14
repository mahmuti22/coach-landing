"use client";

import type { FormEvent } from "react";
import { useCallback, useState } from "react";
import { buildApplicationMailto } from "@/config/contact";
import { content } from "@/data/content";
import { PrimaryButton, PrimarySubmitButton } from "./PrimaryButton";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<
  Record<"firstName" | "lastName" | "email" | "message", string>
>;

export function ContactForm() {
  const { contactForm } = content;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState<string | null>(null);

  const validate = useCallback((): boolean => {
    const next: FieldErrors = {};
    if (!firstName.trim()) next.firstName = "Required";
    if (!lastName.trim()) next.lastName = "Required";
    if (!email.trim()) next.email = "Required";
    else if (!emailPattern.test(email.trim())) next.email = "Enter a valid email";
    if (!message.trim()) next.message = "Required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [firstName, lastName, email, message]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const url = buildApplicationMailto({
      firstName,
      lastName,
      email,
      phone,
      message,
    });
    setMailtoUrl(url);
    setSubmitted(true);

    /*
     * TEMPORARY: optional mail client handoff (keeps this page visible if blocked).
     * Replace with server-side email/API when available.
     */
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-xl border border-white/[0.1] bg-zinc-900/50 px-4 py-3 text-[15px] text-white placeholder:text-zinc-600 shadow-inner shadow-black/20 outline-none transition focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/25";

  return (
    <SectionContainer id="contact">
      <SectionHeading
        eyebrow={contactForm.heading.eyebrow}
        title={contactForm.heading.title}
        description={contactForm.heading.description}
      />

      {submitted ? (
        <div className="mx-auto max-w-xl rounded-2xl border border-emerald-500/20 bg-emerald-950/20 px-8 py-10 text-center ring-1 ring-inset ring-emerald-500/10">
          <p className="text-lg font-medium leading-relaxed tracking-tight text-white">
            {contactForm.successMessage}
          </p>
          {mailtoUrl ? (
            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="max-w-xs text-xs leading-relaxed text-zinc-500">
                {contactForm.successMailHint}
              </p>
              <PrimaryButton
                href={mailtoUrl}
                label={contactForm.openMailLabel}
              />
            </div>
          ) : null}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl space-y-6"
          noValidate
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500"
              >
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
                className={inputClass}
                aria-invalid={Boolean(errors.firstName)}
                aria-describedby={errors.firstName ? "firstName-error" : undefined}
              />
              {errors.firstName ? (
                <p id="firstName-error" className="mt-1.5 text-sm text-red-400/90">
                  {errors.firstName}
                </p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500"
              >
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                value={lastName}
                onChange={(ev) => setLastName(ev.target.value)}
                className={inputClass}
                aria-invalid={Boolean(errors.lastName)}
                aria-describedby={errors.lastName ? "lastName-error" : undefined}
              />
              {errors.lastName ? (
                <p id="lastName-error" className="mt-1.5 text-sm text-red-400/90">
                  {errors.lastName}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              className={inputClass}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email ? (
              <p id="email-error" className="mt-1.5 text-sm text-red-400/90">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              Phone <span className="font-normal text-zinc-600">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              Message / goal
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(ev) => setMessage(ev.target.value)}
              className={`${inputClass} min-h-[140px] resize-y`}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message ? (
              <p id="message-error" className="mt-1.5 text-sm text-red-400/90">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div className="pt-2">
            <PrimarySubmitButton label={contactForm.submitLabel} />
          </div>

          <p className="text-center text-xs leading-relaxed text-zinc-600">
            {contactForm.disclaimer}
          </p>
        </form>
      )}
    </SectionContainer>
  );
}
