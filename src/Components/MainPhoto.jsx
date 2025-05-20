import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";

const MainPhoto = () => {
  const slides = [
    {
      img: "/background.jpg",
    },
    { img: "/slides/pic.jpg" },
    { img: "/slides/teren.jpg" },
    { img: "/slides/teren2.jpg" },
    { img: "/slides/teren3.jpg" },
    { img: "/slides/trening.jpeg" },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-cont">
              <img src={slide.img} alt="slide" />
              <p className="slide-text">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MainPhoto;
