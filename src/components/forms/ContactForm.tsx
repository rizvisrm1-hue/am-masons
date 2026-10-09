"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { formsConfig } from "@/data/forms";

// The form posts straight to Formspree (a normal page submission, not a
// background fetch). That keeps Formspree's own spam checks working, including
// its reCAPTCHA page on free plans, which background submissions cannot pass.
// After sending, Formspree shows its thank-you page with a link back.

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  remove: (id?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_ID = "cf-turnstile-script";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

function loadTurnstile(): Promise<TurnstileApi> {
  return new Promise((resolve, reject) => {
    if (window.turnstile) return resolve(window.turnstile);
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", () =>
      window.turnstile ? resolve(window.turnstile) : reject(new Error("Turnstile unavailable"))
    );
    script.addEventListener("error", () => reject(new Error("Turnstile failed to load")));
  });
}

const inputClass =
  "w-full px-4 py-3 bg-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-gray-900";

export default function ContactForm() {
  const siteKey = formsConfig.turnstileSiteKey;
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [token, setToken] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (!siteKey || !widgetRef.current) return;
    let cancelled = false;
    loadTurnstile()
      .then((ts) => {
        if (cancelled || !widgetRef.current || widgetId.current) return;
        // The widget adds a hidden "cf-turnstile-response" field inside the
        // form, which Formspree verifies against the secret key set in Formspree.
        widgetId.current = ts.render(widgetRef.current, {
          sitekey: siteKey,
          theme: "light",
          callback: (t: string) => {
            setToken(t);
            setCaptchaError(false);
            setErrorText("");
          },
          "expired-callback": () => setToken(""),
          "error-callback": () => {
            setToken("");
            setCaptchaError(true);
          },
        });
      })
      .catch(() => setCaptchaError(true));
    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [siteKey]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (siteKey && !token) {
      e.preventDefault();
      setErrorText("Please complete the verification check before sending.");
      return;
    }
    // Let the browser submit the form to Formspree normally.
    setSending(true);
  }

  return (
    <form
      className="space-y-5"
      action={formsConfig.formspreeEndpoint}
      method="POST"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="block text-[14px] font-medium text-gray-700 mb-1">Name</label>
        <input type="text" id="name" name="name" required autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className="block text-[14px] font-medium text-gray-700 mb-1">Email</label>
        <input type="email" id="email" name="email" required autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor="company" className="block text-[14px] font-medium text-gray-700 mb-1">Company</label>
        <input type="text" id="company" name="company" autoComplete="organization" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="block text-[14px] font-medium text-gray-700 mb-1">Message</label>
        <textarea id="message" name="message" rows={4} required className={`${inputClass} resize-none`}></textarea>
      </div>

      {/* Subject line for the email Formspree sends you */}
      <input type="hidden" name="_subject" value="New enquiry from am-masons.com" />

      {/* Honeypot: hidden from people, filled in by bots. Formspree silently discards any submission that fills it. */}
      <div aria-hidden="true" className="absolute -left-[10000px] top-auto w-px h-px overflow-hidden">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input type="text" id="_gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      {siteKey && (
        <div>
          <div ref={widgetRef} className="min-h-[65px]" />
          {captchaError && (
            <p className="text-[14px] !text-red-600 mt-2">
              The verification check could not load. Please refresh the page, or email us directly.
            </p>
          )}
        </div>
      )}

      {errorText && (
        <p role="alert" className="text-[14px] !text-red-600">{errorText}</p>
      )}

      <div className="pt-2">
        <Button type="submit" className={`w-full ${sending ? "opacity-60 pointer-events-none" : ""}`}>
          {sending ? "Sending..." : "Submit Message"}
        </Button>
      </div>
    </form>
  );
}
