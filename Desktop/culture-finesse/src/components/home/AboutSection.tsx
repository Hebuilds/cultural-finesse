import React from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';

const AboutSection: React.FC = () => {
  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <section
      ref={ref}
      className={`px-5 py-12 bg-[#2C2C2C] text-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-4">Culture Finesse</h2>
        <p className="text-gray-300 leading-relaxed">
          Born from the intersection of street culture and refined aesthetics. We create elevated essentials that speak without shouting. Every piece is designed with intention — for those who move with purpose.
        </p>
        <div className="mt-6 flex gap-4">
          <span className="text-sm uppercase tracking-wider text-[#9BAB7C]">Ethically made</span>
          <span className="text-sm uppercase tracking-wider text-[#9BAB7C]">Premium materials</span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;