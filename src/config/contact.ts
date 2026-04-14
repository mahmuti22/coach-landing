/**
 * Central contact targets — swap CONTACT_EMAIL when moving off the test inbox.
 */
export const CONTACT_EMAIL = "irfan.mahmuti@hotmail.com";

export const MAILTO_SUBJECTS = {
  consultation: "Coaching Consultation Request",
  application: "Coaching Application Request",
} as const;

export type ApplicationFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
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
    `First name: ${payload.firstName.trim()}`,
    `Last name: ${payload.lastName.trim()}`,
    `Email: ${payload.email.trim()}`,
  ];
  if (payload.phone.trim()) {
    lines.push(`Phone: ${payload.phone.trim()}`);
  }
  lines.push("", "Message / goal:", payload.message.trim());

  const subject = encodeURIComponent(MAILTO_SUBJECTS.application);
  const body = encodeURIComponent(lines.join("\n"));
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
