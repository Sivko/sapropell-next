import { motion, useMotionValue } from "framer-motion";

const getRotationTransition = (
  duration: number,
  from: number,
  loop = true
) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({ text = "", spinDuration = 20, className = "" }) => {
  const letters = Array.from(text);
  // const controls = useAnimation();
  const rotation = useMotionValue(0);

  const start = rotation.get();
  return (
    <div className="relative bg-brand rounded-full">
      <motion.div
        className={`circular-text ${className}`}
        // style={{ rotate: rotation }}
        variants={{
          offscreen: {
            opacity: 0,
            rotate: 0,
            scale: 0.1,
          },
          onscreen: {
            transition: getTransition(spinDuration, start),
            scale: 1,
            opacity: 1,
            rotate: start + 360,
          },
        }}
      >
        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          const factor = Math.PI / letters.length;
          const x = factor * i;
          const y = factor * i;
          const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

          return (
            <span key={i} style={{ transform, WebkitTransform: transform }}>
              {letter}
            </span>
          );
        })}
      </motion.div>
      <div className="absolute animate-spin inset-0 flex items-center justify-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 16h5v5M10 8H5V3m14.418 6.003A8 8 0 0 0 5.086 7.976m-.504 7.021a8 8 0 0 0 14.331 1.027"
          />
        </svg>
      </div>
    </div>
  );
};

export default CircularText;
