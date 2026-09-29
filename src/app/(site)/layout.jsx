import ScrollToTop from "../ReusableComponents/ScrollToTop";
import Footer from "../ReusableComponents/Footer";
import ScrollOnNavigation from "../ReusableComponents/ScrollOnNavigation";
import WhatsAppButton from "../ReusableComponents/WhatsAppButton";

// Chrome shared by the marketing site. The team cards under /teams sit outside
// this group so they render full-screen with no footer or floating buttons.
export default function SiteLayout({ children }) {
  return (
    <>
      <ScrollOnNavigation />
      {children}
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
