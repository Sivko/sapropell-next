"use client";

import TextCircly from "@/components/text-circly";
import Pagination from "./Pagination";
import { useState } from "react";
import { TSliderInfo } from "@/types/sliders";

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
    <div className="flex mx-content">
      <div className="flex flex-col justify-between shrink-0">
        <TextCircly />
        logotype
      </div>
      <div className="flex-1 grid grid-cols-2 gap-6">
        <div
          className="relative rounded-2xl bg-cover"
          style={{ backgroundImage: `url(${SLIDERS[activeSlider].images[0]})` }}
        >
          <div className="rounded-2xl bg-white p-4 absolute top-0 w-fit flex items-end rounded-t-none rounded-l-none">
            <div className="text-2xl font-medium">
              Узнать
              <br />
              больше
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 rotate-90 flex-1"
            >
              <path
                fill="currentColor"
                d="m16.289 7.208l-9.766 9.746q-.14.14-.344.13q-.204-.009-.345-.15t-.14-.334t.14-.334L15.582 6.5H6.789q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h9.692q.343 0 .575.232t.233.576V16q0 .213-.145.356t-.356.144t-.356-.144t-.144-.356z"
              />
            </svg>
          </div>
        </div>
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
              <div
                key={index}
                className={`h-20 rounded-2xl bg-cover bg-center ${index === 1 ? "col-span-2" : ""}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
          <div className="bg-brand rounded-2xl p-4">
            <div className="text-2xl font-medium">80% lorem ingener</div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              temporibus rem esse laboriosam cupiditate similique. Ratione
              molestias at a aut excepturi, laboriosam, modi fugit officia vel
              perferendis quidem explicabo doloremque.
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3 aspect-square rounded-full bg-brand" />
            <div className="w-2/3 rounded-full bg-brand -ml-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
