import React, { useState } from 'react';

interface Category {
  slug: string;
  display_name: string;
}

interface Props {
  categories: Category[];
  availableSizes: string[];
  selectedCategory: string;
  setSelectedCategory: (slug: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}

const formatCategoryName = (cat: Category): string => {
  if (cat.slug === 'all') return 'All';
  if (cat.slug === 't-shirts') return 'T-Shirts';
  if (cat.slug === 'jorts') return 'Jorts';
  return cat.display_name || cat.slug.charAt(0).toUpperCase() + cat.slug.slice(1);
};

const DesktopFilters: React.FC<Props> = ({
  categories, availableSizes,
  selectedCategory, setSelectedCategory,
  selectedSize, setSelectedSize
}) => {
  const [openSection, setOpenSection] = useState<'category' | 'size' | null>(null);

  return (
    <div className="hidden md:block px-5 py-4 border-b border-gray-200">
      <div className="flex gap-6">
        <div className="relative">
          <button
            onClick={() => setOpenSection(openSection === 'category' ? null : 'category')}
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#2C2C2C] hover:text-[#4A5D23] transition"
          >
            Filter Type
            <svg className={`w-4 h-4 transition-transform ${openSection === 'category' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openSection === 'category' && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg p-4 z-40 min-w-[200px]">
              <div className="flex flex-col gap-2">
                {categories.map(cat => (
                  <label key={cat.slug} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="desktop-category"
                      value={cat.slug}
                      checked={selectedCategory === cat.slug}
                      onChange={() => setSelectedCategory(cat.slug)}
                      className="accent-[#4A5D23]"
                    />
                    <span className="text-sm">{formatCategoryName(cat)}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => setOpenSection(openSection === 'size' ? null : 'size')}
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#2C2C2C] hover:text-[#4A5D23] transition"
          >
            Filter Size
            <svg className={`w-4 h-4 transition-transform ${openSection === 'size' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openSection === 'size' && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg p-4 z-40 min-w-[280px]">
              <div className="grid grid-cols-4 gap-2">
                {availableSizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
                    className={`px-2 py-1.5 text-sm border rounded-md transition ${
                      selectedSize === size ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]' : 'bg-white border-gray-200 hover:border-[#4A5D23]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {(selectedCategory !== 'all' || selectedSize) && (
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedSize('');
            }}
            className="text-sm text-gray-500 underline"
          >
            Clear all
          </button>
        )}
      </div>
    </div>
  );
};

export default DesktopFilters;