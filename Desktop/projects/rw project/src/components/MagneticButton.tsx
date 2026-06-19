/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";

export default function MagneticButton({ 
  children, 
  className = "", 
  onClick, 
  id,
  type = "button"
}: { 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void;
  id?: string;
  type?: "button" | "submit";
}) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    // Only apply magnetic effect on desktop with fine pointers
    const isHoverSupported = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isHoverSupported) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      
      // Limit range of movement to max 12 pixels for subtle elegance
      setCoords({ x: x * 0.22, y: y * 0.22 });
    };

    const handleMouseLeave = () => {
      setCoords({ x: 0, y: 0 });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      id={id}
      type={type}
      onClick={onClick}
      className={`relative transition-transform duration-[600ms] cubic-bezier(0.16, 1, 0.3, 1) will-change-transform ${className}`}
      style={{
        transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`
      }}
    >
      {children}
    </button>
  );
}
