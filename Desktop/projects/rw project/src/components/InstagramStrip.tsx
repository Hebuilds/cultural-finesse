/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Instagram } from "lucide-react";

const InstagramStrip: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-black border-t border-white/5 text-center relative">
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="text-gold tracking-[0.4em] font-mono text-[9px] block uppercase font-bold">FOLLOW THE TAKEOVER</span>
        <a
          href="https://instagram.com/rw.project_"
          target="_blank"
          rel="noopener noreferrer"
          className="interactive-hover block font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white hover:text-gold transition-colors duration-300 font-bold"
        >
          @rw.project_
        </a>
        <p className="text-xs text-white/40 tracking-wider">Kigali, Rwanda · Culture platform</p>
        
        <div className="pt-4">
          <a
            href="https://instagram.com/rw.project_"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-hover inline-flex items-center gap-2 px-6 py-3.5 border border-white/10 hover:border-gold hover:text-gold bg-transparent font-semibold uppercase text-xs tracking-widest text-white rounded-full transition-magnetic"
          >
            <Instagram className="w-4 h-4 text-gold" />
            <span>FOLLOW ON INSTAGRAM</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(InstagramStrip);
