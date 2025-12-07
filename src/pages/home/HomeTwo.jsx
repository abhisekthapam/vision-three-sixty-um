import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "../../components/Counter";
import { useLocation } from "react-router-dom";
function HomeTwo() {
  const rotatingSentences = [
    "every person carries a vision worth living.",
    "stories can inspire change that outlives us.",
    "events can build connections that move people, communities, and nations forward.",
    "courageous conversations can spark movements.",
    "in a world where dreams don’t just stay imagined, but lived.",
    "because to live your vision is to change the world—together, for the better.",
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingSentences.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo === "vision") {
      const el = document.getElementById("vision");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <section id="vision">
      <section className="flex flex-col min-h-screen py-10 overflow-hidden text-black">
        <div className="px-4 pt-40 text-center md:pt-24">
          <p className="text-3xl md:text-6xl font-semibold text-[#FA693E]">
            Live Your Vision
          </p>
          <p className="mt-2 text-base md:text-xl text-[#505050] font-sora">
            It starts with a Vision. Yours. Ours. Everyone’s.
          </p>
        </div>
        <div className="relative flex items-center justify-center flex-1 w-full px-4 mt-10 mb-10 overflow-hidden">
          <p
            className="font-bold leading-none tracking-wider text-center pointer-events-none select-none opacity-10"
            style={{
              fontSize: "clamp(3.5rem, 18vw, 9.375rem)",
              lineHeight: 1,
              margin: 0,
              whiteSpace: "normal",
            }}
          >
            WE BELIEVE
          </p>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7 }}
                className="text-lg font-medium text-center text-[#515151] sm:text-xl md:text-3xl font-sora"
                style={{
                  maxWidth: "90%",
                  margin: "0 auto",
                  wordWrap: "break-word",
                }}
              >
                {rotatingSentences[index]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </section>
      <section className="flex flex-col min-h-screen py-10 overflow-hidden text-black">
        <div className="px-4 py-24 text-center">
          <p className="text-3xl font-semibold md:text-6xl">
            Every Number Holds a Story
          </p>
          <p className="mt-2 text-base md:text-xl font-sora">
            Living our vision means delivering results that matter.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 px-6 sm:px-10 lg:px-[7%] mt-12 mb-10 text-center">
          <div>
            <p className="text-4xl font-semibold md:text-5xl">
              <Counter target={150} />+
            </p>
            <p className="mt-2 text-sm md:text-base text-secondary font-sora">
              Development Communication & Events facilitated across Nepal &
              South Asia.
            </p>
          </div>
          <div>
            <p className="text-4xl font-semibold md:text-5xl">
              <Counter target={50} />+
            </p>
            <p className="mt-2 text-sm md:text-base text-secondary font-sora">
              Global & national partners, including UN, World Bank, and EU, who
              trusted us.
            </p>
          </div>
          <div>
            <p className="text-4xl font-semibold md:text-5xl">
              <Counter target={90} />+
            </p>
            <p className="mt-2 text-sm md:text-base text-secondary font-sora">
              Impact Media & Storytelling projects delivered for global
              partners.
            </p>
          </div>
          <div>
            <p className="text-4xl font-semibold md:text-5xl">
              <Counter target={30} />+
            </p>
            <p className="mt-2 text-sm md:text-base text-secondary font-sora">
              Hybrid & multilingual events executed with innovation and
              precision.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default HomeTwo;
