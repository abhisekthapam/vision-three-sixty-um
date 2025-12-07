import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import one from "../../assets/services/impact/one.webp";
import two from "../../assets/services/impact/two.webp";
import three from "../../assets/services/impact/three.webp";
import four from "../../assets/services/impact/four.webp";
import five from "../../assets/services/impact/five.webp";
import six from "../../assets/services/impact/six.webp";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    sn: "01",
    heading: "Documentary ",
    headingtwo: "& Film Production",
    description:
      "We don’t just film lives — we uncover the vision it takes to endure, to hope, and to be seen.",
    descriptiontwo:
      "From rural journeys to human rights struggles, our documentaries transform testimony into impact.",
    image: one,
  },
  {
    sn: "02",
    heading: "Visual Training Materials",
    headingtwo: "& Awareness Videos",
    description:
      "Some visions must teach. Some must awaken. We create visual tools that turn knowledge into action — and awareness into change.",
    descriptiontwo:
      "Whether for communities or institutions, our materials educate with dignity.",
    image: two,
  },
  {
    sn: "03",
    heading: "Campaign Management",
    headingtwo: " & Creative Visibility Packages",
    description:
      "When a vision demands to be heard, we build campaigns that carry it — boldly, bravely, and beyond borders.",
    descriptiontwo:
      "From Talk Toilet to nationwide advocacy, we turn silence into movement.",
    image: three,
  },
  {
    sn: "04",
    heading: "Digital Content,",
    headingtwo: "Social Media Visuals, PSAs & Jingles",
    description:
      "A vision must travel — across screens, feeds, and voices. We craft digital content that doesn’t chase trends, but shapes them.",
    descriptiontwo:
      "We give causes a rhythm, a frame, a voice people remember.",
    image: four,
  },
  {
    sn: "05",
    heading: "Photography, Videography,",
    headingtwo: "Subtitling & Translation for Media",
    description:
      "Every vision deserves accuracy and access. We capture moments, translate meaning, and ensure stories speak to all — in every language, on every screen.",
    descriptiontwo:
      "From field lenses to final subtitles, we carry truth with care.",
    image: five,
  },
  {
    sn: "06",
    heading: "Design & Publication of",
    headingtwo: "Knowledge Products, Reports & Manuals",
    description:
      "We turn research into resonance — transforming data, policy, and insight into narratives that live, inform, and influence.",
    descriptiontwo:
      "From learning manuals to policy reports, we design knowledge that moves hearts and minds.",
    image: six,
  },
];

function HomeNine() {
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

export default HomeNine;
