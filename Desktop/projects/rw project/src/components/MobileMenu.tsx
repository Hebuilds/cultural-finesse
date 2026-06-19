/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { X, Instagram } from "lucide-react";

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  closeMobileMenu: () => void;
  scrollToSection: (id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ mobileMenuOpen, closeMobileMenu, scrollToSection }) => {
  return (
<div
      className={`fixed inset-0 z-[490] bg-black/98 flex flex-col justify-between p-8 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        mobileMenuOpen ? "translate-y-0 visible" : "-translate-y-[120%] invisible"
      }`}
      aria-label="Mobile Navigation"
    >
      {/* Mobile Header Branding */}
      <div className="flex justify-between items-center border-b border-white/5 pb-4">
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
          <span className="font-display font-black text-sm tracking-[0.2em] text-white uppercase pt-0.5">
            RW <span className="text-gold">PROJECT</span>
          </span>
        </div>
        <button 
          onClick={closeMobileMenu}
          className="p-2 border border-white/10 rounded-full text-white hover:text-gold transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Big Layout Navigation Links */}
      <div className="space-y-6 my-auto pt-8 font-bold">
        <button
          onClick={() => scrollToSection("events-section")}
          className="font-display text-4xl block text-left uppercase text-white font-bold hover:text-gold active:text-gold active:scale-95 transition-all duration-150"
        >
          Events
        </button>
        <button
          onClick={() => scrollToSection("casting-section")}
          className="font-display text-4xl block text-left uppercase text-white font-bold hover:text-gold active:text-gold active:scale-95 transition-all duration-150"
        >
          Cast ID
        </button>
        <button
          onClick={() => scrollToSection("collection-section")}
          className="font-display text-4xl block text-left uppercase text-white font-bold hover:text-gold active:text-gold active:scale-95 transition-all duration-150"
        >
          Collection
        </button>
        <button
          onClick={() => scrollToSection("experiences-section")}
          className="font-display text-4xl block text-left uppercase text-white font-bold hover:text-gold active:text-gold active:scale-95 transition-all duration-150"
        >
          Movement
        </button>
        <button
          onClick={() => scrollToSection("ticket-compiler-section")}
          className="font-display text-4xl block text-left uppercase text-white font-bold hover:text-gold active:text-gold active:scale-95 transition-all duration-150"
        >
          Access Pass
        </button>
        <button
          onClick={() => scrollToSection("community-section")}
          className="font-display text-4xl block text-left uppercase text-white font-bold hover:text-gold active:text-gold active:scale-95 transition-all duration-150"
        >
          Collective
        </button>
      </div>

      {/* Footer info */}
      <div className="border-t border-white/10 pt-6">
        <div className="flex justify-between items-center">
          <span className="text-xs text-white/40 tracking-wider">@rw.project_ · Kigali, Rwanda</span>
          <a 
            href="https://instagram.com/rw.project_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-gradient-to-r from-gold-dark to-gold text-black rounded-full"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MobileMenu);
