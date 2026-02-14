
import React from 'react';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/95 pt-0 pb-0 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12 md:gap-20 mb-16 md:mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6 md:mb-10 tracking-tighter">
              SYNERGIA<span className="text-fuchsia-400">2K26.</span>
            </h2>
            <p className="text-white/80 max-w-md mb-8 md:mb-12 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              BVRIT Hyderabad College of Engineering for Women presents its annual technical and cultural extravaganza. Synergizing talent, innovating the future.
            </p>
            <div className="flex gap-4 md:gap-6">
              {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl md:rounded-2xl bg-white/10 border border-white/10 hover:border-fuchsia-400 hover:bg-fuchsia-400/10 text-white/60 hover:text-fuchsia-400 transition-all duration-500 group">
                  <Icon className="w-5 h-5 md:w-6 h-6 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg md:text-xl font-black mb-6 md:mb-8 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4 md:space-y-6 text-white/75 font-bold text-xs md:text-sm tracking-widest">
              <li className="flex items-start gap-3 md:gap-4">
                <MapPin className="w-5 h-5 text-fuchsia-400 shrink-0" />
                <span className="font-medium">BVRIT HYDERABAD, <br/>Bachupally, Hyderabad.</span>
              </li>
              <li className="flex items-center gap-3 md:gap-4">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="break-all font-medium">synergia@bvrithyderabad.edu.in</span>
              </li>
              <li className="flex items-center gap-3 md:gap-4">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="font-medium">+91 1234 567 890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-[10px] md:text-[11px] text-white/50 uppercase tracking-[0.3em] md:tracking-[0.5em] font-black text-center md:text-left">
          <p>© 2026 BVRIT HYDERABAD College of Engineering for Women.</p>
          <div className="flex gap-8 md:gap-12">
            <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
