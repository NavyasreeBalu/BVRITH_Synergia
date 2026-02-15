import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, DollarSign, Phone, User } from 'lucide-react';

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Hack4SDGsModal: React.FC<EventDetailsModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200]"
          />
          
          <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 rounded-2xl border-4 border-fuchsia-500/50 shadow-[0_0_80px_rgba(217,70,239,0.8)] p-6 md:p-8"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-fuchsia-500/20 hover:bg-fuchsia-500/40 border-2 border-fuchsia-400 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <h1 className="text-3xl md:text-5xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-fuchsia-400 to-indigo-400 mb-6 pr-12">
                HACK4SDGS
              </h1>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-white/5 border-2 border-amber-400/50">
                    <Calendar className="w-5 h-5 text-amber-400 mb-1" />
                    <p className="text-xs font-pixel text-white/60">DATE</p>
                    <p className="text-sm font-pixel text-white">April 2, 2026</p>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border-2 border-emerald-400/50">
                    <DollarSign className="w-5 h-5 text-emerald-400 mb-1" />
                    <p className="text-xs font-pixel text-white/60">FEE</p>
                    <p className="text-sm font-pixel text-white">₹150 / ₹200</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-fuchsia-500/10 border-2 border-fuchsia-400/50">
                  <h2 className="text-xl font-pixel text-fuchsia-400 mb-2">ABOUT</h2>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Join us for an intensive 24-hour hackathon where teams will develop innovative solutions addressing the UN Sustainable Development Goals. Expert mentors available. Winners receive cash prizes and certificates.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-indigo-500/10 border-2 border-indigo-400/50">
                  <h2 className="text-xl font-pixel text-indigo-400 mb-3">COORDINATORS</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/20">
                      <User className="w-4 h-4 text-fuchsia-400 mb-1" />
                      <h3 className="text-sm font-pixel text-white">Priya Sharma</h3>
                      <p className="text-xs font-pixel text-white/60 mb-1">EVENT COORDINATOR</p>
                      <a href="tel:+919876543210" className="flex items-center gap-1 text-fuchsia-400 text-xs">
                        <Phone className="w-3 h-3" />
                        <span>+91 9876543210</span>
                      </a>
                    </div>

                    <div className="p-3 rounded-lg bg-white/5 border border-white/20">
                      <User className="w-4 h-4 text-indigo-400 mb-1" />
                      <h3 className="text-sm font-pixel text-white">Ananya Reddy</h3>
                      <p className="text-xs font-pixel text-white/60 mb-1">TECHNICAL LEAD</p>
                      <a href="tel:+919876543211" className="flex items-center gap-1 text-indigo-400 text-xs">
                        <Phone className="w-3 h-3" />
                        <span>+91 9876543211</span>
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 font-pixel text-white text-lg uppercase border-2 border-white/20"
                  onClick={() => alert('Registration form will be added')}
                >
                  REGISTER NOW
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Hack4SDGsModal;
