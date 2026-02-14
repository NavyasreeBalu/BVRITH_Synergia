
import React, { useMemo, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { SYNERGIA_GRID } from '../constants';
import festLogo from '../assets/Logos/fest_logo.png';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';

const HeroMosaic: React.FC = () => {
  const [phase, setPhase] = useState<'dump' | 'collecting' | 'formed'>('dump');
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
  
  const gridScale = useTransform(smoothScroll, [0, 0.15], [1, isMobile ? 4 : 4.5]);
  const gridRotateX = useTransform(smoothScroll, [0, 0.12], [0, 15]);
  const gridOpacity = useTransform(smoothScroll, [0.05, 0.2], [1, 0]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const dumpTimer = setTimeout(() => setPhase('collecting'), 800);
    const formTimer = setTimeout(() => setPhase('formed'), 2400);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(dumpTimer);
      clearTimeout(formTimer);
    };
  }, []);

  const tiles = useMemo(() => {
    const activeCells: { r: number; c: number; id: number; colorIndex: number }[] = [];
    SYNERGIA_GRID.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === 1) {
          activeCells.push({ 
            r: rowIndex, 
            c: colIndex, 
            id: rowIndex * 100 + colIndex,
            colorIndex: (rowIndex + colIndex) % 6
          });
        }
      });
    });

    const vibrantColors = [
      'rgba(245, 158, 11, 0.4)',  // Amber
      'rgba(217, 70, 239, 0.4)',  // Pink
      'rgba(16, 185, 129, 0.4)',  // Emerald
      'rgba(6, 182, 212, 0.4)',   // Cyan
      'rgba(139, 92, 246, 0.4)',  // Violet
      'rgba(244, 63, 94, 0.4)',   // Rose
    ];

    return activeCells.map((cell, index) => {
      const centerX = 17;
      const centerY = 2;
      const diffX = cell.c - centerX;
      const diffY = cell.r - centerY;
      
      const scatterFactor = isMobile ? 250 : 400;
      const scatterX = diffX * scatterFactor + (Math.random() - 0.5) * (isMobile ? 500 : 1000);
      const scatterY = diffY * scatterFactor + (Math.random() - 0.5) * (isMobile ? 500 : 1000);

      return {
        cell,
        index,
        scatterX,
        scatterY,
        vibrantColors
      };
    });
  }, [isMobile]);

  const renderedTiles = tiles.map(({ cell, index, scatterX, scatterY, vibrantColors }) => (
    <motion.div
      key={cell.id}
      initial={{ scale: 0, opacity: 0, rotate: (Math.random() - 0.5) * 360 }}
      animate={
        phase === 'dump' ? { 
          scale: 0.4 + Math.random() * 0.6, 
          opacity: 0.6, 
          x: (Math.random() - 0.5) * (isMobile ? 800 : 1500), 
          y: (Math.random() - 0.5) * (isMobile ? 800 : 1500),
          rotate: (Math.random() - 0.5) * 180
        } :
        phase === 'collecting' ? { scale: 1.05, opacity: 1, x: 0, y: 0, rotate: 0 } :
        { scale: 1, opacity: 1, x: 0, y: 0, rotate: 0 }
      }
      whileHover={phase === 'formed' ? { 
        scale: isMobile ? 1 : 3.5, 
        zIndex: 100,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      } : {}}
      whileTap={phase === 'formed' ? {
        scale: 2.5,
        zIndex: 100,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      } : {}}
      transition={{
        type: 'spring',
        stiffness: isMobile ? 60 : 45,
        damping: 15,
        delay: phase === 'formed' ? index * 0.0015 : 0
      }}
      style={{
        gridRow: cell.r + 1,
        gridColumn: cell.c + 1,
        x: useTransform(smoothScroll, [0, 0.15], [0, scatterX]),
        y: useTransform(smoothScroll, [0, 0.15], [0, scatterY]),
        zIndex: phase === 'formed' ? 10 : 1,
      }}
      className="relative aspect-square group/tile cursor-pointer"
    >
      <div className="w-full h-full overflow-hidden rounded-[1px] md:rounded-[4px] border border-white/20 relative shadow-2xl transition-all duration-300 group-hover/tile:border-white/50">
        <img 
          src={`https://picsum.photos/id/${(index % 100) + 10}/300/300`} 
          alt={`Synergia fest mosaic tile ${index + 1}`}
          className="w-full h-full object-cover grayscale-[0.2] group-hover/tile:grayscale-0 transition-all duration-500"
          loading="lazy"
          decoding="async"
        />
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 group-hover/tile:opacity-0 transition-opacity duration-300" 
          style={{ backgroundColor: vibrantColors[cell.colorIndex], mixBlendMode: 'overlay' }}
        />
      </div>
    </motion.div>
  ));

  return (
    <section className="relative h-[100vh] w-full">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Atmosphere */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ opacity: useTransform(smoothScroll, [0, 0.2], [0.4, 0]) }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03),transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:40px_40px]" />
          </motion.div>
        </div>

        {/* The Grid Title Container */}
        <motion.div 
          style={{ 
            scale: gridScale, 
            opacity: gridOpacity, 
            rotateX: gridRotateX,
            perspective: "1200px"
          }}
          className="relative z-10 w-full px-4 md:px-20 max-w-full"
        >
          <div className="relative">
            {/* Logos Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={phase === 'formed' ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute left-0 right-0 -top-[96px] sm:-top-[80px] md:-top-[64px] grid grid-cols-3 items-center gap-4 md:gap-8 pointer-events-none"
            >
            <div className="flex justify-center col-span-3">
              <img
                src={festLogo}
                alt="Synergia 2026"
                className="w-[260px] sm:w-[380px] md:w-[520px] lg:w-[640px] h-[60px] sm:h-[70px] md:h-[90px] lg:h-[110px] object-contain drop-shadow-[0_0_40px_rgba(255,58,167,0.6)]"
                loading="eager"
                decoding="async"
              />
            </div>
            </motion.div>

            {/* Main Typography Grid */}
            <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 grid grid-cols-[repeat(36,minmax(0,1fr))] gap-[1px] md:gap-[2px] lg:gap-[3px] mx-auto pointer-events-auto max-w-[90vw]">
              {renderedTiles}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(smoothScroll, [0, 0.05], [1, 0]) }}
          className="absolute bottom-12 md:bottom-16 flex flex-col items-center gap-4 md:gap-6 pointer-events-none"
        >
          <div className="px-5 md:px-8 py-2 md:py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3">
            <Zap className="w-3.5 h-3.5 md:w-5 h-5 text-amber-400" />
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-white">Scroll to Explore</span>
          </div>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
            <ChevronDown className="w-5 h-5 md:w-8 h-8 text-white/10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroMosaic;
