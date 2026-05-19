"use client"
import Link from 'next/link';
import { ArrowUpRight, MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';


const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/#faq" },

    { name: "Contact Us", href: "/contact" },
  ];

  return (
      <nav className="relative top-0 left-0 right-0 z-50 flex items-center justify-between lg:px-20 px-6 py-6 w-full bg-transparent">

        {/* Brand Logo Container */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 text-white group">
            {/* Custom OmniSource 'S' Logo Glyph Graphic */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#0f5cf2]" style={{ strokeWidth: 16, strokeLinecap: 'round' }}>
                <path d="M 65,25 A 25,25 0 0,0 25,50 A 25,25 0 0,1 75,50 A 25,25 0 0,0 35,75" />
              </svg>
            </div>
            <span className="font-bold text-[24px] tracking-tight text-white">
              Omni<span className="text-[#0f5cf2]">Source</span>
            </span>
          </Link>
        </div>

        {/* Navigation Pill Container */}
        <div className="hidden md:flex items-center border border-white rounded-full px-6 py-2 gap-6 bg-black/20 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-wider transition-colors duration-300 font-semibold ${isActive ? 'text-[#0f84f2]' : 'text-gray-200 hover:text-white'
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
          className="hidden lg:flex items-center gap-2 bg-[#0f5cf2] hover:bg-[#0c4ecf] px-6 py-2.5 rounded-md text-white transition font-medium text-sm shadow-lg shadow-[#0f5cf2]/20"
        >
          <span>Contact Us</span>
          <ArrowUpRight size={16} />
        </Link>

        <div className="lg:hidden cursor-pointer">
          <MenuIcon className="text-white" size={30} />
        </div>
      </nav>
  );
};

export default Navbar;