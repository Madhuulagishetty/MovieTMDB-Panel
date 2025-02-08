import React, { useContext,useState } from 'react';
import { useNavigate } from "react-router-dom";
import { contextApi } from './ContextApi/Context';

const QuantityBirthday = () => {
  const navigate = useNavigate();
  const {date}=useContext(contextApi)
  const [people, setPeople] = useState(2);

  // Handle increment of people
  const increment = () => {
    if (people < 4) {
      setPeople(people + 1);
    }
    else {
      alert('Maximum limit of 4 people reached!'); 
    }
  };

  // Handle decrement of people
  const decrement = () => {
    if (people > 1) {
      setPeople(people - 1);
    }
  };

  return (
    <div className="relative w-full h-full min-h-screen flex justify-center items-center p-3 bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1661726486910-7cfff916caad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBjZWxlYnJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D')]">
     <div className="absolute inset-0 bg-black/60"></div>
      <div className="bg-white rounded-lg shadow-lg z-10 w-[60%] max-w-lg sm:max-w-md px-3 py-3 sm:px-3 sm:py-3" style={{width:'55%'}}>
        <div className="flex justify-center mb-4">
          <span className="text-2xl font-semibold">Overview</span>
        </div>
        <div className="bg-blue-100 rounded-lg p-2 mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm sm:text-base">{date}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm sm:text-base"></span>
          </div>
        </div>
        <label htmlFor="whatsapp" className="block font-medium mb-2">
          Booking Details
        </label>
        <input
          type="tel"
          id="whatsapp" required
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2"
        />

<div className="mb-2">
      <label htmlFor="people" className="block font-medium mb-1">
        Number of people
      </label>
      <div className="gap-2 mb-3">
        <button
          onClick={decrement}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
          disabled={people <= 1}
        >
          -
        </button>
        <input
          type="text"
          id="people"
          className="w-12 sm:w-16 md:w-20 lg:w-24 border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center"
          value={people}
          readOnly
        />
        <button
          onClick={increment}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full"
          disabled={people >= 4}
        >
          +
        </button>
      </div>
    </div>

        <div className="mb-2">
          <label htmlFor="whatsapp" className="block font-medium mb-1">
            Whatsapp Number*
          </label>
          <input
            type="tel"
            id="whatsapp" required
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Enter your WhatsApp number"
          />
        </div>

        <div className="">
          <label htmlFor="decoration" className="block font-medium mb-2">
            Do you want decoration?*
          </label>
          <input
            type="text"
            id="decoration" required
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            placeholder="Enter your decoration requirements"
          />
        </div>

       
        <div className="button-main flex justify-center mt-2 ">
            <button className="button-name transition-all" onClick={() => navigate('/ThankYouPage')}>
              Pay Now 2000
            </button>
          </div>
      </div>
    </div>
  );
};

export default QuantityBirthday;

