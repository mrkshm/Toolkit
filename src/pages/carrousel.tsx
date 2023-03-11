import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
// @ts-ignore
import useKeypress from "react-use-keypress";

let images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
];

const collapsedRatio = 1 / 3;
const fullRatio = 3 / 2;
const margin = 12;
const gap = 2;

export default function Page() {
  let [index, setIndex] = useState(0);

  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  });
  useKeypress("ArrowRight", () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  });

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-[100vh] bg-black" style={{ background: "black" }}>
        <div className="mx-auto flex h-full max-w-7xl flex-col bg-black justify-center">
          <div className="relative overflow-hidden">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
              {images.map((image, i) => (
                <motion.img
                  key={image}
                  src={image}
                  animate={{ opacity: i === index ? 1 : 0.3 }}
                  alt=""
                  className="aspect-[3/2] object-cover"
                />
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => setIndex(index - 1)}
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < images.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => setIndex(index + 1)}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div
            className="absolute justify-center bottom-6 flex h-14 inset-x-0 overflow-hidden"
            style={{ background: "black" }}
          >
            <motion.div
              animate={{
                x: `-${
                  index * 100 * (collapsedRatio / fullRatio) +
                  margin +
                  index * gap
                }%`,
              }}
              initial={false}
              className="flex"
              style={{ aspectRatio: fullRatio, gap: `${gap}%` }}
            >
              {images.map((image, i) => (
                <motion.button
                  onClick={() => setIndex(i)}
                  initial={false}
                  whileHover={{ opacity: 1 }}
                  animate={i === index ? "active" : "inactive"}
                  variants={{
                    active: {
                      aspectRatio: fullRatio,
                      marginLeft: `${margin}%`,
                      marginRight: `${margin}%`,
                      opacity: 1,
                    },
                    inactive: {
                      aspectRatio: collapsedRatio,
                      marginLeft: 0,
                      marginRight: 0,
                      opacity: 0.6,
                    },
                  }}
                  className="shrink-0"
                  key={image}
                >
                  <img alt="" src={image} className="object-cover h-full" />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
