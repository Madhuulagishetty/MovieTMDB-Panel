import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import BookingCard from "./Components/BookingCard";
import QuantityBirthday from "./Components/Quantity";
import ThankYouPage from "./Components/Thankyou";
import Context from "./Components/ContextApi/Context";
import Menu from "./Components/Menu";

const App = () => {
  
  return (
   
    <Context>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="BookingCard" element={<BookingCard />} />
        <Route path="QuantityBirthday" element={<QuantityBirthday />} />
        <Route path="ThankYouPage" element={<ThankYouPage />} />
        <Route path="Menu" element={<Menu/>}/>
      </Routes>
     </BrowserRouter>
    </Context>
  );
};

export default App;
