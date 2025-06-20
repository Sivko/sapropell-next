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
          scaleX: 0,
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
          <div className="realtive w-fit flex items-start rounded-t-none rounded-l-none">
            <div
              className="text-2xl font-medium pr-5 bg-white rounded-br-2xl py-4 pl-10 flex items-end gap-5"
              onClick={() => addModal(<ContentModal />)}
            >
              <span>
                Узнать
                <br />
                больше
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
                width="3rem"
                height="3rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17.812 17.289L7.712 7.208V16.5h-1v-11h11v1H8.419L18.5 16.6z"
                />
              </svg>
            </div>
            <div className="h-16 p-4 w-20 bg-white nebo nebo--br card--cat1" />
          </div>
        </div>
        <div className="h-16 p-4 w-20 bg-white nebo nebo--br card--cat2" />
      </div>
    </motion.div>
  );
}
