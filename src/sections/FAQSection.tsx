import React from 'react';
import FAQItem from '../components/FAQ/FAQItem';
import { faqsData } from '../data/faqs';

const FAQSection: React.FC = () => {
  return (
    <section id="faqs" className="py-20 bg-black">
      <div className="container max-w-4xl px-4 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center text-white md:text-5xl">
          Frequently Asked Questions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          
          {/* Column 1 (First half of FAQs) */}
          <div className="space-y-4">
            {faqsData.slice(0, Math.ceil(faqsData.length / 2)).map(faq => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
          
          {/* Column 2 (Second half of FAQs) */}
          <div className="space-y-4">
            {faqsData.slice(Math.ceil(faqsData.length / 2)).map(faq => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;