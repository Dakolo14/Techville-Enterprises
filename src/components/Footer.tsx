import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a1525]">
      {/* CTA Banner */}
      <div className="bg-[#0866ff] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="text-white text-2xl md:text-3xl font-bold">
              Bringing New Ideas For Digital Agency.
            </h3>
            <button className="bg-white text-[#0866ff] text-sm px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-all hover:scale-105 uppercase whitespace-nowrap">
              Hire Us Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 border-b border-[#A7A7A7]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us */}
            <div>
              <div className="mb-6">
                <Link href="/" className="flex items-center gap-1.5">
                  <div className="relative">
                    <div className="w-8 h-8 bg-[#0866ff] rotate-45 flex items-center justify-center">
                      <span className="text-white font-bold text-base -rotate-45">
                        T
                      </span>
                    </div>
                  </div>
                  <span className="text-white text-xl font-bold tracking-wider">
                    ECHVILLE
                  </span>
                </Link>
              </div>

              {/* Decorative underline */}
              <div className="flex items-center gap-1 mb-4">
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-12 h-0.5 bg-[#0866ff]"></div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                Leo minim eros excepteur turpis curae do tempor dapibus
                repudiandae do dolores, c ras praesent, proidenquo suspend isse
                commodo.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">
                USEFUL LINKS
              </h4>

              {/* Decorative underline */}
              <div className="flex items-center gap-1 mb-6">
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-12 h-0.5 bg-[#0866ff]"></div>
              </div>

              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#0866ff] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#0866ff]">—</span>
                    Customers Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#0866ff] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#0866ff]">—</span>
                    Department Doctor
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#0866ff] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#0866ff]">—</span>
                    About Our Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 text-sm hover:text-[#0866ff] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#0866ff]">—</span>
                    Medical Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">QUICK LINKS</h4>

              {/* Decorative underline */}
              <div className="flex items-center gap-1 mb-6">
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-12 h-0.5 bg-[#0866ff]"></div>
              </div>

              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 text-sm hover:text-[#0866ff] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#0866ff]">—</span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-400 text-sm hover:text-[#0866ff] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#0866ff]">—</span>
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 text-sm hover:text-[#0866ff] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#0866ff]">—</span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 text-sm hover:text-[#0866ff] transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#0866ff]">—</span>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-white text-lg font-bold mb-4">CONTACT US</h4>

              {/* Decorative underline */}
              <div className="flex items-center gap-1 mb-6">
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-1 h-1 bg-[#0866ff] rounded-full"></div>
                <div className="w-12 h-0.5 bg-[#0866ff]"></div>
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Feel free to contact us & reach us now!
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[#0866ff] text-sm mt-1 shrink-0" />
                  <span className="text-gray-400 text-sm">
                    3rd Street, San Francisco
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaPhoneAlt className="text-[#0866ff] text-sm mt-1 shrink-0" />
                  <span className="text-gray-400 text-sm">
                    +1 (088) 456 888 (24/7)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaEnvelope className="text-[#0866ff] text-sm mt-1 shrink-0" />
                  <span className="text-gray-400 text-sm">
                    techvilleenterprises@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © Copyright Techville Enterprises. All right reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all group"
              >
                <FaFacebookF className="text-gray-400 text-sm group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all group"
              >
                <FaTwitter className="text-gray-400 text-sm group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all group"
              >
                <FaInstagram className="text-gray-400 text-sm group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all group"
              >
                <FaPinterestP className="text-gray-400 text-sm group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#0866ff] hover:border-[#0866ff] transition-all group"
              >
                <FaWhatsapp className="text-gray-400 text-sm group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Footer Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#0866ff] transition-colors"
              >
                Support
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#0866ff] transition-colors"
              >
                Disclaimer
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#0866ff] transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
