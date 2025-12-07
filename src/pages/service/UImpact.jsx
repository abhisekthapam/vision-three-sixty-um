import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import one from "../../assets/services/impact/one.webp";
import two from "../../assets/services/impact/two.webp";
import three from "../../assets/services/impact/three.webp";
import four from "../../assets/services/impact/four.webp";
import five from "../../assets/services/impact/five.webp";
import six from "../../assets/services/impact/six.webp";

const projects = [
  {
    year: "©2025",
    title: "Documentary & Film Production",
    description:
      "We don’t just film lives — we uncover the vision it takes to endure, to hope, and to be seen.",
    descriptiontwo:
      "From rural journeys to human rights struggles, our documentaries transform testimony into impact.",
    mainImage: one,
    thumbnails: [two, three, four, five, six],
  },
  {
    year: "©2025",
    title: "Visual Training Materials & Awareness Videos",
    description:
      "Some visions must teach. Some must awaken. We create visual tools that turn knowledge into action — and awareness into change.",
    descriptiontwo:
      "Whether for communities or institutions, our materials educate with dignity.",
    mainImage: two,
    thumbnails: [three, four, five, six, one],
  },
  {
    year: "©2025",
    title: "Campaign Management & Creative Visibility Packages",
    description:
      "When a vision demands to be heard, we build campaigns that carry it — boldly, bravely, and beyond borders.",
    descriptiontwo:
      "From Talk Toilet to nationwide advocacy, we turn silence into movement.",
    mainImage: three,
    thumbnails: [four, five, six, one, two],
  },
  {
    year: "©2025",
    title: "Digital Content, Social Media Visuals, PSAs & Jingles",
    description:
      "A vision must travel — across screens, feeds, and voices. We craft digital content that doesn’t chase trends, but shapes them.",
    descriptiontwo:
      "We give causes a rhythm, a frame, a voice people remember.",
    mainImage: four,
    thumbnails: [five, six, one, two, three],
  },
  {
    year: "©2025",
    title: "Photography, Videography, Subtitling & Translation for Media",
    description:
      "Every vision deserves accuracy and access. We capture moments, translate meaning, and ensure stories speak to all — in every language, on every screen.",
    descriptiontwo:
      "From field lenses to final subtitles, we carry truth with care.",
    mainImage: five,
    thumbnails: [six, one, two, three, four],
  },
  {
    year: "©2025",
    title: "Design & Publication of Knowledge Products, Reports & Manuals",
    description:
      "We turn research into resonance — transforming data, policy, and insight into narratives that live, inform, and influence.",
    descriptiontwo:
      "From learning manuals to policy reports, we design knowledge that moves hearts and minds.",
    mainImage: six,
    thumbnails: [one, two, three, four, five],
  },
];

function UImpact() {
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

export default UImpact;
