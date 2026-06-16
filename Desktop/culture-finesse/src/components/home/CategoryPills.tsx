import React from 'react';

interface Category {
  slug: string;
  display_name: string;
}

interface Props {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (slug: string) => void;
}

const formatCategoryName = (cat: Category): string => {
  if (cat.slug === 'all') return 'ALL';
  if (cat.slug === 't-shirts') return 'T-Shirts';
  if (cat.slug === 'jorts') return 'Jorts';
  return cat.display_name || cat.slug.charAt(0).toUpperCase() + cat.slug.slice(1);
};

const CategoryPills: React.FC<Props> = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="px-5 py-4 overflow-x-auto flex gap-2 no-scrollbar">
      {categories.map(cat => (
        <button
          key={cat.slug}
          onClick={() => setActiveCategory(cat.slug)}
          className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
            activeCategory === cat.slug
              ? 'bg-[#4A5D23] text-white border-[#4A5D23]'
              : 'bg-white text-[#2C2C2C] border-gray-200 hover:border-[#4A5D23]'
          }`}
        >
          {formatCategoryName(cat)}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;