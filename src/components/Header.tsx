"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FiMapPin, FiClock } from "react-icons/fi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0a1525]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-[11px] text-gray-300">
            {/* Contact Info */}
            <div className="flex items-center gap-6 md:gap-8">
              <div className="flex items-center gap-1.5">
                <FiMapPin className="text-[#00D9A3] text-[10px]" />
                <span>Los Angeles Gourmadi, 1230 Bariasl</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiClock className="text-[#00D9A3] text-[10px]" />
                <span>Monday - Friday : 8:00 - 18:00</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#00D9A3] hover:border-[#00D9A3] transition-all"
              >
                <FaFacebookF className="text-[10px]" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#00D9A3] hover:border-[#00D9A3] transition-all"
              >
                <FaTwitter className="text-[10px]" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#00D9A3] hover:border-[#00D9A3] transition-all"
              >
                <FaInstagram className="text-[10px]" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#00D9A3] hover:border-[#00D9A3] transition-all"
              >
                <FaPinterestP className="text-[10px]" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#00D9A3] hover:border-[#00D9A3] transition-all"
              >
                <FaYoutube className="text-[10px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`${
          isScrolled
            ? "bg-[#0a1525]/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5">
              <div className="relative">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-[#00D9A3] rotate-45 flex items-center justify-center">
                  <span className="text-white font-bold text-sm md:text-base -rotate-45">
                    A
                  </span>
                </div>
              </div>
              <span className="text-white text-lg md:text-xl font-bold tracking-wider">
                LPHA
              </span>
            </Link>

            {/* Navigation Menu */}
            <nav className="flex items-center gap-5 xl:gap-6">
              <Link
                href="/"
                className="text-[#00D9A3] text-[13px] font-medium hover:text-[#00D9A3] transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-white text-[13px] font-medium hover:text-[#00D9A3] transition-colors"
              >
                ABOUT US
              </Link>
              <Link
                href="/services"
                className="text-white text-[13px] font-medium hover:text-[#00D9A3] transition-colors"
              >
                SERVICES
              </Link>
              <div className="relative group">
                <button className="text-white text-[13px] font-medium hover:text-[#00D9A3] transition-colors flex items-center gap-1">
                  PAGES
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <Link
                href="/blog"
                className="text-white text-[13px] font-medium hover:text-[#00D9A3] transition-colors"
              >
                BLOG
              </Link>
              <Link
                href="/contact"
                className="text-white text-[13px] font-medium hover:text-[#00D9A3] transition-colors"
              >
                CONTACT
              </Link>
            </nav>

            {/* CTA Button */}
            <Link
              href="/quote"
              className="bg-[#00D9A3] text-white text-[13px] px-4 md:px-5 py-2 rounded font-medium hover:bg-[#00c291] transition-colors"
            >
              GET FREE QUOTES
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
