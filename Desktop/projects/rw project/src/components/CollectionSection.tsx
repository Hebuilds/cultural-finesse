/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MERCH_DATA } from "../data";
import { MerchItem } from "../types";

interface CollectionSectionProps {
  onSelectItem: (item: MerchItem) => void;
}

const CollectionSection: React.FC<CollectionSectionProps> = ({ onSelectItem }) => {
  return (
    <section id="collection-section" className="py-24 px-6 md:px-12 bg-surf1 relative">
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-45" />
      
      <div className="w-full max-w-5xl mx-auto space-y-12">
        
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold" aria-hidden="true" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-gold font-semibold">KIGALI STREETWEAR VANGUARD</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4.5xl font-extrabold tracking-tight text-white uppercase mt-2">
              THE COLLECTION SERIES
            </h2>
          </div>

          <span className="text-[10px] font-mono tracking-widest text-white/40 block">
            EST. KIGALI 2025
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MERCH_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="m-card group cursor-pointer flex flex-col justify-between bg-black border border-white/5 hover:border-gold/35 rounded-3xl p-5 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Decorative card image container layout */}
                <div className="aspect-[4/5] bg-surf1 border border-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden mb-5 z-[5]">
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    /* Fallback with visual display background logo */
                    <div className="font-display text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gold/15 to-transparent tracking-tighter transform group-hover:scale-105 group-hover:rotate-[6deg] transition-transform duration-500 select-none font-bold">
                      {item.visualWord}
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/85 to-transparent pointer-events-none z-[9]" />

                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-[8px] font-mono tracking-widest text-gold-light uppercase font-bold">RESERVATION PROTOCOL</span>
                  </div>
                </div>

                <span className="text-[9px] font-mono tracking-widest text-gold uppercase block mb-1">
                  {item.meaning}
                </span>
                
                <h4 className="font-display text-sm font-semibold tracking-wider text-white uppercase leading-tight mb-2 group-hover:text-gold transition-colors font-bold">
                  {item.name}
                </h4>
              </div>

              <div className="flex justify-between items-center border-t border-white/5 pt-3.5 mt-4">
                <span className="text-xs font-mono text-white/50">{item.priceRwf.toLocaleString()} RWF</span>
                <span className="text-[9px] font-mono tracking-widest text-gold group-hover:text-white uppercase transition-colors flex items-center gap-1 font-semibold">
                  <span>VIEW PIECE</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default React.memo(CollectionSection);
