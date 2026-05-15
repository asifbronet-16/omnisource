import { Geist, Geist_Mono, Fraunces, Manrope, JetBrains_Mono, Public_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Omni Source",
  description: "Your Trusted Manpower Supplier in UAE. Quick, Quality Labor Solutions for All Industries.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${manrope.variable} ${jetbrains.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
