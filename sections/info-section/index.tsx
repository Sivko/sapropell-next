"use client";

import TextCircly from "@/components/text-circly";
import Pagination from "./Pagination";
import { useState } from "react";
import { TSliderInfo } from "@/types/sliders";
import { motion } from "framer-motion";
import ButtonShowMore from "@/components/button-show-more";

export default function InfoSection() {
  const [activeSlider, setActiveSlider] = useState<number>(0);
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
  return (
    <motion.div
      className="flex mx-content"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div className="">
        <TextCircly text={"натуральные  компоненты  "} />
        logotype
      </div>
      <div className="flex-1 grid grid-cols-2 gap-6">
        <motion.div
          className="relative rounded-2xl bg-cover"
          variants={{
            offscreen: {
              opacity: 0,
              scale: 0.1,
            },
            onscreen: {
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                bounce: 0.4,
              },
            },
          }}
          style={{ backgroundImage: `url(${SLIDERS[activeSlider].images[0]})` }}
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
            {/* <div className="bg-brand h-20 rounded-2xl" /> */}
            {/* <div className="bg-brand col-span-2 h-20  rounded-2xl" /> */}
            {SLIDERS[activeSlider].images.map((image, index) => (
              <motion.div
                key={index}
                className={`h-20 rounded-2xl bg-cover bg-center ${
                  index === 1 ? "col-span-2" : ""
                }`}
                style={{ backgroundImage: `url(${image})` }}
                variants={{
                  offscreen: {
                    opacity: 0,
                    scale: 0.1,
                  },
                  onscreen: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0.3 + index / 10,
                      type: "spring",
                      bounce: 0.4,
                    },
                  },
                }}
              />
            ))}
          </div>
          <motion.div
            variants={{
              offscreen: {
                opacity: 0,
                scale: 0.1,
              },
              onscreen: {
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  bounce: 0.4,
                },
              },
            }}
            className="bg-brand rounded-2xl p-4"
          >
            <div className="text-2xl font-medium">80% lorem ingener</div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              temporibus rem esse laboriosam cupiditate similique. Ratione
              molestias at a aut excepturi, laboriosam, modi fugit officia vel
              perferendis quidem explicabo doloremque.
            </div>
          </motion.div>
          <div className="flex">
            <motion.div
              variants={{
                offscreen: {
                  opacity: 0,
                  scale: 0.1,
                },
                onscreen: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 0.4,
                    type: "spring",
                    bounce: 0.4,
                  },
                },
              }}
              className="w-1/3 aspect-square rounded-full bg-brand"
            />
            <motion.div
              variants={{
                offscreen: {
                  opacity: 0,
                  scale: 0.1,
                },
                onscreen: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 0.45,
                    type: "spring",
                    bounce: 0.4,
                  },
                },
              }}
              className="w-2/3 rounded-full bg-brand -ml-10"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
