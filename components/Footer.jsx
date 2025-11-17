"use client";
import React from "react";
import Link from "next/link";

import Image from "next/image";

const Footer = () => {
  const footerLinks = {
    Important: [
      { label: "About Us", href: "about" },
      { label: "React Learning Path", href: "react" },
      { label: "Front-End Learning Path", href: "front-end" },
    ],
  };

  return (
    <footer className="relative w-full bg-white border-t border-neutral-200 overflow-x-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/5 rounded-full blur-3xl -mr-32 -mt-32" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="flex-1">
              <div className="mb-6 gap-y-5">
                <Image src="/logo.png" alt="Logo" width={350} height={350} />
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex-1">
                <h4 className="text-lg font-bold text-neutral-800 mb-6">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-neutral-600 hover:text-green-500 transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
