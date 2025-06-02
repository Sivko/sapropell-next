import Slider from "@/sections/slider";

export default function MainSection() {
  return (
    <div className="mt-20">
      <div className="container mx-auto">
        <div className="flex items-end">
          <div className="w-[250px]">
            <div className="bg-green-300 w-[20px] h-[20px] rounded-full" />
            <span>Волга</span>
          </div>
          <div className="flex-1">
            <h1 className="text-6xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</h1>
          </div>
        </div>
      </div>
      <Slider />
      {/* <div className="w-[80dvw] h-[80dvh] drop-shadow-2xl border-3 border-green-900 backdrop-blur-xs rounded-3xl">
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </div>
      </div> */}
    </div>
  );
}
