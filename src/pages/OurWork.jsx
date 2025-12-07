import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import one from "../assets/services/one.webp";
import two from "../assets/services/one.webp";
import three from "../assets/services/one.webp";
import four from "../assets/services/one.webp";

const projects = [
  {
    year: "©2025",
    title: "Event Management (Physical, Hybrid & Virtual)",
    description:
      "We don’t just organize events — we build stages where vision steps forward and becomes movement.",
    descriptiontwo:
      "From global forums to cultural festivals, we design experiences that carry purpose.",
    mainImage: one,
    thumbnails: [two, three, four, one],
  },
  {
    year: "©2025",
    title: "Logistics & Administrative Support",
    description:
      "A vision travels through every detail. From airport welcomes to final farewells, we manage the invisible so leaders can focus on impact.",
    descriptiontwo:
      "Because even the smallest detail can hold the biggest moment.",
    mainImage: one,
    thumbnails: [two, three, four, one],
  },
  {
    year: "©2025",
    title: "Interpretation & Translation During Events",
    description:
      "When visions meet, language must never divide them. We ensure every idea is heard — clearly, confidently, across borders.",
    descriptiontwo: "Voices change history only when they are understood.",
    mainImage: one,
    thumbnails: [two, three, four, one],
  },
  {
    year: "©2025",
    title: "Exhibition & Stall Management",
    description:
      "We turn empty spaces into living messages — where missions can be touched, seen, and remembered.",
    descriptiontwo: "Every stall, every display, is an invitation to believe.",
    mainImage: one,
    thumbnails: [two, three, four, one],
  },
  {
    year: "©2025",
    title: "Production of Event Collaterals, Branding & Stage Setups",
    description:
      "A vision needs atmosphere. We design light, sound, and identity — creating environments where messages gain power.",
    descriptiontwo: "From banners to backdrops, we shape how impact is seen.",
    mainImage: one,
    thumbnails: [two, three, four, one],
  },
  {
    year: "©2025",
    title: "Conference Kits & Onsite Services",
    description:
      "From the badge in hand to the booklet on the table — every touchpoint reminds people they are part of something larger.",
    descriptiontwo: "A well-crafted kit doesn’t just inform — it welcomes.",
    mainImage: one,
    thumbnails: [two, three, four, one],
  },
];

function OurWork() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-black px-[3%] md:px-[7%] py-8 md:py-20 overflow-hidden"
    >
      <div className="relative flex flex-col items-center gap-10 perspective-[1200px]">
        {projects.map((project, index) => {
          const cardRef = useRef(null);
          const { scrollYProgress: cardScroll } = useScroll({
            target: cardRef,
            offset: ["start end", "center start"],
          });
          const y = useTransform(cardScroll, [0, 1], [200, -250]);
          const scale = useTransform(cardScroll, [0, 1], [0.95, 1.05]);
          const rotateX = useTransform(cardScroll, [0, 1], [15, 0]);
          const ySmooth = useSpring(y, { stiffness: 100, damping: 20 });
          const scaleSmooth = useSpring(scale, { stiffness: 100, damping: 20 });
          const rotateSmooth = useSpring(rotateX, {
            stiffness: 120,
            damping: 25,
          });

          return (
            <motion.div
              ref={cardRef}
              key={index}
              style={{
                y: ySmooth,
                scale: scaleSmooth,
                rotateX: rotateSmooth,
                zIndex: 20 + index,
              }}
              className="sticky w-full overflow-hidden shadow-2xl top-24 rounded-2xl transform-gpu"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-[35rem] brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-end p-6 md:items-end">
                <motion.div
                  style={{
                    opacity: useTransform(cardScroll, [0, 0.4, 1], [0.3, 1, 1]),
                    scale: useTransform(cardScroll, [0, 1], [0.95, 1]),
                  }}
                  className="w-full md:w-[35rem] bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl"
                >
                  <p className="mb-2 text-sm md:text-base opacity-80">
                    {project.year}
                  </p>

                  <h2 className="mb-3 text-xl font-semibold leading-snug md:text-2xl">
                    {project.title}
                  </h2>

                  <p className="mb-2 text-sm italic font-thin md:text-base">
                    {project.description}
                  </p>
                  <p className="mb-10 text-sm font-thin md:text-base">
                    {project.descriptiontwo}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.thumbnails.map((img, i) => (
                      <div
                        key={i}
                        className="w-16 h-16 overflow-hidden border rounded-md md:w-20 md:h-20 border-white/20"
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${i + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default OurWork;
