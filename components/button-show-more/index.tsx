import ContentModal from "@/modals/content-modal";
import { addModal } from "@/tanstack-client";
import { motion } from "framer-motion";

export default function ButtonShowMore() {
  return (
    <motion.div
      className="absolute top-0 origin-left"
      variants={{
        offscreen: {
          // opacity: 0,
          // y: -100,
          scaleX: 0
        },
        onscreen: {
          // opacity: 1,
          // y: 0,
          scaleX: 1,
          transition: {
            delay: 0.3,
            type: "tween",
            // bounce: 0.4,
          },
        },
      }}
    >
      <div>
        <div className="flex">
          <div className="realtive p-4 rounded-2xl bg-white w-fit flex items-end rounded-t-none rounded-l-none">
            <div
              className="text-2xl font-medium pr-10"
              onClick={() => addModal(<ContentModal />)}
            >
              Узнать больше
            </div>
            <div className="p-4 w-20 nebo nebo--br card--cat1" />
          </div>
        </div>
        <div className="h-16 p-4 w-20 bg-white nebo nebo--br card--cat2" />
      </div>
    </motion.div>
  );
}
