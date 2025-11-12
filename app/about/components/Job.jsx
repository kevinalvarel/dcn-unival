import React from "react";
import MagicBento from "./ui/magic-bento";

const Job = () => {
  return (
    <section className="relative w-full bg-white py-20 px-4">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl -ml-40 -mb-40" />

      <div className="relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
            What We <span className="text-green-500">Do?</span>
          </h2>
          <p className="text-neutral-600 text-lg">
            Dicoding Community Network x Universitas Al-Khairiyah is a
            specialized learning community for students passionate about web
            development. We focus on building expertise through dedicated
            learning paths in Front-End Development and React. Join us to learn,
            build, and connect!
          </p>
        </div>

        {/* Magic Bento Grid */}
        <div className="flex justify-center w-full">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={false}
            spotlightRadius={300}
            particleCount={12}
            glowColor="16, 185, 129"
          />
        </div>
      </div>
    </section>
  );
};

export default Job;
