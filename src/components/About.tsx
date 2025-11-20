"use client";

import { FaServer, FaSolarPanel, FaCheckCircle } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";

export default function About() {
  return (
    <section className="relative py-20 bg-[#0a1525] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Grid with Badge */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Left Column - 2 images stacked vertically */}
              <div className="space-y-4">
                {/* Top Image */}
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400')",
                  }}
                ></div>

                {/* Bottom Image */}
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400')",
                  }}
                ></div>
              </div>

              {/* Right Column - Tall Rectangle (80% height) */}
              <div className="relative h-full flex items-start">
                <div
                  className="w-full h-[80%] bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400')",
                  }}
                ></div>
              </div>
            </div>

            {/* Experience Badge - Positioned at bottom-right, inside container */}
            <div className="absolute bottom-4 right-4">
              <div className="bg-[#0866ff] rounded-lg p-8 text-center shadow-2xl min-w-[200px]">
                <div className="flex items-center justify-center mb-2">
                  <HiOutlineUserGroup className="text-white text-4xl mr-2" />
                  <span className="text-white text-5xl font-bold">10+</span>
                </div>
                <p className="text-white text-sm font-medium">
                  Years of experience in
                  <br />
                  this field.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Comprehensive Digital
                <br />
                Infrastructure <span className="text-[#0866ff]">Solutions</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              We deliver comprehensive digital infrastructure solutions by
              integrating premium computing systems with resilient solar power.
              Our end-to-end approach ensures continuous uptime for
              mission-critical digital operations, eliminating disruptions
              caused by power instability.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* ICT Infrastructure */}
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg border-2 border-[#0866ff] flex items-center justify-center">
                    <FaServer className="text-[#0866ff] text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">
                    ICT Supply &
                  </h3>
                  <p className="text-white font-semibold text-base">
                    Deployment
                  </p>
                </div>
              </div>

              {/* Solar Power */}
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg border-2 border-[#0866ff] flex items-center justify-center">
                    <FaSolarPanel className="text-[#0866ff] text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">
                    Solar Power
                  </h3>
                  <p className="text-white font-semibold text-base">
                    Engineering
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#0866ff] text-lg mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  Premium computing devices with professional installation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#0866ff] text-lg mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  Custom solar systems engineered for continuous uptime
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-[#0866ff] text-lg mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  Long-term SLAs with guaranteed power continuity
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <button className="bg-[#0866ff] text-white text-sm px-8 py-3 rounded font-semibold hover:bg-[#0654d4] transition-all hover:scale-105 uppercase">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
