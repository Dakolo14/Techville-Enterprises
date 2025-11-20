import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CEOMessage from "@/components/CEOMessage";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1525]">
      <Header />
      <Hero />
      <Services />
      <About />
      <CEOMessage />
      <Clients />
      {/* <Projects /> */}
      <Contact />
      {/* <Pricing /> */}
      <Team />
      <Testimonials />
      <Blog />
      <Footer />
      <BackToTop />
    </div>
  );
}
