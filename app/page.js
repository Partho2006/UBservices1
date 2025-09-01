import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      
    </div>
  );
}