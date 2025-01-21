import React from 'react';
import { HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const faqs = [
  {
    question: "What are the minimum system requirements?",
    answer: "The game runs in any modern web browser with WebGL support. 4GB RAM and a dual-core processor are recommended."
  },
  {
    question: "Is there a multiplayer mode?",
    answer: "Currently, Gar-Type is a single-player experience focused on the campaign mode."
  },
  {
    question: "How do I save my progress?",
    answer: "The game automatically saves after completing each level and when collecting major power-ups."
  },
  {
    question: "Are there different difficulty levels?",
    answer: "Yes, you can choose between Easy, Normal, and Hard difficulty modes at the start of your game."
  },
  {
    question: "Can I customize my ship?",
    answer: "Yes, you can unlock different ship configurations and weapon loadouts as you progress."
  }
];

export function FAQSection() {
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-32 bg-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          {t('nav.faq')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 hover-scale">
              <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}