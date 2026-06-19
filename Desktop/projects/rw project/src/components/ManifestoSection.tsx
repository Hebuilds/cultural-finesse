/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Shirt, Theater, Mic, Smile } from "lucide-react";

const ManifestoSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-black overflow-hidden relative">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Headline */}
          <div className="md:col-span-5 space-y-4 reveal-element">
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-gold mb-1 font-semibold">THE MANIFESTO</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase leading-[0.95]">
              A MOVEMENT, <br />
              NOT <span className="editorial-italic lowercase font-serif font-normal text-gold">just</span> <br />
              A BRAND.
            </h2>
          </div>

          {/* Right Story Copy and grid pillars info */}
          <div className="md:col-span-7 space-y-8 reveal-element">
            <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed">
              RW Project operates at the delicate crossways of <strong className="text-white font-medium">fashion, local heritage, performance, and shared experience</strong>. We construct physical gathering sanctuaries where young visionaries of Kigali connect, showcase, and are fully recognized.
              <br /><br />
              Each custom streetwear drop bears a message. Each live event acts as a chapter. Every individual who drapes our garments actively integrates themselves into our cooperative narrative.
            </p>

            {/* Four pillars of movement */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div style={{ transitionDelay: "100ms" }} className="border border-white/5 bg-surf1 p-5 rounded-2xl premium-card text-left reveal-element">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 border border-gold/15">
                  <Shirt className="w-4 h-4 text-gold" />
                </div>
                <h3 className="font-display text-[11px] tracking-[0.18em] uppercase text-white font-semibold mb-1">STREETWEAR</h3>
                <p className="text-xs text-white/50 leading-relaxed font-sans">
                  Limited physical releases expressing historical Rwandan legacies in modern visual silhouettes.
                </p>
              </div>

              <div style={{ transitionDelay: "200ms" }} className="border border-white/5 bg-surf1 p-5 rounded-2xl premium-card text-left reveal-element">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 border border-gold/15">
                  <Theater className="w-4 h-4 text-gold" />
                </div>
                <h3 className="font-display text-[11px] tracking-[0.18em] uppercase text-white font-semibold mb-1">STORYTELLING</h3>
                <p className="text-xs text-white/50 leading-relaxed font-sans">
                  Multi-sensory theatrical events. Devoid of basic spectatorship—everyone plays a live designated role.
                </p>
              </div>

              <div style={{ transitionDelay: "300ms" }} className="border border-white/5 bg-surf1 p-5 rounded-2xl premium-card text-left reveal-element">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 border border-gold/15">
                  <Mic className="w-4 h-4 text-gold" style={{ flexShrink: 0 }} />
                </div>
                <h3 className="font-display text-[11px] tracking-[0.18em] uppercase text-white font-semibold mb-1">HYBRID AUDIO</h3>
                <p className="text-xs text-white/50 leading-relaxed font-sans">
                  Live performance platforms connecting local acoustic guitar roots with direct golden electronic soundscapes.
                </p>
              </div>

              <div style={{ transitionDelay: "400ms" }} className="border border-white/5 bg-surf1 p-5 rounded-2xl premium-card text-left reveal-element">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 border border-gold/15">
                  <Smile className="w-4 h-4 text-gold" />
                </div>
                <h3 className="font-display text-[11px] tracking-[0.18em] uppercase text-white font-semibold mb-1">COLLECTIVE COOPERATION</h3>
                <p className="text-xs text-white/50 leading-relaxed font-sans">
                  No artificial social gates. Photographers, designers, and musical curators growing as a unified front.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(ManifestoSection);
