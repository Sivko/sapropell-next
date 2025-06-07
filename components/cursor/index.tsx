"use client";

import { useEffect } from "react";

import { store } from "@/tanstack-client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      borderRadius: "50%",
      transition: {
        duration: 0.1,
      },
    },
    text: {
      height: 150,
      width: 10,
      x: mousePosition.x - 5,
      y: mousePosition.y - 70,
      borderRadius: 0,
      transition: { spring },
      // animate: { opacity: 0 },
      // backgroundColor: "aqua",
      // mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={store.state.cursor}
    >
      {store.state.cursor && <span>{store.state.cursorText}</span>}
    </motion.div>
  );
}
