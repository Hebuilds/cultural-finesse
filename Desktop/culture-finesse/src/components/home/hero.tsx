import React from 'react';
import { Link } from 'react-router-dom';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';

const Hero: React.FC = () => {
  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <section
      ref={ref}
      className={`px-5 py-10 md:py-14 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-md">
        <span className="text-sm uppercase tracking-widest text-[#4A5D23] font-medium">New Collection</span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3 text-[#2C2C2C]">
          Refined <br /> Streetwear
        </h1>
        <p className="text-gray-600 mt-4 text-base leading-relaxed">
          Premium essentials with an edge. Designed for the culture, crafted for finesse.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-[#2C2C2C] text-white px-8 py-4 rounded-full text-base font-medium shadow-lg hover:bg-[#1a1a1a] transition-all active:scale-95"
        >
          Shop Now
        </Link>
      </div>
      <div className="mt-8 h-48 w-full bg-gradient-to-br from-[#4A5D23]/20 to-[#2C2C2C]/10 rounded-3xl"></div>
    </section>
  );
};

export default Hero;