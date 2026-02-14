
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
      <div className="sticky top-0 h-screen w-full flex flex-col items-start justify-start pt-[200px] overflow-hidden bg-slate-950">
        
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
            {/* Main Typography Grid */}
            <div className="pt-2 sm:pt-4 md:pt-6 lg:pt-8 grid grid-cols-[repeat(36,minmax(0,1fr))] gap-[1px] md:gap-[2px] lg:gap-[3px] mx-auto pointer-events-auto max-w-[90vw]">
              {renderedTiles}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
      </div>
    </section>
  );
};

export default HeroMosaic;
