import React, { createContext, useState } from "react";

export const contextApi = createContext(); // Create Context

const Context = ({ children }) => {
  const [date, setDate] = useState("");
  const [cartData, setCartData] = useState([]);

  const AddtoCart = (items) => {
    setCartData([...cartData, items]);
  };

  const AddtoSlot = (slot) => {
    setCartData([slot]); // Replace the previous slot instead of adding a new one
  };
  
  
  return (
    <contextApi.Provider value={{ date, setDate, cartData, AddtoCart, AddtoSlot }}>
      {children}
    </contextApi.Provider>
  );
};

export default Context;
