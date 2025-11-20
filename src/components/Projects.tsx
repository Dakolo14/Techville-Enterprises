"use client";

import { useState } from "react";

const categories = ["ALL", "ICT DEPLOYMENT", "SOLAR POWER", "HYBRID SYSTEMS"];

const projects = [
  {
    id: 1,
    category: "ICT DEPLOYMENT",
    title: "Ivy Crest Academy ICT Lab",
    description:
      "Complete ICT infrastructure setup with 50 workstations and networking equipment.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600",
    url: "/projects/ivy-crest-academy",
  },
  {
    id: 2,
    category: "SOLAR POWER",
    title: "Rapid Logistics Power System",
    description:
      "20kW solar installation with battery backup for continuous operations.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600",
    url: "/projects/rapid-logistics-solar",
  },
  {
    id: 3,
    category: "HYBRID SYSTEMS",
    title: "GracePoint Community Centre",
    description:
      "Integrated ICT and solar solution for media center and administrative offices.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600",
    url: "/projects/gracepoint-hybrid",
  },
  {
    id: 4,
    category: "ICT DEPLOYMENT",
    title: "Corporate Office Infrastructure",
    description:
      "Enterprise-level server setup with complete networking and security systems.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600",
    url: "/projects/corporate-infrastructure",
  },
  {
    id: 5,
    category: "SOLAR POWER",
    title: "Educational Institution Power Grid",
    description:
      "50kW solar farm with hybrid inverter system for uninterrupted learning.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600",
    url: "/projects/education-solar-grid",
  },
  {
    id: 6,
    category: "HYBRID SYSTEMS",
    title: "Healthcare Facility Integration",
    description:
      "Mission-critical power backup and ICT systems for 24/7 medical operations.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
    url: "/projects/healthcare-hybrid",
  },
];

const achievements = [
  { label: "10+", description: "Years of experience" },
  { label: "200+", description: "Institutions served" },
  { label: "98%", description: "Uptime guarantee" },
  { label: "150+", description: "Completed projects" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="relative py-20 bg-[#0a1525] overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/background-img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Infrastructure
            <br />
            <span className="text-[#0866ff]">Deployments</span>
          </h2>
          {/* Decorative underline */}
          <div className="flex items-center justify-center gap-1 mb-8">
            <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
            <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
            <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
            <div className="w-12 h-0.5 bg-[#0866ff]"></div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-semibold rounded transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#0866ff] text-white"
                  : "bg-transparent border border-[#A7A7A7]/30 text-gray-400 hover:border-[#0866ff] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg aspect-4/3 cursor-pointer"
            >
              {/* Project Image */}
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${project.image}')`,
                }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0866ff]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-white text-sm mb-4 opacity-90">
                  {project.description}
                </p>
                <div className="flex gap-3 relative z-20">
                  {/* Search Icon - Opens fullscreen image */}
                  <button
                    onClick={() => setFullscreenImage(project.image)}
                    className="w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>

                  {/* Link Icon - Opens project page */}
                  <a
                    href={project.url}
                    className="w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Image Modal */}
        {fullscreenImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setFullscreenImage(null)}
          >
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#0866ff] transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={fullscreenImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Company Achievements */}
        <div className="border-t border-[#A7A7A7]/20 pt-12">
          <h3 className="text-center text-white text-xl font-semibold mb-8 uppercase tracking-wider">
            Our Company Achievement
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4"
              >
                {/* Stroke Number (Label) */}
                <div
                  className="text-6xl md:text-7xl font-bold"
                  style={{
                    WebkitTextStroke: "2px #0866ff",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  {achievement.label}
                </div>

                {/* Description */}
                <p className="text-white text-base font-medium max-w-[100px] text-left leading-tight">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
