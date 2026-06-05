/**
 * Formspree endpoint for the application form.
 *
 * Setup:
 * 1. Create a Formspree account and a new form.
 * 2. Copy the form endpoint (e.g. https://formspree.io/f/abcdwxyz).
 * 3. Paste it below, replacing YOUR_FORM_ID.
 * 4. In the Formspree form settings, set the destination email to info@mwp.ch.
 *
 * Until a real endpoint is set, the form falls back to opening the visitor's
 * mail client addressed to CONTACT_EMAIL.
 */
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export const IS_FORMSPREE_CONFIGURED =
  !FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID");
