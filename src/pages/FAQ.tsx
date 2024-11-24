import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How do I play Block IT?",
    answer: "Click on any empty cell to place a block. Match 3 or more blocks of the same color to clear them and score points. Special blocks like Rainbow, Bomb, and Star have unique powers to help you score more!"
  },
  {
    question: "What are Special Blocks?",
    answer: "There are three types of special blocks: Rainbow (matches with any color), Bomb (clears surrounding blocks), and Star (clears entire row and column). These appear randomly during gameplay."
  },
  {
    question: "How does scoring work?",
    answer: "You get points based on the number of blocks matched: 3 blocks = 100pts, 4 blocks = 300pts, 5 blocks = 600pts, 6+ blocks = 1000pts. Chain matches to build combos for bonus points!"
  },
  {
    question: "What happens when I level up?",
    answer: "You level up every 5000 points. Each level increases the game's difficulty slightly but also gives you more opportunities for special blocks."
  },
  {
    question: "How do I get on the leaderboard?",
    answer: "Your highest score is automatically recorded. The top players are featured on the global leaderboard, which updates in real-time."
  },
  {
    question: "Can I play on mobile devices?",
    answer: "Yes! Block IT is fully responsive and works great on both desktop and mobile devices. Just tap the cells to place blocks!"
  }
];

function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <HelpCircle className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-300">Everything you need to know about Block IT</p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer, delay }: { question: string; answer: string; delay: number }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-lg p-6 text-left transition-colors"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-purple-400" />
          </motion.div>
        </div>
        
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden"
        >
          <p className="mt-4 text-gray-300">{answer}</p>
        </motion.div>
      </button>
    </motion.div>
  );
}

export default FAQ;