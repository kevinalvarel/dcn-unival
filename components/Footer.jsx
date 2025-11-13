"use client";
import React from "react";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
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
                <h1 className="text-neutral-900 text-3xl md:text-4xl font-bold">
                  Dicoding Community Builder
                </h1>
                <h2 className=" text-xl md:text-2xl font-bold text-green-600">
                  Universitas Al-Khairiyah
                </h2>
                <p className="text-neutral-600 text-sm mt-2">
                  Growing together in knowledge and innovation.
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="www.instagram.com/dcn.unival/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-green-500/10 hover:bg-green-500/20 flex items-center justify-center text-green-500 transition-all duration-300"
                >
                  <FaInstagram size={20} />
                </a>
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
