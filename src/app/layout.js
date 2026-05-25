import { Geist, Geist_Mono, Fraunces, Manrope, JetBrains_Mono, Public_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./ReusableComponents/ScrollToTop";
import Footer from "./ReusableComponents/Footer";
import ScrollOnNavigation from "./ReusableComponents/ScrollOnNavigation";
import WhatsAppButton from "./ReusableComponents/WhatsAppButton";

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--display',
  display: 'swap',
  // Ye line add karo taaki optical sizing (opsz) enable ho sake
  axes: ['opsz'], 
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--sans',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--mono',
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-public-sans', // Define CSS variable
});

export const metadata = {
  title: "OmniSource Workforce Solutions",
  description: "One Source Every Trade",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${publicSans.variable} ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${manrope.variable} ${jetbrains.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col relative">
        <ScrollOnNavigation />
        {children}
        <Footer/>
        <ScrollToTop />
        <WhatsAppButton/>
      </body>
    </html>
  );
}
