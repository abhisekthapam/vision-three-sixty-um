import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

const Counter = ({ target = 0, duration = 2, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = motionVal.on("change", (v) => {
      setDisplay(Math.floor(v));
    });
    let animation;
    if (isInView) {
      animation = animate(motionVal, target, {
        duration,
        ease: "easeOut",
      });
    } else {
      animation = animate(motionVal, 0, { duration: 0.25 });
    }

    return () => {
      unsubscribe();
      animation?.stop();
    };
  }, [isInView, target, duration, motionVal]);

  return (
    <span ref={ref} aria-hidden="false">
      {display}
      {suffix}
    </span>
  );
};

export default Counter;
