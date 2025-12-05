import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const teamMembers = [
  {
    id: 1,
    name: "Emmanuel Nnamani C.",
    role: "CEO & Founder",
    image: "/CEO-image.jpg",
  },
];

export default function TeamPage() {
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
                Our Team
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Meet the talented professionals behind Techville Enterprises who
                are dedicated to delivering exceptional results for our clients.
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

        {/* Team Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Fixed Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920')",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-[#0a1525]/95"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Creative Team Of
                <br />
                <span className="text-[#0866ff]">Professionals</span>
              </h2>

              {/* Decorative underline */}
              <div className="flex items-center justify-center gap-1">
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-12 h-0.5 bg-[#0866ff]"></div>
              </div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {teamMembers.map((member) => (
                <div key={member.id} className="group">
                  {/* Card Container with Border */}
                  <div className="relative bg-[#1a2332] border-4 border-gray-600 rounded-2xl p-4 overflow-hidden">
                    {/* Image Container */}
                    <div className="relative rounded-xl overflow-hidden mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />

                      {/* Social Media Icons Bar - Always Visible */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 bg-[#0866ff] rounded-lg p-2">
                        <a
                          href="#"
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <FaFacebookF className="text-white text-sm" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <FaTwitter className="text-white text-sm" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <FaYoutube className="text-white text-sm" />
                        </a>
                        <a
                          href="#"
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <FaLinkedinIn className="text-white text-sm" />
                        </a>
                      </div>
                    </div>

                    {/* Member Info - Inside Card */}
                    <div className="text-center pb-2">
                      <h3 className="text-white text-xl font-bold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#0866ff] text-sm font-semibold tracking-wider">
                        {member.role}
                      </p>
                    </div>
                  </div>
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
                Join Our Team
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our
                growing team. If you're passionate about digital innovation, get
                in touch!
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#0866ff] text-white px-8 py-4 rounded font-medium hover:bg-[#0654d4] transition-colors"
              >
                Contact Us
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
