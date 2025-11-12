export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: "STANDARD",
      price: "239",
      features: [
        "Praesent aperiam quia pretium.",
        "Incidunt cum aut harum.",
        "Odit torquent aliquam dictum.",
        "Cras nemo nascetur risus.",
      ],
    },
    {
      id: 2,
      name: "PREMIUM",
      price: "450",
      features: [
        "Incidunt cum aut harum.",
        "Odit torquent aliquam dictum.",
        "Cras nemo nascetur risus.",
        "Mus, tenetur nonummy dictum.",
      ],
    },
  ];

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          {/* Left Column - Heading and Progress Bars */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Get Transparent
              <br />
              Plans & <span className="text-[#0866ff]">Pricing</span>
            </h2>

            {/* Decorative underline */}
            <div className="flex items-center gap-1 mb-6">
              <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
              <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
              <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
              <div className="w-12 h-0.5 bg-[#0866ff]"></div>
            </div>

            <p className="text-gray-400 text-base leading-relaxed mb-12">
              Integer tempore, diamlorem quasi pharetra mauris viverra ultrices?
              Ratione officia? Ligula ullamco est eget consectetur laboris,
              minus inventore.
            </p>

            {/* Progress Bars */}
            <div className="space-y-6">
              {/* Customer Satisfaction */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold text-sm">
                    Customer satisfaction
                  </span>
                  <span className="text-white font-bold text-sm">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#0866ff] h-full rounded-full transition-all duration-1000"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              {/* Business Skill */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold text-sm">
                    Business Skill
                  </span>
                  <span className="text-white font-bold text-sm">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#0866ff] h-full rounded-full transition-all duration-1000"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-[#1a2332] rounded-lg p-8 border border-[#A7A7A7]/20 hover:border-[#0866ff]/50 transition-all duration-300"
              >
                {/* Plan Badge */}
                <div className="inline-block border border-[#0866ff] rounded px-4 py-1 mb-6">
                  <span className="text-[#0866ff] text-xs font-semibold tracking-wider">
                    {plan.name}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-white text-5xl font-bold">
                    {plan.price}$
                  </span>
                  <span className="text-gray-400 text-lg">/mo</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-gray-400 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-[#0866ff] text-white text-sm py-3 rounded font-semibold hover:bg-[#0654d4] transition-all hover:scale-105 uppercase">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
