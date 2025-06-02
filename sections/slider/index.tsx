"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';

export default function Slider() {

  const Item = ()=>(<div className="bg-red-300 w-full h-[200px]" />)
  return (
    <div className="">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Item /></SwiperSlide>
        <SwiperSlide><Item /></SwiperSlide>
        <SwiperSlide><Item /></SwiperSlide>
        <SwiperSlide><Item /></SwiperSlide>
      </Swiper>
    </div>
  );
}
