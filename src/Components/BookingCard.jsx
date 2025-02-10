import React, { useState, useContext } from "react";
import { Star, Users, TicketX, Wine, LoaderPinwheel } from "lucide-react";
import { FaUtensils } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { contextApi } from './ContextApi/Context'; // Correct import

const BookingCard = () => {
  const { AddtoSlot, cartData } = useContext(contextApi); // Destructure cartData
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const navigate = useNavigate();

  const timeSlots = [
    { id: 1, start: "9:00 AM", end: "12:00 PM" },
    { id: 2, start: "12:30 PM", end: "3:30 PM" },
    { id: 3, start: "4:00 PM", end: "5:30 PM" },
    { id: 4, start: "4:40 PM", end: "6:00 PM" },
  ];

  const images = [
    "https://t4.ftcdn.net/jpg/11/99/83/57/360_F_1199835732_evIkgrKAtpSUUCHg4XDWqOEW5SFk2ULI.jpg",
    "https://i.pinimg.com/originals/52/07/cf/5207cfb3fd0f613551e4f24b50315378.jpg",
    "https://cdn.cherishx.com/uploads/1686727757_webp_original.webp",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    customPaging: () => (
      <div className="w-3 h-3 mx-1 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300" />
    ),
  };

  const handleBooking = () => {
    if (!selectedTimeSlot) {
      alert("Please select a time slot before proceeding.");
      return;
    }

    console.log("Selected Time Slot:", selectedTimeSlot.start, "-", selectedTimeSlot.end);

    navigate("/QuantityBirthday", {
      state: {
        timeSlot: selectedTimeSlot,
      },
    });
  };

  return (
    <div className="relative min-h-screen p-4 flex items-center justify-center bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1661726486910-7cfff916caad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBjZWxlYnJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D')]">
      <div className="absolute inset-0 bg-black/60"></div>

      <div
        className="relative max-w-[30rem] w-full bg-white rounded-2xl shadow-xl overflow-hidden p-3 z-10"
        style={{ width: "45%" }}
      >
        <div className="relative rounded-xl overflow-hidden">
          <Slider {...sliderSettings} className="theater-slider">
            {images.map((img, index) => (
              <div key={index} className="aspect-video w-full overflow-hidden">
                <img
                  src={img}
                  alt={`Theater View ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 z-10">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold">4.9</span>
          </div>
        </div>

        <div
          className="absolute right-4 justify-center bg-gray-200 px-2 py-1 rounded-lg shadow-md cursor-pointer"
          onClick={() => navigate("/Menu")}
        >
          <FaUtensils className="text-blue-700 m-auto" />
          <span className="text-blue-700 font-medium text-[12px]">MENU</span>
        </div>

        <div className="space-y-2">
          <h4 className="text-[1.2rem] font-bold text-gray-800">Luna Theatre</h4>
          <div className="inline-flex items-center">
            <div className="px-3 py-1 bg-red-50 text-red-500 rounded-full border border-red-200 text-sm">
              <span>{timeSlots.length} Slots Available</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <Users className="w-4 h-4 text-[#5D0072]" />
            <span className="text-sm text-[#5D0072]">Max 4 People</span>
            <Wine className="w-4 h-4 text-[#5D0072]" />
            <span className="text-sm text-[#5D0072]">Food & Drinks available</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <TicketX className="w-4 h-4 text-[#5D0072]" />
            <span className="text-sm text-[#5D0072]">Free Cancellation</span>
            <LoaderPinwheel className="w-4 h-4 text-[#5D0072]" />
            <span className="text-sm text-[#5D0072]">Decoration Included</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-[16px] font-semibold text-gray-800">
              Select Time Slot
            </h3>
            <div className="flex flex-wrap">
      {timeSlots.map((slot) => (
        <button
          key={slot.id}
          onClick={() => {
            setSelectedTimeSlot(slot); // Set the selected time slot
            AddtoSlot(slot); // Add to context
          }}
          // disabled={cartData.length >= 1} // Disable if cartData length is greater than or equal to 1
          className={`rounded-xl border text-sm transition-all ml-1 px-3 py-1 ${
            selectedTimeSlot && selectedTimeSlot.id === slot.id
              ? "border-purple-600 bg-purple-50 text-purple-600"
              : "border-gray-200 hover:border-purple-200"
          }`}
        >
          <div className="font-medium text-[13px] w-20 text-center text-[#5D0072]">
            <p>{slot.start} -</p>
            <p>{slot.end}</p>
          </div>
        </button>
      ))}
    </div>
          </div>

          <div className="pt-1">
            <div className="flex items-baseline gap-1">
              <span className="text-1xl font-semibold">₹2299</span>
              <span className="text-sm">for up to 4 people with decoration</span>
            </div>
            <p className="text-sm text-gray-500">More than 4 people not allowed</p>
          </div>

          <div className="button-main flex justify-center mt-4">
            <button
              onClick={handleBooking}
              disabled={!selectedTimeSlot || cartData.length >= 2}
              className={`mt-4 px-4 py-2 rounded-md text-white transition-all ${
                selectedTimeSlot && cartData.length < 2
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Booking Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
