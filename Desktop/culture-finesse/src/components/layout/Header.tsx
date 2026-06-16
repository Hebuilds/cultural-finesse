import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F5F5F0] bg-opacity-90 backdrop-blur-sm border-b border-gray-200/50">
      {/* Main row */}
      <div className="px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-[#2C2C2C]">
          Culture<span className="text-[#4A5D23]">Finesse</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6 ml-8">
          <Link to="/shop" className="text-sm font-medium text-[#2C2C2C] hover:text-[#4A5D23] transition">
            Shop
          </Link>
          <Link to="/new-arrivals" className="text-sm font-medium text-[#2C2C2C] hover:text-[#4A5D23] transition">
            New Arrivals
          </Link>
        </nav>

        {/* Right icons + search */}
        <div className="flex items-center gap-1 md:gap-3">
          {/* Desktop search bar */}
          <form onSubmit={handleSearchSubmit} className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-48 lg:w-64 bg-white/70 border border-gray-200 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-[#4A5D23] transition"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {/* Mobile search toggle */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden p-2"
            aria-label="Search"
          >
            <svg className="w-6 h-6 text-[#2C2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Wishlist */}
          <Link to="/wishlist" className="p-2 hidden sm:block" aria-label="Wishlist">
            <svg className="w-6 h-6 text-[#2C2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="p-2" aria-label="Cart">
            <svg className="w-6 h-6 text-[#2C2C2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile search bar (expandable) */}
      {isSearchOpen && (
        <div className="md:hidden px-5 pb-3">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-[#4A5D23]"
              autoFocus
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Mobile navigation links */}
      <div className="md:hidden flex items-center gap-6 px-5 pb-2 border-t border-gray-200/50 pt-2">
        <Link to="/shop" className="text-sm font-medium text-[#2C2C2C]">
          Shop
        </Link>
        <Link to="/new-arrivals" className="text-sm font-medium text-[#2C2C2C]">
          New Arrivals
        </Link>
      </div>
    </header>
  );
};

export default Header;