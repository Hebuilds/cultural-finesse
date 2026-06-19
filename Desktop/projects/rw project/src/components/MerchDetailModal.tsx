/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MerchItem } from "../types";
import { X, Sparkles, Check, Send, ShoppingBag, Eye, Copy } from "lucide-react";

interface MerchDetailModalProps {
  item: MerchItem;
  onClose: () => void;
}

export default function MerchDetailModal({ item, onClose }: MerchDetailModalProps) {
  const [selectedSize, setSelectedSize] = useState(item.availableSizes[0] || "M");
  const [buyerName, setBuyerName] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !contact) return;
    
    setIsSubmitted(true);
  };

  const getReservationText = () => {
    return `[RW PROJECT MERCH RESERVATION]
Apparel Piece: ${item.name}
Meaning: ${item.meaning}
Selected Size: ${selectedSize}
Client Name: ${buyerName.toUpperCase()}
Contact Handle: ${contact}
Please notify me of the serial pickup at Agura Hub/Kigali.`;
  };

  const copyReservation = () => {
    navigator.clipboard.writeText(getReservationText());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl overflow-y-auto animate-fadeIn">
      {/* Background radial soft gold drop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_65%)] pointer-events-none" />
      
      <div className="relative w-full max-w-4xl bg-surf1 border border-gold/20 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[92vh] overflow-y-auto my-auto">
        
        {/* Close Button top-right corner */}
        <button
          onClick={onClose}
          className="interactive-hover absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 border border-white/10 text-white hover:border-gold hover:text-gold transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Cinematic Luxury Visual Frame */}
        <div className="md:col-span-5 relative min-h-[300px] border-b md:border-b-0 md:border-r border-white/5 overflow-hidden flex flex-col justify-between p-8 items-center">
          {/* Real image background */}
          {item.image && (
            <img 
              src={item.image} 
              alt={item.name} 
              className="absolute inset-0 w-full h-full object-cover" 
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          )}
          {/* Subtle design gradient on top of product image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/85 z-[1]" />

          <div className="absolute top-4 left-4 z-10">
            <span className="text-[9px] font-mono tracking-widest text-white/60 uppercase">SERIAL APPAREL COLLECTION</span>
          </div>

          {/* Fallback display typographic symbol in center - only if there is no product image */}
          {!item.image && (
            <div className="my-auto text-center flex flex-col items-center select-none py-10 relative z-10">
              <div className="font-display text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gold via-gold-light to-gold-dark tracking-tighter filter drop-shadow-[0_4px_12px_rgba(212,175,55,0.25)] leading-none mb-1 zoomIn font-bold">
                {item.visualWord}
              </div>
              <span className="text-[9px] font-mono tracking-[0.3em] text-gold uppercase mt-4">KIGALI CULTURAL DRIP</span>
              <div className="w-12 h-[1px] bg-gold/50 mt-3" />
            </div>
          )}

          <div className="text-center relative z-10">
            <span className="text-[9px] font-mono tracking-[0.2em] text-white/50 block mb-1">STORY MEANING</span>
            <span className="text-serif font-medium text-gold italic text-xs">&ldquo;{item.meaning}&rdquo;</span>
          </div>
        </div>

        {/* Right Side: Editorial Content & Reservation Forms */}
        <div className="md:col-span-7 p-8 flex flex-col justify-between min-h-[420px]">
          <div>
            {/* Tagline */}
            <span className="text-[10px] font-mono tracking-widest text-gold uppercase block mb-1">RW PROJECT EXCLUSIVE</span>
            
            {/* Title / Name */}
            <h4 className="font-display text-2xl font-semibold uppercase tracking-wider text-white mb-2 leading-none">
              {item.name}
            </h4>
            
            {/* Price badge */}
            <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/25 rounded-full text-gold-light font-mono text-xs tracking-wider mb-4 font-bold">
              {item.priceRwf.toLocaleString()} RWF
            </div>

            {/* Description Tagline */}
            <p className="text-sm font-sans font-medium text-white/90 leading-relaxed mb-4 border-l-2 border-gold pl-3 italic">
              {item.tagline}
            </p>

            {/* Detailed Story Paragraph */}
            <p className="text-xs text-white/60 leading-relaxed mb-6 font-sans">
              {item.detailedStory}
            </p>

            {/* Size selection */}
            <div className="mb-6">
              <span className="block text-[10px] font-mono tracking-widest text-white/40 uppercase mb-2 font-semibold">Select Streetwear Fit Sizing</span>
              <div className="flex gap-2">
                {item.availableSizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => !isSubmitted && setSelectedSize(sz)}
                    className={`interactive-hover w-11 h-11 font-mono text-xs tracking-wider rounded-xl border flex items-center justify-center transition-all ${
                      selectedSize === sz
                        ? "border-gold bg-gold text-black font-bold"
                        : "border-white/10 bg-white/5 text-white/60 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6">
            {!isSubmitted ? (
              <form onSubmit={handleReserveSubmit} className="space-y-4">
                <span className="block text-[10px] font-mono tracking-widest text-gold uppercase mb-2 font-semibold">SECURE SERIAL PRE-ORDER INQUIRY</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    placeholder="YOUR FULL NAME"
                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white uppercase placeholder-white/20 focus:outline-none focus:border-gold transition-all"
                  />
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="INSTAGRAM ID OR WHATSAPP NO."
                    className="bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/20 focus:outline-none focus:border-gold transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="interactive-hover w-full py-3 rounded-xl border border-gold hover:border-gold-light bg-gold text-black text-[11px] font-semibold tracking-widest uppercase transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>RESERVE AT KIGALI APPAREL VAULT</span>
                </button>
              </form>
            ) : (
              <div className="bg-gold/5 border border-gold/20 p-5 rounded-2xl animate-fadeIn">
                <div className="flex items-center gap-1.5 text-gold text-xs font-mono font-bold mb-2">
                  <Check className="w-4 h-4 text-gold animate-bounce" />
                  <span>PRE-ORDER CONFIGURED SUCCESSFULLY</span>
                </div>
                <p className="text-[11px] text-white/70 font-sans leading-relaxed mb-4">
                  Your details have been compiled. In keeping with direct-to-creator transparency, copy the direct order capsule below and share it with <span className="text-gold">@rw.project_</span> on Instagram for priority pickup.
                </p>

                <div className="flex gap-2.5">
                  <button
                    onClick={copyReservation}
                    className="interactive-hover flex-1 py-2.5 rounded-lg border border-white/10 bg-black/60 hover:bg-white hover:text-black hover:border-white text-white font-medium text-[10px] tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span>COPIED DOSSIER</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY ORDER SPEC CAPSULE</span>
                      </>
                    )}
                  </button>

                  <a
                    href="https://instagram.com/rw.project_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive-hover py-2.5 px-4 rounded-lg border border-gold bg-gold text-black font-semibold text-[10px] tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3 h-3" />
                    <span>SEND ON IG</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
