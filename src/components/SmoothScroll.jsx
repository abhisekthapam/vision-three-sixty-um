import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 0.1, 
      easing: (t) => t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2, 
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      infinite: false,
      lerp: 0.1, 
    });
    const animate = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    return () => {
      lenisRef.current.destroy();
    };
  }, []);
  return <div>{children}</div>;
};

export default SmoothScroll;
