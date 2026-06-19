/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface FooterSectionProps {
  scrollToSection: (id: string) => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-surf1 border-t border-white/5 py-16 px-6 md:px-12 relative z-10">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-11">
          
          {/* Branding Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 select-none">
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center bg-black shrink-0">
                <span 
                  className="font-serif text-sm font-extrabold text-white select-none flex items-baseline leading-none tracking-normal" 
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <span className="italic font-semibold" style={{ marginRight: '-0.04em' }}>R</span>
                  <span className="font-bold">W</span>
                  <span className="font-sans text-[75%] font-black" style={{ marginLeft: '-0.04em' }}>.</span>
                </span>
              </div>
              <h2 className="font-display text-md font-extrabold tracking-widest text-white uppercase block pt-0.5">
                RW <span className="text-gold">PROJECT</span>
              </h2>
            </div>
            <p className="text-serif font-medium text-xs italic text-white/50 max-w-xs leading-relaxed">
              &ldquo;We don&apos;t just tell stories, <br />
              we wear who we are.&rdquo;
            </p>
          </div>

          {/* Quick anchors */}
          <div className="md:col-span-3 space-y-3 shrink-0">
            <h4 className="text-[10px] font-mono tracking-widest text-gold uppercase font-bold">CHAPTER CHRONICLE</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection("events-section")} className="text-white/60 hover:text-white transition-colors block text-left">
                  Event Deployment
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("casting-section")} className="text-white/60 hover:text-white transition-colors block text-left">
                  Cast Dossiers
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("collection-section")} className="text-white/60 hover:text-white transition-colors block text-left">
                  Clothing Drop Series
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("community-section")} className="text-white/60 hover:text-white transition-colors block text-left">
                  Creative Collective
                </button>
              </li>
            </ul>
          </div>

          {/* Support/Ticket coordinates */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] font-mono tracking-widest text-gold uppercase font-bold">CONNECTIVITY</h4>
            <p className="text-xs text-white/50 leading-relaxed font-sans">
              Kigali Main Office / Creative Agura Hub workspace. Support queries via direct <span className="text-gold-light font-bold">sinc.events</span> portal ticketing systems.
            </p>
            <div className="text-xs text-white/40 font-mono">
              Territory: Kigali, Rwanda
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-white/35 font-mono">
            © 2026 RW PROJECT. All rights reserved.
          </span>
          <span className="text-[11px] font-serif text-white/35 italic">
            Built for the youth culture vanguard
          </span>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(FooterSection);
