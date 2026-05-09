import CTASection from "./components/CallToAction";
import CoverageSection from "./components/Coverage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowSection from "./components/How";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import StandardsSection from "./components/Standard";
import TradesSection from "./components/Trades";
import TrustStrip from "./components/TrustStrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <TradesSection />
      <HowSection />
      <CoverageSection />
      <StandardsSection />
      <CTASection />
      <Footer />
    </>
  );
};
