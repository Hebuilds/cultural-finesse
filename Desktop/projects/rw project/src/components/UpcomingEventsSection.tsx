/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { EVENTS_DATA } from "../data";

interface UpcomingEventsSectionProps {
  scrollToSection: (id: string) => void;
}

const UpcomingEventsSection: React.FC<UpcomingEventsSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="events-grid-section" className="py-24 px-6 md:px-12 bg-black relative">
      <div className="w-full max-w-5xl mx-auto space-y-12">
        <div className="text-center md:text-left space-y-2">
          <div className="inline-flex items-center gap-3">
            <span className="w-6 h-[1px] bg-gold" aria-hidden="true" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-gold mb-1 font-semibold">CULTURE ARCHIVE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4.5xl font-extrabold uppercase tracking-wider text-white">
            Schedules &amp; chapters
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white/5 border border-white/5 overflow-hidden rounded-2xl">
          {EVENTS_DATA.filter(e => !e.isFeatured).map((ev) => (
            <div key={ev.id} className="bg-surf1 p-6 flex flex-col justify-between min-h-[300px] border-r border-b border-white/5 hover:bg-surf2/45 transition-all group relative overflow-hidden">
              {/* Micro gold lines indicators at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              
              <div>
                {/* index identifier */}
                <div className="font-display text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none font-extrabold mb-4 select-none">
                  {ev.num}
                </div>
                
                <span className="text-[9px] font-mono tracking-widest text-gold uppercase block mb-1">
                  {ev.date}
                </span>
                
                <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-2 group-hover:text-gold transition-colors leading-tight">
                  {ev.title}
                </h4>

                <p className="text-xs text-white/50 leading-relaxed font-sans mb-6">
                  {ev.description}
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-white/5 pt-4">
                <span className="text-[10px] font-mono tracking-wider text-white/45">
                  {ev.venue.split(",")[0] || ev.venue}
                </span>
                
                <button
                  onClick={() => {
                    if (ev.priceAmount > 0) {
                      scrollToSection("ticket-compiler-section");
                    }
                  }}
                  className="interactive-hover font-mono text-[10px] tracking-widest text-gold-light hover:text-white uppercase flex items-center gap-1 transition-all"
                >
                  <span>{ev.priceAmount > 0 ? "rsvp ticket" : "stay locked"}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(UpcomingEventsSection);
