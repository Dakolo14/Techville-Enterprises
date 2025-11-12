import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 1,
    category: "BUSINESS",
    title: "Finance Marketing",
    description:
      "Nascetur placeat vestibulum occasecat nunc porttitor iusto dol.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
    url: "/projects/finance-marketing",
  },
  {
    id: 2,
    category: "MARKETING",
    title: "Digital Strategy",
    description:
      "Nascetur placeat vestibulum occasecat nunc porttitor iusto dol.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
    url: "/projects/digital-strategy",
  },
  {
    id: 3,
    category: "BUSINESS",
    title: "Business Growth",
    description:
      "Nascetur placeat vestibulum occasecat nunc porttitor iusto dol.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
    url: "/projects/business-growth",
  },
  {
    id: 4,
    category: "FINANCE",
    title: "Finance Consulting",
    description:
      "Nascetur placeat vestibulum occasecat nunc porttitor iusto dol.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600",
    url: "/projects/finance-consulting",
  },
  {
    id: 5,
    category: "MARKETING",
    title: "Brand Development",
    description:
      "Nascetur placeat vestibulum occasecat nunc porttitor iusto dol.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600",
    url: "/projects/brand-development",
  },
  {
    id: 6,
    category: "MANAGEMENT",
    title: "Team Management",
    description:
      "Nascetur placeat vestibulum occasecat nunc porttitor iusto dol.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600",
    url: "/projects/team-management",
  },
];

export default function ProjectsPage() {
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
                Our Projects
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Explore our portfolio of successful projects and creative
                solutions we've delivered for our clients worldwide.
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

        {/* Projects Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
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
                      {/* Link Icon - Opens project page */}
                      <Link
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
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#0866ff]/20 to-[#0654d4]/10 rounded-[10px] border border-[#0866ff]/30 p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life. Get in touch
                with our team today.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#0866ff] text-white px-8 py-4 rounded font-medium hover:bg-[#0654d4] transition-colors"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
