"use client";

import TextCircly from "@/components/text-circly";
import Pagination from "./Pagination";
import ButtonShowMore from "@/components/button-show-more";
import { useState } from "react";
import { TSliderInfo } from "@/types/sliders";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

const getMotionVariants = (delay = 0) => ({
  offscreen: { opacity: 0, scale: 0.1 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.4, delay },
  },
});

export default function InfoSection() {
  const t = useTranslations('info');
  const [activeSlider, setActiveSlider] = useState(0);

  const SLIDERS: TSliderInfo[] = [
    {
      images: ["images/info_slide_1.jpg", "images/info_slide_2.jpg"],
    },
    {
      images: ["images/info_slide_1.jpg", "images/info_slide_2.jpg"],
    },
    {
      images: ["images/info_slide_1.jpg", "images/info_slide_2.jpg"],
    },
  ];

  const currentImages = SLIDERS[activeSlider].images;

  return (
    <motion.div
      className="flex mx-content gap-6"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div>
        <TextCircly text={t('naturalComponents')} />
        logotype
      </div>

      <div className="flex-1 grid grid-cols-2 gap-6">
        <motion.div
          className="relative rounded-2xl bg-cover"
          style={{ backgroundImage: `url(${currentImages[0]})` }}
          variants={getMotionVariants()}
        >
          <ButtonShowMore />
        </motion.div>

        <div className="flex flex-col gap-6">
          <Pagination
            sliders={SLIDERS}
            activeSlider={activeSlider}
            setActiveSlider={setActiveSlider}
          />

          <div className="grid grid-cols-3 gap-6">
            {currentImages.map((image, index) => (
              <motion.div
                key={index}
                className={`h-20 rounded-2xl bg-cover bg-center ${
                  index === 1 ? "col-span-2" : ""
                }`}
                style={{ backgroundImage: `url(${image})` }}
                variants={getMotionVariants(0.3 + index * 0.1)}
              />
            ))}
          </div>

          <motion.div
            className="bg-brand rounded-2xl p-4"
            variants={getMotionVariants(0.3)}
          >
            <div className="text-2xl font-medium">{t('percentage')}</div>
            <div className="text-sm">
              {t('description')}
            </div>
          </motion.div>

          <div className="flex">
            {[{ w: "w-1/3", delay: 0.4 }, { w: "w-2/3", delay: 0.45 }].map(
              ({ w, delay }, i) => (
                <motion.div
                  key={i}
                  className={`${w} aspect-square rounded-full bg-brand ${
                    i === 1 ? "-ml-10" : ""
                  }`}
                  variants={getMotionVariants(delay)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
