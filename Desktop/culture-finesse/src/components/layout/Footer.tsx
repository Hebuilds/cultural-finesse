import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-[#F5F5F0] border-t border-gray-200 px-5 py-8 text-sm text-gray-600">
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h4 className="font-semibold text-[#2C2C2C] mb-2">Shop</h4>
        <ul className="space-y-1">
          <li>All</li>
          <li>New</li>
          <li>Hoodies</li>
          <li>Tees</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-[#2C2C2C] mb-2">Support</h4>
        <ul className="space-y-1">
          <li>FAQ</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div className="mt-8 pt-6 border-t border-gray-300 text-center text-xs text-gray-500">
      © 2026 Culture Finesse. All rights reserved.
    </div>
  </footer>
);

export default Footer;