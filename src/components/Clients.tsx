"use client";

export default function Clients() {
  const partners = [
    { name: "Partner 1", logo: "PARTNER" },
    { name: "Partner 2", logo: "PARTNER" },
    { name: "Partner 3", logo: "PARTNER" },
    { name: "Partner 4", logo: "PARTNER" },
    { name: "Partner 5", logo: "PARTNER" },
    { name: "Partner 6", logo: "PARTNER" },
  ];

  return (
    <section className="relative py-20 bg-[#0a1525] overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#0a1525]/90"></div>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Our <span className="text-[#0866ff]">Partners</span>
              </h2>
              {/* Decorative underline */}
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-12 h-0.5 bg-[#0866ff]"></div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              We collaborate with leading technology providers and manufacturers
              to deliver premium ICT equipment and solar power solutions to
              institutions across Nigeria.
            </p>

            <button className="bg-[#0866ff] text-white text-sm px-8 py-3 rounded font-semibold hover:bg-[#0654d4] transition-all hover:scale-105 uppercase">
              Become a Partner
            </button>
          </div>

          {/* Right Side - Partner Logos Grid */}
          <div className="grid grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="relative rounded-[10px] border border-[#A7A7A7]/24 p-6 transition-all duration-300 overflow-hidden bg-transparent flex items-center justify-center min-h-[120px] group"
                style={{
                  transition:
                    "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Background overlay with gradient */}
                <div
                  className="absolute inset-0 rounded-[10px] opacity-15 pointer-events-none transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(2, 1, 1, 0) 50%, #0866ff 100%)",
                  }}
                ></div>

                <div className="text-center relative z-10">
                  <p className="text-white/50 text-xs font-semibold">
                    PARTNER LOGO
                  </p>
                  <p className="text-white/30 text-[10px] mt-1">{index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
