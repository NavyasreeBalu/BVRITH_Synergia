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

      {/* Platinum Sponsors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-16"
      >
        <h3 className="text-center text-xl md:text-2xl font-black text-white/80 uppercase tracking-wider mb-8">
          Platinum Partners
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {sponsors.filter(s => s.tier === 'platinum').map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-[2/1] rounded-2xl md:rounded-3xl bg-white/5 border-2 border-white/10 hover:border-fuchsia-400/50 transition-all flex items-center justify-center group hover:bg-white/10"
            >
              <span className="text-white/40 text-2xl md:text-4xl font-black group-hover:text-white/60 transition-colors">
                {sponsor.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gold Sponsors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-16"
      >
        <h3 className="text-center text-lg md:text-xl font-black text-white/70 uppercase tracking-wider mb-8">
          Gold Partners
        </h3>
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

      {/* Silver Sponsors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-center text-base md:text-lg font-black text-white/60 uppercase tracking-wider mb-8">
          Silver Partners
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {sponsors.filter(s => s.tier === 'silver').map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-[2/1] rounded-xl bg-white/5 border border-white/10 hover:border-indigo-400/50 transition-all flex items-center justify-center group hover:bg-white/10"
            >
              <span className="text-white/20 text-sm md:text-lg font-black group-hover:text-white/40 transition-colors">
                {sponsor.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Become a Sponsor CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 md:mt-24 text-center"
      >
        <a
          href="#contact"
          className="inline-block px-10 md:px-16 py-4 md:py-6 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-base md:text-xl uppercase tracking-wider hover:scale-105 transition-transform active:scale-95 shadow-2xl"
        >
          Become a Sponsor
        </a>
      </motion.div>
    </section>
  );
};

export default Sponsors;
