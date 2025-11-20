import { FaUser, FaCalendarAlt } from "react-icons/fa";

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

export default function Blog() {
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Digital Transformation{" "}
            <span className="text-[#0866ff]">Insights</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-6">
            Technology, Power, and Innovation Across Africa
          </p>

          {/* Decorative underline */}
          <div className="flex items-center justify-center gap-1">
            <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
            <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
            <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
            <div className="w-12 h-0.5 bg-[#0866ff]"></div>
          </div>
        </div>

        {/* Blog Cards Grid */}
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
  );
}
