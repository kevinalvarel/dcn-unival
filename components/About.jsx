"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate content text
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate cards with stagger
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40, rotateZ: -8 },
        {
          opacity: 1,
          y: 0,
          rotateZ: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover animation for cards
      cardsRef.current.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            boxShadow: "0 25px 50px rgba(74, 222, 128, 0.3)",
            duration: 0.3,
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            duration: 0.3,
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Knowledge Growth",
      description:
        "Master in-demand skills through our structured Front-End & React learning paths, guided by the official Dicoding curriculum.",
    },
    {
      title: "Innovation Hub",
      description:
        "Collaborate with like-minded peers from Universitas Al-Khairiyah. Apply your new skills to build real-world web applications and cutting-edge projects.",
    },
    {
      title: "Community First",
      description:
        "Join a supportive and inclusive network. We are dedicated to helping every member grow and succeed on their tech journey, together.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white py-15 px-4 overflow-x-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-60 left-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl -ml-40 -mb-40" />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 mb-4">
            About <span className="text-green-500">Us</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-green-400 to-green-600 mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div ref={contentRef} className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-neutral-600 text-lg leading-relaxed">
            Dicoding Community Network x Universitas Al-Khairiyah is a
            specialized learning community for students passionate about web
            development. We focus on building expertise through dedicated
            learning paths in Front-End Development and React. Join us to learn,
            build, and connect!
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => cardsRef.current.push(el)}
              className="group relative p-8 rounded-lg bg-white border border-neutral-200 hover:border-green-400 backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-green-400/20"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-linear-to-br from-green-400/0 to-green-400/0 group-hover:from-green-50 group-hover:to-green-50/30 rounded-lg transition-all duration-300" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-neutral-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-3 bg-green-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50">
            <div className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-right" />
            <span className="relative">Join Our Community</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
