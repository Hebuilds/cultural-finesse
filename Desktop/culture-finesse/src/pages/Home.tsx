import React, { useState } from 'react';
import Hero from '../components/home/Hero';
import CategoryPills from '../components/home/CategoryPills';
import FeaturedSection from '../components/home/FeaturedSection';
import AboutSection from '../components/home/AboutSection';
import { staticProducts, staticCategories } from '../data/products';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const featuredProducts = staticProducts.filter(p => p.is_featured).slice(0, 6);

  return (
    <>
      <Hero />
      <CategoryPills categories={staticCategories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <FeaturedSection products={featuredProducts} />
      <AboutSection />
    </>
  );
};

export default Home;