import Button from "./Button";
import { businessFacts } from "@/data/business";

type CTASectionProps = {
  title?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CTASection({
  title = "Start with a Conversation",
  text = "If a workplace decision, lease event, or transition is near, an independent view helps clarify direction before commitments.",
  buttonText = "Schedule a meeting",
  buttonHref = businessFacts.company.bookingLink,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">{title}</h2>
          <p className="text-lg text-gray-600 mb-8">{text}</p>
          <Button href={buttonHref}>{buttonText}</Button>
        </div>
      </div>
    </section>
  );
}
