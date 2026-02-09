
import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { FestEvent } from '../types';
import { Calendar, ArrowUpRight, Activity, Users } from 'lucide-react';
import EventModal from './EventModal';

interface EventCardProps {
  event: FestEvent;
}

const ROTATION_RANGE = 15;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 100, damping: 25 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 25 });

  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const themeColors: Record<string, { accent: string, text: string, glow: string }> = {
    cyan: { accent: 'bg-cyan-400', text: 'text-cyan-400', glow: 'rgba(34,211,238,0.4)' },
    pink: { accent: 'bg-fuchsia-400', text: 'text-fuchsia-400', glow: 'rgba(232,121,249,0.4)' },
    amber: { accent: 'bg-amber-400', text: 'text-amber-400', glow: 'rgba(251,191,36,0.4)' },
    emerald: { accent: 'bg-emerald-400', text: 'text-emerald-400', glow: 'rgba(52,211,153,0.4)' },
    orange: { accent: 'bg-orange-400', text: 'text-orange-400', glow: 'rgba(251,146,60,0.4)' },
    lime: { accent: 'bg-lime-400', text: 'text-lime-400', glow: 'rgba(163,230,53,0.4)' },
    violet: { accent: 'bg-violet-400', text: 'text-violet-400', glow: 'rgba(167,139,250,0.4)' },
    rose: { accent: 'bg-rose-400', text: 'text-rose-400', glow: 'rgba(251,113,133,0.4)' }
  };

  const currentTheme = themeColors[event.accentColor] || themeColors.cyan;

  return (
    <>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${event.title}`}
        style={{ transformStyle: "preserve-3d", transform }}
        className="relative w-full h-full group cursor-pointer focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-[2rem] md:rounded-[3.5rem]"
      >
      <div 
        className={`relative h-full flex flex-col bg-slate-900/60 backdrop-blur-3xl rounded-[2rem] md:rounded-[3.5rem] border border-white/10 overflow-hidden transition-all duration-700 group-hover:border-white/30 shadow-2xl`}
      >
        {/* Floating Category Badge */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20">
          <Activity size={10} className={`${currentTheme.text} animate-pulse`} />
          <span className="text-[10px] font-black uppercase tracking-[0.1em] text-white">{event.category}</span>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden relative">
          <motion.img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover group-hover:scale-110 md:group-hover:scale-125 transition-transform duration-1000"
            style={{ translateZ: "20px" }}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          
          <div className="absolute bottom-6 right-6 translate-z-40">
             <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.5rem] ${currentTheme.accent} flex items-center justify-center text-slate-950 rotate-[-8deg] group-hover:rotate-0 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}>
                <ArrowUpRight size={22} className="md:size-[28px]" />
             </div>
          </div>
        </div>

        <div className="p-8 md:p-12 flex flex-col flex-grow translate-z-30">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">{event.fee}</span>
            <div className={`h-1.5 flex-grow rounded-full ${currentTheme.accent} opacity-30`} />
          </div>

          <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-6 md:mb-8 leading-[0.9] tracking-tight transition-all">
            {event.title}
          </h3>
          
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 md:mb-12 font-medium">
            {event.description}
          </p>

          <div className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3 text-[11px] font-black text-white/70 tracking-[0.1em] uppercase">
              <Calendar className={`w-4 h-4 ${currentTheme.text}`} />
              {event.date}
            </div>
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?u=${event.id}-${i}`} alt="user" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[8px] font-black text-white">
                <Users size={10} />
              </div>
            </div>
          </div>

          {event.hostedBy && (
            <div className="text-xs font-bold text-white/60 uppercase tracking-wider text-center mt-4">
              By {event.hostedBy}
            </div>
          )}
        </div>
      </div>

      {/* Glow - Optimized and brightened */}
      <div 
        className="hidden md:block absolute -inset-10 opacity-0 group-hover:opacity-20 blur-[80px] transition-opacity duration-1000 -z-10" 
        style={{ background: currentTheme.glow }}
      />
    </motion.div>

    <EventModal event={event} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default EventCard;
