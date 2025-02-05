import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar'; // Import scrollbar styles if needed

export default function SwiperComponent() {
  return (
    <main>
      <Swiper
        slidesPerView={3} // Number of slides visible at once
        spaceBetween={20} // Space between slides
        scrollbar={{ draggable: true }} // Draggable scrollbar
        mousewheel={{ invert: true }} // Invert mousewheel scrolling
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </main>
  );
}
