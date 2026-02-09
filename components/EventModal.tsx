import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, DollarSign, Users, MapPin } from 'lucide-react';
import { FestEvent } from '../types';

interface EventModalProps {
  event: FestEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed inset-0 md:inset-4 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[90vh] bg-slate-900 md:rounded-3xl overflow-hidden z-50 flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden relative">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-12">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 flex-wrap">
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-black uppercase tracking-wider text-white">
                  {event.category}
                </span>
                {event.featured && (
                  <span className="px-4 py-2 rounded-full bg-fuchsia-500/20 border border-fuchsia-400/30 text-xs font-black uppercase tracking-wider text-fuchsia-300">
                    Featured
                  </span>
                )}
              </div>

              <h2 className="text-3xl md:text-6xl font-display font-black text-white mb-4 md:mb-6 tracking-tight leading-none">
                {event.title}
              </h2>

              <p className="text-white/80 text-base md:text-xl leading-relaxed mb-6 md:mb-8">
                {event.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                  <Calendar className="w-6 h-6 md:w-8 md:h-8 text-fuchsia-400 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider mb-1">Date</p>
                    <p className="text-sm md:text-lg font-bold text-white">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                  <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider mb-1">Registration Fee</p>
                    <p className="text-sm md:text-lg font-bold text-white">{event.fee}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-indigo-400 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider mb-1">Hosted By</p>
                    <p className="text-sm md:text-lg font-bold text-white">{event.hostedBy}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider mb-1">Venue</p>
                    <p className="text-sm md:text-lg font-bold text-white">BVRIT Hyderabad</p>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 md:py-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-black text-lg md:text-xl uppercase tracking-wider hover:scale-105 transition-transform active:scale-95">
                Register Now
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EventModal;
