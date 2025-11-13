"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/ripple";

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-72 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-4xl font-bold text-neutral-800 md:text-4xl lg:text-7xl ">
          Dicoding Community Network{" "}
          <span className="text-green-400">Universitas Al-Khairiyah</span>
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 ">
          growing together in knowledge and innovation.
        </p>
      </div>
    </div>
  );
}
