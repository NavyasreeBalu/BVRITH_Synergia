
import React, { useState, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { EVENTS_DATA } from '../constants';
import { EventCategory } from '../types';
import EventCard from './EventCard';
import EventSearch from './EventSearch';

const BentoGrid: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<EventCategory | 'all'>('all');

  // Filter events based on search and category
  const filteredEvents = useMemo(() => {
    let filtered = EVENTS_DATA;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(e => e.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(e => 
        e.title.toLowerCase().includes(query) ||
        e.description.toLowerCase().includes(query) ||
        e.hostedBy.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, activeCategory]);

  const technicalEvents = filteredEvents.filter(e => e.category === EventCategory.TECHNICAL);
  const culturalEvents = filteredEvents.filter(e => e.category === EventCategory.CULTURAL);
  const workshopEvents = filteredEvents.filter(e => e.category === EventCategory.WORKSHOPS);

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
    <div className="max-w-7xl mx-auto px-2 md:px-6 py-0 space-y-24 sm:space-y-32 md:space-y-48 lg:space-y-64 relative z-10">
      {/* Search and Filter */}
      <EventSearch 
        onSearch={setSearchQuery}
        onFilterCategory={setActiveCategory}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
      />

      {/* No Results Message */}
      {filteredEvents.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <h3 className="text-3xl md:text-5xl font-pixel font-black text-white mb-4">
            No events found
          </h3>
          <p className="text-white/60 text-lg">
            Try adjusting your search or filter criteria
          </p>
        </motion.div>
      )}

      {/* Technical Section */}
      {(activeCategory === 'all' || activeCategory === EventCategory.TECHNICAL) && technicalEvents.length > 0 && (
        <section id="technical">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-8 border-l-4 md:border-l-8 border-emerald-500 pl-6 md:pl-12"
        >
          <div>
            <span className="text-emerald-400 font-pixel uppercase tracking-[0.4em] md:tracking-[0.8em] text-sm md:text-base block mb-2 md:mb-4">REWIRE REALITY</span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-pixel font-black text-cyan-400 tracking-tighter leading-none">TECHNICAL <br/>FORCE</h2>
          </div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8"
        >
          {technicalEvents.map(event => (
            <motion.div key={event.id} variants={itemVariants}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      )}

      {/* Cultural Section */}
      {(activeCategory === 'all' || activeCategory === EventCategory.CULTURAL) && culturalEvents.length > 0 && (
        <section id="cultural">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-8 border-r-4 md:border-r-8 border-orange-400 pr-6 md:pr-12 text-left md:text-right"
        >
          <div>
            <span className="text-orange-400 font-pixel uppercase tracking-[0.4em] md:tracking-[0.8em] text-sm md:text-base block mb-2 md:mb-4">HEART OF THE FEST</span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-pixel font-black text-pink-400 tracking-tighter leading-none">CULTURAL <br/>EXPLOSION</h2>
          </div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-16"
        >
          {culturalEvents.map(event => (
            <motion.div key={event.id} variants={itemVariants}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      )}

      {/* Workshops Section */}
      {(activeCategory === 'all' || activeCategory === EventCategory.WORKSHOPS) && workshopEvents.length > 0 && (
        <section id="workshops">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-8 border-l-4 md:border-l-8 border-lime-400 pl-6 md:pl-12"
        >
          <div>
            <span className="text-lime-400 font-pixel uppercase tracking-[0.4em] md:tracking-[0.8em] text-sm md:text-base block mb-2 md:mb-4">EVOLVE YOUR SKILLS</span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-pixel font-black text-yellow-400 tracking-tighter leading-none">ELITE <br/>WORKSHOPS</h2>
          </div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12"
        >
          {workshopEvents.map(event => (
            <motion.div key={event.id} variants={itemVariants}>
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      </section>
      )}
    </div>
  );
};

export default BentoGrid;
