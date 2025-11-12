import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

// This would typically come from a database or CMS
const blogPosts = [
  {
    slug: "creating-ideas-for-marketing-projects",
    title: "Creating Ideas For Your Marketing Projects",
    category: "AGENCY",
    author: "bySTAIRTEAM",
    date: "March 11, 2023",
    excerpt:
      "Blanditiis tristique quibusdam. Ea aliquid eius, ipsa. Suspendisse. Torquent varius, primis...",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200",
    content: `
      <h2>Introduction</h2>
      <p>Creating compelling ideas for marketing projects requires a blend of creativity, strategic thinking, and market understanding. In this comprehensive guide, we'll explore proven methodologies to generate innovative marketing concepts that resonate with your target audience.</p>
      
      <h3>Understanding Your Audience</h3>
      <p>Before diving into ideation, it's crucial to have a deep understanding of your target audience. Research their preferences, pain points, and behaviors to create campaigns that truly connect.</p>
      
      <h3>Brainstorming Techniques</h3>
      <ul>
        <li>Mind mapping for visual ideation</li>
        <li>SWOT analysis for strategic planning</li>
        <li>Customer journey mapping</li>
        <li>Competitive analysis and differentiation</li>
      </ul>
      
      <h3>Implementation Strategy</h3>
      <p>Once you have your ideas, it's time to create an actionable implementation plan. Define clear objectives, allocate resources, and establish metrics for measuring success.</p>
      
      <h3>Conclusion</h3>
      <p>Successful marketing projects start with great ideas. By following these strategies and staying attuned to market trends, you can create campaigns that drive real business results.</p>
    `,
  },
  {
    slug: "managing-is-the-way-to-success",
    title: "Managing Is The Way To Success Business",
    category: "MANAGEMENT",
    author: "bySTAIRTEAM",
    date: "March 11, 2023",
    excerpt:
      "Blanditiis tristique quibusdam. Ea aliquid eius, ipsa. Suspendisse. Torquent varius, primis...",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200",
    content: `
      <h2>The Art of Business Management</h2>
      <p>Effective management is the cornerstone of any successful business. Learn the key principles and practices that distinguish great managers from good ones.</p>
      
      <h3>Core Management Principles</h3>
      <ul>
        <li>Clear communication and transparency</li>
        <li>Strategic planning and execution</li>
        <li>Team empowerment and development</li>
        <li>Data-driven decision making</li>
      </ul>
      
      <h3>Building High-Performance Teams</h3>
      <p>Success in business isn't achieved alone. Discover how to build, motivate, and lead teams that consistently deliver exceptional results.</p>
    `,
  },
  {
    slug: "best-partnership-business",
    title: "We Deal With The Best Partnership Business",
    category: "BUSINESS",
    author: "bySTAIRTEAM",
    date: "March 11, 2023",
    excerpt:
      "Blanditiis tristique quibusdam. Ea aliquid eius, ipsa. Suspendisse. Torquent varius, primis...",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
    content: `
      <h2>Strategic Business Partnerships</h2>
      <p>Building strong business partnerships is essential for sustainable growth. Learn how to identify, establish, and nurture partnerships that create mutual value.</p>
      
      <h3>Finding the Right Partners</h3>
      <p>Not all partnerships are created equal. Discover the criteria for selecting partners whose values, goals, and capabilities align with your business objectives.</p>
      
      <h3>Partnership Best Practices</h3>
      <ul>
        <li>Clear agreements and expectations</li>
        <li>Regular communication and feedback</li>
        <li>Shared goals and KPIs</li>
        <li>Flexibility and adaptability</li>
      </ul>
    `,
  },
];

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a1525]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/background-img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="bg-[#0866ff] text-white text-xs font-semibold px-4 py-2 rounded uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-sm mb-8">
            <div className="flex items-center gap-2">
              <FaUser className="text-[#0866ff]" />
              <span className="text-[#0866ff] font-medium">{post.author}</span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-400" />
              <span className="text-gray-400">{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative pb-12">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden max-w-5xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: "#9ca3af",
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
