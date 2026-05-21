"use client"
import Link from 'next/link';
import { ArrowUpRight, MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';


const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // If the page is scrolled down more than 20 pixels, set isScrolled to true
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Check if window is defined (prevents SSR/Next.js crashes)
    if (typeof window === 'undefined') return;
    // 1024px matches Tailwind's 'lg' breakpoint. Change to 768px for 'md' if preferred.
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    // Set initial value
    setIsDesktop(mediaQuery.matches);
    // Listen for window resizing
    const handler = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handler);
    // Clean up listener on component unmount
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[100] flex items-center justify-between lg:px-24 px-4 lg:py-4 py-4 w-full transition-colors duration-300 ${isScrolled ? "bg-skin-primary shadow-md" : "bg-transparent"}`}>

      {/* Brand Logo Container */}
      <div className="flex items-center">
        <Link
          href="/"
          className="flex items-center justify-start"
        >
          {/* Desktop Logo */}
          <Image
            src="/assets/icons/OmniSource-White.png"
            alt="OmniSource Logo"
            width={2048}
            height={354}
            priority
            className="hidden lg:block h-8 w-auto"
          />

          {/* Mobile Logo */}
          <Image
            src={
              isScrolled
                ? "/assets/icons/OmniSource-White.png"
                : "/assets/icons/OmniSource-black.png"
            }
            alt="OmniSource Logo"
            width={2048}
            height={354}
            priority
            className="block lg:hidden h-8 w-auto"
          />
        </Link>
      </div>

      {/* Navigation Pill Container */}
      <div className="hidden md:flex items-center rounded-full px-6 py-2.5 gap-6 bg-skin-light backdrop-blur-md">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-md font-semibold transition-colors duration-300 font- ${isActive ? 'text-skin-logo' : 'text-skin-primary hover:text-skin-logo'
                }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Corporate Action Button */}
      <Link
        href="/contact"
        className="hidden lg:flex items-center gap-2 bg-skin-logo hover:bg-[#0c4ecf] px-6 py-2.5 rounded-md text-skin-light transition font-medium text-md shadow-lg shadow-glow/20"
      >
        <span>Contact Us</span>
        <ArrowUpRight size={16} />
      </Link>

      <div className="lg:hidden cursor-pointer">
        <MenuIcon className={`${isScrolled ? "text-skin-light" : "text-skin-dark"}`} size={28} />
      </div>
    </nav>
  );
};

export default Navbar;