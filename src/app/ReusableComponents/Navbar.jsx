"use client"
import Link from 'next/link';
import { ArrowUpRight, MenuIcon, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';


const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[100] flex items-center justify-between lg:px-24 sm:px-4 px-2 lg:py-4 py-4 w-full transition-colors duration-300 ${isScrolled ? "bg-skin-primary shadow-md" : "bg-transparent"}`}>

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
            className="hidden lg:block lg:h-12 lg:w-64 w-auto h-10"
          />

          {/* Mobile Logo */}
          <Image
            src={
              isScrolled
                ? "/assets/icons/OmniSource-White.png"
                : "/assets/icons/OmniSource-Black.png"
            }
            alt="OmniSource Logo"
            width={2048}
            height={354}
            priority
            className="block lg:hidden lg:h-12 lg:w-64 w-auto h-10"
          />
        </Link>
      </div>

      {/* Navigation Pill Container */}
      <div className="hidden lg:flex items-center rounded-full px-6 py-2.5 gap-6 bg-skin-light backdrop-blur-md">
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
        className="hidden lg:flex items-center gap-2 bg-skin-logo hover:bg-skin-logoHover px-6 py-2.5 rounded-md text-skin-light transition font-medium text-md shadow-lg shadow-glow/20"
      >
        <span>Contact Us</span>
        <ArrowUpRight size={16} />
      </Link>

      <div
        className="lg:hidden cursor-pointer p-1"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon className={`${isScrolled ? "text-skin-light" : "text-skin-dark"}`} size={28} />
      </div>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[150] transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />
      {/* Slide-out Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-skin-primary shadow-2xl z-[200] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col p-6 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 rounded-full hover:bg-skin-backgroundHighlight text-skin-light transition absolute top-4 right-4"
        >
          <X size={24} />
        </button>
        {/* Top bar inside the drawer containing logo alignment / exit button */}
        <div className="flex items-center justify-between mb-8 mt-10">
          <Image
            src={"/assets/icons/OmniSource-White.png"}
            alt="OmniSource Logo"
            width={2048}
            height={354}
            priority
            className="block lg:hidden h-12 w-auto"
          />

        </div>

        {/* Mobile Navigation Links List */}
        {/* Mobile Navigation Links List */}
        <div className="flex flex-col gap-4 flex-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`group w-fit  relative tracking-wide text-lg font-semibold transition-colors duration-300 py-2 ${isActive ? 'text-skin-light' : 'text-skin-light hover:text-skin-logo'
                  }`}
              >
                {link.name}

                {/* Animated Underline Span */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px]  transition-all duration-300 ease-out-expo ${isActive
                      ? 'w-full bg-skin-light' // Full width if active
                      : 'w-0 group-hover:w-full bg-skin-logo' // Starts at 0, grows to 100% on hover
                    }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer Call To Action Block */}
        <div className="mt-auto border-t border-skin-badgeBorder pt-4">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="gap-2 flex items-center justify-center bg-skin-logo hover:bg-skin-logoHover px-6 py-2.5 rounded-md text-skin-light transition font-medium text-md shadow-lg shadow-glow"
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;