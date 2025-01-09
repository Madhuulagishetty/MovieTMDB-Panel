import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import TopRated from './Components/TopRated';
import Upcoming from './Components/Upcoming';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="*" element={<div className="text-center text-red-500">Page Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
