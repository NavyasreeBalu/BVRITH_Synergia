import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, DollarSign, Users, MapPin } from 'lucide-react';
import { FestEvent } from '../types';
import { getRegistrationStatus } from '../utils/eventStatus';
import sdgImage from '../assets/sdg.png';

interface EventModalProps {
  event: FestEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

const HACK4SDGS_2025 = {
  about: [
    'Hack4SDGs 2025 is a student hackathon designed to inspire young innovators to develop technology-driven solutions aligned with the United Nations Sustainable Development Goals (SDGs). Participants collaborate, brainstorm, and build impactful projects addressing global challenges like climate action, clean energy, smart cities, healthcare, and quality education.',
    'By incorporating Engineering Practices in Community Services (EPICS), the hackathon emphasizes human-centered design and real-world problem-solving. Participants will engage in socially relevant engineering, ensuring that their innovations have a measurable impact on society.',
  ],
  guidelines: [
    'Participants can develop either software or hardware solutions based on the SDGs theme.',
  ],
  evaluationCriteria: [
    'Attainment of SDGs: How effectively the solution addresses the chosen SDG(s).',
    'Impact: The real-world significance and scalability of the solution.',
    'Tangible End Product: Solutions should be functional and impactful.',
  ],
  evaluationLevels: [
    'Ideation Level: Teams explain their core idea and approach.',
    'Demonstration Level: Full demonstration of the innovative solution, highlighting usability and scalability.',
  ],
  provide: [
    'A platform to present ideas and execution.',
    'Wi-Fi connectivity.',
    'Power supply.',
  ],
  bring: [
    'Your own hardware (if applicable).',
    'Creativity, passion, and problem-solving skills.',
    'A collaborative mindset to work as a team.',
  ],
  gain: [
    'Hands-on experience tackling real-world problems.',
    'Exciting prizes for outstanding solutions.',
  ],
  teamSize: '1-3 members per team.',
};

const PointList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-1.5">
    {items.map((item) => (
      <li key={item} className="text-sm md:text-base text-white/85 leading-relaxed flex gap-2">
        <span className="text-fuchsia-300 mt-0.5">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
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

  if (!event) return null;
  const isHack4SDGs = event.id === 'tech-1';
  const registrationStatus = getRegistrationStatus(event.date);
  const statusStyles: Record<string, string> = {
    Open: 'border-emerald-400/60 bg-emerald-500/20 text-emerald-200',
    'Opening Soon': 'border-amber-400/60 bg-amber-500/20 text-amber-200',
    Closed: 'border-rose-400/60 bg-rose-500/20 text-rose-200',
  };

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
              className="pointer-events-auto w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 border-2 border-fuchsia-500/80 shadow-[0_0_50px_rgba(217,70,239,0.6)] rounded-3xl relative"
              style={{ boxShadow: 'var(--ui-card-shadow)' }}
            >
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 bg-red-600 hover:bg-red-700 border-2 border-white flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" strokeWidth={3} />
              </button>

              <div className="p-6 md:p-10">
                <h1 className="text-2xl md:text-4xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-emerald-300 to-lime-300 mb-4 pr-10 uppercase tracking-wider">
                  {isHack4SDGs ? 'Hack4SDGs 2025' : event.title}
                </h1>

                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-white/10 border border-fuchsia-400/60 text-xs font-semibold uppercase tracking-wide text-white">
                    {event.category}
                  </span>
                  <span className={`px-3 py-1 border text-xs font-semibold uppercase tracking-wide ${statusStyles[registrationStatus]}`}>
                    {registrationStatus}
                  </span>
                </div>

                {isHack4SDGs ? (
                  <div className="mb-6 space-y-5">
                    <section>
                      <h3 className="text-base md:text-lg font-bold text-cyan-300 mb-2 uppercase tracking-wide">About</h3>
                      <p className="text-slate-100/90 text-sm md:text-base leading-relaxed mb-2">{HACK4SDGS_2025.about[0]}</p>
                      <p className="text-slate-100/90 text-sm md:text-base leading-relaxed">{HACK4SDGS_2025.about[1]}</p>
                    </section>
                    <section>
                      <h3 className="text-base md:text-lg font-bold text-amber-300 mb-2 uppercase tracking-wide">Guidelines</h3>
                      <PointList items={HACK4SDGS_2025.guidelines} />
                    </section>
                    <section>
                      <h3 className="text-base md:text-lg font-bold text-violet-300 mb-2 uppercase tracking-wide">Evaluation Criteria</h3>
                      <PointList items={HACK4SDGS_2025.evaluationCriteria} />
                    </section>
                    <section>
                      <h3 className="text-base md:text-lg font-bold text-pink-300 mb-2 uppercase tracking-wide">Levels of Evaluation</h3>
                      <PointList items={HACK4SDGS_2025.evaluationLevels} />
                    </section>
                    <section>
                      <h3 className="text-base md:text-lg font-bold text-emerald-300 mb-2 uppercase tracking-wide">We Provide</h3>
                      <PointList items={HACK4SDGS_2025.provide} />
                    </section>
                    <section>
                      <h3 className="text-base md:text-lg font-bold text-orange-300 mb-2 uppercase tracking-wide">What You Need to Bring</h3>
                      <PointList items={HACK4SDGS_2025.bring} />
                    </section>
                    <section>
                      <h3 className="text-base md:text-lg font-bold text-fuchsia-300 mb-2 uppercase tracking-wide">What You Gain</h3>
                      <PointList items={HACK4SDGS_2025.gain} />
                    </section>
                    <section>
                      <h3 className="text-base md:text-lg font-bold text-sky-300 mb-1 uppercase tracking-wide">Team Size</h3>
                      <p className="text-slate-100/90 text-sm md:text-base">{HACK4SDGS_2025.teamSize}</p>
                    </section>
                    <div className="rounded-2xl border border-white/15 bg-black/30 p-3">
                      <img
                        src={sdgImage}
                        alt="SDG themed visual"
                        className="w-full h-auto rounded-xl object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-slate-100/90 text-base md:text-lg leading-relaxed mb-6 font-medium">
                    {event.description}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3 bg-black/40 border border-amber-400/50 rounded-xl">
                    <Calendar className="w-5 h-5 text-amber-400 mb-1" />
                    <p className="text-xs font-semibold text-white/60 uppercase tracking-wide">Date</p>
                    <p className="text-sm font-semibold text-white">{event.date}</p>
                  </div>

                  <div className="p-3 bg-black/40 border border-emerald-400/50 rounded-xl">
                    <DollarSign className="w-5 h-5 text-emerald-400 mb-1" />
                    <p className="text-xs font-semibold text-white/60 uppercase tracking-wide">Fee</p>
                    <p className="text-sm font-semibold text-white">{event.fee}</p>
                  </div>

                  <div className="p-3 bg-black/40 border border-indigo-400/50 rounded-xl">
                    <Users className="w-5 h-5 text-indigo-400 mb-1" />
                    <p className="text-xs font-semibold text-white/60 uppercase tracking-wide">Hosted By</p>
                    <p className="text-sm font-semibold text-white">{event.hostedBy}</p>
                  </div>

                  <div className="p-3 bg-black/40 border border-fuchsia-400/50 rounded-xl">
                    <MapPin className="w-5 h-5 text-fuchsia-400 mb-1" />
                    <p className="text-xs font-semibold text-white/60 uppercase tracking-wide">Venue</p>
                    <p className="text-sm font-semibold text-white">BVRIT</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => {
                      if (registrationStatus === 'Open') {
                        alert('Registration link will be updated soon.');
                        return;
                      }
                      if (registrationStatus === 'Closed') {
                        alert('Registrations are closed for this event.');
                        return;
                      }
                      alert('Registration link will be updated soon.');
                    }}
                    className="w-full py-3 bg-gradient-to-r from-fuchsia-500 to-indigo-500 border-2 border-white font-pixel text-white text-sm md:text-base uppercase tracking-wider hover:scale-[1.02] transition-transform active:scale-95"
                  >
                    Register Now
                  </button>
                  <p className="text-xs text-white/60 text-center font-medium">
                    Google Form links will be added here once registrations open.
                  </p>
                </div>
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
