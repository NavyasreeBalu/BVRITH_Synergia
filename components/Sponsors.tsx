import React from 'react';
import { motion } from 'framer-motion';

const Sponsors: React.FC = () => {
  // Placeholder sponsors - coordinators will replace with actual logos
  const sponsors = [
    { name: 'Sponsor 1', tier: 'platinum' },
    { name: 'Sponsor 2', tier: 'platinum' },
    { name: 'Sponsor 3', tier: 'gold' },
    { name: 'Sponsor 4', tier: 'gold' },
    { name: 'Sponsor 5', tier: 'gold' },
    { name: 'Sponsor 6', tier: 'silver' },
    { name: 'Sponsor 7', tier: 'silver' },
    { name: 'Sponsor 8', tier: 'silver' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24"
      >
        <span className="text-amber-400 font-black uppercase tracking-[0.4em] md:tracking-[0.8em] text-[11px] md:text-xs block mb-4">
          POWERED BY
        </span>
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-black text-white tracking-tighter leading-none">
          OUR SPONSORS
        </h2>
      </motion.div>

      {/* Gold Sponsors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {sponsors.filter(s => s.tier === 'gold').map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-[2/1] rounded-xl md:rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all flex items-center justify-center group hover:bg-white/10"
            >
              <span className="text-white/30 text-lg md:text-2xl font-black group-hover:text-white/50 transition-colors">
                {sponsor.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default Sponsors;
