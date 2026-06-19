/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Theater, Sparkles, Mic, Tv, Users } from "lucide-react";
import { EXPERIENCES_DATA } from "../data";

const ExperiencesSection: React.FC = () => {
  const experiencesTrackRef = useRef<HTMLDivElement>(null);

  const scrollExperiences = (direction: "left" | "right") => {
    if (!experiencesTrackRef.current) return;
    const scrollAmount = 340;
    const currentScroll = experiencesTrackRef.current.scrollLeft;
    const targetScroll = direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount;
    
    experiencesTrackRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth"
    });
  };

  return (
    <section id="experiences-section" className="py-20 px-6 md:px-12 bg-black overflow-hidden relative">
      <div className="w-full max-w-5xl mx-auto space-y-10">
        
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold" aria-hidden="true" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-gold font-semibold">WHAT WE CONSTRUCT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase mt-2 pb-1">
              IMMERSIVE SPECTRA
            </h2>
          </div>
          
          {/* Horizontal Control selectors */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => scrollExperiences("left")}
              title="Scroll portfolio left"
              className="interactive-hover w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => scrollExperiences("right")}
              title="Scroll portfolio right"
              className="interactive-hover w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizonal scroll container */}
        <div
          ref={experiencesTrackRef}
          className="flex gap-4 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {EXPERIENCES_DATA.map((xp) => (
            <div
              key={xp.id}
              className="snap-start shrink-0 w-[295px] sm:w-[325px] border border-white/5 bg-surf1 p-6 md:p-8 rounded-3xl flex flex-col justify-between min-h-[380px] hover:border-gold/30 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    {xp.id === "xp-1" && <Theater className="w-6 h-6 text-gold" />}
                    {xp.id === "xp-2" && <Sparkles className="w-6 h-6 text-gold" />}
                    {xp.id === "xp-3" && <Mic className="w-6 h-6 text-gold" />}
                    {xp.id === "xp-4" && <Tv className="w-6 h-6 text-gold" />}
                    {xp.id === "xp-5" && <Users className="w-6 h-6 text-gold" />}
                  </div>
                  <span className="font-display text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent leading-none font-extrabold select-none">
                    {xp.num}
                  </span>
                </div>
                
                <h4 className="font-display text-base font-semibold tracking-wider uppercase text-white mt-8 mb-2 leading-tight">
                  {xp.name}
                </h4>

                <p className="text-xs text-white/50 leading-relaxed font-sans">
                  {xp.longText}
                </p>
              </div>

              <div className="border-t border-white/5 pt-4 mt-6">
                <span className="text-[8px] font-mono tracking-widest text-gold uppercase font-semibold">
                  RW PROJECT EXPERIENCE
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default React.memo(ExperiencesSection);
