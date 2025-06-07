"use client";
import Slider from "@/components/slider";

export default function MainSection() {
  return (
    <div className="mt-20">
      <div className="mx-content">
        <div className="flex items-end">
          <div className="w-[250px]">
            <div className="bg-green-300 w-[20px] h-[20px] rounded-full" />
            <span>Волга</span>
          </div>
          <div className="flex-1">
            <h1 className="text-6xl font-medium">
              Натуральный природный компонент сапропель
            </h1>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
}
