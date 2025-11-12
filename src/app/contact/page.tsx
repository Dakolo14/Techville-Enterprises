"use client";

import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    id: 1,
    question: "How we are best among others?",
    answer:
      "Natoque consequat sodales autem nihil nec. Fusce molestias? Reiciendis volupta, harum officia ante aliquot blandita scelerisque donec illo aperiam commodi hymenaeos.",
  },
  {
    id: 2,
    question: "What are the best plans we used?",
    answer:
      "Natoque consequat sodales autem nihil nec. Fusce molestias? Reiciendis volupta, harum officia ante aliquot blandita scelerisque donec illo aperiam commodi hymenaeos.",
  },
  {
    id: 3,
    question: "How we are affordable than others?",
    answer:
      "Natoque consequat sodales autem nihil nec. Fusce molestias? Reiciendis volupta, harum officia ante aliquot blandita scelerisque donec illo aperiam commodi hymenaeos.",
  },
  {
    id: 4,
    question: "Where should I incorporate my business?",
    answer:
      "Natoque consequat sodales autem nihil nec. Fusce molestias? Reiciendis volupta, harum officia ante aliquot blandita scelerisque donec illo aperiam commodi hymenaeos.",
  },
  {
    id: 5,
    question: "What about our safety measures?",
    answer:
      "Natoque consequat sodales autem nihil nec. Fusce molestias? Reiciendis volupta, harum officia ante aliquot blandita scelerisque donec illo aperiam commodi hymenaeos.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden">
          {/* Top Section with Parallax Background */}
          <div className="relative py-20 pt-32 lg:pt-40">
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
              {/* Top Section - Heading and CTA */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Digital Marketing Solutions allows
                  <br />
                  your Business to Increase
                  <br />
                  <span className="text-[#0866ff]">Productivity!</span>
                </h2>

                {/* Decorative underline */}
                <div className="flex items-center justify-center gap-1 mb-8">
                  <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                  <div className="w-12 h-0.5 bg-[#0866ff]"></div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="bg-[#0866ff] text-white text-sm px-8 py-3 rounded font-semibold hover:bg-[#0654d4] transition-all hover:scale-105 uppercase">
                    Learn More
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#0866ff] transition-colors duration-300 group">
                      <FiPhone className="text-[#0866ff] group-hover:text-white text-xl transition-colors duration-300" />
                    </div>
                    <div className="text-left">
                      <p className="text-gray-400 text-xs uppercase tracking-wider">
                        Call for free consultation
                      </p>
                      <p className="text-white text-lg font-bold">
                        (+022)-908-876-223
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Section with Solid Background */}
          <div className="bg-[#0a1525] py-16">
            <div className="container mx-auto px-4">
              {/* Main Content - FAQ and Contact Form */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {/* Left Column - FAQ Accordion */}
                <div>
                  {/* FAQ Header Box */}
                  <div className="bg-[#0866ff] rounded-lg p-8 mb-6">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                      Clients Frequently
                      <br />
                      Asked Questions !
                    </h3>
                    {/* Decorative underline */}
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-12 h-0.5 bg-white"></div>
                    </div>
                  </div>

                  {/* FAQ Items */}
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div
                        key={faq.id}
                        className="bg-[#1a2332] rounded-lg overflow-hidden border border-[#A7A7A7]/20"
                      >
                        <button
                          onClick={() =>
                            setOpenFaq(openFaq === faq.id ? 0 : faq.id)
                          }
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-[#1a2332]/80 transition-colors"
                        >
                          <span
                            className={`font-medium ${
                              openFaq === faq.id
                                ? "text-[#0866ff]"
                                : "text-gray-300"
                            }`}
                          >
                            {faq.question}
                          </span>
                          <span
                            className={`text-2xl font-light ${
                              openFaq === faq.id
                                ? "text-[#0866ff]"
                                : "text-gray-400"
                            }`}
                          >
                            {openFaq === faq.id ? "−" : "+"}
                          </span>
                        </button>

                        {openFaq === faq.id && (
                          <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#A7A7A7]/10 pt-4">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="bg-[#1a2332] rounded-lg p-8 border border-[#A7A7A7]/20">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                    Looking For Best Digital
                    <br />
                    Marketing, Contact Us !
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    Turpis reprehenderit, tristique consectetuer varius tellus
                    habitasse et temporibus fringilla ratione senean.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name..."
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#0a1525] border border-[#A7A7A7]/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0866ff] transition-colors"
                      required
                    />

                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#0a1525] border border-[#A7A7A7]/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0866ff] transition-colors"
                      required
                    />

                    <textarea
                      placeholder="Enter Your Message..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      className="w-full bg-[#0a1525] border border-[#A7A7A7]/20 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0866ff] transition-colors resize-none"
                      required
                    ></textarea>

                    <button
                      type="submit"
                      className="bg-[#0866ff] text-white text-sm px-8 py-3 rounded font-semibold hover:bg-[#0654d4] transition-all hover:scale-105 uppercase"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
