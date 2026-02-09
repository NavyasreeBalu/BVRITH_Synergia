import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Sparkles, TrendingUp } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { icon: Calendar, value: '20+', label: 'Events', color: 'from-fuchsia-400 to-pink-500' },
    { icon: Sparkles, value: '3', label: 'Categories', color: 'from-amber-400 to-orange-500' },
    { icon: Users, value: '1000+', label: 'Participants', color: 'from-indigo-400 to-purple-500' },
    { icon: TrendingUp, value: '3', label: 'Days', color: 'from-emerald-400 to-teal-500' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10">
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-white/60 text-sm md:text-base font-bold uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
