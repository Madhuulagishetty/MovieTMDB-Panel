import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import TopRated from './Components/TopRated';
import Header from './Components/Header';
import MovieDetail from './Components/MovieDeatail'; // MovieDetail import
// import MovieDetail from './Components/MovieDeatail';
import UpcomingPage from './Components/Upcoming'

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <BrowserRouter>
      <Header onSearch={handleSearch} />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path='upcoming' element={<UpcomingPage/>}/>
          <Route path="/movie/:movieId" element={<MovieDetail />} /> {/* Dynamic Route */}
          <Route path="*" element={<div className="text-center text-red-500">Page Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
