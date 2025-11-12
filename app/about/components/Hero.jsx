import { cn } from "@/lib/utils";
import React from "react";
import RotatingText from "./ui/rotating-text";

export function Hero() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white mt-16">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <RotatingText
        texts={["Wanna know", "About us?", "Ingin tahu", "Tentang Kami?"]}
        mainClassName="px-4 sm:px-6 md:px-8 text-neutral-900 overflow-hidden py-2 sm:py-3 md:py-4 justify-center rounded-lg text-6xl md:text-6xl font-bold"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 600 }}
        rotationInterval={1500}
      />
    </div>
  );
}
