import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Schedule: React.FC = () => {
  const schedule = [
    {
      day: 'Day 01',
      date: 'March 31, 2026',
      dayName: 'Tuesday',
      events: [
        { time: '9:00 AM', title: 'Registration Opens', icon: '🎫' },
        { time: '10:00 AM', title: 'Opening Ceremony', icon: '🎭' },
        { time: '11:00 AM', title: 'Technical Events Begin', icon: '💻' },
        { time: '2:00 PM', title: 'Workshops Session 1', icon: '🛠️' },
        { time: '6:00 PM', title: 'Day 1 Wrap-up', icon: '🌟' },
      ],
      color: 'from-fuchsia-500 to-pink-500',
    },
    {
      day: 'Day 02',
      date: 'April 1, 2026',
      dayName: 'Wednesday',
      events: [
        { time: '9:00 AM', title: 'Day 2 Kickoff', icon: '🚀' },
        { time: '10:00 AM', title: 'Cultural Events Begin', icon: '🎨' },
        { time: '1:00 PM', title: 'Workshops Session 2', icon: '🎯' },
        { time: '4:00 PM', title: 'Performances & Competitions', icon: '🎪' },
        { time: '7:00 PM', title: 'Evening Cultural Show', icon: '🎭' },
      ],
      color: 'from-amber-500 to-orange-500',
    },
    {
      day: 'Day 03',
      date: 'April 2, 2026',
      dayName: 'Thursday',
      events: [
        { time: '9:00 AM', title: 'Final Day Events', icon: '⚡' },
        { time: '11:00 AM', title: 'Grand Finale Preparations', icon: '🎬' },
        { time: '3:00 PM', title: 'Prize Distribution', icon: '🏆' },
        { time: '5:00 PM', title: 'Closing Ceremony', icon: '🎊' },
        { time: '6:00 PM', title: 'Synergia 2026 Concludes', icon: '✨' },
      ],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24"
      >
        <span className="text-fuchsia-400 font-black uppercase tracking-[0.4em] md:tracking-[0.8em] text-[11px] md:text-xs block mb-4">
          MARK YOUR CALENDAR
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-pixel font-black text-green-400 tracking-tighter leading-none mb-6">
          EVENT SCHEDULE
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
          Three days of innovation, culture, and creativity at BVRIT Hyderabad
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {schedule.map((day, dayIndex) => (
          <motion.div
            key={dayIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: dayIndex * 0.2 }}
            className="relative group"
          >
            {/* Ticket Shape Card */}
            <div className="relative bg-white/5 border-2 border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all">
              {/* Perforated Edge Effect */}
              <div className="absolute left-0 top-1/4 w-6 h-6 bg-slate-950 rounded-full -translate-x-1/2 border-2 border-white/10" />
              <div className="absolute right-0 top-1/4 w-6 h-6 bg-slate-950 rounded-full translate-x-1/2 border-2 border-white/10" />
              
              {/* Ticket Header */}
              <div className={`p-6 md:p-8 bg-gradient-to-br ${day.color} relative`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/90 text-sm font-bold uppercase tracking-wider">
                    {day.dayName}
                  </span>
                  <Calendar className="w-5 h-5 text-white/80" />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-2 tracking-tight">
                  {day.day}
                </h3>
                <p className="text-white/90 text-lg font-bold">
                  {day.date}
                </p>
              </div>

              {/* Dashed Separator */}
              <div className="border-t-2 border-dashed border-white/20 mx-4" />

              {/* Events List */}
              <div className="p-6 md:p-8 space-y-4">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: dayIndex * 0.2 + eventIndex * 0.1 }}
                    className="flex items-start gap-4 group/item hover:bg-white/5 p-3 rounded-xl transition-all"
                  >
                    <div className="text-xl sm:text-2xl flex-shrink-0">{event.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-fuchsia-400" />
                        <span className="text-white/60 text-sm font-bold">
                          {event.time}
                        </span>
                      </div>
                      <p className="text-white font-bold text-base">
                        {event.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Ticket Footer */}
              <div className="border-t border-white/10 p-4 bg-white/5 flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-fuchsia-400" />
                <span className="text-white/70 text-xs font-bold uppercase tracking-wider">
                  BVRIT Hyderabad
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
