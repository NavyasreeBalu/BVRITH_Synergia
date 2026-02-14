import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, DollarSign, Users, MapPin } from 'lucide-react';
import { FestEvent } from '../types';

interface EventModalProps {
  event: FestEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      console.log('Modal opening for:', event?.title);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, event]);

  if (!event) return null;

  console.log('EventModal render:', { title: event.title, isOpen });

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[150]"
          />
          
          <div className="fixed inset-0 z-[151] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto w-full max-w-2xl bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 border-4 border-fuchsia-500 shadow-[0_0_50px_rgba(217,70,239,0.6)] relative"
            >
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 bg-red-600 hover:bg-red-700 border-2 border-white flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" strokeWidth={3} />
              </button>

              <div className="p-6 md:p-8">
                <h1 className="text-2xl md:text-4xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-fuchsia-400 to-indigo-400 mb-4 pr-10 uppercase tracking-wider">
                  {event.title}
                </h1>

                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-white/10 border-2 border-fuchsia-400 text-xs font-pixel uppercase text-white">
                    {event.category}
                  </span>
                  {event.featured && (
                    <span className="px-3 py-1 bg-fuchsia-500/30 border-2 border-fuchsia-400 text-xs font-pixel uppercase text-fuchsia-200">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 font-pixel">
                  {event.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 bg-black/40 border-2 border-amber-400">
                    <Calendar className="w-5 h-5 text-amber-400 mb-1" />
                    <p className="text-[10px] font-pixel text-white/60 uppercase">Date</p>
                    <p className="text-sm font-pixel text-white">{event.date}</p>
                  </div>

                  <div className="p-3 bg-black/40 border-2 border-emerald-400">
                    <DollarSign className="w-5 h-5 text-emerald-400 mb-1" />
                    <p className="text-[10px] font-pixel text-white/60 uppercase">Fee</p>
                    <p className="text-sm font-pixel text-white">{event.fee}</p>
                  </div>

                  <div className="p-3 bg-black/40 border-2 border-indigo-400">
                    <Users className="w-5 h-5 text-indigo-400 mb-1" />
                    <p className="text-[10px] font-pixel text-white/60 uppercase">Hosted By</p>
                    <p className="text-sm font-pixel text-white">{event.hostedBy}</p>
                  </div>

                  <div className="p-3 bg-black/40 border-2 border-fuchsia-400">
                    <MapPin className="w-5 h-5 text-fuchsia-400 mb-1" />
                    <p className="text-[10px] font-pixel text-white/60 uppercase">Venue</p>
                    <p className="text-sm font-pixel text-white">BVRIT</p>
                  </div>
                </div>

                <button
                  className="w-full py-3 bg-gradient-to-r from-fuchsia-500 to-indigo-500 border-2 border-white font-pixel text-white text-base md:text-lg uppercase tracking-wider hover:scale-105 transition-transform active:scale-95"
                  onClick={() => alert('Registration form will be added by event coordinators')}
                >
                  Register Now
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default EventModal;
