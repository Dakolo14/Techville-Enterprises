import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Head Administrator",
    organization: "Ivy Crest Academy",
    role: "EDUCATIONAL INSTITUTION",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200",
    rating: 5,
    text: '"Techville Enterprise transformed our ICT environment. Their solar-powered digital infrastructure finally ended the weekly disruptions we experienced due to power issues. For the first time, our operations run seamlessly, and our students have uninterrupted access to digital resources."',
  },
  {
    id: 2,
    name: "Chief Technology Manager",
    organization: "Rapid Logistics Nigeria",
    role: "LOGISTICS COMPANY",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    rating: 5,
    text: '"What impressed us most about Techville was their ability to deliver a complete solution. From supplying our new systems to deploying a long-term solar strategy, they handled everything. Their technical support team remains responsive and consistent."',
  },
  {
    id: 3,
    name: "Operations Director",
    organization: "GracePoint Community Centre",
    role: "COMMUNITY ORGANIZATION",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
    rating: 5,
    text: '"For our organization, reliability is non-negotiable. Techville provided end-to-end integration for our media center, offices, and administrative systems. Their seamless installation and stable power engineering have eliminated disruptions entirely."',
  },
];

export default function Testimonials() {
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
        {/* Top Section - Heading and Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          {/* Left - Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Client Testimonials:
              <br />
              <span className="text-[#0866ff]">
                Zero Downtime, Maximum Performance
              </span>
            </h2>

            {/* Decorative underline */}
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
              <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
              <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
              <div className="w-12 h-0.5 bg-[#0866ff]"></div>
            </div>
          </div>

          {/* Right - Button */}
          <button className="bg-[#0866ff] text-white text-sm px-8 py-3 rounded font-semibold hover:bg-[#0654d4] transition-all hover:scale-105 uppercase whitespace-nowrap">
            View All Reviews
          </button>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-[#0866ff]/20 to-[#0654d4]/10 rounded-lg p-8 relative border border-[#0866ff]/30"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} className="text-[#0866ff] text-lg" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white text-lg font-bold mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#0866ff] text-xs font-semibold mb-1">
                    {testimonial.organization}
                  </p>
                  <p className="text-gray-400 text-xs tracking-wider">
                    {testimonial.role}
                  </p>
                </div>

                {/* Profile Image */}
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-600 shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
