import Link from 'next/link';
import { ArrowUpRight, MenuIcon } from 'lucide-react';


const Navbar = () => {

  return (
    <nav className="relative flex items-center justify-between lg:px-20 px-6 py-6 w-full">
      <div className="flex flex-col">
        <a href="#" className="flex items-center gap-3 text-white">
          <div className="w-[30px] h-[30px]">
            <svg viewBox="0 0 30 30" className="w-full h-full stroke-white fill-none" style={{ strokeWidth: 1.4 }}>
              <circle cx="15" cy="15" r="3" fill="white" stroke="none" />
              <line x1="15" y1="15" x2="2" y2="15" /><line x1="15" y1="15" x2="28" y2="15" />
              <line x1="15" y1="15" x2="15" y2="2" /><line x1="15" y1="15" x2="15" y2="28" />
              <line x1="15" y1="15" x2="5" y2="5" /><line x1="15" y1="15" x2="25" y2="25" />
            </svg>
          </div>
          <span className="font-bold text-[22px] leading-none tracking-wide">
            Omni <em className="italic font-normal text-gray-400">Source</em>
          </span>
        </a>
      </div>

      {/* Navigation Pill */}
      <div className="hidden md:flex items-center border border-zinc-600 rounded-full px-8 py-2 gap-8 bg-zinc-900/40 backdrop-blur-md">
        <Link href="/" className="text-red-500 font-medium">Home</Link>
        <Link href="/about" className="text-white hover:text-gray-300 transition">About us</Link>
        <Link href="/career" className="text-white hover:text-gray-300 transition">Career</Link>
        <Link href="/blog" className="text-white hover:text-gray-300 transition">Blog</Link>
        <Link href="/contact" className="text-white hover:text-gray-300 transition">Contact Us</Link>
      </div>

      {/* Contact Button */}
      <Link href="/contact" className="hidden lg:flex items-center gap-2 bg-zinc-800 border border-zinc-700 px-5 py-2.5 rounded-md text-white hover:bg-zinc-700 transition">
        <span className="text-sm font-medium">Contact Us</span>
        <ArrowUpRight size={16} />
      </Link>
      <div className="lg:hidden">
        <MenuIcon className='text-white' size={34} />
      </div>
    </nav>
  );
};

export default Navbar;