/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Calendar, MapPin } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { EVENTS_DATA } from "../data";

interface EventsSectionProps {
  scrollToSection: (id: string) => void;
}

const EventsSection: React.FC<EventsSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="events-section" className="py-16 px-6 md:px-12 bg-black relative">
      <div className="w-full max-w-5xl mx-auto space-y-8 md:space-y-12">
        
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-gold font-semibold">Active Chapters</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mt-2 pb-1">
              LATEST CORE DEPLOYMENT
            </h2>
          </div>
          
          <button
            onClick={() => scrollToSection("events-grid-section")}
            className="text-[11px] font-mono tracking-widest uppercase text-gold hover:text-white flex items-center gap-1.5 transition-all border-b border-gold/25 pb-1"
          >
            <span>VIEW CALENDAR</span>
            <span>→</span>
          </button>
        </div>

        {/* Epic Main Stage Grid Card */}
        {EVENTS_DATA.filter(e => e.isFeatured).map((item) => (
          <div key={item.id} className="border border-gold/20 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 bg-surf1 hover:border-gold/35 transition-all duration-300 group reveal-element">
            
            {/* Graphic Left Block with Title Badge */}
            <div className="lg:col-span-5 relative min-h-[340px] border-b lg:border-b-0 lg:border-r border-gold/10 overflow-hidden flex flex-col justify-between p-8 items-center text-center reveal-image-container">
              {/* The Real Image background */}
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              )}
              {/* Dark premium overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/80 z-[11]" />
              
              {/* Event Badge */}
              <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-gold text-black text-[9px] font-mono tracking-[0.25em] font-bold rounded">
                {item.dayName}
              </div>

              <div className="my-auto select-none relative z-20 pointer-events-none">
                {/* Huge abstract logo background text */}
                <div className="font-display text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-transparent tracking-tighter transform rotate-[-4deg]">
                  SYL
                </div>
              </div>

              <div className="text-center relative z-20">
                <span className="text-[10px] font-mono tracking-[0.2em] text-white/70 block uppercase font-bold">COORDINATE ACCESS</span>
                <p className="text-xs font-serif italic text-gold mt-1">UEFA Access + Roleplay Cinema</p>
              </div>
            </div>

            {/* Info Contents Block */}
            <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-gold uppercase block mb-1.5 font-semibold">
                  {item.tag}
                </span>
                
                <h3 className="font-display text-2xl sm:text-3.5xl font-extrabold uppercase tracking-wide leading-none text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans mb-6">
                  {item.description}
                </p>

                <div className="space-y-3.5 mb-8 border-t border-white/5 pt-5">
                  <div className="flex items-center gap-3 font-mono text-xs text-white/80">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-gold" style={{ flexShrink: 0 }} />
                    </div>
                    <div>
                      <strong className="text-white font-medium">Saturday, May 30 2026</strong> · {item.time}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs text-white/80">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-gold" style={{ flexShrink: 0 }} />
                    </div>
                    <div>
                      <strong className="text-white font-medium">Agura Creative Hub → Centric Hotel</strong> · Kigali
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/5 pt-5">
                <div className="flex items-center gap-4">
                  <div className="border border-white/10 bg-black/40 rounded-xl p-3 text-center shrink-0 min-w-[100px]">
                    <span className="text-[9px] font-mono tracking-widest text-gold block mb-1">EARLY CAST</span>
                    <strong className="font-display text-lg text-white font-bold">5,000</strong>
                    <span className="text-[9px] font-mono text-white/30 block">RWF</span>
                  </div>

                  <div className="border border-white/10 bg-black/40 rounded-xl p-3 text-center shrink-0 min-w-[100px]">
                    <span className="text-[9px] font-mono tracking-widest text-gold block mb-1">GATE CAST</span>
                    <strong className="font-display text-lg text-white font-bold">7,500</strong>
                    <span className="text-[9px] font-mono text-white/30 block">RWF</span>
                  </div>
                </div>

                <MagneticButton
                  onClick={() => scrollToSection("ticket-compiler-section")}
                  className="interactive-hover px-6 py-4 rounded-xl border border-gold hover:border-gold-light bg-gold text-black font-semibold text-xs tracking-widest uppercase shadow-lg shadow-gold/5 flex items-center justify-center gap-2"
                >
                  <span>SECURE PASS TICKETS</span>
                  <span>→</span>
                </MagneticButton>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default React.memo(EventsSection);
