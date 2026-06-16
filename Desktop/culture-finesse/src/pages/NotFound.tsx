import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="px-5 py-20 text-center">
    <h1 className="text-4xl font-bold">404</h1>
    <p className="text-gray-600 mt-4">Page not found</p>
    <Link to="/" className="mt-6 inline-block bg-[#4A5D23] text-white px-8 py-3 rounded-full">Go Home</Link>
  </div>
);

export default NotFound;