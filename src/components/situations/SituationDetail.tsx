import Link from "next/link";
import CTASection from "@/components/ui/CTASection";
import type { SituationContent } from "@/data/situationContent";

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
      {children}
    </p>
  );
}

export default function SituationDetail({ content }: { content: SituationContent }) {
  const { whenToEngage, outcomes, steps, tiers, independence, related, cta } = content;

  return (
    <>
      {/* When to engage */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="slide-up">
            <Eyebrow>When to engage</Eyebrow>
            <h2 className="section-header mb-6">{whenToEngage.heading}</h2>
            <p className="subtitle">{whenToEngage.text}</p>
          </div>
          <ul className="space-y-4 slide-up" style={{ animationDelay: "0.1s" }}>
            {whenToEngage.signals.map((signal) => (
              <li
                key={signal}
                className="flex gap-4 p-5 rounded-xl bg-surface border border-gray-200/80 text-gray-700 leading-relaxed"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 md:py-28 bg-transparent">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12 slide-up">
            <Eyebrow>What you leave with</Eyebrow>
            <h2 className="section-header">{outcomes.heading}</h2>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outcomes.items.map((item, i) => (
              <li
                key={item}
                className="p-6 md:p-7 rounded-2xl bg-card shadow-card-resting border border-gray-200/60"
              >
                <span className="block text-[28px] font-bold text-primary mb-3 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-200/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12 slide-up">
            <Eyebrow>The engagement</Eyebrow>
            <h2 className="section-header">{steps.heading}</h2>
          </div>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.items.map((step, i) => (
              <li key={step.title} className="border-t-2 border-primary pt-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-2">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-[20px] font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 md:py-28 bg-transparent">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12 slide-up">
            <Eyebrow>Engagement tiers</Eyebrow>
            <h2 className="section-header">{tiers.heading}</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {tiers.items.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col p-7 rounded-2xl bg-card border ${
                  tier.recommended
                    ? "border-primary shadow-card-hover"
                    : "border-gray-200/60 shadow-card-resting"
                }`}
              >
                {tier.recommended && (
                  <span className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-primary text-white text-[11px] font-semibold uppercase tracking-[0.12em]">
                    Recommended
                  </span>
                )}
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-primary mb-1">
                  {tier.level}
                </p>
                <h3 className="text-[22px] font-bold text-gray-900 mb-3">{tier.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{tier.bestFor}</p>
                <ul className="space-y-3 mb-6">
                  {tier.includes.map((inc) => (
                    <li key={inc} className="flex gap-3 text-gray-700">
                      <svg className="w-5 h-5 shrink-0 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                {tier.notIncluded && (
                  <p className="mt-auto pt-4 border-t border-gray-100 text-[14px] text-gray-500">
                    <span className="font-semibold">Not included:</span> {tier.notIncluded}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independence */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-4">
            Independent by design
          </p>
          <p className="text-[20px] md:text-[24px] leading-relaxed text-gray-100">{independence}</p>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <Eyebrow>Continue the journey</Eyebrow>
            <h2 className="section-header">Related Engagements</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group p-7 rounded-2xl bg-surface border border-gray-200/80 hover:border-primary hover:shadow-card-hover transition-all"
              >
                <h3 className="text-[20px] font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {r.title} <span aria-hidden="true">→</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">{r.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={cta.title} text={cta.text} buttonText="Start a Conversation" buttonHref="/start-a-conversation" />
    </>
  );
}
