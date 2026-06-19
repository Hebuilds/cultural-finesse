/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Instagram, Menu } from "lucide-react";

interface NavigationProps {
  isLoaded: boolean;
  navScrolled: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isLoaded, navScrolled, setMobileMenuOpen, scrollToSection }) => {
  return (
    <nav
      style={{
        backgroundColor: navScrolled ? "rgba(5, 5, 5, 0.96)" : "transparent",
        borderBottomColor: navScrolled ? "rgba(255, 255, 255, 0.08)" : "transparent",
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(-15px)",
        transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, background-color 0.3s, border-color 0.3s"
      }}
      className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-5 lg:py-6 flex items-center justify-between border-b backdrop-blur-md"
    >
      <div 
        onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMobileMenuOpen(false); }}
        className="flex items-center gap-3 select-none cursor-pointer group"
        role="button"
        aria-label="RW Project Home Page"
      >
        <div className="w-10 h-10 rounded-full border border-white/80 group-hover:border-gold flex items-center justify-center bg-black shrink-0 transition-colors">
          <span 
            className="font-serif text-base font-extrabold text-white select-none flex items-baseline leading-none tracking-normal" 
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span className="italic font-semibold" style={{ marginRight: '-0.03em' }}>R</span>
            <span className="font-bold">W</span>
            <span className="font-sans text-[75%] font-black" style={{ marginLeft: '-0.03em' }}>.</span>
          </span>
        </div>
        <span className="font-display font-extrabold text-sm md:text-base tracking-[0.2em] text-white transition-colors group-hover:text-gold uppercase pt-0.5 pointer-events-none">
          RW <span className="text-gold">PROJECT</span>
        </span>
      </div>

      {/* Middle Navigation anchors - Hidden on Tablet (md and below) and only flex on Desktop (lg and up) */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-11">
        <button
          onClick={() => scrollToSection("events-section")}
          className="text-[11px] uppercase tracking-[0.25em] text-white/70 hover:text-white transition-all font-sans font-semibold"
        >
          Events
        </button>
        <button
          onClick={() => scrollToSection("casting-section")}
          className="text-[11px] uppercase tracking-[0.25em] text-white/70 hover:text-white transition-all font-sans font-semibold"
        >
          Cast ID
        </button>
        <button
          onClick={() => scrollToSection("collection-section")}
          className="text-[11px] uppercase tracking-[0.25em] text-white/70 hover:text-white transition-all font-sans font-semibold"
        >
          Collection
        </button>
        <button
          onClick={() => scrollToSection("experiences-section")}
          className="text-[11px] uppercase tracking-[0.25em] text-white/70 hover:text-white transition-all font-sans font-semibold"
        >
          Movement
        </button>
        <button
          onClick={() => scrollToSection("ticket-compiler-section")}
          className="text-[11px] uppercase tracking-[0.25em] text-white/70 hover:text-white transition-all font-sans font-semibold"
        >
          Access Pass
        </button>
      </div>

      {/* Instagram/Burger CTA block */}
      <div className="flex items-center gap-4">
        <a
        href="https://instagram.com/rw.project_"
          target="_blank"
          rel="noopener noreferrer"
          className="interactive-hover hidden lg:flex p-2 rounded-full border border-white/10 hover:border-gold hover:text-gold text-white/70 transition-all"
          title="Follow our Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>
        
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 rounded-full border border-white/10 text-white/80 hover:text-gold transition-all"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default React.memo(Navigation);
