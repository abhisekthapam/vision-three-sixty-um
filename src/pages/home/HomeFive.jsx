import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import one from "../../assets/home/ten.webp";
import two from "../../assets/home/eleven.webp";
import three from "../../assets/home/thirteen.webp";

const HomeFive = () => {
  const navigate = useNavigate();

  const works = [
    {
      image: one,
      title: "WOW Nepal 2024 — The Festival of Possibilities",
      description:
        "At Vision Three Sixty, imagination turns into action — WOW Nepal 2024 proved that.",
      path: "/wow-nepal",
      bg: "bg-gradient-to-br from-purple-400 via-pink-400 to-red-400",
    },
    {
      image: two,
      title: "TalkToilet — Turning Conversation into Change",
      description:
        "Commissioned by WaterAid Nepal… national campaign • Policy advocacy + Creative mobilization.",
      path: "/talk-toilet",
      bg: "bg-gradient-to-br from-green-400 via-teal-400 to-blue-400",
    },
    {
      image: three,
      title: "MANGO — A Digital Marketing Campaign",
      description: "Social Media Marketing, Content Creation",
      path: "/mango",
      bg: "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400",
    },
  ];

  return (
    <section className="w-full py-16 text-black md:py-20">
      <div className="px-4 md:px-[7%] mb-12">
        <p className="text-sm md:text-xl text-secondary">Our Work</p>
        <h1 className="text-2xl font-semibold md:text-6xl">Explore Our Work</h1>
      </div>

      <div className="relative flex flex-col w-full gap-16 pb-40 md:gap-20">
        {works.map((work, index) => (
          <ScrollCard key={index} work={work} />
        ))}
      </div>
    </section>
  );
};

const ScrollCard = ({ work }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const clipTop = useTransform(scrollYProgress, [0, 1], [95, 85]);
  const clipBottom = useTransform(scrollYProgress, [0, 1], [85, 95]);

  const clipPath = useTransform(
    [clipTop, clipBottom],
    ([top, bottom]) =>
      `polygon(${50 - top / 2}% 0%, ${50 + top / 2}% 0%, ${
        50 + bottom / 2
      }% 100%, ${50 - bottom / 2}% 100%)`
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, clipPath }}
      className={`h-[95vh] flex flex-col items-center justify-center cursor-pointer ${work.bg} px-4 md:px-0`}
      onClick={() => navigate(work.path)}
      title={`Go To ${work.title}`}
    >
      <motion.div className="relative w-full max-w-full md:max-w-4xl h-[50%] md:h-[70%]">
        <div
          className="absolute inset-0 bg-center bg-cover rounded"
          style={{ backgroundImage: `url(${work.image})` }}
        />
      </motion.div>

      <div className="max-w-full px-2 mt-4 text-center md:max-w-3xl md:mt-6 md:px-0">
        <h2 className="text-lg font-semibold md:text-3xl">{work.title}</h2>
        <p className="mt-2 text-sm text-white md:text-lg">{work.description}</p>
      </div>
    </motion.div>
  );
};

export default HomeFive;
