"use client";

import { updateCursor } from "@/tanstack-client";
import { TSliderInfo } from "@/types/sliders";

export default function Pagination({
  sliders,
  activeSlider,
  setActiveSlider,
}: {
  sliders: TSliderInfo[];
  activeSlider: number;
  setActiveSlider: (index: number) => void;
}) {
  // const [active, setActive] = useState(0);

  // const items = [1, 2, 3];

  const onEnter = (index: number) =>
    updateCursor("text", `Страница ${index + 1}`);
  const onLeave = () => updateCursor("default");

  return (
    <div className="flex justify-between gap-4">
      {Array.from({ length: sliders.length }).map((_, index) => (
        <div
          key={index}
          className="flex-1 flex items-end gap-2"
          onClick={() => setActiveSlider(index)}
        >
          <div
            className={`border-b-4 border-gray-300 w-full relative h-10 ${
              index == activeSlider ? "px-4 border-black!" : ""
            }`}
            onMouseEnter={() => onEnter(index)}
            onMouseLeave={onLeave}
          ></div>
          {index == activeSlider && (
            <div className="text-2xl leading-4">0{index + 1}</div>
          )}
        </div>
      ))}
    </div>
  );
}
