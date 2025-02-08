import React from 'react';
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen flex justify-center items-center  bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1661726486910-7cfff916caad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBjZWxlYnJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D')]" >
          <div className="absolute inset-0 bg-black/60"></div>
      <div className="bg-white rounded-lg shadow-lg z-10 w-full max-w-lg sm:max-w-md px-3 py-3" style={{width:'55%'}}>
        <h2 className="text-2xl font-semibold text-center mb-4">Overview</h2>

        <div className="bg-blue-100 rounded-lg p-4 mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm sm:text-base">7 February, 2025</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm sm:text-base">12:30 PM - 3:30 PM</span>
          </div>
        </div>

        <div className="flex justify-center mb-2">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-red-500 flex items-center justify-center">
            <svg className="w-16 h-16 sm:w-20 sm:h-20 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-orange-500 mb-0">Thank You</h2>
          <h3 className="text-2xl text-orange-500 mb-0">For Your Payment</h3>
          <p className="text-gray-600 text-xl">Please Contact 9321893567</p>
        </div>

      
        <div className="button-main flex justify-center mt-4 ">
            <button className="button-name transition-all" onClick={() => navigate('/')}>
              Booking Now
            </button>
          </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
