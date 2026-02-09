
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { EVENTS_DATA } from '../constants';
import { EventCategory } from '../types';
import EventCard from './EventCard';

const BentoGrid: React.FC = () => {
  const technicalEvents = EVENTS_DATA.filter(e => e.category === EventCategory.TECHNICAL);
  const culturalEvents = EVENTS_DATA.filter(e => e.category === EventCategory.CULTURAL);
  const workshopEvents = EVENTS_DATA.filter(e => e.category === EventCategory.WORKSHOPS);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-6 py-20 md:py-48 space-y-32 md:space-y-64 relative z-10">
      {/* Technical Section */}
      <section id="technical">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-8 border-l-4 md:border-l-8 border-emerald-500 pl-6 md:pl-12"
        >
          <div>
            <span className="text-emerald-400 font-black uppercase tracking-[0.4em] md:tracking-[0.8em] text-[11px] md:text-xs block mb-2 md:mb-4">REWIRE REALITY</span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-white tracking-tighter leading-none">TECHNICAL <br/>FORCE</h2>
          </div>
          <p className="text-white/75 max-w-lg text-base md:text-xl font-medium leading-relaxed">
            The playground of the architect. From neural networks to carbon-fiber bots, witness the raw power of logic in motion.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {technicalEvents.map(event => (
            <motion.div key={event.id} variants={itemVariants}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Cultural Section */}
      <section id="cultural">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-8 border-r-4 md:border-r-8 border-orange-400 pr-6 md:pr-12 text-left md:text-right"
        >
          <div>
            <span className="text-orange-400 font-black uppercase tracking-[0.4em] md:tracking-[0.8em] text-[11px] md:text-xs block mb-2 md:mb-4">HEART OF THE FEST</span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-white tracking-tighter leading-none">CULTURAL <br/>EXPLOSION</h2>
          </div>
          <p className="text-white/75 max-w-lg text-base md:text-xl font-medium leading-relaxed">
            Humanity unplugged. Dance until the neon fades and sing until the stars resonate with your pulse.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-16"
        >
          {culturalEvents.map(event => (
            <motion.div key={event.id} variants={itemVariants}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Workshops Section */}
      <section id="workshops">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-8 border-l-4 md:border-l-8 border-lime-400 pl-6 md:pl-12"
        >
          <div>
            <span className="text-lime-400 font-black uppercase tracking-[0.4em] md:tracking-[0.8em] text-[11px] md:text-xs block mb-2 md:mb-4">EVOLVE YOUR SKILLS</span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-white tracking-tighter leading-none">ELITE <br/>WORKSHOPS</h2>
          </div>
          <p className="text-white/75 max-w-lg text-base md:text-xl font-medium leading-relaxed">
            Direct downloads from industry titans. Don't just attend; upgrade your cognitive stack with practical expertise.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {workshopEvents.map(event => (
            <motion.div key={event.id} variants={itemVariants}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default BentoGrid;
