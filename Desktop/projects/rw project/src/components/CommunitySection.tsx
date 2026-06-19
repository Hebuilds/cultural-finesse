/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { COMMUNITY_PHOTOS } from "../data";

const CommunitySection: React.FC = () => {
  return (
    <section id="community-section" className="py-20 px-6 md:px-12 bg-black relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto space-y-16">
        
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-gold tracking-[0.25em] font-mono text-[10px] block font-semibold">JOIN THE COLLECTIVE</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight uppercase leading-none text-white">
            KIGALI&apos;S CREATIVE <br />
            <span className="editorial-italic lowercase font-serif font-normal text-gold">cooperative</span>
          </h2>
          <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans">
            Photographers, streetwear designers, acoustic soundists, visual weavers, and organic models. One collective voice. One shared movement.
          </p>
        </div>

        {/* Staggered Masonry-style Grid with abstract colors mirroring a high fashion booklet */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-2 relative">
          
          {COMMUNITY_PHOTOS.map((ph, idx) => {
            // Map custom responsive spans to provide spectacular visual rhythm
            let colSpan = "md:col-span-3";
            if (idx === 0) colSpan = "md:col-span-6 md:row-span-2 min-h-[300px]";
            if (idx === 1) colSpan = "md:col-span-3";
            if (idx === 4) colSpan = "md:col-span-6";

            return (
              <div
                key={ph.id}
                className={`relative rounded-2xl overflow-hidden border border-white/5 bg-surf1 group flex flex-col justify-between p-6 ${colSpan}`}
              >
                {/* Real Image Background */}
                {ph.image && (
                  <img 
                    src={ph.image} 
                    alt={ph.lbl} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                {/* Fallback gradient if no image */}
                {!ph.image && (
                  <div className="absolute inset-0" style={{ background: ph.gradient }} />
                )}
                {/* Dark premium vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/80 z-[1]" />

                {/* Glass shimmer overlay */}
                <div className="absolute inset-0 bg-white/[0.01] pointer-events-none group-hover:bg-gold/[0.02] transition-colors z-[2]" />
                
                <div className="flex justify-between items-center relative z-10">
                  <span className="text-[9px] font-mono tracking-widest text-gold bg-black/80 px-2.5 py-1 rounded-sm uppercase font-bold">
                    {ph.lbl}
                  </span>
                  <span className="text-[10px] text-white/40 font-mono">0{idx+1}</span>
                </div>

                <div className="mt-20 relative z-10 text-left">
                  <h5 className="font-display text-xs tracking-wider uppercase text-white font-bold">
                    {ph.storySegment}
                  </h5>
                  <span className="text-[9px] font-mono text-white/40 block mt-1">
                    © PHOTO BY: {ph.photographer}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Live numbers dynamic count panel */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-white/5 bg-surf1 rounded-3xl overflow-hidden text-center justify-between items-center">
          
          <div className="p-8 border-b sm:border-b-0 sm:border-r border-white/5 space-y-1">
            <span className="text-display text-4xl md:text-5xl lg:text-6xl text-gold tracking-tight block font-extrabold animate-pulse font-bold">
              360+
            </span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase block">
              CREATIVE VANGUARD
            </span>
          </div>

          <div className="p-8 border-b sm:border-b-0 sm:border-r border-white/5 space-y-1">
            <span className="text-display text-4xl md:text-5xl lg:text-6xl text-gold tracking-tight block font-extrabold font-bold">
              5+
            </span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase block">
              MAJOR TAKEOVERS
            </span>
          </div>

          <div className="p-8 space-y-1">
            <span className="text-display text-4xl md:text-5xl lg:text-6xl text-gold tracking-tight block font-extrabold font-bold">
              ∞
            </span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase block">
              STORIES WOVEN
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default React.memo(CommunitySection);
