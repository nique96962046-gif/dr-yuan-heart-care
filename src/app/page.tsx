import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Videos from "@/components/Videos";
import HealthTips from "@/components/HealthTips";
import Charity from "@/components/Charity";
import CPR from "@/components/CPR";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Videos />
      <HealthTips />
      <Charity />
      <CPR />
      <Contact />
      <Footer />
    </>
  );
}
