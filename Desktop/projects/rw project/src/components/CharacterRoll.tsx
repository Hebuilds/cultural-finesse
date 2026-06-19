/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CHARACTER_TEMPLATES } from "../data";
import { CharacterCard } from "../types";
import { Sparkles, RefreshCw, EyeOff, Check, Copy } from "lucide-react";

export default function CharacterRoll() {
  const [character, setCharacter] = useState<CharacterCard | null>(null);
  const [isRolling, setIsRolling] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const rollCharacter = () => {
    setIsRolling(true);
    setIsFlipped(false);
    
    // Simulate luxury shuffle effect
    let count = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * CHARACTER_TEMPLATES.length);
      setCharacter(CHARACTER_TEMPLATES[randomIndex]);
      count++;
      if (count > 8) {
        clearInterval(interval);
        setIsRolling(false);
      }
    }, 120);
  };

  const copyDossier = () => {
    if (!character) return;
    const text = `[RW PROJECT - SAY YOUR LINE CAST]
Character Profile: ${character.name}
Vibe: ${character.vibe}
Faction Alliance: ${character.allianceVibe}
Starting Line: "${character.startingLine}"
Confidential Mission: ${character.secretObjective}`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <div className="w-full text-center mb-6">
        <span className="text-gold uppercase tracking-[0.3em] text-[10px] block mb-2">IMMERSIVE AUDIENCE PROTOCOL</span>
        <h3 className="font-display font-semibold text-2xl uppercase tracking-wider text-white">Cast Dossier Generator</h3>
        <p className="text-xs text-sans text-white/50 max-w-xs mx-auto mt-2 leading-relaxed">
          Receive a random interactive identity for Say Your Line. Take your script, fulfill your faction role, and wear who you are.
        </p>
      </div>

      {/* 3D card wrapper */}
      <div className="relative w-full aspect-[4/3] max-w-[380px] h-[340px] perspective-[1000px] cursor-pointer mb-8">
        <div
          className="relative w-full h-full transition-all duration-700 select-none transform-style-3d shadow-2xl"
          style={{
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
          }}
          onClick={() => character && setIsFlipped(!isFlipped)}
        >
          {/* FRONT FACE (Default or Character Preview) */}
          <div className="absolute inset-0 w-full h-full rounded-2xl border border-gold/15 bg-surf1 p-6 flex flex-col justify-between backface-hidden overflow-hidden">
            {/* Top-right corner diagonal gold light wrap */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/15 to-transparent blur-md pointer-events-none" />
            
            {/* Header branding */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="font-display text-[10px] tracking-[0.25em] text-gold font-bold">RW PROJECT 2026</span>
              <span className="font-mono text-[9px] text-white/30">CAST ID // {character ? `0${character.id.split("-")[1]}` : "XX"}</span>
            </div>

            {character ? (
              <div className="my-auto py-2 flex flex-col gap-2">
                <span className="font-display text-xs text-gold tracking-wide uppercase font-semibold">{character.allianceVibe}</span>
                <h4 className="font-display text-2xl text-white tracking-wider uppercase leading-none font-bold">
                  {character.name}
                </h4>
                <div className="mt-2 text-[11px] font-mono tracking-wider bg-white/5 py-1 px-2 border-l border-gold rounded-r inline-block max-w-max text-gold-light">
                  {character.vibe}
                </div>
                
                <p className="mt-4 text-xs font-serif italic text-white/80 leading-relaxed border-t border-white/5 pt-3">
                  &ldquo;{character.startingLine}&rdquo;
                </p>
              </div>
            ) : (
              <div className="my-auto text-center py-6 flex flex-col items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full border border-dashed border-gold/30 flex items-center justify-center text-gold opacity-60">
                  <EyeOff className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">CLASSIFIED PROFILE</span>
                <p className="text-xs text-white/30 max-w-[200px] mx-auto mt-1 leading-snug">
                  Cast profile is unassigned. Press the trigger to forge your Kigali line.
                </p>
              </div>
            )}

            {/* Bottom metadata card footer */}
            <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-white/40 border-t border-white/5 pt-3">
              <span>FAC: CASTING AGURA HUB</span>
              {character && <span className="text-gold font-bold uppercase animate-pulse">TAP TO FLIP MISSION</span>}
            </div>
          </div>

          {/* BACK FACE (Interactive Secrets/Objective) */}
          <div className="absolute inset-0 w-full h-full rounded-2xl border border-gold bg-gradient-to-b from-surf1 to-black/95 p-6 flex flex-col justify-between backface-hidden [transform:rotateY(180deg)] overflow-hidden">
            {/* Holographic grid texture on back */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:14px_14px]" />
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gold/20 pb-3 relative z-10">
              <span className="font-display text-[10px] tracking-[0.25em] text-white">CONFIDENTIAL MANDATE</span>
              <span className="font-mono text-[9px] text-gold">STATUS: UNCONFIRMED</span>
            </div>

            {character && (
              <div className="my-auto py-2 relative z-10">
                <div className="inline-block px-1.5 py-0.5 bg-red-900/40 text-red-400 border border-red-500/30 text-[8px] font-mono tracking-[0.15em] rounded mb-2 uppercase">
                  ACTIVE MISSION OBJECTIVE
                </div>
                <h5 className="font-display text-sm tracking-wide text-white uppercase border-b border-white/5 pb-1.5 mb-2 font-semibold">
                  SECRET DIRECTIVE:
                </h5>
                <p className="text-xs leading-relaxed text-gold-light/95 font-sans bg-gold/5 border border-gold/10 p-3 rounded-xl italic">
                  &ldquo;{character.secretObjective}&rdquo;
                </p>

                <div className="mt-3 flex gap-2">
                  <div className="text-[10px] font-mono text-white/40">
                    Target:
                  </div>
                  <div className="text-[10px] font-mono text-gold-light uppercase">
                    Agura Hub Final Takeover
                  </div>
                </div>
              </div>
            )}

            {/* Bottom */}
            <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-white/40 border-t border-white/5 pt-3 relative z-10">
              <span className="text-red-400/80">DO NOT EXPOSE DOSSIER</span>
              <span className="text-white hover:text-gold uppercase">TAP TO FLIP BACK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button
          onClick={rollCharacter}
          disabled={isRolling}
          className="interactive-hover px-6 py-3 rounded-full border border-gold bg-gold text-black font-semibold tracking-widest text-[11px] uppercase transition-all duration-300 hover:bg-white hover:border-white hover:shadow-lg disabled:opacity-55 flex items-center gap-2"
        >
          {isRolling ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Casting...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{character ? "Re-Roll Identity" : "Forge Your Identity"}</span>
            </>
          )}
        </button>

        {character && (
          <button
            onClick={copyDossier}
            className="interactive-hover px-5 py-3 rounded-full border border-white/10 bg-black/60 hover:bg-white hover:text-black hover:border-white text-white font-medium tracking-widest text-[11px] uppercase transition-all flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Dossier</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
