"use client";

import { useState } from "react";
import { FAQ } from "@/data/faqs";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto divide-y divide-gray-200">
      {faqs.map((faq, index) => (
        <div key={index} className="py-4">
          <button
            className="flex w-full justify-between items-center text-left focus:outline-none"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="text-lg font-medium text-navy-900 pr-4">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
            )}
          </button>
          
          <div 
            id={`faq-answer-${index}`}
            className={`mt-4 text-gray-600 transition-all overflow-hidden ${
              openIndex === index ? "block" : "hidden"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
