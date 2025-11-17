"use client";
import React, { useEffect, useRef } from "react";
import { TracingBeam } from "./ui/tracer-beam";
import roadmapData from "@/json/roadmap.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function RoadmapFE() {
  const contentRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each roadmap item on scroll
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  const { frontEnd } = roadmapData;

  return (
    <div ref={contentRef}>
      <TracingBeam className="px-6">
        <div className="max-w-4xl mx-auto antialiased pt-4 relative">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {frontEnd.title}
            </h1>
            <p className="text-lg text-neutral-600">{frontEnd.description}</p>
          </div>

          {/* Roadmap Phases */}
          {frontEnd.phases.map((phase, index) => (
            <div
              key={`phase-${index}`}
              ref={(el) => (itemsRef.current[index] = el)}
              className="mb-16"
            >
              {/* Phase Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold">
                    {phase.id}
                  </div>
                  <h2 className="text-3xl font-bold text-neutral-800">
                    {phase.title}
                  </h2>
                </div>

                {/* Course Metadata Cards */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 ml-14">
                  {/* Duration */}
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <p className="text-xs text-neutral-600 font-semibold">
                      DURASI
                    </p>
                    <p className="text-sm font-bold text-neutral-800">
                      {phase.duration}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                    <p className="text-xs text-neutral-600 font-semibold">
                      RATING
                    </p>
                    <p className="text-sm font-bold text-neutral-800">
                      ⭐ {phase.rating}
                    </p>
                  </div>

                  {/* Modules */}
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <p className="text-xs text-neutral-600 font-semibold">
                      MODUL
                    </p>
                    <p className="text-sm font-bold text-neutral-800">
                      {phase.modules}
                    </p>
                  </div>

                  {/* Students */}
                  <div className="bg-pink-50 rounded-lg p-3 border border-pink-200">
                    <p className="text-xs text-neutral-600 font-semibold">
                      SISWA
                    </p>
                    <p className="text-sm font-bold text-neutral-800">
                      {phase.students.toLocaleString("en-US")}
                    </p>
                  </div>

                  {/* Difficulty */}
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <p className="text-xs text-neutral-600 font-semibold">
                      LEVEL
                    </p>
                    <p className="text-sm font-bold text-green-600">
                      {phase.difficulty}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase Topics */}
              <div className="ml-14 space-y-6">
                {phase.topics.map((topic, topicIndex) => (
                  <div
                    key={`topic-${topicIndex}`}
                    className="bg-white border border-neutral-200 rounded-lg p-6 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
                  >
                    {/* Topic Name */}
                    <div className="flex items-center gap-3 mb-3">
                      <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                      <h3 className="text-xl font-semibold text-neutral-800">
                        {topic.name}
                      </h3>
                    </div>

                    {/* Subtopics */}
                    <div className="ml-7 grid grid-cols-1 md:grid-cols-2 gap-2">
                      {topic.subtopics.map((subtopic, subtopicIndex) => (
                        <div
                          key={`subtopic-${subtopicIndex}`}
                          className="flex items-center gap-2 text-neutral-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                          {subtopic}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Ready to Start Your React Journey?
            </h3>
            <p className="text-neutral-600 mb-6">
              Follow this roadmap step by step and build amazing React
              applications.
            </p>
            <Link href="https://forms.gle/vSaniQXPDnPBDA1R6">
              <button className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 hover:shadow-lg hover:shadow-green-500/30 cursor-pointer">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </TracingBeam>
    </div>
  );
}
