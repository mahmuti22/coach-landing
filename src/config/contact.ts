/**
 * Central contact targets — swap CONTACT_EMAIL when moving off the test inbox.
 */
export const CONTACT_EMAIL = "info@mwp.ch";

export const MAILTO_SUBJECTS = {
  consultation: "Coaching Beratungsanfrage",
  application: "Coaching Bewerbung",
} as const;

export type ApplicationFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coach: string;
  message: string;
};

/** Direct “Book a Consultation” link (prefilled subject only). */
export function buildConsultationMailto(): string {
  const subject = encodeURIComponent(MAILTO_SUBJECTS.consultation);
  return `mailto:${CONTACT_EMAIL}?subject=${subject}`;
}

/**
 * TEMPORARY lead flow: encodes the form into a mailto body and opens the visitor’s
 * default mail client. Replace with a server route, form SaaS, or ESP when you
 * have real email delivery.
 */
export function buildApplicationMailto(payload: ApplicationFormPayload): string {
  const lines = [
    `Vorname: ${payload.firstName.trim()}`,
    `Nachname: ${payload.lastName.trim()}`,
    `E-Mail: ${payload.email.trim()}`,
  ];
  if (payload.phone.trim()) {
    lines.push(`Telefon: ${payload.phone.trim()}`);
  }
  lines.push(`Coach: ${payload.coach.trim()}`);
  lines.push("", "Nachricht / Ziel:", payload.message.trim());

  const subject = encodeURIComponent(MAILTO_SUBJECTS.application);
  const body = encodeURIComponent(lines.join("\n"));
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
