import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Jenny Smith",
    role: "DIRECTOR, CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: 2,
    name: "Henry Johnson",
    role: "CO-DIRECTOR",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
  },
  {
    id: 3,
    name: "Manny Dufson",
    role: "SUPERVISOR",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400",
  },
  {
    id: 4,
    name: "Mikel Thiery",
    role: "BUSINESS AGENT",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
  },
];

export default function Team() {
  return (
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
            Meet the <span className="text-[#0866ff]">Team</span>
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

        {/* All Team Members Button */}
        <div className="text-center mt-12">
          <a
            href="/team"
            className="inline-block bg-[#0866ff] text-white text-sm px-8 py-3 rounded font-semibold hover:bg-[#0654d4] transition-all hover:scale-105 uppercase"
          >
            All Team Members
          </a>
        </div>
      </div>
    </section>
  );
}
