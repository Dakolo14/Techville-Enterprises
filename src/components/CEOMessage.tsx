export default function CEOMessage() {
  return (
    <section className="relative py-20 bg-[#0a1525] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#0866ff] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#0866ff] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CEO Image */}
          <div className="relative">
            <div className="relative">
              {/* Main CEO Image */}
              <div
                className="w-full h-[500px] bg-cover bg-center rounded-lg relative overflow-hidden"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600')",
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1525] via-transparent to-transparent"></div>

                {/* CEO Name Badge at Bottom */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-[#0866ff]/90 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-white text-2xl font-bold">
                      [Your Name]
                    </h3>
                    <p className="text-white/90 text-sm">
                      Chief Executive Officer
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Quote Icon */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#0866ff] rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-5xl font-serif">"</span>
              </div>
            </div>
          </div>

          {/* Right Side - Message Content */}
          <div className="space-y-6">
            {/* Section Label */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
              </div>
              <div className="w-12 h-0.5 bg-[#0866ff]"></div>
              <span className="text-[#0866ff] text-sm font-semibold uppercase tracking-wider">
                Message From the CEO
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Eliminating Instability,
              <br />
              Delivering <span className="text-[#0866ff]">Certainty</span>
            </h2>

            {/* CEO Message */}
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                "At Techville Enterprise, we address the single greatest barrier
                to digital efficiency in Nigeria:{" "}
                <span className="text-white font-semibold">instability</span>.
                Whether it is power, systems reliability, or operational
                consistency, we build solutions that eliminate downtime
                entirely.
              </p>

              <p>
                We don't just deliver devices or power systems—we deliver{" "}
                <span className="text-white font-semibold">
                  operational certainty
                </span>
                .
              </p>

              <p>
                Our mission is simple: ensure that every institution we support
                operates without interruption. When uptime is guaranteed,
                productivity becomes inevitable."
              </p>
            </div>

            {/* Signature */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-white font-bold text-lg">[Your Name]</div>
              <div className="text-gray-400 text-sm">
                Chief Executive Officer, Techville Enterprise
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
