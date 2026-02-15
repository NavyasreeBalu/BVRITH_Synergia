import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Countdown: React.FC = () => {
  const targetDate = new Date('2026-03-31T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24"
    >
      <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-8 hover:border-fuchsia-400/50 hover:bg-white/10 transition-all">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={item.value}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl md:text-5xl lg:text-7xl font-pixel text-transparent bg-clip-text bg-gradient-to-br from-amber-400 via-fuchsia-400 to-indigo-400 mb-2 md:mb-4"
                >
                  {String(item.value).padStart(2, '0')}
                </motion.div>
              </AnimatePresence>
              <div className="text-xs md:text-sm lg:text-base font-pixel text-white/60 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Countdown;
