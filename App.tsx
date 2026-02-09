
import React from 'react';
import HeroMosaic from './components/HeroMosaic';
import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const portalY = useTransform(scrollYProgress, [0.15, 0.45], [800, 0]);
  const portalScale = useTransform(scrollYProgress, [0.15, 0.45], [0.85, 1]);
  
  const realmBg = useTransform(
    scrollYProgress, 
    [0.4, 0.6, 0.8, 1], 
    ["#1e1b4b", "#312e81", "#701a75", "#020617"] // Adjusted for slightly higher luminance in transition phases
  );

  return (
    <div className="min-h-screen selection:bg-fuchsia-500/40 relative">
      <Navbar />
      
      <main className="relative">
        <div className="relative z-10">
          <HeroMosaic />
        </div>
        
        <motion.div 
          style={{ 
            y: portalY, 
            scale: portalScale, 
            backgroundColor: realmBg
          }}
          className="relative z-20 rounded-t-[3rem] md:rounded-t-[8rem] shadow-[0_-30px_100px_rgba(0,0,0,0.85)] transition-colors duration-1000 overflow-hidden"
        >
          {/* Chromatic Edge Reveal */}
          <div className="absolute top-0 inset-x-0 h-1 md:h-1.5 bg-gradient-to-r from-amber-400 via-fuchsia-500 to-indigo-500" />
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-48 relative">
            {/* Massive Kinetic Typography Background - Slightly more opaque for visibility */}
            <motion.div 
              style={{ x: useTransform(scrollYProgress, [0.4, 1], [100, -800]) }}
              className="absolute top-20 md:top-40 left-0 text-[35vw] md:text-[25vw] font-black text-white/[0.08] whitespace-nowrap pointer-events-none select-none italic tracking-tighter"
            >
              SYNERGY INNOVATION FUTURE
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 text-center"
            >
              <div className="inline-flex items-center gap-2 md:gap-4 px-6 md:px-10 py-3 md:py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl mb-10 md:mb-16">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="w-2 h-2 rounded-full bg-fuchsia-400" />
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                </div>
                <span className="text-white text-[10px] md:text-[12px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase whitespace-nowrap">BVRIT Hyderabad presents</span>
              </div>

              <h2 className="text-5xl sm:text-7xl md:text-[12rem] font-display font-black text-white mb-10 md:mb-20 tracking-tighter leading-[0.85] md:leading-[0.75]">
                SYNERGIA <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-fuchsia-400 to-indigo-400">2K26.</span>
              </h2>
              
              <p className="text-white/90 max-w-4xl mx-auto text-lg md:text-3xl leading-relaxed font-light mb-24 md:mb-48 px-4">
                A three-day convergence of innovation, technology, and culture at BVRIT Hyderabad College of Engineering for Women. April 2-4, 2026.
              </p>
            </motion.div>

            <BentoGrid />
          </div>

          <section className="max-w-7xl mx-auto px-4 md:px-6 py-32 md:py-60">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative rounded-[2.5rem] md:rounded-[5rem] overflow-hidden bg-white/[0.03] border border-white/20 p-10 md:p-48 text-center backdrop-blur-3xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,70,239,0.12),transparent_70%)] transition-colors duration-1000" />
              
              <div className="relative z-10">
                <h3 className="text-5xl md:text-[8rem] font-display font-black text-white mb-10 md:mb-12 tracking-tighter leading-none">
                  READY TO <br/><span className="text-fuchsia-400 italic">SHINE?</span>
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                  <button className="group relative w-full md:w-auto px-12 md:px-20 py-6 md:py-8 rounded-2xl md:rounded-[2rem] bg-white text-slate-950 font-black text-xl md:text-2xl overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95">
                    <span className="relative z-10">REGISTER NOW</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-fuchsia-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                  <button className="w-full md:w-auto px-12 md:px-20 py-6 md:py-8 rounded-2xl md:rounded-[2rem] border-2 md:border-4 border-white/30 text-white font-black text-xl md:text-2xl hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                    EVENT GUIDE
                  </button>
                </div>
              </div>
            </motion.div>
          </section>

          <Contact />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
