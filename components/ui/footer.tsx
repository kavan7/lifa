import Link from 'next/link';
import { Linkedin, Instagram, Twitter, Facebook } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-[#08101c] text-white overflow-hidden font-sans pt-20">
      
      {/* --- Decorative Background Elements (Arcs) --- */}
      {/* Left Arc */}
  
      
      {/* Right Arc */}


      {/* --- Main Content --- */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center pb-16">
        
        {/* Logo Section */}
        <div className="mb-6">
          {/* Replace this with your actual Image/Logo */}
          <div className="flex flex-col items-center">
             {/* Placeholder for the Lion Icon */}
            <span className="text-4xl mb-2"><Image src="/logo3.png" alt="Lion Icon" width={164} height={64} /></span> 
            <h2 className="text-sm font-serif tracking-widest ">Laurier Investment Finance Association</h2>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-serif  text-gray-200 mb-10">
          Exceptional ideas, practiced.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-xs md:text-sm tracking-[0.2em] text-gray-400 uppercase font-medium">
          <Link href="/programs" className="hover:text-white transition-colors">Programs</Link>
          <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          <Link href="/team" className="hover:text-white transition-colors">Team</Link>
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="relative z-10 border-t border-white/10 bg-[#060c15]/50">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
            
            {/* Left: Built By */}
            <div className="w-full md:w-1/3 text-center md:text-left">
              <span> </span>
              <Link href="#" className="underline hover:text-white transition-colors">
                
              </Link>
            </div>

            {/* Center: Address */}
            <div className="w-full md:w-1/3 text-center">
              <span className="font-bold tracking-widest uppercase mr-2 text-gray-500">On Campus</span>
              <span>64 University Ave W | LH1014</span>
            </div>

            {/* Right: Socials */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center gap-4">
              <span className="font-bold tracking-widest uppercase text-gray-500">Follow Us</span>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><Instagram size={18} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><Twitter size={18} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><Facebook size={18} /></Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;