/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface HeroSectionProps {
  isLoaded: boolean;
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isLoaded, scrollToSection }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const ambientLightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Fast-path Direct DOM Style assignment to bypass React scheduler entirely
    heroRef.current.style.background = `radial-gradient(1000px circle at ${x}% ${y}%, rgba(16, 42, 24, 0.5) 0%, rgba(7, 22, 12, 0.18) 35%, rgba(0, 0, 0, 0) 75%)`;
    if (ambientLightRef.current) {
      ambientLightRef.current.style.transform = `translate3d(${(x - 50) * 0.2}px, ${(y - 50) * 0.2}px, 0)`;
    }
  };

  const handleMouseLeave = () => {
    if (!heroRef.current) return;
    heroRef.current.style.background = `radial-gradient(1000px circle at 50% 50%, rgba(16, 42, 24, 0.3) 0%, rgba(7, 22, 12, 0.1) 45%, rgba(0, 0, 0, 0) 75%)`;
    if (ambientLightRef.current) {
      ambientLightRef.current.style.transform = `translate3d(0px, 0px, 0)`;
    }
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: `radial-gradient(1000px circle at 50% 50%, rgba(16, 42, 24, 0.3) 0%, rgba(7, 22, 12, 0.1) 45%, rgba(0, 0, 0, 0) 75%)`
      }}
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 py-20 lg:py-24 overflow-hidden bg-black select-none transition-all duration-500"
    >
      {/* Subtle grid accent inside the backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.012)_1px,transparent_1px)] bg-[size:40px_40px] opacity-80" />
      
      {/* Fine horizontal cinematic lens lines */}
      <div className="absolute top-1/4 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent pointer-events-none" />
      <div className="absolute top-2/3 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold/5 to-transparent pointer-events-none" />

      {/* Ambient aesthetic light shapes in background */}
      <div 
        ref={ambientLightRef}
        className="absolute w-[400px] h-[400px] rounded-full bg-emerald-950/25 blur-[120px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(0px, 0px, 0)`,
          top: '15%',
          left: '10%'
        }}
      />

      {/* Dark warm visual vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none z-[2]" />
      
      <div className="w-full max-w-5xl mx-auto relative z-10 space-y-8 md:space-y-11">
    
       
        {/* Balanced Display Headline: Powerful but Breathable */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-tight uppercase leading-[0.95] text-white">
          <span 
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s"
            }}
            className="block"
          >
            WE DON&apos;T
          </span>
          
          <span 
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s"
            }}
            className="block"
          >
            <span className="font-serif italic font-normal text-gold-light pr-3 tracking-wide select-none lowercase normal-case" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              just tell
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold/90 to-white font-black">
              STORIES,
            </span>
          </span>

          <span 
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s, opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s"
            }}
            className="block"
          >
            WE WEAR
          </span>

          <span 
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.9s, opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.9s"
            }}
            className="block"
          >
            <span className="font-serif italic font-normal text-gold-light pr-3 tracking-wide select-none lowercase normal-case" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              who we
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold font-black">
              ARE.
            </span>
          </span>
        </h1>

        {/* Copy and interactive CTA elements */}
        <div 
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(25px)",
            transition: "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 1.1s, opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 1.1s"
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-t border-white/5 pt-8"
        >
          <div className="md:col-span-8 space-y-4">
            <p className="font-serif italic text-base md:text-lg border-l-2 border-gold/40 pl-4 text-gold-light max-w-2xl leading-relaxed">
              &ldquo;Everyone gets a role. Everyone gets a line. Everyone becomes part of the story. A story tonight. A movie in real life. Then, the music.&rdquo;
            </p>
            <p className="font-sans text-xs md:text-sm leading-relaxed text-white/70 max-w-2xl">
              The RW Project Experience is not just another night out. It&apos;s a curated sequence of two back-to-back worlds—a live immersive communal narrative followed by a full exclusive afterparty club takeover. One single ticket moves you through it all, from the screen directly to the afters.
            </p>
          </div>
          
          <div className="md:col-span-4 flex flex-wrap gap-4 md:justify-end">
            <MagneticButton
              onClick={() => scrollToSection("events-section")}
              className="interactive-hover px-6 py-3.5 bg-gradient-to-r from-gold-dark to-gold text-black text-xs tracking-widest font-semibold uppercase rounded-full shadow-lg shadow-gold/5 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span>JOIN MOVEMENT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
            
            <MagneticButton
              onClick={() => scrollToSection("collection-section")}
              className="interactive-hover px-6 py-3.5 border border-white/10 hover:border-gold hover:text-gold bg-transparent text-white text-xs tracking-widest font-semibold uppercase rounded-full w-full sm:w-auto justify-center"
            >
              <span>SHOP DROPS</span>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll Cue indicator far bottom */}
      <div 
        style={{
          opacity: isLoaded ? 0.5 : 0,
          transform: isLoaded ? "translateY(0)" : "translateY(15px)",
          transition: "transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 1.3s, opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 1.3s"
        }}
        className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3 z-10 select-none pointer-events-none"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gold-light animate-scroll-down" />
        </div>
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/40">SCROLL</span>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
