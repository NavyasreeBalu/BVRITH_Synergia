
import React, { useMemo, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { SYNERGIA_GRID } from '../constants';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';

const HeroMosaic: React.FC = () => {
  const [phase, setPhase] = useState<'dump' | 'collecting' | 'formed'>('dump');
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
  
  const gridScale = useTransform(smoothScroll, [0, 0.15], [1, isMobile ? 6 : 4.5]);
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
        scale: isMobile ? 6 : 10, 
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
          {/* Main Typography Grid */}
          <div className="grid grid-cols-[repeat(35,minmax(0,1fr))] gap-[1px] md:gap-[3px] lg:gap-[4px] mx-auto pointer-events-auto">
            {renderedTiles}
          </div>
          
          {/* Subtext that appears after assembly */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={phase === 'formed' ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 md:mt-16 flex flex-col items-center gap-4 text-center pointer-events-none"
          >
            <h1 className="text-white font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-[8rem] tracking-[0.1em] md:tracking-[0.2em] relative inline-block px-4">
              <span className="relative z-10">SYNERGIA</span>
              <div className="absolute -inset-x-4 md:-inset-x-12 top-1/2 -translate-y-1/2 h-12 md:h-24 bg-fuchsia-500/10 blur-2xl -z-10 rounded-full" />
            </h1>
            
            <motion.div 
              animate={{ color: ["#fbbf24", "#f472b6", "#818cf8", "#34d399", "#fbbf24"] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="flex items-center gap-2 md:gap-4 text-[7px] sm:text-[9px] md:text-[12px] uppercase tracking-[0.3em] md:tracking-[0.8em] font-black"
            >
              <Sparkles className="w-2.5 h-2.5 md:w-4 h-4" />
              <span className="whitespace-nowrap">BVRIT HYDERABAD • 2026</span>
              <Sparkles className="w-2.5 h-2.5 md:w-4 h-4" />
            </motion.div>
          </motion.div>
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
