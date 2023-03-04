import { useScroll, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import clamp from "../utils/clamp";

const useBoundedScroll = (bounds: number) => {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1]
  );

  useEffect(() => {
    return scrollY.on("change", (current) => {
      let previous = scrollY.getPrevious();
      let diff = current - previous;
      let newScrollYBounded: number = scrollYBounded.get() + diff;
      scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
    });
  }, [bounds, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
};

export default useBoundedScroll;
