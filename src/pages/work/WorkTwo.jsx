import React, { useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import hero from "../../assets/work-two/hero.mp4";
import one from "../../assets/work-two/one/one.webp";
import two from "../../assets/work-two/one/two.webp";
import three from "../../assets/work-two/one/three.webp";
import four from "../../assets/work-two/one/four.webp";
import five from "../../assets/work-two/one/five.webp";
import six from "../../assets/work-two/two/one.webp";
import seven from "../../assets/work-two/two/two.webp";
import eight from "../../assets/work-two/two/three.webp";
import nine from "../../assets/work-two/two/four.webp";
import ten from "../../assets/work-two/two/five.webp";
import eleven from "../../assets/work-two/two/six.webp";
import twelve from "../../assets/work-two/two/seven.webp";
import thirteen from "../../assets/work-two/three/one.webp";
import fourteen from "../../assets/work-two/three/two.webp";
import fifteen from "../../assets/work-two/three/three.webp";
import sixteen from "../../assets/work-two/three/four.webp";
import seventeen from "../../assets/work-two/three/five.webp";
import eighteen from "../../assets/work-two/three/six.webp";
import nineteen from "../../assets/work-two/three/seven.webp";
import twenty from "../../assets/work-two/three/eight.webp";
import twentyone from "../../assets/work-two/three/nine.webp";
import twentytwo from "../../assets/work-two/three/ten.webp";
import twentrythree from "../../assets/work-two/four/one.webp";
import twentyfour from "../../assets/work-two/four/two.webp";
import twentyfive from "../../assets/work-two/four/three.webp";
import twentysix from "../../assets/work-two/four/four.webp";
import twentyseven from "../../assets/work-two/four/five.webp";
import twentyeight from "../../assets/work-two/four/six.webp";
import twentynine from "../../assets/work-two/five/1.webp";
import thirty from "../../assets/work-two/five/2.webp";
import thirtyone from "../../assets/work-two/five/3.webp";
import thirtytwo from "../../assets/work-two/five/4.webp";
import thirtythree from "../../assets/work-two/five/5.webp";
import thirtyfour from "../../assets/work-two/five/6.webp";
import thirtyfive from "../../assets/work-two/five/7.webp";
import thirtysix from "../../assets/work-two/five/8.webp";
import thirtyseven from "../../assets/work-two/five/9.webp";
import thirtyeight from "../../assets/work-two/five/10.webp";
import thirtynine from "../../assets/work-two/five/11.webp";
import forty from "../../assets/work-two/five/12.webp";
import fortyone from "../../assets/work-two/five/13.webp";
import fortytwo from "../../assets/work-two/five/14.webp";
import fortythree from "../../assets/work-two/five/15.webp";
import fortyfour from "../../assets/work-two/five/16.webp";
import fortyfive from "../../assets/work-two/five/17.webp";
import fortysix from "../../assets/work-two/five/18.webp";
import fortyseven from "../../assets/work-two/five/19.webp";
import fortyeight from "../../assets/work-two/five/20.webp";
import fortynine from "../../assets/work-two/five/21.webp";
import fifty from "../../assets/work-two/five/22.webp";
import fiftyone from "../../assets/work-two/five/23.webp";
import fiftytwo from "../../assets/work-two/five/24.webp";
import fiftythree from "../../assets/work-two/five/25.webp";
import fiftyfour from "../../assets/work-two/five/26.webp";
import fiftyfive from "../../assets/work-two/five/27.webp";
import fiftysix from "../../assets/work-two/five/28.webp";
import fiftyseven from "../../assets/work-two/six/1.webp";
import fiftyeight from "../../assets/work-two/six/2.webp";
import fiftynine from "../../assets/work-two/six/3.webp";
import sixty from "../../assets/work-two/six/4.webp";
import sixtyone from "../../assets/work-two/six/5.webp";
import sixtytwo from "../../assets/work-two/six/6.webp";
import sixtythree from "../../assets/work-two/six/7.webp";
import sixtyfour from "../../assets/work-two/six/8.webp";
import sixtyfive from "../../assets/work-two/six/9.webp";
import sixtysix from "../../assets/work-two/six/10.webp";
import sixtyseven from "../../assets/work-two/six/11.webp";
import sixtyeight from "../../assets/work-two/seven/1.webp";
import sixtynine from "../../assets/work-two/seven/2.webp";
import seventy from "../../assets/work-two/seven/3.webp";
import seventyone from "../../assets/work-two/seven/4.webp";
import seventytwo from "../../assets/work-two/seven/5.webp";
import seventythree from "../../assets/work-two/seven/6.webp";
import seventyfour from "../../assets/work-two/seven/7.webp";
import seventyfive from "../../assets/work-two/seven/8.webp";
import Footer from "../Footer";

const sections = [
  {
    title: "Rigorous Planning — From Washington to Kathmandu",
    description:
      "Weeks before the first banner went up, our teams in Nepal and World Bank Team from Washington D.C. were already working in sync—virtually mapping every inch of the MANGO Launch. From hall layouts and stage designs to bilingual flow, floor plans, and logistics, every detail was planned across time zones and executed on the ground in Kathmandu with picture-perfect precision. It was a collaboration across continents, brought to life in three seamless days.",
    images: [one, two, three, four, five],
  },
  {
    title: "Seamless Logistics — Every Journey, Every Detail",
    description:
      "From airport arrivals to hotel check-ins and conference kits, every delegate’s experience was choreographed with care. Flights, shuttles, and hospitality were aligned to the minute—so that when guests arrived, purpose began immediately.",
    images: [six, seven, eight, nine, ten, eleven, twelve],
  },
  {
    title: "Dynamic Discussions — The Path to Success Sessions",
    description:
      "Panels, dialogues, and hard-talk sessions brought together leading voices from across South Asia. The conversations were candid, evidence-driven, and solution-focused—turning insights into actionable regional pathways for tackling stunting and malnutrition.",
    images: [
      thirteen,
      fourteen,
      fifteen,
      sixteen,
      seventeen,
      eighteen,
      nineteen,
      twenty,
      twentyone,
      twentytwo,
    ],
  },
  {
    title:
      "Inclusive Pulse — Bilingual Voices, Shared Culture and Smart Engagement",
    description:
      "Inside the hall, English and Spanish flowed side by side. Live interpretation, inclusive moderation, and cultural interludes turned formal sessions into living exchanges—bridging regions through language, empathy, and shared vision. To deepen participation, we also introduced real-time voting and polling technology, enabling delegates to share views instantly and see collective insights projected live—creating an atmosphere of dialogue, data, and genuine connection.",
    images: [
      twentrythree,
      twentyfour,
      twentyfive,
      twentysix,
      twentyseven,
      twentyeight,
    ],
  },
  {
    title: "Creative Energizers — Performances & Meaningful Breaks",
    description:
      "Music, movement, and spontaneous networking transformed pauses into highlights. These carefully placed energizers recharged participants, fostered informal collaboration, and kept the spirit of connection alive between sessions.",
    images: [
      twentynine,
      thirty,
      thirtyone,
      thirtytwo,
      thirtythree,
      thirtyfour,
      thirtyfive,
      thirtysix,
      thirtyseven,
      thirtyeight,
      thirtynine,
      forty,
      fortyone,
      fortytwo,
      fortythree,
      fortyfour,
      fortyfive,
      fortysix,
      fortyseven,
      fortyeight,
      fortynine,
      fifty,
      fiftyone,
      fiftytwo,
      fiftythree,
      fiftyfour,
      fiftyfive,
      fiftysix,
    ],
  },
  {
    title: "Impactful Branding — Design that Spoke the Message",
    description:
      "Every visual cue told the story of MANGO: digital standees streaming live updates, a smart digital podium, dedicated photo-op zones, and intuitive wayfinding signage. From entry to exit, the design reinforced purpose—making the venue not just functional but unforgettable.",
    images: [
      fiftyseven,
      fiftyeight,
      fiftynine,
      sixty,
      sixtyone,
      sixtytwo,
      sixtythree,
      sixtyfour,
      sixtyfive,
      sixtysix,
      sixtyseven,
    ],
  },
  {
    title: "Thoughtful Documentation — Capturing Moments that Matter",
    description:
      "A professional A/V team recorded every perspective and performance. Across three days and over a hundred participants, we built a visual narrative that continues to amplify MANGO’s message long after the closing session.",
    images: [
      sixtyeight,
      sixtynine,
      seventy,
      seventyone,
      seventytwo,
      seventythree,
      seventyfour,
      seventyfive,
    ],
  },
];

function WorkTwo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
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
        <div className="flex justify-center">
          <div className="max-w-4xl p-4">
            <h1 className="mb-6 text-xl font-semibold md:text-4xl">
              Quote from Chris A, World Bank
            </h1>
            <div className="space-y-2 text-xs text-justify md:text-lg font-sora">
              <p>
                Vision 360 organized a high-profile conference for us at the
                Hyatt that brought together 70 attendees from across the globe.
                It was a huge success, and many of the attendees said it was one
                of the best conferences they’d attended. Without Vision 360, we
                could not have achieved what we did.
              </p>
              <p>
                From the start, Vivek and his team moved fast and helped us to
                reserve a great venue within a short time. Phoebe and Lokesh
                then guided us through all the other preparations- providing
                great recommendations and swift follow-up. During the event, the
                Vision 360 team’s execution was flawless, and they accommodated
                all our last-minute adjustments with good humor and an
                entrepreneurial spirit. Prashanna also produced a beautiful and
                cinematic event highlights video, which has been a great
                resource.
              </p>
              <p>
                Overall- Vision 360, Vivek, and his team are phenomenal. I would
                absolutely recommend anyone planning a major development event
                with them!
              </p>
              <p className="pt-4">-Chris A</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WorkTwo;
