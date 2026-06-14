import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Videos from "@/components/Videos";
import HealthTips from "@/components/HealthTips";
import CPR from "@/components/CPR";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Videos />
      <HealthTips />
      <CPR />
      <Footer />
    </>
  );
}
