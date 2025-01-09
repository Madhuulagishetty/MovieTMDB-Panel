import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#343940] text-white shadow-md">
      <nav className="container mx-auto flex justify-around items-center py-4 px-6">
      
        <h1 className="text-2xl font-bold">
          <Link to="/">TMDb Panel</Link>
        </h1>

      
        <div className="flex items-center gap-8">
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/top-rated" className="hover:text-gray-300">
              Top Rated
            </Link>
            <Link to="/upcoming" className="hover:text-gray-300">
              Upcoming
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2">
            <input
              type="search"
              name="search"
              placeholder="Search for movies..."
              className="w-64 h-10 px-4 rounded-md text-gray-900 focus:outline-none"
            />
            <button className="bg-[#6C757C] hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
