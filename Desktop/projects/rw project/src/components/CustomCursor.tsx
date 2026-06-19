/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const mouseRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Enable only on fine-pointer devices supporting hover, and screens larger than tablet size (1024px)
    const isHoverSupported = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const isLargeScreen = window.innerWidth >= 1024;
    if (!isHoverSupported || !isLargeScreen) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Initially hide cursor until moved
    dot.style.opacity = "0";
    ring.style.opacity = "0";

  const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

  let animationId: number;
    const lerp = () => {
      // Dot follows the real cursor every frame (smooth, capped to screen refresh rate)
      dot.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0) scale(${isHoveredRef.current ? 1.5 : 1})`;

      const dx = mouseRef.current.x - trailRef.current.x;
      const dy = mouseRef.current.y - trailRef.current.y;
      
      // Fast check: if delta is extremely minimal, avoid style updates
      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
        trailRef.current.x += dx * 0.12;
        trailRef.current.y += dy * 0.12;
        ring.style.transform = `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0)`;
      }
      
      animationId = requestAnimationFrame(lerp);
    };
    
    animationId = requestAnimationFrame(lerp);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.closest('[role="button"]') ||
          target.closest(".m-card") ||
          target.closest(".xp-card") ||
          target.closest(".ev-card") ||
          target.closest(".interactive-hover"))
      ) {
        if (!isHoveredRef.current) {
          isHoveredRef.current = true;
          // Apply hover classes/styles directly in DOM for instant visual feedback
          dot.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0) scale(1.5)`;
          ring.style.width = "64px";
          ring.style.height = "64px";
          ring.style.backgroundColor = "rgba(212, 175, 55, 0.08)";
          ring.style.borderColor = "rgba(212, 175, 55, 0.7)";
        }
      } else {
        if (isHoveredRef.current) {
          isHoveredRef.current = false;
          // Revert hover classes/styles directly in DOM
          dot.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0) scale(1)`;
          ring.style.width = "36px";
          ring.style.height = "36px";
          ring.style.backgroundColor = "transparent";
          ring.style.borderColor = "rgba(212, 175, 55, 0.35)";
        }
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Golden core dot */}
      <div
        ref={dotRef}
        className="hidden lg:block fixed top-0 left-0 w-2 h-2 rounded-full bg-gold pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 will-change-transform transition-transform duration-150 ease-out"
        style={{ opacity: 0 }}
      />
      
      {/* Floating delayed outer outline ring */}
      <div
        ref={ringRef}
        className="hidden lg:block fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border border-gold/40 -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          width: "36px",
          height: "36px",
          backgroundColor: "transparent",
          borderColor: "rgba(212, 175, 55, 0.35)",
          transition: "width 0.25s ease-out, height 0.25s ease-out, background-color 0.25s ease-out, border-color 0.25s ease-out",
          opacity: 0
        }}
      />
    </>
  );
}
