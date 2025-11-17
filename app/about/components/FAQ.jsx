"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const contentRefs = useRef([]);

  const faqData = [
    {
      question: "What is DCN-UNIVAL?",
      answer:
        "DCN-UNIVAL is a collaborative learning community between Dicoding Community Network and Universitas Al-Khairiyah, dedicated to empowering students and developers through comprehensive web development education, hands-on projects, and professional mentorship.",
    },
    {
      question: "How can I join the community?",
      answer:
        "You can join our community by signing up on our platform. We offer both free and premium membership options. Free members get access to basic learning resources, while premium members enjoy additional benefits like direct mentorship, advanced projects, and exclusive networking events.",
    },
    {
      question: "What learning paths do you offer?",
      answer:
        "We offer specialized learning paths in Front-End Development and React. Each path includes video tutorials, hands-on coding exercises, real-world projects, and direct feedback from experienced instructors. Our curriculum is designed to take you from beginner to professional level.",
    },
    {
      question: "Are there any costs involved?",
      answer:
        "No, joining DCN-UNIVAL is completely free! We believe in making quality education accessible to everyone. However, we do offer premium membership options that provide additional resources and benefits for those looking to accelerate their learning journey.",
    },
    {
      question: "How is the community support structured?",
      answer:
        "Our community support includes dedicated Discord channels, weekly live Q&A sessions, peer-to-peer learning groups, and direct access to mentors. We believe in collaborative learning where everyone helps each other grow and succeed together.",
    },
    {
      question: "Can I build projects while learning?",
      answer:
        "Absolutely! Project-based learning is at the core of our curriculum. You'll work on real-world projects throughout your learning journey, building a portfolio that showcases your skills to potential employers. We provide guidance and feedback every step of the way.",
    },
  ];

  const toggleAccordion = (index) => {
    const contentEl = contentRefs.current[index];

    if (expandedIndex === index) {
      // Close the accordion
      gsap.to(contentEl, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          contentEl.style.overflow = "hidden";
        },
      });

      setExpandedIndex(null);
    } else {
      // Close previous accordion
      if (expandedIndex !== null) {
        const prevContentEl = contentRefs.current[expandedIndex];
        gsap.to(prevContentEl, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }

      // Open new accordion
      contentEl.style.overflow = "visible";
      gsap.fromTo(
        contentEl,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut",
        }
      );

      setExpandedIndex(index);
    }
  };

  return (
    <section className="relative w-full bg-white py-20 px-4 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl -ml-40 -mb-40" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 mb-4">
            Frequently Asked <span className="text-green-500">Questions</span>
          </h2>
          <p className="text-neutral-600 text-lg">
            Find answers to common questions about DCN-UNIVAL and get started
            with your learning journey.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="group rounded-lg border border-neutral-200 bg-white overflow-hidden transition-all duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/10"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-green-50/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-neutral-800 flex-1">
                  {item.question}
                </span>
                <div
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <FaChevronDown className="text-green-500 text-xl" />
                </div>
              </button>

              {/* Accordion Content */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-neutral-600 mb-6">
            Didn't find what you're looking for?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 hover:shadow-lg hover:shadow-green-500/30">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
