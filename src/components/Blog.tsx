import { FaUser, FaCalendarAlt } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    category: "AGENCY",
    title: "Creating Ideas For Your Marketing Projects",
    author: "bySTAIRTEAM",
    date: "March 11, 2023",
    excerpt:
      "Blanditiis tristique quibusdam. Ea aliquid eius, ipsa. Suspendisse. Torquent varius, primis...",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
    url: "/blog/creating-ideas-for-marketing-projects",
  },
  {
    id: 2,
    category: "MANAGEMENT",
    title: "Managing Is The Way To Success Business",
    author: "bySTAIRTEAM",
    date: "March 11, 2023",
    excerpt:
      "Blanditiis tristique quibusdam. Ea aliquid eius, ipsa. Suspendisse. Torquent varius, primis...",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
    url: "/blog/managing-is-the-way-to-success",
  },
  {
    id: 3,
    category: "BUSINESS",
    title: "We Deal With The Best Partnership Business",
    author: "bySTAIRTEAM",
    date: "March 11, 2023",
    excerpt:
      "Blanditiis tristique quibusdam. Ea aliquid eius, ipsa. Suspendisse. Torquent varius, primis...",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
    url: "/blog/best-partnership-business",
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
            Take A Glance At Our
            <br />
            Latest <span className="text-[#0866ff]">Blog</span>
          </h2>

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
