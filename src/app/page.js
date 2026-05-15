import Hero from "./NewComponents/Hero";
import WorkforceServices from "./NewComponents/Services";
import TrustedSection from "./NewComponents/TrustedSection";
import ClientMarquee from "./NewComponents/Marquee";
import AboutStats from "./NewComponents/About";
import ImpactSection from "./NewComponents/Impactsection";
import Testimonials from "./NewComponents/Testimonials";
import FAQ from "./NewComponents/FAQ";
import Footer from "./NewComponents/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkforceServices />
      <TrustedSection/>
      <ClientMarquee/>
      <AboutStats/>
      <ImpactSection/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </>
  );
};
