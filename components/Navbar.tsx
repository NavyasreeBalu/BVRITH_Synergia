
import React, { useState, useEffect } from 'react';
import collegeLogo from '../assets/Logos/college_logo.png';
import sacLogo from '../assets/Logos/sac_logo.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Contacts', href: '#contact' },
    { name: 'Technical', href: '#technical' },
    { name: 'Cultural', href: '#cultural' },
    { name: 'Workshops', href: '#workshops' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0b0616]/90 backdrop-blur-2xl border-b border-white/10 py-3 sm:py-4'
          : 'bg-transparent py-5 sm:py-8'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none opacity-80">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,0,122,0.18),transparent_55%)]" />
        <div className="h-full w-full bg-[radial-gradient(circle,rgba(255,0,122,0.16)_1px,transparent_1px)] [background-size:10px_10px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        <div className="hidden md:flex items-center justify-between">
          <img
            src={collegeLogo}
            alt="BVRIT Hyderabad"
            className="h-[96px] lg:h-[120px] w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]"
            loading="eager"
            decoding="async"
          />
          <div className="flex items-center justify-center gap-6 lg:gap-10">
            {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="text-[16px] lg:text-[18px] uppercase tracking-[0.18em] lg:tracking-[0.2em] font-pixel text-[#ff3aa7] hover:text-white focus:text-white focus:outline-none transition-colors relative"
                >
                  {item.name}
                </a>
            ))}
          </div>
          <img
            src={sacLogo}
            alt="SAC"
            className="h-[96px] lg:h-[120px] w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="md:hidden flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-2">
          <img
            src={collegeLogo}
            alt="BVRIT Hyderabad"
            className="h-12 w-auto object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.3)]"
            loading="eager"
            decoding="async"
          />
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[10px] xs:text-[11px] uppercase tracking-[0.12em] font-pixel text-[#ff3aa7] hover:text-white focus:text-white focus:outline-none transition-colors whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
          <img
            src={sacLogo}
            alt="SAC"
            className="h-12 w-auto object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.3)]"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
