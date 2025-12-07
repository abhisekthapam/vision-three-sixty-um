import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopBtn() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setProgress(scrolled);
      setShow(scrollTop > window.innerHeight * 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTopBtn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      {show && (
        <div className="fixed z-50 bottom-6 right-6">
          <svg width="70" height="70" className="absolute top-0 left-0">
            <circle
              cx="35"
              cy="35"
              r={radius}
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="35"
              cy="35"
              r={radius}
              stroke="#243977"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.2s linear" }}
            />
          </svg>

          <button
            onClick={scrollTopBtn}
            className="relative flex items-center justify-center w-12 h-12 transition-all duration-300 bg-white rounded-full shadow-xl text-primary hover:scale-110"
            style={{ margin: "11px" }}
          >
            <FaArrowUp size={22} />
          </button>
        </div>
      )}
    </>
  );
}
