"use client";

import type { FormEvent } from "react";
import { useCallback, useState } from "react";
import { buildApplicationMailto } from "@/config/contact";
import { GOOGLE_FORM_ACTION, GOOGLE_FORM_FIELDS } from "@/config/google-form";
import { content } from "@/data/content";
import { PrimarySubmitButton } from "./PrimaryButton";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<
  Record<"firstName" | "lastName" | "email" | "message", string>
>;

async function submitToGoogleForm(payload: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}): Promise<void> {
  const formData = new FormData();
  formData.append(GOOGLE_FORM_FIELDS.firstName, payload.firstName);
  formData.append(GOOGLE_FORM_FIELDS.lastName, payload.lastName);
  formData.append(GOOGLE_FORM_FIELDS.email, payload.email);
  formData.append(GOOGLE_FORM_FIELDS.phone, payload.phone);
  formData.append(GOOGLE_FORM_FIELDS.message, payload.message);

  await fetch(GOOGLE_FORM_ACTION, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
}

export function ContactForm() {
  const { contactForm } = content;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = useCallback((): boolean => {
    const next: FieldErrors = {};
    if (!firstName.trim()) next.firstName = "Required";
    if (!lastName.trim()) next.lastName = "Required";
    if (!email.trim()) next.email = "Required";
    else if (!emailPattern.test(email.trim())) next.email = "Enter a valid email";
    if (!message.trim()) next.message = "Required";
    else if (message.trim().length < 10) {
      next.message = "Please enter at least 10 characters";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [firstName, lastName, email, message]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
    };

    setIsSubmitting(true);
    setError(null);

    try {
      await submitToGoogleForm(payload);
      setIsSubmitted(true);
    } catch {
      try {
        const mailtoUrl = buildApplicationMailto(payload);
        window.open(mailtoUrl, "_blank", "noopener,noreferrer");
        setIsSubmitted(true);
      } catch {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/[0.1] bg-zinc-900/50 px-4 py-3 text-[15px] text-white placeholder:text-zinc-600 shadow-inner shadow-black/20 outline-none transition focus:border-zinc-400/40 focus:ring-1 focus:ring-zinc-400/25";

  return (
    <SectionContainer id="contact">
      <SectionHeading
        eyebrow={contactForm.heading.eyebrow}
        title={contactForm.heading.title}
        description={contactForm.heading.description}
      />

      {isSubmitted ? (
        <div className="metal-border mx-auto max-w-xl rounded-2xl px-8 py-10 text-center">
          <p className="text-lg font-medium leading-relaxed tracking-tight text-white">
            ✓ Request received. We&apos;ll be in touch within 48 hours.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="metal-border mx-auto max-w-2xl space-y-6 rounded-2xl p-6 sm:p-8"
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
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.firstName)}
                aria-describedby={errors.firstName ? "firstName-error" : undefined}
              />
              {errors.firstName ? (
                <p id="firstName-error" className="mt-1.5 text-sm text-zinc-400">
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
                disabled={isSubmitting}
                aria-invalid={Boolean(errors.lastName)}
                aria-describedby={errors.lastName ? "lastName-error" : undefined}
              />
              {errors.lastName ? (
                <p id="lastName-error" className="mt-1.5 text-sm text-zinc-400">
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
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email ? (
              <p id="email-error" className="mt-1.5 text-sm text-zinc-400">
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message ? (
              <p id="message-error" className="mt-1.5 text-sm text-zinc-400">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div className="pt-2">
            <PrimarySubmitButton
              label={isSubmitting ? "Sending..." : contactForm.submitLabel}
              disabled={isSubmitting}
            />
          </div>

          {error ? (
            <p className="text-center text-sm text-zinc-400" role="alert">
              {error}
            </p>
          ) : null}
        </form>
      )}
    </SectionContainer>
  );
}
