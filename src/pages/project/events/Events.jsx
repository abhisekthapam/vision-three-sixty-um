import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import bgone from "../../../assets/home/ten.webp";
import bgtwo from "../../../assets/home/eleven.webp";
import bgthree from "../../../assets/home/thirteen.webp";
import Footer from "../../Footer";

const items = [
  {
    bg: bgone,
    title: "WOW Nepal 2024 — The Festival of Possibilities",
    description:
      "At Vision Three Sixty, imagination turns into action — WOW Nepal 2024 proved that.",
    path: "/wow-nepal",
  },
  {
    bg: bgtwo,
    title: "TalkToilet — Turning Conversation into Change",
    description:
      "Commissioned by WaterAid Nepal… national campaign • Policy advocacy + Creative mobilization",
    path: "/talk-toilet",
  },
  {
    bg: bgthree,
    title: "MANGO — A Digital Marketing Campaign",
    description: "Social Media Marketing, Content Creation.",
    path: "/mango",
  },
];

function Events() {
  const navigate = useNavigate();
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScrollOrResize = () => {
      if (window.innerWidth > 1024) {
        setActiveIndex(null);
        return;
      }

      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        let newActive = null;
        const vh = window.innerHeight;
        const topTrigger = vh * 0.27;
        const bottomTrigger = vh * 0.75;

        cardRefs.current.forEach((card, index) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          if (cardCenter > topTrigger && cardCenter < bottomTrigger) {
            newActive = index;
          }
        });

        setActiveIndex(newActive);
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScrollOrResize);
    window.addEventListener("resize", handleScrollOrResize);
    handleScrollOrResize();

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, []);

  return (
    <div>
      <div className="text-black py-28 px-[3%] md:px-[7%] select-none">
        <div className="flex justify-center pb-12">
          <h1 className="max-w-5xl text-3xl font-bold text-center md:text-5xl">
            Live Your Vision — by creating spaces where it can be heard, seen,
            and shared.
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {items.map((item, index) => {
            const isActive = activeIndex === index && window.innerWidth <= 1024;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => navigate(item.path)}
                className="relative h-[24rem] md:h-[32rem] xl:h-[26rem] overflow-hidden cursor-pointer rounded group"
              >
                <div
                  className="absolute inset-0 transition-transform duration-500 ease-in-out bg-center bg-cover group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.bg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div
                  className={`absolute bottom-0 left-0 w-full px-6 pb-4
                  text-white z-10 flex flex-col transition-all duration-500 ease-in-out
                  ${isActive ? "pb-6" : "group-hover:pb-6"}`}
                >
                  <h2
                    className={`text-xl font-semibold transition-all duration-500 ease-in-out
                    ${isActive ? "-mb-2" : "group-hover:-mb-2"}`}
                  >
                    {item.title}
                  </h2>

                  <p
                    className={`text-sm mt-2 md:mt-2 transition-all duration-500 ease-in-out font-sora
                    ${
                      isActive
                        ? "opacity-100 max-h-40"
                        : "opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 overflow-hidden"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
