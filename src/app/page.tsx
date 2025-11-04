import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1525]">
      <Header />
      <Hero />
      <Services />
      <About />
      <Clients />
      <Projects />
    </div>
  );
}
