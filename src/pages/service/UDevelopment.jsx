import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import one from "../../assets/services/development/one.webp";
import two from "../../assets/services/development/two.webp";
import three from "../../assets/services/development/three.webp";
import four from "../../assets/services/development/four.webp";
import five from "../../assets/services/development/five.webp";
import six from "../../assets/services/development/six.webp";

const projects = [
  {
    year: "©2025",
    title: "Event Management (Physical, Hybrid & Virtual)",
    description:
      "We don’t just organize events — we build stages where vision steps forward and becomes movement.",
    descriptiontwo:
      "From global forums to cultural festivals, we design experiences that carry purpose.",
    mainImage: two,
    thumbnails: [two, three, four, five, six],
  },
  {
    year: "©2025",
    title: "Logistics & Administrative Support",
    description:
      "A vision travels through every detail. From airport welcomes to final farewells, we manage the invisible so leaders can focus on impact.",
    descriptiontwo:
      "Because even the smallest detail can hold the biggest moment.",
    mainImage: four,
    thumbnails: [three, four, five, six, one],
  },
  {
    year: "©2025",
    title: "Interpretation & Translation During Events",
    description:
      "When visions meet, language must never divide them. We ensure every idea is heard — clearly, confidently, across borders.",
    descriptiontwo: "Voices change history only when they are understood.",
    mainImage: three,
    thumbnails: [four, five, six, one, two],
  },
  {
    year: "©2025",
    title: "Exhibition & Stall Management",
    description:
      "We turn empty spaces into living messages — where missions can be touched, seen, and remembered.",
    descriptiontwo: "Every stall, every display, is an invitation to believe.",
    mainImage: five,
    thumbnails: [five, six, one, two, three],
  },
  {
    year: "©2025",
    title: "Production of Event Collaterals, Branding & Stage Setups",
    description:
      "A vision needs atmosphere. We design light, sound, and identity — creating environments where messages gain power.",
    descriptiontwo: "From banners to backdrops, we shape how impact is seen.",
    mainImage: one,
    thumbnails: [six, one, two, three, four],
  },
  {
    year: "©2025",
    title: "Conference Kits & Onsite Services",
    description:
      "From the badge in hand to the booklet on the table — every touchpoint reminds people they are part of something larger.",
    descriptiontwo: "A well-crafted kit doesn’t just inform — it welcomes.",
    mainImage: six,
    thumbnails: [one, two, three, four, five],
  },
];

function UDevelopment() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen text-white px-[3%] md:px-[7%] overflow-hidden"
    >
      <div className="relative flex flex-col items-center gap-10 perspective-[1200px]">
        {projects.map((project, index) => {
          const cardRef = useRef(null);
          const { scrollYProgress: cardScroll } = useScroll({
            target: cardRef,
            offset: ["start end", "center start"],
          });
          const y = useSpring(useTransform(cardScroll, [0, 1], [200, -250]), {
            stiffness: 80,
            damping: 15,
          });
          const scale = useSpring(
            useTransform(cardScroll, [0, 1], [0.95, 1.05]),
            {
              stiffness: 80,
              damping: 15,
            }
          );
          return (
            <motion.div
              ref={cardRef}
              key={index}
              style={{
                y,
                scale,
                zIndex: 20 + index,
                willChange: "transform",
              }}
              className="sticky w-full overflow-hidden shadow-2xl top-24 rounded-2xl transform-gpu"
            >
              <img
                src={project.mainImage}
                alt={project.title}
                className="object-cover w-full h-[35rem] brightness-90"
                loading="lazy"
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
                  {/* <div className="flex flex-wrap gap-3 mt-6">
                    {project.thumbnails.map((img, i) => (
                      <div
                        key={i}
                        className="w-16 h-16 overflow-hidden border rounded-md md:w-20 md:h-20 border-white/20"
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${i + 1}`}
                          className="object-cover w-full h-full"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div> */}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default UDevelopment;
