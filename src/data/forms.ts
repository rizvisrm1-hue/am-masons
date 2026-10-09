// Contact form settings.
//
// formspreeEndpoint: where submissions are sent (Formspree form "xdeagljk").
//
// turnstileSiteKey: the PUBLIC site key from Cloudflare Turnstile
// (dash.cloudflare.com > Turnstile > your widget). Safe to keep in code.
// The matching SECRET key never goes in this repo: paste it into
// Formspree > form settings > CAPTCHA > Cloudflare Turnstile.
// While this is empty, the captcha widget is hidden and only the
// hidden honeypot field protects the form.
export const formsConfig = {
  formspreeEndpoint: "https://formspree.io/f/xdeagljk",
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
};
