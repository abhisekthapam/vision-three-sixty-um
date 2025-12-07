import React, { useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import hero from "../../assets/work-three/hero.mp4";
import one from "../../assets/work-three/one/1.webp";
import two from "../../assets/work-three/one/2.webp";
import three from "../../assets/work-three/one/3.webp";
import four from "../../assets/work-three/one/4.webp";
import five from "../../assets/work-three/one/5.webp";
import six from "../../assets/work-three/two/1.webp";
import seven from "../../assets/work-three/two/2.webp";
import eight from "../../assets/work-three/two/3.webp";
import nine from "../../assets/work-three/two/4.webp";
import ten from "../../assets/work-three/two/5.webp";
import eighteen from "../../assets/work-three/three/1.webp";
import nineteen from "../../assets/work-three/three/2.webp";
import twenty from "../../assets/work-three/three/3.webp";
import twentyone from "../../assets/work-three/three/4.webp";
import twentytwo from "../../assets/work-three/three/5.webp";
import twentythree from "../../assets/work-three/three/6.webp";
import twentyfour from "../../assets/work-three/three/7.webp";
import twentyfive from "../../assets/work-three/three/8.webp";
import twentysix from "../../assets/work-three/three/9.webp";
import sixtyeight from "../../assets/work-three/four/1.webp";
import sixtynine from "../../assets/work-three/four/2.webp";
import seventy from "../../assets/work-three/four/3.webp";
import seventyone from "../../assets/work-three/four/4.webp";
import seventytwo from "../../assets/work-three/four/5.webp";
import eightytwo from "../../assets/work-three/five/1.webp";
import Footer from "../Footer";
import Counter from "../../components/Counter";

const sections = [
  {
    title: "Rigorous Planning — From Vision to Ground Reality",
    description:
      "Months before Kathmandu saw its first WOW banner rise, Vision Three Sixty was already mapping out every meter of the venue. From collaborating virtually with teams in London to physically blueprinting flow maps, safety zones, lighting grids, and bilingual sessions — the foundation for success was built detail by detail. Every plan was rehearsed, revised, and realized — ensuring that when thousands walked into Nandakeshar Bagaincha and Nandi School, they stepped into a vision perfectly choreographed to inspire.",
    images: [one, two, three, four, five],
  },
  {
    title: "Flawless Operations — Every Detail in Motion",
    description:
      "For three days, WOW was a living, breathing ecosystem. Airport pickups, hotel coordination, artist greenrooms, and round-the-clock security ran in perfect sync. Open-air staging, ambient lighting, backstage management, and food services were all designed for comfort and flow — allowing speakers, performers, and guests to focus only on the experience. Our dedicated operations team ensured that not a single minute of the festival went off-beat.",
    images: [six, seven, eight, nine, ten],
  },
  {
    title: "Design & Experience — A City Turned Stage",
    description:
      "From sunrise yoga to late-evening concerts, every space at WOW was purpose-built for participation. We designed and installed digital standees, photowalls, branded arches, wayfinding systems, and dynamic signage that tied the park together in a single identity. Across multiple zones — ground art, theatre, exhibitions, panels — our design language gave WOW its heartbeat: vibrant, inclusive, and unmistakably human.",
    images: [
      eighteen,
      nineteen,
      twenty,
      twentyone,
      twentytwo,
      twentythree,
      twentyfour,
      twentyfive,
      twentysix,
    ],
  },
  {
    title: "Inclusivity & Engagement — Voices that Connect",
    description:
      "WOW Nepal celebrated connection in its truest form — through people, participation, and presence. From bilingual moderation and live interpretation to inclusive facilitation and open-floor dialogue, every session invited authentic conversation. Our team ensured smooth coordination across multiple stages and languages, so every voice — from artists to activists — was heard, understood, and celebrated. It wasn’t technology that connected people — it was empathy, design, and the rhythm of shared purpose.",
    images: [sixtyeight, sixtynine, seventy, seventyone, seventytwo],
  },
  {
    title: "Documentation & Legacy — Stories that Stay",
    description:
      "A dedicated multimedia crew captured WOW through multiple lenses — drone, camera, and sound. The resulting footage wasn’t merely coverage; it was cinematic storytelling. From behind-the-scenes to post-event highlight films, every frame celebrated diversity, courage, and connection — ensuring WOW continues to inspire well beyond its stages.",
    // images: [eightytwo],
  },
];
// import statv from "../../assets/work-one/stats/wateraid.mp4";

function WorkThree() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const videoRef1 = useRef(null);
  const [isMuted1, setIsMuted1] = useState(true);

  const toggleMute1 = () => {
    const video = videoRef1.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted1(video.muted);
  };

  const renderImages = (images) => {
    if (!images || images.length === 0) return null;
    return images.map((img, index) => {
      const isFullScreen = (index + 1) % 5 === 0;
      const heightClass = isFullScreen
        ? "h-screen col-span-1 md:col-span-3 lg:col-span-4"
        : index % 2 === 0
        ? "h-[38rem]"
        : "h-[34rem]";

      return (
        <div
          key={index}
          className={`relative w-full overflow-hidden ${heightClass}`}
        >
          <img
            src={img}
            alt={`work-${index + 1}`}
            className="absolute inset-0 object-cover w-full h-full"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 mix-blend-multiply" />
        </div>
      );
    });
  };

  const renderSection = ({ title, description, images }, index) => (
    <div key={index} className="space-y-16">
      <div className="space-y-3 px-[3%] md:px-[7%] flex gap-6 md:gap-24">
        <h1 className="max-w-xl text-3xl font-bold md:text-6xl">{title}</h1>
        <div className="text-xs md:text-lg font-sora">
          <p className="max-w-4xl">{description}</p>
        </div>
      </div>
      {images && images.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {renderImages(images)}
        </div>
      )}
    </div>
  );

  return (
    <div>
      <div className="pb-24 space-y-24 text-black select-none">
        <div className="relative h-[32vh] md:h-screen">
          <video
            ref={videoRef}
            src={hero}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            webkit-playsinline="true"
            className="absolute inset-0 object-cover w-full h-full pointer-events-none"
          />

          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <button
            onClick={toggleMute}
            className="absolute p-2 bg-white rounded-full opacity-75 bottom-5 right-5"
          >
            {isMuted ? (
              <FaVolumeMute className="text-2xl text-primary" />
            ) : (
              <FaVolumeUp className="text-2xl text-primary" />
            )}
          </button>
        </div>
        {sections.map(renderSection)}

        <div className="w-full md:h-screen flex flex-col md:flex-row items-center justify-center py-6 md:py-16 overflow-hidden px-[3%] md:px-[7%] gap-6">
          <div className="flex flex-col w-full h-full space-y-6 text-xl font-semibold md:w-1/2 md:space-y-8 md:text-2xl">
            <div className="pb-2 border-b border-black border-opacity-60 md:pb-4">
              <p>
                <Counter target={12} suffix="K" />+ visitors across 2 adjacent
                venues (Open Park and School)
              </p>
            </div>
            <div className="pb-2 border-b border-black border-opacity-60 md:pb-4">
              <p>
                <Counter target={70} />+ sessions and performances
              </p>
            </div>
            <div className="pb-2 border-b border-black border-opacity-60 md:pb-4">
              <p>
                <Counter target={100} />+ artists and speakers
              </p>
            </div>
            <div className="pb-2 border-b border-black border-opacity-60 md:pb-4">
              <p>
                <Counter target={50} />+ national and international partners
              </p>
            </div>
            <div className="pb-2 border-b border-black border-opacity-60 md:pb-4">
              <p>
                <Counter target={24} suffix="/" /> <Counter target={7} /> onsite
                team and command structure
              </p>
            </div>
            <div className="pb-2 border-b border-black border-opacity-60 md:pb-4">
              <p>
                Zero disruptions — <Counter target={100} suffix="%" /> delivery
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full h-full md:w-1/2">
            <div
              className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[430px] bg-black rounded-xl overflow-hidden shadow-xl"
              style={{ maxHeight: "90vh" }}
            >
              <img
                src={eightytwo}
                className="object-cover w-full h-full"
                style={{ maxHeight: "90vh", minHeight: "50vh" }}
              />
              <button
                onClick={toggleMute1}
                className="absolute p-2 text-white transition rounded-full bottom-3 right-3 bg-black/50 hover:bg-black/70"
              >
                {isMuted1 ? (
                  <FaVolumeMute className="text-xl" />
                ) : (
                  <FaVolumeUp className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full p-4">
          <p className="max-w-4xl text-xs text-center md:text-lg font-sora">
            WOW Nepal 2024 was not just an event — it was proof of how Vision
            Three Sixty turns imagination into infrastructure, ideas into
            experience, and purpose into movement. Because at Vision Three
            Sixty, we don’t just create events — we help people Live Their
            Vision.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WorkThree;
