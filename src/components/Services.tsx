"use client";

import {
  FaPaintBrush,
  FaChartLine,
  FaCode,
  FaPenNib,
  FaSearch,
} from "react-icons/fa";
import { HiDesktopComputer } from "react-icons/hi";

const services = [
  {
    id: "01.",
    title: "Graphic Designer",
    description: "Helit tellus, luctus nec ullamcorper mattis.",
    icon: FaPaintBrush,
  },
  {
    id: "02.",
    title: "Web Designing",
    description: "Helit tellus, luctus nec ullamcorper mattis.",
    icon: HiDesktopComputer,
  },
  {
    id: "03.",
    title: "Digital Marketing",
    description: "Helit tellus, luctus nec ullamcorper mattis.",
    icon: FaChartLine,
  },
  {
    id: "04.",
    title: "App Develop",
    description: "Helit tellus, luctus nec ullamcorper mattis.",
    icon: FaCode,
  },
  {
    id: "05.",
    title: "Content Writing",
    description: "Helit tellus, luctus nec ullamcorper mattis.",
    icon: FaPenNib,
  },
  {
    id: "06.",
    title: "SEO Creating",
    description: "Helit tellus, luctus nec ullamcorper mattis.",
    icon: FaSearch,
  },
];

export default function Services() {
  return (
    <section className="relative py-20 bg-[#0a1525] overflow-hidden">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 bg-linear-to-r from-transparent via-[#0866ff]/10 to-transparent"
        style={{
          background:
            "linear-gradient(90deg, rgba(40, 208, 126, 0) 24%, #0866ff 14%)",
          opacity: 0.05,
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Row 1: Text Section (1fr) + First 3 Cards (2fr) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {/* Text Section - Takes 1fr */}
          <div className="lg:col-span-1 space-y-6 flex flex-col justify-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Explore Our
                <br />
                Best <span className="text-[#0866ff]">Services</span>
              </h2>
              {/* Decorative underline */}
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-12 h-0.5 bg-[#0866ff]"></div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Dui quos erat luctus ea ornare non, leo in, tristique! Officiis
              convallis luctus ea orna.
            </p>

            <button className="bg-[#0866ff] text-white text-sm px-6 py-3 rounded font-semibold hover:bg-[#0654d4] transition-all hover:scale-105 uppercase w-fit">
              More Services
            </button>
          </div>

          {/* First 3 Service Cards - Takes 2fr */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-[10px] border border-[#A7A7A7]/24 p-6 transition-all duration-300 overflow-hidden bg-transparent"
                  style={{
                    transition:
                      "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
                  }}
                >
                  {/* Background overlay with gradient */}
                  <div
                    className="absolute inset-0 rounded-[10px] opacity-15 pointer-events-none transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(2, 1, 1, 0) 50%, #0866ff 100%)",
                    }}
                  ></div>

                  <div className="relative z-10">
                    {/* Number */}
                    <span
                      className="text-[#0866ff] text-3xl font-bold mb-4 block"
                      style={{
                        WebkitTextStroke: "1px #0866ff",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {service.id}
                    </span>

                    {/* Icon */}
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <Icon className="text-white text-4xl group-hover:text-[#0866ff] transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-base font-semibold mb-2 group-hover:text-[#0866ff] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Next 3 Cards (2fr) + Info Card (1fr) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Last 3 Service Cards - Takes 2fr */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {services.slice(3, 6).map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-[10px] border border-[#A7A7A7]/24 p-6 transition-all duration-300 overflow-hidden bg-transparent"
                  style={{
                    transition:
                      "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
                  }}
                >
                  {/* Background overlay with gradient */}
                  <div
                    className="absolute inset-0 rounded-[10px] opacity-15 pointer-events-none transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(2, 1, 1, 0) 50%, #0866ff 100%)",
                    }}
                  ></div>

                  <div className="relative z-10">
                    {/* Number */}
                    <span
                      className="text-[#0866ff] text-3xl font-bold mb-4 block"
                      style={{
                        WebkitTextStroke: "1px #0866ff",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {service.id}
                    </span>

                    {/* Icon */}
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <Icon className="text-white text-4xl group-hover:text-[#0866ff] transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-base font-semibold mb-2 group-hover:text-[#0866ff] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info Card with Background Image - Takes 1fr */}
          <div className="lg:col-span-1">
            <div className="relative rounded-[10px] border border-[#A7A7A7]/24 p-8 overflow-hidden bg-transparent backdrop-blur-sm h-full min-h-[300px]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800')",
                }}
              ></div>

              {/* Dark overlay */}
              <div
                className="absolute inset-0 rounded-[10px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10, 21, 37, 0.7) 0%, rgba(10, 21, 37, 0.95) 100%)",
                }}
              ></div>

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0866ff] rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 flex flex-col justify-end h-full">
                <h3 className="text-white text-2xl font-bold mb-3">
                  Providing best
                  <br />
                  services & result
                  <br />
                  since 1985
                </h3>

                <button className="flex items-center gap-2 text-[#0866ff] text-sm font-medium hover:gap-3 transition-all group">
                  <span className="flex items-center gap-2">
                    <span className="text-xl">→</span> LEARN MORE
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

