import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO, FEST_INFO } from '../constants';
import sacLogo from '../assets/Logos/sac_logo.png';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 md:px-6 py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 md:mb-32"
      >
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-pixel font-black text-orange-400 tracking-tighter leading-none">
          CONTACT US
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
        {/* SAC Members - 2x5 Grid */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-4xl font-pixel font-black text-white mb-8 md:mb-12">
            Student Affairs Council
          </h3>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {CONTACT_INFO.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-4 sm:p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-fuchsia-400/50 transition-all hover:bg-white/10"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-400 to-indigo-500 flex items-center justify-center">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-black text-white mb-1">{person.name}</h4>
                    <p className="text-xs text-white/60 uppercase tracking-wider mb-2">{person.role}</p>
                    <a 
                      href={`tel:${person.phone}`}
                      className="text-fuchsia-400 font-bold text-sm hover:text-fuchsia-300 transition-colors break-all"
                    >
                      {person.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Venue Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl md:text-4xl font-pixel font-black text-white mb-8 md:mb-12">
            Event Details
          </h3>

          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 border border-white/20 space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-fuchsia-400 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-pixel text-white mb-2">VENUE</h4>
                <p className="text-white/80 text-base leading-relaxed">
                  {FEST_INFO.venue}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-8 h-8 text-indigo-400 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-pixel text-white mb-2">DATES</h4>
                <p className="text-white/80 text-xl font-bold">
                  {FEST_INFO.dates}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-white/70 text-sm leading-relaxed">
                Open to all colleges for the first two days. Join us for competitions, workshops, and cultural events!
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mt-8">
            <h4 className="text-lg font-pixel text-white mb-4">ORGANIZED BY</h4>
            <div className="flex items-center gap-4">
              <img 
                src={sacLogo} 
                alt="SAC Logo" 
                className="w-32 h-32 object-contain"
              />
              <p className="text-white/80 text-base">
                Student Affairs Council (SAC)<br />
                BVRIT Hyderabad College of Engineering for Women
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
