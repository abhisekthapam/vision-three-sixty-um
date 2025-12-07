import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import one from "../../assets/services/development/two.webp";
import two from "../../assets/services/development/four.webp";
import three from "../../assets/services/development/three.webp";
import four from "../../assets/services/development/five.webp";
import five from "../../assets/services/development/one.webp";
import six from "../../assets/services/development/six.webp";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    sn: "01",
    heading: "Event Management",
    headingtwo: "(Physical, Hybrid & Virtual)",
    description:
      "We don’t just organize events — we build stages where vision steps forward and becomes movement.",
    descriptiontwo:
      "From global forums to cultural festivals, we design experiences that carry purpose.",
    image: one,
  },
  {
    sn: "02",
    heading: "Logistics ",
    headingtwo: "& Administrative Support",
    description:
      "A vision travels through every detail. From airport welcomes to final farewells, we manage the invisible so leaders can focus on impact.",
    descriptiontwo:
      "Because even the smallest detail can hold the biggest moment.",
    image: two,
  },
  {
    sn: "03",
    heading: "Interpretation ",
    headingtwo: "& Translation During Events",
    description:
      "We turn empty spaces into living messages — where missions can be touched, seen, and remembered.",
    descriptiontwo: "Every stall, every display, is an invitation to believe.",
    image: three,
  },
  {
    sn: "04",
    heading: "Exhibition",
    headingtwo: "& Stall Management",
    description:
      "We turn empty spaces into living messages — where missions can be touched, seen, and remembered.",
    descriptiontwo: "Every stall, every display, is an invitation to believe.",
    image: four,
  },
  {
    sn: "05",
    heading: "Production of Event Collaterals,",
    headingtwo: "Branding & Stage Setups",
    description:
      "A vision needs atmosphere. We design light, sound, and identity — creating environments where messages gain power.",
    descriptiontwo: "From banners to backdrops, we shape how impact is seen.",
    image: five,
  },
  {
    sn: "06",
    heading: "Conference Kits",
    headingtwo: "& Onsite Services",
    description:
      "From the badge in hand to the booklet on the table — every touchpoint reminds people they are part of something larger.",
    descriptiontwo: "A well-crafted kit doesn’t just inform — it welcomes.",
    image: six,
  },
];

function HomeSeven() {
  const bottomRefs = useRef([]);

  useEffect(() => {
    bottomRefs.current.forEach((bottom) => {
      gsap.set(bottom, { opacity: 0, y: 50 });

      ScrollTrigger.create({
        trigger: bottom.parentElement,
        start: "top 80%",
        end: "top 40%",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(bottom, {
            opacity: progress,
            y: 50 * (1 - progress),
            ease: "none",
          });
        },
      });
    });
  }, []);

  return (
    <div className="w-full px-[3%] md:px-[7%] bg-[#0F1115] py-16">
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative w-full border-b border-white border-opacity-70"
        >
          <div className={`bg-[#0F1115] pt-6 p-3 w-full sticky top-0 z-10`}>
            <div className="flex gap-3">
              <p>{section.sn}</p>
              <h1 className="text-xl font-bold md:text-5xl">
                {section.heading}
              </h1>
            </div>
            <div className="flex gap-3 pt-2">
              <p className="invisible">{section.sn}</p>
              <h1 className="text-xl font-bold md:text-5xl">
                {section.headingtwo}
              </h1>
            </div>
          </div>
          <div
            ref={(el) => (bottomRefs.current[index] = el)}
            className="bg-[#0F1115] text-white w-full font-medium text-base md:text-lg"
          >
            <div className="flex flex-col justify-between gap-6 p-4 md:flex-row md:items-center md:p-8">
              <div className="flex-1 text-secondary font-sora">
                <p className="mb-2">{section.description}</p>
                <p>{section.descriptiontwo}</p>
              </div>
              <div className="flex justify-center flex-1 md:justify-end">
                <img
                  src={section.image}
                  alt={section.heading}
                  className="object-cover w-full h-auto max-w-xs rounded-md shadow-lg md:max-w-sm"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeSeven;
