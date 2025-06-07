"use client";
import { updateCursor } from "@/tanstack-client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function TextParallaxSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const onEnter = () => {
    updateCursor("text");
  };

  const onLeave = () => {
    updateCursor("default");
  };

  return (
    <div className="overflow-hidden my-20" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div  ref={container}>
        <div className="border-b border-gray-300">
          <Slide direction={"left"} left={"-40%"} progress={scrollYProgress}>
            <Text1 />
          </Slide>
        </div>
        <div className="border-b border-gray-300">
          <Slide direction={"right"} left={"-25%"} progress={scrollYProgress}>
            <Text2 />
          </Slide>
        </div>
        <div className="border-b border-gray-300">
          <Slide direction={"left"} left={"-75%"} progress={scrollYProgress}>
            <Text1 />
          </Slide>
        </div>
      </div>
    </div>
  );
}

const Slide = (props: {
  direction: string;
  left: string;
  progress: MotionValue<number>;
  children: React.ReactNode;
}) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      {props.children}
    </motion.div>
  );
};

const Text1 = () => (
  <div className={"px-5 flex gap-10 items-center text-5xl font-thin"}>
    <p className="">Микроэлементы: </p>
    <p>N, P, K, Fe, Ca, Mg</p>
    <p className="">Микроэлементы: </p>
    <p>Mn, Br, B, Mo</p>
    <p className="">Витамины: </p>
    <p>А, E, B2, В5, В12</p>
    <p className="">Микроэлементы: </p>
    <p>N, P, K, Fe, Ca, Mg</p>
  </div>
);

const Text2 = () => (
  <div className={"px-5 flex gap-10 items-center text-5xl font-thin"}>
    <p className="">Стимуляторы роста:</p>
    <p>клетчатка, протеины, аминокислоты</p>
    <p className="">Натуральный природный компонент сапропель.</p>
  </div>
);
