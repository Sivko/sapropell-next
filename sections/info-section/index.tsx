import TextCircly from "@/components/text-circly";

export default function InfoSection() {
  return (
    <div className="flex mx-content">
      <div className="flex flex-col justify-between shrink-0">
        <TextCircly />
        logotype
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="relative bg-green-500 rounded-2xl">
          <div className="rounded-2xl bg-white p-4 absolute top-0 w-fit">
            <div className="text-2xl font-medium">Узнать больше</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          pagination
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-brand h-20 rounded-2xl" />
            <div className="bg-brand col-span-2 h-20  rounded-2xl" />
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
