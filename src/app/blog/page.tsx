import Link from "next/link";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const blogPosts = [
  {
    id: 1,
    category: "POWER SOLUTIONS",
    title:
      "How to Choose the Right Solar Power System for Your Business in Nigeria",
    author: "Techville Engineering Team",
    date: "November 18, 2025",
    excerpt:
      "A complete guide to selecting solar inverters, battery capacity, and panel configurations that guarantee 24/7 uptime for Nigerian businesses facing unstable grid power...",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600",
    url: "/blog/choosing-solar-power-system-nigeria",
  },
  {
    id: 2,
    category: "ICT INFRASTRUCTURE",
    title: "Complete ICT Setup Cost for Schools in Nigeria (2025 Breakdown)",
    author: "Techville Solutions Team",
    date: "November 12, 2025",
    excerpt:
      "Detailed pricing guide for computer labs, servers, networking equipment, and power backup systems. Learn what 50-200 student institutions actually spend on complete digital infrastructure...",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600",
    url: "/blog/ict-setup-cost-schools-nigeria-2025",
  },
  {
    id: 3,
    category: "BUSINESS CONTINUITY",
    title:
      "5 Signs Your Business Needs a Hybrid Power Solution (Not Just Generators)",
    author: "Techville Technical Team",
    date: "November 8, 2025",
    excerpt:
      "Is your diesel generator costing more than solar? Learn the warning signs that indicate it's time to switch to hybrid ICT-solar infrastructure for reliable, cost-effective business operations...",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600",
    url: "/blog/signs-business-needs-hybrid-power-solution",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a1525] pt-16 lg:pt-24">
        {/* Header Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
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
                Digital Infrastructure{" "}
                <span className="text-[#0866ff]">Insights</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Expert guidance on ICT infrastructure, solar power solutions,
                and building resilient digital operations across Nigeria.
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

        {/* Blog Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <a
                  href={post.url}
                  key={post.id}
                  className="bg-[#1a2332] rounded-lg overflow-hidden border border-[#A7A7A7]/20 hover:border-[#0866ff]/50 transition-all duration-300 group block"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#0866ff] text-white text-xs font-semibold px-4 py-2 rounded uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-white text-xl font-bold mb-4 leading-tight group-hover:text-[#0866ff] transition-colors">
                      {post.title}
                    </h3>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <FaUser className="text-[#0866ff] text-xs" />
                        <span className="text-[#0866ff] font-medium">
                          {post.author}
                        </span>
                      </div>
                      <span className="text-gray-500">•</span>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-gray-400 text-xs" />
                        <span className="text-gray-400">{post.date}</span>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#0866ff]/20 to-[#0654d4]/10 rounded-[10px] border border-[#0866ff]/30 p-8 md:p-12">
              <div
                className="max-w-3xl mx-auto text-center"
                suppressHydrationWarning
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Get Infrastructure Insights
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Subscribe for expert tips on solar power, ICT solutions, and
                  strategies to eliminate downtime in your operations.
                </p>
                <form
                  className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
                  suppressHydrationWarning
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#0866ff]"
                    required
                    suppressHydrationWarning
                  />
                  <button
                    type="submit"
                    className="bg-[#0866ff] text-white px-8 py-4 rounded font-medium hover:bg-[#0654d4] transition-colors whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
