"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Header() {
  const animateObject = {
    initial: { opacity: 0, y: -100 },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 1 },
  };
  return (
    <div className="mx-content pt-4">
      <div className="flex items-center justify-between">
        <nav className="flex items-center">
          <motion.div
            className="flex items-center gap-2 w-60"
            {...animateObject}
          >
            <Icon icon="guidance:garden" className="text-xl" />
            <span>Волга</span>
          </motion.div>
          <div className="flex items-center gap-2">
            <Link href="/" className="">
              <motion.div
                className="flex items-center gap-2 rounded-2xl bg-brand py-1 px-2"
                {...animateObject}
              >
                <span>Главная</span>
                <div className="p-1 bg-white rounded-full w-7 h-7">
                  <Icon icon="mdi-light:home" className="text-xl" />
                </div>
              </motion.div>
            </Link>
            <Link href="/" className="">
              <motion.div
                className="flex items-center gap-2 rounded-2xl bg-gray-300 py-1 px-2"
                {...animateObject}
              >
                <div className="p-1 bg-white rounded-full w-7 h-7">
                  <Icon icon="mdi-light:home" className="text-xl" />
                </div>
                <span>Главная</span>
              </motion.div>
            </Link>
          </div>
        </nav>
        <motion.button
          {...animateObject}
          className="bg-primary text-white rounded-2xl p-2"
        >
          Связаться
        </motion.button>
      </div>
    </div>
  );
}
