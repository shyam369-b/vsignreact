import React, { useState } from "react";

const Faqsection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are acrylic signage boards used for?",
      answer:
        "Our acrylic signage boards are versatile and can be used for both indoor and outdoor signage. They are used as retail displays, event signage, and business signs.",
    },
    {
      question: "How durable are acrylic signage boards?",
      answer:
        "Acrylic signage boards are highly durable, weather-resistant, and can withstand regular wear and tear, making them suitable for long-term use.",
    },
    {
      question: "What is the difference between acrylic signage and other signage materials?",
      answer:
        "Acrylic signage is known for its polished finish, clarity, and lightweight nature compared to heavier materials like metal or wood.",
    },
    {
      question: "How do I clean and maintain my acrylic signage boards?",
      answer:
        "Use a soft microfiber cloth and a non-abrasive cleaner to maintain the clarity and shine of acrylic boards. Avoid harsh chemicals or scrubbing tools.",
    },
    {
      question: "Can these acrylic signage boards be used for outdoor advertisements?",
      answer:
        "Yes, acrylic signage boards are UV-resistant and can withstand outdoor conditions, making them ideal for advertisements and promotional use.",
    },
    {
      question: "Are acrylic signage boards eco-friendly?",
      answer:
        "Acrylic boards are recyclable, making them an eco-friendly option for signage when disposed of properly.",
    },
    {
      question: "Can I customize the shape and size of acrylic signage boards?",
      answer:
        "Yes, acrylic signage boards can be custom-cut to fit specific shapes, sizes, and designs to meet your branding needs.",
    },
  ];

  return (
        <div className="faq-section">
            <div className="faq-container">
            <div className="faq-title">
                <h1>Frequently Asked <span>Questions</span></h1>
                <p>
                At VSign, you will always find the right signage to bring your brand
                to life. The company's experienced team is ever-ready to help you make
                the perfect choice from our wide range of signage options.
                </p>
            </div>
            {faqs.map((faq, index) => (
                <div
                key={index}
                className={`faq-item ${activeIndex === index ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
                >
                <h3>
                    {faq.question}
                    <span className="arrow"></span>
                </h3>
                {activeIndex === index && <p>{faq.answer}</p>}
                </div>
            ))}
            </div>
        </div>
  );
};

export default Faqsection;
