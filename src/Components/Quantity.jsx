import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { contextApi } from "./ContextApi/Context";
import { db } from "../index"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuantityBirthday = () => {
  const navigate = useNavigate();
  const { date, cartData } = useContext(contextApi);

  const [people, setPeople] = useState(1);
  const [whatsapp, setWhatsapp] = useState("");
  // const [Detail, setDetail] = useState("");  
  const [decoration, setDecoration] = useState(false); // Ensure it's a boolean
  const basePrice = 2000;
  const decorationPrice = 500;


  
  const calculateTotal = () => (decoration ? basePrice + decorationPrice : basePrice);


  const increment = () => {
    if (people < 4) {
      setPeople(people + 1);
    } else {
      toast.error("Maximum limit of 4 people reached!");
    }
  };

  // Handle decrement of people
  const decrement = () => {
    if (people > 1) {
      setPeople(people - 1);
    }
  };

  // Book Slot Function
  const bookSlot = async () => {
    if (!date || !whatsapp.trim()) {
      toast.error("Please Select the Date Enter WhatsApp Number.");
      return;
    }

    try {
      await addDoc(collection(db, "bookings"), {
        date,
        people,
        whatsapp,
        decoration,
        cartData,
        status: "booked",
        timestamp: new Date(),
      });

      toast.success("Booking confirmed!");
      navigate("/ThankYouPage");
    } catch (error) {
      console.error("Error booking slot:", error);
      toast.error("Failed to book slot. Please try again.");
    }
  };


  const lastItem = cartData[cartData.length - 1];

  return (
    <div className="relative w-full h-full min-h-screen flex justify-center items-center p-3 bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1661726486910-7cfff916caad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBjZWxlYnJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D')]">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="bg-white rounded-lg shadow-lg z-10 md:max-w-[30rem] max-w-lg sm:max-w-md px-3 py-3 sm:px-3 sm:py-3">
        <div className="flex justify-center mb-4">
          <span className="text-2xl font-semibold">Overview</span>
        </div>
        <div className="bg-blue-100 rounded-lg p-4 mb-3 flex md:items-center md:justify-between   flex-col md:flex-row gap-3 md:gap-0">
          <span className="text-sm sm:text-base">Date: {date}</span>
          <p className="text-black">Time: {lastItem?.start} - {lastItem?.end}</p>
        </div>
         
        <div className="mb-2">
          <label htmlFor="whatsapp" className="block font-medium mb-2">WhatsApp Number*</label>
          <input
            type="tel"
            id="whatsapp"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2"
            placeholder="Enter your WhatsApp number"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="people" className="block font-medium mb-1">Number of people</label>
          <div className="flex items-center gap-2 mb-3">
            <button onClick={decrement} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full" disabled={people <= 1}>-</button>
            <input type="text" id="people" className="w-12 text-center border h-10" value={people} readOnly />
            <button onClick={increment} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full" disabled={people >= 4}>+</button>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <label className="flex items-start space-x-2">
          <input
                   type="checkbox"
                    checked={decoration}
                     onChange={(e) => setDecoration(e.target.checked)} // This will trigger re-render
                     className="mt-2 rounded text-[#5D0072] focus:ring-purple-500"
              />

            <div>
              <span className="text-sm text-gray-700 font-medium">Add decoration package</span>
              <p className="text-sm text-gray-500 mt-1">
                Includes balloons, banners, and themed decorations
                <span className="text-[#5D0072] font-medium ml-1">+₹500 per person</span>
              </p>
            </div>
          </label>    
        </div>

        <div className="border-t pt-4 mt-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Base price</span>
              <span className="font-medium">₹{ basePrice}</span>
            </div>
            {decoration && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Decoration</span>
                <span className="font-medium">₹{ decorationPrice}</span>
              </div>
            )}
          </div>
          <div className="flex justify-between text-lg font-semibold mt-4 pt-4 border-t">
            <span>Total</span>
            <span className="text-[#5D0072]">₹{calculateTotal()}</span>
          </div>
        </div>

        <div className="button-main flex justify-center mt-4">
          <button className="button-main button-name bg-[#5D0072] text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-all" onClick={bookSlot}>
            Pay Now ₹{calculateTotal()}
          </button>
        </div>

        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
      </div>
    </div>
  );
};

export default QuantityBirthday;
