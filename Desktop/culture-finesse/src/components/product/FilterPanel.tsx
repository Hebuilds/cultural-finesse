import React, { useState } from 'react';

interface Category {
  slug: string;
  display_name: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  setSelectedCategory: (slug: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  categories: Category[];
  availableSizes: string[];
}

const formatCategoryName = (cat: Category): string => {
  if (cat.slug === 'all') return 'ALL';
  if (cat.slug === 't-shirts') return 'T-Shirts';
  if (cat.slug === 'jorts') return 'Jorts';
  return cat.display_name || cat.slug.charAt(0).toUpperCase() + cat.slug.slice(1);
};

const FilterPanel: React.FC<Props> = ({
  isOpen, onClose, selectedCategory, setSelectedCategory,
  selectedSize, setSelectedSize, categories, availableSizes
}) => {
  const [openSection, setOpenSection] = useState<'category' | 'size' | null>('category');

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute bottom-0 left-0 right-0 bg-[#F5F5F0] rounded-t-3xl p-6 transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-[#2C2C2C]">Filter</h3>
          <button onClick={onClose} className="p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="border-b border-gray-200 py-3">
          <button
            onClick={() => setOpenSection(openSection === 'category' ? null : 'category')}
            className="w-full flex justify-between items-center"
          >
            <span className="text-sm font-medium uppercase tracking-wide text-gray-700">Filter Type</span>
            <svg className={`w-5 h-5 transition-transform ${openSection === 'category' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openSection === 'category' && (
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full text-sm border ${
                    selectedCategory === cat.slug ? 'bg-[#4A5D23] text-white border-[#4A5D23]' : 'bg-white border-gray-200'
                  }`}
                >
                  {formatCategoryName(cat)}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 py-3">
          <button
            onClick={() => setOpenSection(openSection === 'size' ? null : 'size')}
            className="w-full flex justify-between items-center"
          >
            <span className="text-sm font-medium uppercase tracking-wide text-gray-700">Filter Size</span>
            <svg className={`w-5 h-5 transition-transform ${openSection === 'size' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openSection === 'size' && (
            <div className="mt-3 grid grid-cols-4 gap-2">
              {availableSizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
                  className={`py-2 rounded-md text-sm border ${
                    selectedSize === size ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]' : 'bg-white border-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedSize('');
            }}
            className="flex-1 py-3 border border-gray-300 rounded-full text-sm font-medium"
          >
            Clear
          </button>
          <button onClick={onClose} className="flex-1 py-3 bg-[#4A5D23] text-white rounded-full text-sm font-medium">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;