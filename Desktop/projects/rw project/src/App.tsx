/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { MerchItem } from "./types";

import CustomCursor from "./components/CustomCursor";
import CharacterRoll from "./components/CharacterRoll";
import TicketGenerator from "./components/TicketGenerator";
import MerchDetailModal from "./components/MerchDetailModal";
import Lenis from "lenis";

// Optimized Sub-sections
import Loader from "./components/Loader";
import MobileMenu from "./components/MobileMenu";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ManifestoSection from "./components/ManifestoSection";
import EventsSection from "./components/EventsSection";
import UpcomingEventsSection from "./components/UpcomingEventsSection";
import ExperiencesSection from "./components/ExperiencesSection";
import CollectionSection from "./components/CollectionSection";
import CommunitySection from "./components/CommunitySection";
import InstagramStrip from "./components/InstagramStrip";
import FooterSection from "./components/FooterSection";

export default function App() {
  // Preloader State
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Scrolled Navbar BG State
  const [navScrolled, setNavScrolled] = useState(false);
  
  // Selected Merch Detail State
  const [selectedMerch, setSelectedMerch] = useState<MerchItem | null>(null);

  // Floating Glowing Orb Ref pointers for buttery smooth direct-DOM parallax
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  // preloader simulation
  useEffect(() => {
    const start = Date.now();
    const duration = 1600; // 1.6s high-end kinetic loader
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setLoadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
        }, 300); // graceful fade
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Scroll Reveal Observer Setup
  useEffect(() => {
    if (!isLoaded) return;

    const timeout = setTimeout(() => {
      const elementsToObserve = document.querySelectorAll(".reveal-element, .reveal-image-container, .reveal-word");
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -40px 0px", // Trigger slightly before full view for premium feel
          threshold: 0.02,
        }
      );

      elementsToObserve.forEach((el) => observer.observe(el));

      return () => {
        elementsToObserve.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      };
    }, 250);

    return () => clearTimeout(timeout);
  }, [isLoaded]);

  // scroll listener with Lenis premium smooth scrolling
  useEffect(() => {
    if (!isLoaded) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    const handleScroll = () => {
      const sy = window.scrollY;
      
      // Update nav background scroll bar context state only when passing boundary
      // Avoid forced re-renders of the App tree unless state is truly different
      setNavScrolled((prev) => {
        const next = sy > 60;
        return prev === next ? prev : next;
      });
      
      // Directly manipulate orb styles so React does not re-render App.tsx on every pixel!
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate3d(${sy * 0.05}px, ${sy * 0.08}px, 0)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate3d(${-sy * 0.03}px, ${sy * 0.05}px, 0)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate3d(${-sy * 0.04}px, ${sy * 0.06}px, 0)`;
      }
    };

    lenis.on("scroll", handleScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };

  }, [isLoaded]);

  // Scroll to targeted section
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // nav thickness offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
    <CustomCursor />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Cellular cinematic Film Grain */}
        <div className="grain" aria-hidden="true" />

        {/* Floating Parallax Glowing Orbs - Soft luxury background light shifts */}
        <div 
          ref={orb1Ref}
          className="orb w-[500px] h-[500px] bg-gold opacity-[0.06] top-[-100px] right-[-100px] will-change-transform" 
          style={{ transform: "translate3d(0, 0, 0)" }}
          aria-hidden="true" 
        />
        <div 
          ref={orb2Ref}
          className="orb w-[350px] h-[350px] bg-gold-light opacity-[0.04] top-[40%] left-[-150px] will-change-transform" 
          style={{ transform: "translate3d(0, 0, 0)" }}
          aria-hidden="true" 
        />
        <div 
          ref={orb3Ref}
          className="orb w-[400px] h-[400px] bg-gold-dark opacity-[0.03] bottom-[15%] right-[-100px] will-change-transform" 
          style={{ transform: "translate3d(0, 0, 0)" }}
          aria-hidden="true" 
        />
      </div>
      
      <Loader isLoaded={isLoaded} loadProgress={loadProgress} />

      <MobileMenu 
        mobileMenuOpen={mobileMenuOpen} 
        closeMobileMenu={() => setMobileMenuOpen(false)} 
        scrollToSection={scrollToSection} 
      />

      <Navigation 
        isLoaded={isLoaded} 
        navScrolled={navScrolled} 
        setMobileMenuOpen={setMobileMenuOpen} 
        scrollToSection={scrollToSection} 
      />

      <HeroSection isLoaded={isLoaded} scrollToSection={scrollToSection} />

      {/* ==========================================
          MUTED TEXT MARQUEE SECTION
          ========================================== */}
      <div className="border-t border-b border-white/5 py-5 overflow-hidden select-none bg-black relative" aria-hidden="true">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex gap-16 text-[11px] font-mono tracking-[0.35em] text-white/30 uppercase animate-[scrollLeft_26s_linear_infinite]">
            <span>FASHION</span>
            <span className="text-gold">•</span>
            <span>STORYTELLING</span>
            <span className="text-gold">•</span>
            <span>MUSIC</span>
            <span className="text-gold">•</span>
            <span>COMMUNITY</span>
            <span className="text-gold">•</span>
            <span>EVENTS</span>
            <span className="text-gold">•</span>
            <span>CULTURE</span>
            <span className="text-gold">•</span>
            <span>IDENTITY</span>
            <span className="text-gold">•</span>
            <span>KIGALI</span>
            <span className="text-gold">•</span>
            <span>RWANDA</span>
            <span className="text-gold">•</span>
          </div>
          <div className="flex gap-16 text-[11px] font-mono tracking-[0.35em] text-white/30 uppercase animate-[scrollLeft_26s_linear_infinite]" aria-hidden="true">
            <span>FASHION</span>
            <span className="text-gold">•</span>
            <span>STORYTELLING</span>
            <span className="text-gold">•</span>
            <span>MUSIC</span>
            <span className="text-gold">•</span>
            <span>COMMUNITY</span>
            <span className="text-gold">•</span>
            <span>EVENTS</span>
            <span className="text-gold">•</span>
            <span>CULTURE</span>
            <span className="text-gold">•</span>
            <span>IDENTITY</span>
            <span className="text-gold">•</span>
            <span>KIGALI</span>
            <span className="text-gold">•</span>
            <span>RWANDA</span>
            <span className="text-gold">•</span>
          </div>
        </div>
      </div>

      <ManifestoSection />

      <EventsSection scrollToSection={scrollToSection} />

      {/* ==========================================
          INTERACTIVE SAY YOUR LINE CAST ROLL CHANGER
          ========================================== */}
      <section id="casting-section" className="py-16 px-6 md:px-12 bg-black border-t border-b border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-44 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="w-full max-w-5xl mx-auto py-4">
          <CharacterRoll />
        </div>
      </section>

      <UpcomingEventsSection scrollToSection={scrollToSection} />

      <ExperiencesSection />

      <CollectionSection onSelectItem={setSelectedMerch} />

      {/* ==========================================
          RSVP ACCESS TICKET GENERATOR COMPILER
          ========================================== */}
      <section id="ticket-compiler-section" className="py-24 px-6 md:px-12 bg-black relative">
        <div className="w-full max-w-5xl mx-auto space-y-12">
          <TicketGenerator />
        </div>
      </section>

      <CommunitySection />

      <InstagramStrip />

      <FooterSection scrollToSection={scrollToSection} />

      {/* ==========================================
          MERCH PRE-ORDER INQUIRY OVERLAY PORTAL
          ========================================== */}
      {selectedMerch && (
        <MerchDetailModal
          item={selectedMerch}
          onClose={() => setSelectedMerch(null)}
        />
      )}
    </>
  );
}
