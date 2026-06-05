"use client";

import type { FormEvent } from "react";
import { useCallback, useState } from "react";
import { buildApplicationMailto } from "@/config/contact";
import { FORMSPREE_ENDPOINT } from "@/config/formspree";
import { content } from "@/data/content";
import { PrimarySubmitButton } from "./PrimaryButton";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<
  Record<"firstName" | "lastName" | "email" | "coach" | "message", string>
>;

async function submitToFormspree(payload: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coach: string;
  message: string;
}): Promise<void> {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      Vorname: payload.firstName,
      Nachname: payload.lastName,
      email: payload.email,
      Telefon: payload.phone,
      Coach: payload.coach,
      Nachricht: payload.message,
    }),
  });

  if (!response.ok) {
    throw new Error("Formspree request failed");
  }
}

export function ContactForm() {
  const { contactForm } = content;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coach, setCoach] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { errors: errorMessages } = contactForm;

  const validate = useCallback((): boolean => {
    const next: FieldErrors = {};
    if (!firstName.trim()) next.firstName = errorMessages.required;
    if (!lastName.trim()) next.lastName = errorMessages.required;
    if (!email.trim()) next.email = errorMessages.required;
    else if (!emailPattern.test(email.trim())) next.email = errorMessages.email;
    if (!coach.trim()) next.coach = errorMessages.required;
    if (!message.trim()) next.message = errorMessages.required;
    else if (message.trim().length < 10) {
      next.message = errorMessages.messageLength;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [firstName, lastName, email, coach, message, errorMessages]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      coach:
        contactForm.coachOptions.find((option) => option.value === coach)
          ?.label ?? coach.trim(),
      message: message.trim(),
    };

    setIsSubmitting(true);
    setError(null);

    try {
      await submitToFormspree(payload);
      setIsSubmitted(true);
    } catch {
      try {
        const mailtoUrl = buildApplicationMailto(payload);
        window.open(mailtoUrl, "_blank", "noopener,noreferrer");
        setIsSubmitted(true);
      } catch {
        setError(errorMessages.generic);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/[0.1] bg-zinc-900/50 px-4 py-3 text-[15px] text-white placeholder:text-zinc-600 shadow-inner shadow-black/20 outline-none transition focus:border-zinc-400/40 focus:ring-1 focus:ring-zinc-400/25";

  const coachOptionClass = (selected: boolean) =>
    [
      "flex min-h-[3.25rem] cursor-pointer flex-col items-center justify-center rounded-xl border px-3 py-2.5 text-center transition duration-200",
      selected
        ? "border-zinc-300/35 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        : "border-white/[0.1] bg-zinc-900/40 text-zinc-400 hover:border-white/20 hover:text-zinc-200",
      isSubmitting ? "pointer-events-none opacity-60" : "",
    ].join(" ");

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
            {contactForm.successMessage}
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
                {contactForm.labels.firstName}
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
                {contactForm.labels.lastName}
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
              {contactForm.labels.email}
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
              {contactForm.labels.phone}{" "}
              <span className="font-normal text-zinc-600">
                {contactForm.labels.phoneOptional}
              </span>
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

          <fieldset className="min-w-0 border-0 p-0">
            <legend className="mb-3 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              {contactForm.labels.coach}
            </legend>

            <div
              className="grid grid-cols-1 gap-2 sm:grid-cols-3"
              role="radiogroup"
              aria-invalid={Boolean(errors.coach)}
              aria-describedby={errors.coach ? "coach-error" : undefined}
            >
              {contactForm.coachOptions.map((option) => {
                const selected = coach === option.value;

                return (
                  <label
                    key={option.value}
                    className={coachOptionClass(selected)}
                  >
                    <input
                      type="radio"
                      name="coach"
                      value={option.value}
                      checked={selected}
                      onChange={() => setCoach(option.value)}
                      disabled={isSubmitting}
                      className="sr-only"
                    />
                    <span className="text-[14px] font-medium leading-snug tracking-tight">
                      {option.label}
                    </span>
                    {"description" in option ? (
                      <span className="mt-0.5 text-[11px] leading-snug text-zinc-500">
                        {option.description}
                      </span>
                    ) : null}
                  </label>
                );
              })}
            </div>

            {errors.coach ? (
              <p id="coach-error" className="mt-2 text-sm text-zinc-400">
                {errors.coach}
              </p>
            ) : null}
          </fieldset>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500"
            >
              {contactForm.labels.message}
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
              label={
                isSubmitting
                  ? contactForm.submittingLabel
                  : contactForm.submitLabel
              }
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
