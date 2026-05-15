import Hero from "./NewComponents/HomePage/Hero";
import WorkforceServices from "./NewComponents/HomePage/Services";
import TrustedSection from "./NewComponents/HomePage/TrustedSection";
import ClientMarquee from "./NewComponents/HomePage/Marquee";
import AboutStats from "./NewComponents/HomePage/About";
import ImpactSection from "./NewComponents/HomePage/Impactsection";
import Testimonials from "./NewComponents/HomePage/Testimonials";
import FAQ from "./NewComponents/HomePage/FAQ";
import Footer from "./NewComponents/HomePage/Footer";
import DualFeatureCarousel from "./NewComponents/HomePage/DualFeatureCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkforceServices />
      <TrustedSection/>
      <ClientMarquee/>
      <AboutStats/>
      <ImpactSection/>
      <DualFeatureCarousel/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </>
  );
};
