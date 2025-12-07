import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import one from "../../assets/home/projects/one.webp";
import two from "../../assets/home/projects/two.webp";
import three from "../../assets/home/projects/three.webp";
import four from "../../assets/home/projects/two.webp";
import five from "../../assets/home/projects/three.webp";

const projects = [
  {
    year: "2025",
    head: "Events",
    title: "Events that move people, ideas, and impact forward.",
    description:
      "From global conferences to grassroots celebrations, each event we deliver is designed to create connection, spark dialogue, and bring vision to life.",
    mainImage: one,
    thumbnails: [two, three, four, five],
    path: "/projects/events",
  },
  {
    year: "2025",
    head: "Audio",
    headtwo: "& Visual",
    title: "We turn real voices into powerful stories.",
    description:
      "From documentaries to campaign films, our audio/visual work transforms lived experiences into narratives that inspire action and help people Live Their Vision.",
    mainImage: one,
    thumbnails: [two, three, four, five],
    path: "",
  },
  {
    year: "2025",
    head: "Campaign",
    headtwo: "& Report",
    title:
      "Campaigns that spark conversations, shift mindsets, and unite communities.",
    description:
      "We design and deliver public-facing campaigns that elevate voices, challenge norms, and inspire people to Live Their Vision.",
    mainImage: one,
    thumbnails: [two, three, four, five],
    path: "",
  },
];

function HomeTen() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen text-white px-[3%] md:px-[7%] overflow-hidden">
      <div className="py-24 text-[#2B2B2B] text-5xl font-semibold text-center md:text-8xl xl:text-9xl">
        PROJECTS
      </div>
      <div className="relative flex flex-col items-center gap-10 perspective-[1200px]">
        {projects?.map((project, index) => {
          const cardRef = useRef(null);

          const { scrollYProgress } = useScroll({
            target: cardRef,
            offset: ["start end", "center start"],
          });

          const y = useSpring(
            useTransform(scrollYProgress, [0, 1], [200, -250]),
            { stiffness: 80, damping: 15 }
          );

          const scale = useSpring(
            useTransform(scrollYProgress, [0, 1], [0.95, 1.05]),
            { stiffness: 80, damping: 15 }
          );

          const opacity = useTransform(
            scrollYProgress,
            [0, 0.4, 1],
            [0.3, 1, 1]
          );

          return (
            <motion.div
              key={index}
              ref={cardRef}
              style={{
                y,
                scale,
                zIndex: 20 + index,
                willChange: "transform",
              }}
              className="sticky w-full overflow-hidden shadow-2xl pointer-events-none top-24 rounded-2xl transform-gpu"
            >
              <img
                src={project?.mainImage || ""}
                alt={project?.title || ""}
                className="object-cover w-full h-[30rem] md:h-[35rem] brightness-90"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-end p-6 pointer-events-auto md:items-end">
                <motion.div
                  style={{ opacity, scale }}
                  className="w-full md:w-[32rem] bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl pointer-events-auto"
                >
                  <h1 className="text-2xl font-semibold lg:hidden">
                    {project?.head} {project?.headtwo ? project.headtwo : ""}
                  </h1>

                  <p className="mb-2 text-sm md:text-base">{project?.year}</p>

                  <h2 className="mb-3 text-base leading-snug md:text-xl">
                    {project?.title}
                  </h2>

                  <p className="mb-4 text-sm font-thin md:text-base font-sora">
                    {project?.description}
                  </p>

                  <button
                    onClick={() =>
                      project?.path ? navigate(project.path) : null
                    }
                    className="p-2 px-4 text-black bg-white rounded"
                  >
                    View Project
                  </button>

                  <div className="mt-6 pointer-events-auto">
                    <Swiper
                      modules={[FreeMode]}
                      freeMode={true}
                      spaceBetween={12}
                      slidesPerView={3.5}
                      className="w-full"
                    >
                      {(project?.thumbnails || [])
                        .slice(0, 10)
                        .map((img, i) => (
                          <SwiperSlide key={i}>
                            <div className="w-full h-24 overflow-hidden border rounded-md md:h-28 border-white/20">
                              <img
                                src={img}
                                alt={`thumbnail-${i}`}
                                className="object-cover w-full h-full"
                                loading="lazy"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </div>
                </motion.div>
              </div>

              <div className="absolute inset-0 flex items-end p-6 text-6xl font-semibold pointer-events-none md:text-7xl">
                <p className="hidden lg:block">
                  {project?.head} <br /> {project?.headtwo || ""}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeTen;
