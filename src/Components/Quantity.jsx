import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contextApi } from "./ContextApi/Context";
import { db } from "../index"; // Import Firestore instance
import { collection, doc, getDoc, setDoc, addDoc } from "firebase/firestore";

const QuantityBirthday = () => {
  const navigate = useNavigate();
  const { date, cartData } = useContext(contextApi);

  const [people, setPeople] = useState(2);
  const [whatsapp, setWhatsapp] = useState("");
  const [decoration, setDecoration] = useState("");

  // Handle increment of people
  const increment = () => {
    if (people < 4) {
      setPeople(people + 1);
    } else {
      alert("Maximum limit of 4 people reached!");
    }
  };

  // Handle decrement of people
  const decrement = () => {
    if (people > 1) {
      setPeople(people - 1);
    }
  };

  // Firestore: Book Slot Function
  const bookSlot = async () => {
    if (!date || !whatsapp.trim()) {
      alert("Please select a date and enter WhatsApp number.");
      return;
    }
  
    try {
      // Add a new document with a unique ID in the "bookings" collection
      await addDoc(collection(db, "bookings"), {
        date,
        people,
        whatsapp,
        decoration,
        cartData,
        status: "booked",
        timestamp: new Date(), // Optional: for sorting purposes
      });
  
      alert("Booking confirmed!");
      navigate("/ThankYouPage");
    } catch (error) {
      console.error("Error booking slot:", error);
      alert("Failed to book slot. Please try again.");
    }
  };

  return (
    <div className="relative w-full h-full min-h-screen flex justify-center items-center p-3 bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1661726486910-7cfff916caad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBjZWxlYnJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D')]">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="bg-white rounded-lg shadow-lg z-10 w-[60%] max-w-lg sm:max-w-md px-3 py-3 sm:px-3 sm:py-3" style={{ width: "55%" }}>
        <div className="flex justify-center mb-4">
          <span className="text-2xl font-semibold">Overview</span>
        </div>
        <div className="bg-blue-100 rounded-lg p-2 mb-2 flex items-center justify-between">
          <span className="text-sm sm:text-base">{date}</span>
        </div>

        <label htmlFor="whatsapp" className="block font-medium mb-2">Booking Details</label>
        <input
          type="tel"
          id="whatsapp"
          required
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2"
          placeholder="Enter your WhatsApp number"
        />

        <div className="mb-2">
          <label htmlFor="people" className="block font-medium mb-1">Number of people</label>
          <div className="gap-2 mb-3">
            <button onClick={decrement} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full" disabled={people <= 1}>-</button>
            <input type="text" id="people" className="w-12 sm:w-16 md:w-20 lg:w-24 border text-center" value={people} readOnly />
            <button onClick={increment} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full" disabled={people >= 4}>+</button>
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="decoration" className="block font-medium mb-2">Do you want decoration?*</label>
          <input
            type="text"
            id="decoration"
            required
            value={decoration}
            onChange={(e) => setDecoration(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your decoration requirements"
          />
        </div>

        <div className="button-main flex justify-center mt-2">
          <button className="button-name transition-all" onClick={bookSlot}>
            Pay Now 2000
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityBirthday;