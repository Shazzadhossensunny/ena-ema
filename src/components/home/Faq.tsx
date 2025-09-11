"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How long does it take?",
      answer:
        "5 days from start to finish - design, development, and deployment included.",
    },
    {
      question: "Do you provide revisions?",
      answer:
        "Yes, unlimited revisions until you're 100% satisfied with the final result.",
    },
    {
      question: "What's the payment process?",
      answer:
        "50% upfront to get started, 50% after final delivery and your approval.",
    },
    {
      question: "Can you deploy on my hosting?",
      answer:
        "Absolutely! Deployment is included in every package, on your hosting or ours.",
    },
    {
      question: "Why are your prices so affordable compared to agencies?",
      answer:
        "We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="py-30 bg-background-dark"
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        backgroundColor: "var(--color-background, #151E1B)",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Title */}
            <motion.h2
              variants={titleVariants}
              className="text-center mb-12"
              style={{
                color: "var(--color-text-light, #F5F5F5)",
                fontFamily: "var(--font-manrope, Manrope)",
                fontSize: "48px",
                fontWeight: "500",
                lineHeight: "72px",
                letterSpacing: "-2px",
                marginBottom: "48px",
              }}
            >
              Got Questions
              <span style={{ color: "var(--color-primary, #1FFFA5)" }}>?</span>{" "}
              We've Got The Answers
            </motion.h2>

            {/* FAQ Container */}
            <motion.div
              variants={containerVariants}
              className="w-full max-w-[912px] space-y-6"
            >
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="faq-item"
                  style={{
                    padding: "24px",
                    borderRadius: "12px",
                    backgroundColor: "var(--color-card, #192420)",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    {/* Dot */}
                    <motion.div
                      className="flex-shrink-0 mt-1"
                      animate={{
                        rotate: activeIndex === index ? 90 : 0,
                        backgroundColor:
                          activeIndex === index
                            ? "var(--color-primary-light, #00e58a)"
                            : "var(--color-primary, #1FFFA5)",
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary, #1FFFA5)",
                      }}
                    />

                    <div className="flex-1 min-w-0">
                      {/* Question */}
                      <motion.h4
                        className="faq-question"
                        style={{
                          color: "var(--color-text-light, #F5F5F5)",
                          fontFamily: "var(--font-manrope, Manrope)",
                          fontSize: "24px",
                          fontWeight: "700",
                          lineHeight: "26px",
                          letterSpacing: "-1px",
                          marginBottom: activeIndex === index ? "24px" : "0px",
                        }}
                        animate={{
                          marginBottom: activeIndex === index ? "24px" : "0px",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.question}
                      </motion.h4>

                      {/* Answer */}
                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{
                              color:
                                "var(--color-text-secondary-light, #B2B2B2)",
                              fontFamily:
                                'var(--font-general-sans, "General Sans")',
                              fontSize: "18px",
                              fontWeight: "400",
                              lineHeight: "26px",
                              letterSpacing: "0px",
                              overflow: "hidden",
                            }}
                          >
                            {faq.answer}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .faq-question {
            font-size: 20px !important;
            line-height: 24px !important;
          }
        }

        @media (max-width: 640px) {
          .faq-question {
            font-size: 18px !important;
            line-height: 22px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
