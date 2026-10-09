"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { formsConfig } from "@/data/forms";

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id?: string) => void;
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

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const siteKey = formsConfig.turnstileSiteKey;
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [token, setToken] = useState<string>("");
  const [captchaError, setCaptchaError] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorText, setErrorText] = useState("");

  const resetCaptcha = useCallback(() => {
    setToken("");
    if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
  }, []);

  useEffect(() => {
    if (!siteKey || !widgetRef.current) return;
    let cancelled = false;
    loadTurnstile()
      .then((ts) => {
        if (cancelled || !widgetRef.current || widgetId.current) return;
        widgetId.current = ts.render(widgetRef.current, {
          sitekey: siteKey,
          theme: "light",
          callback: (t: string) => {
            setToken(t);
            setCaptchaError(false);
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real people never see or fill this field.
    if (String(data.get("_gotcha") ?? "").trim() !== "") {
      setStatus("sent");
      form.reset();
      return;
    }

    if (siteKey && !token) {
      setStatus("error");
      setErrorText("Please complete the verification check before sending.");
      return;
    }
    if (siteKey) data.set("cf-turnstile-response", token);

    setStatus("sending");
    setErrorText("");
    try {
      const res = await fetch(formsConfig.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        resetCaptcha();
        return;
      }
      const body = await res.json().catch(() => null);
      const msg =
        body?.errors?.map((er: { message?: string }) => er.message).filter(Boolean).join(" ") ||
        "Something went wrong. Please try again, or email us directly.";
      setStatus("error");
      setErrorText(msg);
      resetCaptcha();
    } catch {
      setStatus("error");
      setErrorText("Network error. Please try again, or email us directly.");
      resetCaptcha();
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl border border-primary/20 bg-primary-light p-6">
        <p className="text-[18px] font-semibold !text-gray-900 mb-1">Thank you. Your message has been sent.</p>
        <p>We will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate={false}>
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

      {/* Honeypot field: hidden from people, filled in by bots. Formspree also discards any submission that fills it. */}
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

      {status === "error" && errorText && (
        <p role="alert" className="text-[14px] !text-red-600">{errorText}</p>
      )}

      <div className="pt-2">
        <Button type="submit" className={`w-full ${status === "sending" || (siteKey && !token) ? "opacity-60 pointer-events-none" : ""}`}>
          {status === "sending" ? "Sending..." : "Submit Message"}
        </Button>
      </div>
    </form>
  );
}
