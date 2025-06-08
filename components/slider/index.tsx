"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

type TSlider = {
  image: string;
};

export default function Slider() {
  const SLIDERS: TSlider[] = [{ image: "images/slide_1.jpeg" },{ image: "images/slide_1.jpeg" },{ image: "images/slide_1.jpeg" }];

  const Item = (props: TSlider) => (
    <div className="w-full h-60 rounded-4xl ml-content" style={{backgroundImage: `url(${props.image})`}} />
  );
  return (
    <div className="mt-10">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {SLIDERS.map((slider, index) => (
          <SwiperSlide key={index}>
            <Item {...slider} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
