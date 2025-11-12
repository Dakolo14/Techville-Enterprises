import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// This would typically come from a database or CMS
const projects = [
  {
    slug: "finance-marketing",
    title: "Finance Marketing",
    category: "BUSINESS",
    description:
      "Nascetur placeat vestibulum occasecat nunc porttitor iusto dol.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
    content: `
      <h2>Project Overview</h2>
      <p>This finance marketing project focuses on creating innovative strategies to help businesses grow their financial services portfolio. We implemented comprehensive marketing campaigns that resulted in significant ROI improvements.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Strategic market analysis and positioning</li>
        <li>Digital marketing campaign development</li>
        <li>Brand identity enhancement</li>
        <li>Customer engagement optimization</li>
      </ul>
      
      <h3>Results</h3>
      <p>The project delivered exceptional results with a 150% increase in client engagement and a 200% improvement in conversion rates over a 6-month period.</p>
    `,
  },
  {
    slug: "digital-strategy",
    title: "Digital Strategy",
    category: "MARKETING",
    description:
      "Nascetur placeat vestibulum occasecat nunc porttitor iusto dol.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200",
    content: `
      <h2>Digital Strategy Development</h2>
      <p>A comprehensive digital transformation strategy designed to modernize business operations and enhance online presence across all digital channels.</p>
      
      <h3>Strategy Components</h3>
      <ul>
        <li>Multi-channel digital marketing</li>
        <li>Social media optimization</li>
        <li>Content strategy development</li>
        <li>Analytics and performance tracking</li>
      </ul>
    `,
  },
  {
    slug: "business-growth",
    title: "Business Growth",
    category: "BUSINESS",
    description:
      "Nascetur placeat vestibulum occasecat nunc porttitor iusto dol.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200",
    content: `
      <h2>Business Growth Strategy</h2>
      <p>Implementing scalable growth strategies that drive sustainable business expansion and market penetration.</p>
    `,
  },
  {
    slug: "finance-consulting",
    title: "Finance Consulting",
    category: "FINANCE",
    description:
      "Nascetur placeat vestibulum occasecat nunc porttitor iusto dol.",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200",
    content: `
      <h2>Financial Consulting Services</h2>
      <p>Expert financial advisory services to optimize business operations and improve financial performance.</p>
    `,
  },
  {
    slug: "brand-development",
    title: "Brand Development",
    category: "MARKETING",
    description:
      "Nascetur placeat vestibulum occasecat nunc porttitor iusto dol.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200",
    content: `
      <h2>Brand Development Initiative</h2>
      <p>Building strong, memorable brands that resonate with target audiences and drive business success.</p>
    `,
  },
  {
    slug: "team-management",
    title: "Team Management",
    category: "MANAGEMENT",
    description:
      "Nascetur placeat vestibulum occasecat nunc porttitor iusto dol.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200",
    content: `
      <h2>Team Management Excellence</h2>
      <p>Developing high-performing teams through effective management strategies and leadership development.</p>
    `,
  },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a1525]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-3xl mb-8">
            {project.description}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative pb-12">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
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
              dangerouslySetInnerHTML={{ __html: project.content }}
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

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
