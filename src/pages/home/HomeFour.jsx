import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import one from "../../assets/home/three.webp";
import two from "../../assets/home/four.webp";

function HomeFour() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const textContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const columns = [
    {
      img: one,
      title: "Development Communications & Events",
      desc: "We don't just manage events. We create spaces where ideas turn into action.",
      content:
        "From policy dialogues to grassroots movements, from global summits to community workshops—we design experiences that connect people, amplify voices, and drive change.",
      path: "/development-communication-and-event",
    },
    {
      img: two,
      title: "Impact Media & Storytelling",
      desc: "We don't just tell stories. We move people with them.",
      content:
        "Films, campaigns, and digital storytelling that shine light on untold realities and inspire action. Because every story deserves to be heard—and to create change.",
      path: "/impact-media-and-story-telling",
    },
  ];

  return (
    <div>
      <div className="hidden md:block">
        <div
          className="min-h-screen flex flex-col bg-[#f9f9f9] text-black overflow-hidden"
          ref={ref1}
        >
          <div className="py-10 text-center">
            <h1 className="text-2xl font-semibold md:text-6xl">
              How we bring visions to life.
            </h1>
          </div>
          <motion.div
            className="grid flex-1 grid-cols-1 md:grid-cols-2"
            animate={
              !isMobile
                ? {
                    gridTemplateColumns:
                      hovered === null
                        ? "1fr 1fr"
                        : hovered === 0
                        ? "2fr 1fr"
                        : "1fr 2fr",
                  }
                : { gridTemplateColumns: "1fr" }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {columns.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-end bg-center bg-cover cursor-pointer h-[60vh] md:h-auto"
                style={{ backgroundImage: `url(${item.img})` }}
                initial="hidden"
                animate={isInView1 ? "visible" : "hidden"}
                variants={columnVariants}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => navigate(item.path)}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                <motion.div
                  className="relative z-10 p-6 pb-16 mx-[5%] text-white flex flex-col gap-2"
                  variants={textContainerVariants}
                  initial="hidden"
                  animate={isInView1 ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.p variants={textItemVariants}>{item.desc}</motion.p>
                  <motion.h2
                    variants={textItemVariants}
                    className="mb-2 text-xl font-semibold md:text-4xl"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    variants={textItemVariants}
                    className="text-sm md:text-lg xl:max-w-[70%] font-sora pt-2 md:pt-4"
                  >
                    {item.content}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="md:hidden">
        <div>
          <div
            className="h-screen flex flex-col bg-[#f9f9f9] text-black"
            ref={ref}
          >
            <div className="py-10 text-center">
              <h1 className="text-2xl font-semibold md:text-6xl">
                How we bring visions to life.
              </h1>
            </div>
            <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
              <motion.div
                className="relative flex items-end bg-center bg-cover"
                style={{ backgroundImage: `url(${one})` }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={columnVariants}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                <motion.div
                  className="relative z-10 p-6 pb-16 mx-[5%] text-white flex flex-col gap-2"
                  variants={textContainerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  onClick={() =>
                    navigate("/development-communication-and-event")
                  }
                >
                  <motion.p variants={textItemVariants}>
                    We don't just manage events. We create spaces where ideas
                    turn into action.
                  </motion.p>
                  <motion.h2
                    variants={textItemVariants}
                    className="mb-2 text-xl font-semibold md:text-4xl"
                  >
                    Development Communications <br />& Events
                  </motion.h2>
                  <motion.p
                    variants={textItemVariants}
                    className="text-sm md:text-lg xl:max-w-[70%] font-sora pt-2 md:pt-4"
                  >
                    From policy dialogues to grassroots movements, from global
                    summits to community workshops—we design experiences that
                    connect people, amplify voices, and drive change.
                  </motion.p>
                </motion.div>
              </motion.div>
              <motion.div
                className="relative flex items-end bg-center bg-cover"
                style={{ backgroundImage: `url(${two})` }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={columnVariants}
                onClick={() => navigate("/impact-media-and-story-telling")}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                <motion.div
                  className="relative z-10 p-6 pb-16 mx-[5%] text-white flex flex-col gap-2"
                  variants={textContainerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <motion.p variants={textItemVariants}>
                    We don't just tell stories. We move people with them.
                  </motion.p>
                  <motion.h2
                    variants={textItemVariants}
                    className="mb-2 text-xl font-semibold md:text-4xl"
                  >
                    Impact Media <br />& Storytelling
                  </motion.h2>
                  <motion.p
                    variants={textItemVariants}
                    className="text-sm md:text-lg xl:max-w-[70%] font-sora pt-2 md:pt-4"
                  >
                    Films, campaigns, and digital storytelling that shine light
                    on untold realities and inspire action. Because every story
                    deserves to be heard—and to create change.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFour;
