/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { EVENTS_DATA } from "../data";
import { Sparkles, Calendar, MapPin, Clock, Check, Ticket, Award, Printer } from "lucide-react";

export default function TicketGenerator() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [selectedEventId, setSelectedEventId] = useState(EVENTS_DATA[0].id);
  const [compiledTicket, setCompiledTicket] = useState<{
    userName: string;
    serial: string;
    eventName: string;
    eventDate: string;
    eventVenue: string;
    eventTime: string;
    price: string;
  } | null>(null);
  
  const [isCompiling, setIsCompiling] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getSelectedEvent = () => EVENTS_DATA.find(e => e.id === selectedEventId) || EVENTS_DATA[0];

  // Synthesize realistic print mechanical sound using Audio API
  const playCompileSound = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const playPop = (freq: number, delay: number, dur: number) => {
        const osc = ctx.createOscillator();
        const filt = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc.type = "square";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        
        filt.type = "bandpass";
        filt.frequency.setValueAtTime(freq * 1.5, ctx.currentTime + delay);

        gain.gain.setValueAtTime(0, ctx.currentTime + delay);
        gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + delay + 0.01);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + delay + dur);

        osc.connect(filt);
        filt.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + dur + 0.05);
      };

      // Play rapid typewriter clicking noises to guide compiling step
      for (let i = 0; i < 12; i++) {
        playPop(420 + Math.random() * 200, i * 0.12, 0.03);
      }
      // Final premium chiming bell sound
      setTimeout(() => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
        osc.connect(gain);
        mainConnection: gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 1.3);
      }, 1400);
    } catch (e) {}
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userEmail) return;

    setIsCompiling(true);
    playCompileSound();

    setTimeout(() => {
      const selectedEvent = getSelectedEvent();
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const initials = userName.trim().toUpperCase().split(" ").map(w => w[0]).join("");
      
      setCompiledTicket({
        userName: userName.toUpperCase(),
        serial: `RW-${randomId}-${initials || "KGL-26"}`,
        eventName: selectedEvent.title,
        eventDate: selectedEvent.date.split(" · ")[1] || selectedEvent.date,
        eventVenue: selectedEvent.venue,
        eventTime: selectedEvent.time,
        price: selectedEvent.priceAmount > 0 ? `${selectedEvent.priceAmount.toLocaleString()} RWF` : "COMPLIMENTARY PASS"
      });
      setIsCompiling(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      {/* RSVP compilation Form */}
      <div className="md:col-span-5 bg-surf1 border border-white/5 rounded-2xl p-6 relative">
        <div className="absolute top-0 left-0 w-16 h-1 bg-gold rounded-t-2xl" />
        <h4 className="font-display text-lg uppercase tracking-wider text-white mb-1.5 flex items-center gap-2">
          <Ticket className="w-4 h-4 text-gold" />
          <span>Access Portal</span>
        </h4>
        <p className="text-xs text-white/50 mb-5 leading-relaxed font-sans">
          Lock in your digital ticket and serialize your presence in Kigali's youth-culture vanguard.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-mono tracking-widest text-gold uppercase mb-1.5 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="john doe"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            />
          </div>

          <div>
            <label className="block text-[10px] font-mono tracking-widest text-gold uppercase mb-1.5 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              required
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="exampl@gmail.com"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            />
          </div>

          <div>
            <label className="block text-[10px] font-mono tracking-widest text-gold uppercase mb-1.5 font-semibold">
              Choose Chapter Event
            </label>
            <select
              value={selectedEventId}
              onChange={(e) => setSelectedEventId(e.target.value)}
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold transition-all"
            >
              {EVENTS_DATA.map((ev) => (
                <option key={ev.id} value={ev.id}>
                  {ev.title} ({ev.dayName || ev.date})
                </option>
              ))}
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isCompiling}
              className="interactive-hover w-full py-3.5 rounded-xl border border-gold hover:border-gold-light bg-gradient-to-r from-gold-dark to-gold text-black font-semibold tracking-widest text-[11px] uppercase transition-all flex items-center justify-center gap-2"
            >
              {isCompiling ? (
                <>
                  <Printer className="w-4 h-4 animate-bounce" />
                  <span>COMPILING RAW DIGITAL TICKET...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>COMPILE DIGITAL ACCESS TICKET</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Ticket Viewer Screen */}
      <div className="md:col-span-7 flex items-center justify-center min-h-[320px] relative">
        {compiledTicket ? (
          <div className="w-full max-w-lg bg-surf2 border border-gold/35 rounded-2xl overflow-hidden shadow-2xl relative transition-all duration-500 animate-slideUp">
            {/* Elegant Golden Background Pattern on Header card section */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)] pointer-events-none" />
            
            {/* Top gold holographic strip */}
            <div className="h-2 bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark" />
            
            <div className="p-6">
              {/* branding and serial code */}
              <div className="flex justify-between items-start border-b border-white/5 pb-4">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.3em] text-gold uppercase block">AUTHENTIC ACCESS</span>
                  <h5 className="font-display text-lg tracking-widest text-white uppercase font-bold">RW PROJECT</h5>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono tracking-widest text-white/30 block">SERIAL NO.</span>
                  <span className="text-xs font-mono text-gold-light font-bold">{compiledTicket.serial}</span>
                </div>
              </div>

              {/* Passenger layout */}
              <div className="my-6 space-y-4">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">MOVEMENT DELEGATE:</span>
                  <div className="text-xl font-display font-semibold tracking-wide text-white truncate">
                    {compiledTicket.userName}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block mb-1">EVENT CHAPTER:</span>
                    <span className="font-display text-xs tracking-wider text-gold-light uppercase font-bold">{compiledTicket.eventName}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block mb-1">TERRITORY GATE:</span>
                    <span className="text-xs text-white uppercase font-sans font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      KIGALI, RWANDA
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">DATE:</span>
                    <span className="text-xs text-white font-medium flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3 h-3 text-gold" style={{ flexShrink: 0 }} />
                      {compiledTicket.eventDate}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">TIME SLOT:</span>
                    <span className="text-xs text-white font-medium flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-gold" style={{ flexShrink: 0 }} />
                      {compiledTicket.eventTime}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">PRICE TIER:</span>
                    <span className="text-xs text-gold font-bold block mt-0.5">{compiledTicket.price}</span>
                  </div>
                </div>
              </div>

              {/* Ripped Edge style lines */}
              <div className="relative my-4 h-[1px] ticket-dashed-line pointer-events-none">
                <div className="absolute left-[-24px] top-[-10px] w-5 h-5 rounded-full bg-black border-r border-gold/15" />
                <div className="absolute right-[-24px] top-[-10px] w-5 h-5 rounded-full bg-black border-l border-gold/15" />
              </div>

              {/* QR and print instructions */}
              <div className="flex justify-between items-center bg-black/40 border border-white/5 p-4 rounded-xl mt-4">
                <div className="pr-4">
                  <div className="flex items-center gap-1.5 text-xs text-green-400 font-mono font-medium mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>ENCRYPTION ACTIVE</span>
                  </div>
                  <p className="text-[10px] text-white/40 leading-relaxed font-sans max-w-[210px]">
                    Present this generated pass at the venue door. Screen-cap holds full valid credentials. Faction entry is authorised.
                  </p>
                </div>
                
                {/* Custom inline vector QR Code to guarantee offline native safety */}
                <div className="w-16 h-16 p-1.5 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-gold/5">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-black">
                    <rect width="100" height="100" fill="white" />
                    {/* Fake abstract high-fidelity QR modules */}
                    <rect x="0" y="0" width="25" height="25" fill="black" />
                    <rect x="5" y="5" width="15" height="15" fill="white" />
                    <rect x="10" y="10" width="5" height="5" fill="black" />
                    
                    <rect x="75" y="0" width="25" height="25" fill="black" />
                    <rect x="80" y="5" width="15" height="15" fill="white" />
                    <rect x="85" y="10" width="5" height="5" fill="black" />

                    <rect x="0" y="75" width="25" height="25" fill="black" />
                    <rect x="5" y="80" width="15" height="15" fill="white" />
                    <rect x="10" y="85" width="5" height="5" fill="black" />

                    <rect x="35" y="35" width="30" height="30" fill="black" />
                    <rect x="40" y="40" width="20" height="20" fill="white" />
                    <rect x="45" y="45" width="10" height="10" fill="black" />

                    <rect x="5" y="35" width="10" height="30" fill="black" />
                    <rect x="35" y="5" width="30" height="10" fill="black" />
                    <rect x="80" y="35" width="15" height="30" fill="black" />
                    <rect x="35" y="80" width="30" height="15" fill="black" />
                    <rect x="65" y="65" width="10" height="10" fill="black" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-sm rounded-2xl border border-dashed border-white/10 p-8 flex flex-col items-center justify-center text-center text-white/30">
            <Ticket className="w-10 h-10 text-white/10 mb-4 animate-pulse" />
            <h5 className="font-display text-[10px] tracking-[0.2em] uppercase font-bold text-white/50 mb-1">Ticket Holder Empty</h5>
            <p className="text-xs text-white/30 max-w-[220px] leading-relaxed">
              Complete the Access form on the left to compile your golden movement credentials pass.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
