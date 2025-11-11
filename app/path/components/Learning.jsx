import React from "react";
import { FaReact, FaCode } from "react-icons/fa";
import { BackgroundGradient } from "./ui/gradient";

const Learning = () => {
  const learningPaths = [
    {
      title: "React",
      icon: FaReact,
      description:
        "Master modern React development with hooks, components, and state management. Build dynamic, interactive web applications.",
      topics: ["Components", "Hooks", "State Management", "Routing", "Testing"],
      color: "#024d34",
    },
    {
      title: "Front-End",
      icon: FaCode,
      description:
        "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Create beautiful, responsive user interfaces.",
      topics: [
        "HTML & CSS",
        "JavaScript",
        "Responsive Design",
        "Performance",
        "Accessibility",
      ],
      color: "#024d34",
    },
  ];

  return (
    <section className="relative w-full bg-white py-30 px-4 mt-32">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl -ml-40 -mb-40" />

      <div className="relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 mb-4">
            Learning <span className="text-green-500">Paths</span>
          </h2>
          <p className="text-neutral-600 text-lg">
            Choose your learning journey and start mastering web development
            with our comprehensive curriculum.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningPaths.map((path, index) => {
            const IconComponent = path.icon;
            return (
              <BackgroundGradient
                key={index}
                color="#5227FF"
                speed={1}
                chaos={0.05}
                thickness={0.5}
                style={{ borderRadius: 16 }}
              >
                <div className="bg-white p-8 rounded-2xl relative">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-green-50 mb-6">
                    <IconComponent className="text-3xl text-green-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-neutral-800 mb-3">
                    {path.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {path.description}
                  </p>

                  {/* Topics */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-3">
                      Topics Covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {path.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 hover:shadow-lg hover:shadow-green-500/30">
                    Start Learning
                  </button>
                </div>
              </BackgroundGradient>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Learning;
