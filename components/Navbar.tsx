
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Technical', href: '#technical' },
    { name: 'Cultural', href: '#cultural' },
    { name: 'Workshops', href: '#workshops' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-2xl border-b border-white/10 py-4' : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 via-fuchsia-400 to-indigo-500 flex items-center justify-center text-white shadow-2xl group-hover:rotate-[15deg] transition-transform duration-500">
            <Rocket size={24} />
          </div>
          <span className="text-3xl font-display font-black tracking-tighter text-white">
            SYNERGIA<span className="text-fuchsia-400">25</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-xs uppercase tracking-[0.4em] font-black text-white/75 hover:text-white transition-all relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2.5px] bg-fuchsia-400 transition-all group-hover:w-full" />
            </a>
          ))}
          <button className="px-10 py-4 rounded-2xl bg-white text-slate-950 text-[12px] uppercase tracking-[0.3em] font-black hover:bg-fuchsia-500 hover:text-white transition-all shadow-xl active:scale-95">
            Register Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-3 rounded-2xl bg-white/10 border border-white/20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-slate-950/98 backdrop-blur-3xl z-[90] flex flex-col p-16 gap-10"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                 <X size={32} />
              </button>
            </div>
            {navItems.map((item, i) => (
              <motion.a 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={item.name} 
                href={item.href}
                className="text-6xl font-display font-black text-white hover:text-fuchsia-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full mt-auto px-10 py-8 rounded-[3rem] bg-gradient-to-r from-amber-400 to-fuchsia-500 text-white font-black text-3xl shadow-3xl"
            >
              Get Your Ticket
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
