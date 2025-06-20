"use client";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { updateCursor } from "@/tanstack-client";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperRef>(null);
  const SLIDERS: Record<string, string>[] = [
    {
      image: "images/slide_1.jpeg",
      text: "Сапропель — это природное органоминеральное удобрение, которое улучшает структуру почвы, насыщает её питательными веществами и способствует активному росту растений.",
    },
    {
      image: "images/slide_2.jpeg",
      text: "Богатый гуминовыми кислотами и микроэлементами, сапропель повышает плодородие почвы, ускоряет прорастание семян и улучшает приживаемость рассады.",
    },
    {
      image: "images/slide_3.jpeg",
      text: "Сапропель способствует восстановлению истощённой почвы, активизирует полезную микрофлору и делает питание растений более сбалансированным и доступным.",
    },
  ];

  // const Item = (props: TSlider) => (
  //   <div
  //     className="w-full h-60 rounded-4xl ml-content"
  //     style={{ backgroundImage: `url(${props.image})` }}
  //   />
  // );

  useEffect(() => {
    if (!swiperRef.current?.swiper) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="mt-10">
      <Swiper
        ref={swiperRef}
        slidesPerView={1.2}
        spaceBetween={30}
        loop={true}
        speed={2000}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(e) => {
          setActiveIndex(e.realIndex);
        }}
        className="mySwiper"
      >
        {SLIDERS.map((slider, index) => (
          <SwiperSlide key={index}>
            <Item {...slider} activeIndex={activeIndex} index={index} />
          </SwiperSlide>
        ))}
        <div className="absolute inset-0 z-10 flex justify-between">
          <div
            className="w-1/4 pointer-events-auto"
            onMouseEnter={() => updateCursor("text", "<")}
            onMouseLeave={() => updateCursor("default")}
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          />
          <div
            className="w-1/4 pointer-events-auto"
            onMouseEnter={() => updateCursor("text", ">")}
            onMouseLeave={() => updateCursor("default")}
            onClick={() => swiperRef.current?.swiper.slideNext()}
          />
        </div>
      </Swiper>
    </div>
  );
}

function Item({
  index,
  activeIndex,
  image,
  text,
}: {
  index: number;
  activeIndex: number;
  image: string;
  text: string;
}) {
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    if (index === activeIndex) {
      setIsAnimate(true);
    } else {
      setIsAnimate(false);
    }
  }, [activeIndex, index]);

  return (
    <div className="w-full h-60 rounded-4xl ml-content relative overflow-hidden">
      <motion.div
        initial={{ scale: 1.2 }}
        animate={isAnimate ? { scale: 1 } : { scale: 1.2 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        style={{ originX: 0, originY: 0, backgroundImage: `url(${image})` }}
        className="inset-0 absolute z-[-1] bg-no-repeat bg-cover bg-center origin-center"
      />
      <motion.div
        className="rounded-tr-3xl bg-white max-w-sm p-4 absolute z-10 left-0 bottom-0"
        initial={{ y: "100%", opacity: 0 }}
        animate={isAnimate ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}
