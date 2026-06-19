/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LoaderProps {
  isLoaded: boolean;
  loadProgress: number;
}

const Loader: React.FC<LoaderProps> = ({ isLoaded, loadProgress }) => {
  return (
    <div
      style={{
        opacity: isLoaded ? 0 : 1,
        visibility: isLoaded ? "hidden" : "visible",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.6s"
      }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center p-6 h-screen-ios"
      role="progressbar"
      aria-valuenow={loadProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading RW Project Cinematic Space"
    >
      <div className="text-center space-y-4 max-w-sm">
        {/* Typographic logo with Instagram brand style */}
        <div className="flex flex-col items-center justify-center space-y-4 select-none animate-fadeIn">
          <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center animate-pulse duration-[2000ms] mx-auto">
            <span 
              className="font-serif text-5xl font-extrabold text-white select-none flex items-baseline leading-none tracking-normal" 
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="italic font-semibold" style={{ marginRight: '-0.04em' }}>R</span>
              <span className="font-bold">W</span>
              <span className="font-sans text-4xl font-black" style={{ marginLeft: '-0.04em' }}>.</span>
            </span>
          </div>
          <h2 className="font-display text-xl font-extrabold text-white tracking-[0.3em] uppercase leading-none pt-2">
            RW <span className="text-gold">PROJECT</span>
          </h2>
        </div>

        <div className="font-mono text-[9px] tracking-[0.45em] text-white/50 uppercase mt-2 select-none">
          KIGALI · London · New York
        </div>

        {/* Golden Progress bar track container */}
        <div className="w-44 h-[2px] bg-white/10 rounded-full mx-auto relative overflow-hidden mt-6">
          <div
            className="absolute left-0 top-0 h-full bg-gold transition-all duration-100 ease-out"
            style={{ width: `${loadProgress}%` }}
          />
        </div>
        
        <div className="font-mono text-[10px] text-white/30 tracking-widest mt-2 shrink-0">
          {loadProgress}% SERIALIZING EXPERIENCE
        </div>
      </div>
    </div>
  );
};

export default React.memo(Loader);
