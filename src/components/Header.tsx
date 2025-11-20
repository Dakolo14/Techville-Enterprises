"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiMapPin, FiClock } from "react-icons/fi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-[#0a1525]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-[11px] text-gray-300">
            {/* Contact Info */}
            <div className="flex items-center gap-6 md:gap-8">
              <div className="flex items-center gap-1.5">
                <FiMapPin className="text-[#0866ff] text-[10px]" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiClock className="text-[#0866ff] text-[10px]" />
                <span>Monday - Friday : 8:00 - 18:00</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all"
              >
                <FaFacebookF className="text-[10px]" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all"
              >
                <FaTwitter className="text-[10px]" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all"
              >
                <FaInstagram className="text-[10px]" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all"
              >
                <FaPinterestP className="text-[10px]" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all"
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
              <Image
                src="/techville-logo.png"
                alt="Techville Enterprises"
                width={220}
                height={73}
                className="h-12 md:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
              <Link
                href="/"
                className={`text-[13px] font-medium hover:text-[#0866ff] transition-colors cursor-pointer ${
                  pathname === "/" ? "text-[#0866ff]" : "text-white"
                }`}
              >
                HOME
              </Link>
              <Link
                href="/about"
                className={`text-[13px] font-medium hover:text-[#0866ff] transition-colors cursor-pointer ${
                  pathname === "/about" ? "text-[#0866ff]" : "text-white"
                }`}
              >
                ABOUT US
              </Link>
              <Link
                href="/services"
                className={`text-[13px] font-medium hover:text-[#0866ff] transition-colors cursor-pointer ${
                  pathname === "/services" ? "text-[#0866ff]" : "text-white"
                }`}
              >
                SERVICES
              </Link>
              {/* <Link
                href="/projects"
                className={`text-[13px] font-medium hover:text-[#0866ff] transition-colors cursor-pointer ${
                  pathname?.startsWith("/projects")
                    ? "text-[#0866ff]"
                    : "text-white"
                }`}
              >
                PROJECTS
              </Link> */}
              <Link
                href="/blog"
                className={`text-[13px] font-medium hover:text-[#0866ff] transition-colors cursor-pointer ${
                  pathname?.startsWith("/blog")
                    ? "text-[#0866ff]"
                    : "text-white"
                }`}
              >
                BLOG
              </Link>
              <Link
                href="/contact"
                className={`text-[13px] font-medium hover:text-[#0866ff] transition-colors cursor-pointer ${
                  pathname === "/contact" ? "text-[#0866ff]" : "text-white"
                }`}
              >
                CONTACT
              </Link>
            </nav>

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className="hidden lg:block bg-[#0866ff] text-white text-[13px] px-4 md:px-5 py-2 rounded font-medium hover:bg-[#0654d4] transition-colors cursor-pointer"
            >
              CONTACT US
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white text-2xl p-2 cursor-pointer z-50 relative"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-[70%] bg-[#0a1525] z-50 transition-transform duration-300 overflow-y-auto lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-8">
          <nav className="flex flex-col gap-6">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium hover:text-[#0866ff] transition-colors cursor-pointer ${
                pathname === "/" ? "text-[#0866ff]" : "text-white"
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium hover:text-[#0866ff] transition-colors cursor-pointer ${
                pathname === "/about" ? "text-[#0866ff]" : "text-white"
              }`}
            >
              ABOUT US
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium hover:text-[#0866ff] transition-colors cursor-pointer ${
                pathname === "/services" ? "text-[#0866ff]" : "text-white"
              }`}
            >
              SERVICES
            </Link>
            {/* <Link
              href="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium hover:text-[#0866ff] transition-colors cursor-pointer ${
                pathname?.startsWith("/projects")
                  ? "text-[#0866ff]"
                  : "text-white"
              }`}
            >
              PROJECTS
            </Link> */}
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium hover:text-[#0866ff] transition-colors cursor-pointer ${
                pathname?.startsWith("/blog") ? "text-[#0866ff]" : "text-white"
              }`}
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium hover:text-[#0866ff] transition-colors cursor-pointer ${
                pathname === "/contact" ? "text-[#0866ff]" : "text-white"
              }`}
            >
              CONTACT
            </Link>

            {/* Mobile CTA Button */}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#0866ff] text-white text-sm px-6 py-3 rounded font-medium hover:bg-[#0654d4] transition-colors text-center mt-4 cursor-pointer"
            >
              CONTACT US
            </Link>

            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-white/10">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all"
              >
                <FaTwitter className="text-sm" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all"
              >
                <FaPinterestP className="text-sm" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
