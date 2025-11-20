"use client";

import {
  FaServer,
  FaSolarPanel,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const values = [
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "We constantly evolve and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: FaUsers,
    title: "Client-Focused",
    description:
      "Your success is our priority. We tailor our services to meet your unique business needs.",
  },
  {
    icon: FaAward,
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we do, ensuring quality results.",
  },
  {
    icon: FaRocket,
    title: "Results-Driven",
    description:
      "We focus on delivering measurable outcomes that drive your business forward.",
  },
];

const achievements = [
  { number: "10+", label: "Years Experience" },
  { number: "200+", label: "Institutions Served" },
  { number: "98%", label: "Uptime Guarantee" },
  { number: "150+", label: "Projects Completed" },
];

const team = [
  {
    name: "John Anderson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
  },
  {
    name: "Sarah Mitchell",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    name: "Michael Chen",
    role: "Head of Technology",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 pt-32 lg:pt-40 overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/background-img.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1525]/95 to-[#0a1525]/90"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                About Techville Enterprise
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Delivering end-to-end digital infrastructure solutions by
                integrating premium computing systems with resilient solar
                power. We eliminate downtime and ensure operational certainty
                for institutions across Nigeria.
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                </div>
                <div className="w-12 h-0.5 bg-[#0866ff]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Main About Section */}
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
                    Infrastructure{" "}
                    <span className="text-[#0866ff]">Solutions</span>
                  </h2>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  Techville Enterprise addresses the single greatest barrier to
                  digital efficiency in Nigeria: instability. We build solutions
                  that eliminate downtime entirely by integrating premium ICT
                  equipment with resilient solar power systems, ensuring
                  uninterrupted operations for institutions and enterprises.
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
                      Premium computing devices with professional installation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#0866ff] text-lg mt-0.5 shrink-0" />
                    <span className="text-gray-400 text-sm">
                      Custom solar systems engineered for continuous uptime.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#0866ff] text-lg mt-0.5 shrink-0" />
                    <span className="text-gray-400 text-sm">
                      Long-term SLAs with guaranteed power continuity.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
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

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-[#1a2332] rounded-lg p-8 border border-[#A7A7A7]/20 hover:border-[#0866ff]/50 transition-all duration-300 group text-center"
                >
                  <div className="relative mb-4">
                    <h3
                      className="text-5xl md:text-6xl font-bold mb-2"
                      style={{
                        WebkitTextStroke: "2px #0866ff",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {achievement.number}
                    </h3>
                  </div>
                  <div className="w-12 h-0.5 bg-[#0866ff] mx-auto mb-4"></div>
                  <p className="text-white text-sm font-semibold uppercase tracking-wider">
                    {achievement.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="relative py-20 bg-[#0a1525]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Our Core <span className="text-[#0866ff]">Values</span>
              </h2>
              <div className="flex items-center justify-center gap-1">
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-12 h-0.5 bg-[#0866ff]"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#1a2332] rounded-lg p-6 border border-[#A7A7A7]/20 hover:border-[#0866ff]/50 transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 bg-[#0866ff]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0866ff] transition-colors">
                      <Icon className="text-[#0866ff] text-2xl group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#0866ff] transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="relative py-20 bg-[#0a1525]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Meet Our <span className="text-[#0866ff]">Leadership</span>
              </h2>
              <div className="flex items-center justify-center gap-1 mb-4">
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-12 h-0.5 bg-[#0866ff]"></div>
              </div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Our experienced leadership team brings decades of combined
                expertise in digital infrastructure, power engineering, and
                institutional technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1525] to-transparent opacity-60"></div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-1 group-hover:text-[#0866ff] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#0866ff] text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#0a1525]">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#0866ff]/20 to-[#0654d4]/10 rounded-[10px] border border-[#0866ff]/30 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready for Reliable Infrastructure?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Eliminate downtime and ensure operational certainty. Contact us
                today for a comprehensive infrastructure assessment tailored to
                your institution's needs.
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#0866ff] text-white px-8 py-4 rounded font-medium hover:bg-[#0654d4] transition-colors"
              >
                Request Assessment
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
