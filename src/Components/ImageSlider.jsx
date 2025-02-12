import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const images = [
        "https://t4.ftcdn.net/jpg/11/99/83/57/360_F_1199835732_evIkgrKAtpSUUCHg4XDWqOEW5SFk2ULI.jpg",
        "https://i.pinimg.com/originals/52/07/cf/5207cfb3fd0f613551e4f24b50315378.jpg",
        "https://cdn.cherishx.com/uploads/1686727757_webp_original.webp"
      ];
  return (
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
    </div>
  )
}

export default ImageSlider