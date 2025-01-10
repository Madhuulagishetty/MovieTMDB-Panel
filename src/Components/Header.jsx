import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setQuery(searchValue);
    onSearch(searchValue);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#343940] text-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto flex justify-around items-center py-4 px-6">
        <h1 className="text-2xl font-bold">
          <Link to="/">TMDb Panel</Link>
        </h1>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/top-rated" className="hover:text-gray-300">Top Rated</Link>
            <Link to="/upcoming" className="hover:text-gray-300">Upcoming</Link>
          </div>

         
          <div className="flex items-center gap-2">
            <input
              type="search"
              name="search"
              placeholder="Search for movies..."
              value={query}
              onChange={handleSearchChange} 
              className="w-64 h-10 px-4 rounded-md text-gray-900 focus:outline-none"
            />
            <button className="bg-[#6C757C] hover:bg-black text-white px-4 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>


        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>


      {isMenuOpen && (
        <div className="md:hidden bg-[#343940] text-white py-4 px-6">
          <div className="flex flex-col gap-4">
            <Link to="/" className="hover:text-gray-300" onClick={toggleMenu}>Home</Link>
            <Link to="/top-rated" className="hover:text-gray-300" onClick={toggleMenu}>Top Rated</Link>
            <Link to="/upcoming" className="hover:text-gray-300" onClick={toggleMenu}>Upcoming</Link>
          </div>

          
          <div className="flex items-center gap-2 mt-4">
            <input
              type="search"
              name="search"
              placeholder="Search for movies..."
              value={query}
              onChange={handleSearchChange} // Update the query in state and trigger the search in App
              className="w-64 h-10 px-4 rounded-md text-gray-900 focus:outline-none"
            />
            <button className="bg-[#6C757C] hover:bg-black text-white px-4 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
