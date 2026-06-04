import Hero from "./NewComponents/HomePage/Hero";
import WorkforceServices from "./NewComponents/HomePage/Services";
import TrustedSection from "./NewComponents/HomePage/TrustedSection";
import ClientMarquee from "./NewComponents/HomePage/Marquee";
// import AboutStats from "./NewComponents/HomePage/SourceAndDeploy";
import ImpactSection from "./NewComponents/HomePage/Impactsection";
// import Testimonials from "./NewComponents/HomePage/Testimonials";
import FAQ from "./NewComponents/HomePage/FAQ";
// import DualFeatureCarousel from "./NewComponents/HomePage/DualFeatureCarousel";
import SourceAndDeploy from "./NewComponents/HomePage/SourceAndDeploy";
import { WorkforceFeature } from "./NewComponents/HomePage/WorkforceFeature";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkforceServices />
      {/* Want new Section Here */}
      {/* <TrustedSection /> */}
      <ClientMarquee />
      <SourceAndDeploy />
      <ImpactSection/>
      <WorkforceFeature/>
      {/* <DualFeatureCarousel/> */}
      <TrustedSection />
      {/* <Testimonials /> */}
      <FAQ />
    </>
  );
};
