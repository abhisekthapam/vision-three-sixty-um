import React, { useState, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaForward,
  FaBackward,
} from "react-icons/fa";
import one from "../../assets/work-one/one/one.webp";
import two from "../../assets/work-one/one/two.webp";
import three from "../../assets/work-one/one/three.webp";
import four from "../../assets/work-one/one/four.webp";
import five from "../../assets/work-one/two/one.webp";
import six from "../../assets/work-one/two/two.webp";
import seven from "../../assets/work-one/two/three.webp";
import eight from "../../assets/work-one/three/one.webp";
import nine from "../../assets/work-one/three/two.webp";
import ten from "../../assets/work-one/three/three.webp";
import eleven from "../../assets/work-one/three/four.webp";
import twelve from "../../assets/work-one/three/five.webp";
import thirteen from "../../assets/work-one/three/six.webp";
import fourteen from "../../assets/work-one/three/seven.webp";
import fifteen from "../../assets/work-one/three/eight.webp";
import sixteen from "../../assets/work-one/three/nine.webp";
import seventeen from "../../assets/work-one/three/ten.webp";
import eighteen from "../../assets/work-one/three/eleven.webp";
import nineteen from "../../assets/work-one/three/twelve.webp";
import twenty from "../../assets/work-one/four/one.webp";
import twentyone from "../../assets/work-one/four/two.webp";
import twentytwo from "../../assets/work-one/four/three.webp";
import twentythree from "../../assets/work-one/four/four.webp";
import twentyfour from "../../assets/work-one/four/five.webp";
import twentyfive from "../../assets/work-one/five/one.webp";
import twentysix from "../../assets/work-one/five/two.webp";
import twentyseven from "../../assets/work-one/five/three.webp";
import twentyeight from "../../assets/work-one/five/four.webp";
import twentynine from "../../assets/work-one/five/five.webp";
import thirty from "../../assets/work-one/five/six.webp";
import thirtyone from "../../assets/work-one/five/seven.webp";
import thirtytwo from "../../assets/work-one/five/eight.webp";
import thirtythree from "../../assets/work-one/five/nine.webp";
import thirtyfour from "../../assets/work-one/five/ten.webp";
import thirtyfive from "../../assets/work-one/five/eleven.webp";
import thirtysix from "../../assets/work-one/five/twelve.webp";
import thirtyseven from "../../assets/work-one/five/thirteen.webp";
import thirtyeight from "../../assets/work-one/five/fourteen.webp";
import hero from "../../assets/work-one/hero.mp4";
import statv from "../../assets/work-one/stats/wateraid.mp4";
import Counter from "../../components/Counter";
import Footer from "../Footer";

function WorkOne() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const skipForward = () => {
    const video = videoRef.current;
    video.currentTime = Math.min(video.duration, video.currentTime + 5);
  };

  const skipBackward = () => {
    const video = videoRef.current;
    video.currentTime = Math.max(0, video.currentTime - 5);
  };
  const first = [one, two, three, four];
  const second = [five, six, seven];
  const third = [
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
  ];
  const fourth = [twenty, twentyone, twentytwo, twentythree, twentyfour];
  const fifth = [
    twentyfive,
    twentysix,
    twentyseven,
    twentyeight,
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
  ];

  const videoRef1 = useRef(null);
  const [isMuted1, setIsMuted1] = useState(true);

  const toggleMute1 = () => {
    const video = videoRef1.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted1(video.muted);
  };

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
        <div className="space-y-16">
          <div className="space-y-3 px-[3%] md:px-[7%] flex gap-6 md:gap-24">
            <h1 className="max-w-xl text-3xl font-bold md:text-6xl">
              Strategic Planning & Campaign Design
            </h1>
            <div className="text-xs md:text-lg font-sora">
              <p className="max-w-4xl">
                Conceptualized and scaled a multi-month campaign roadmap
                integrating public engagement, influencer amplification, and
                policy advocacy. Designed the signature #TalkToilet Bus Tour—a
                mobile conversation platform uniting mayors, journalists, and
                influencers on a journey from insight to empathy. Seamlessly
                coordinated with WaterAid Nepal and local partners from
                conception to closure.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {first.map((img, index) => {
              const isFullScreen = (index + 1) % 5 === 0;

              return (
                <div
                  key={index}
                  className={`relative w-full overflow-hidden ${
                    isFullScreen
                      ? "h-screen col-span-1 md:col-span-3 lg:col-span-4"
                      : index % 2 === 0
                      ? "h-[38rem]"
                      : "h-[34rem]"
                  }`}
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
            })}
          </div>
        </div>
        <div className="space-y-16">
          <div className="space-y-3 px-[3%] md:px-[7%] flex gap-6 md:gap-24">
            <h1 className="max-w-xl text-3xl font-bold md:text-6xl">
              Branding & Storytelling that Moves
            </h1>
            <div className="text-xs md:text-lg font-sora">
              <p className="max-w-4xl">
                Delivered a complete campaign identity system—bus wraps,
                installations, digital media, and photobooths—turning sanitation
                into a symbol of civic pride. Designed immersive experiential
                zones, including a life-sized toilet booth where leaders could
                feel and reflect on the everyday realities of women and girls.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {second.map((img, index) => (
              <div
                key={index}
                className={`relative w-full overflow-hidden ${
                  index % 2 === 0 ? "h-[26rem]" : "h-[32rem]"
                }`}
              >
                <img
                  src={img}
                  alt={`work-${index + 1}`}
                  className="absolute inset-0 object-cover w-full h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-16">
          <div className="space-y-3 px-[3%] md:px-[7%] flex gap-6 md:gap-24">
            <h1 className="max-w-xl text-3xl font-bold md:text-6xl">
              On-Ground Activation & People Engagement
            </h1>
            <div className="text-xs md:text-lg font-sora">
              <p className="max-w-4xl">
                Executed live bus tours, street dramas, and flash mobs in
                high-traffic areas to transform awareness into community
                participation. Created interactive “photo walk” installations
                and public art to humanize policy advocacy.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {third.map((img, index) => {
              const isFullScreen = (index + 1) % 5 === 0;

              return (
                <div
                  key={index}
                  className={`relative w-full overflow-hidden ${
                    isFullScreen
                      ? "h-screen col-span-1 md:col-span-3 lg:col-span-4"
                      : index % 2 === 0
                      ? "h-[38rem]"
                      : "h-[34rem]"
                  }`}
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
            })}
          </div>
        </div>
        <div className="space-y-16">
          <div className="space-y-3 px-[3%] md:px-[7%] flex gap-6 md:gap-24">
            <h1 className="max-w-xl text-3xl font-bold md:text-6xl">
              Media & Influence
            </h1>
            <div className="text-xs md:text-lg font-sora">
              <p className="max-w-4xl">
                Produced and managed a nationally televised panel discussion
                (Kacheri) on sanitation and dignity, broadcast on Image
                Television. Partnered with influencers Wangden Sherpa, Elena
                Gurung, and Aayush Shrestha, whose campaign videos reached over
                300,000 combined viewers across TikTok and Instagram.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {fourth.map((img, index) => {
              const isFullScreen = (index + 1) % 5 === 0;

              return (
                <div
                  key={index}
                  className={`relative w-full overflow-hidden ${
                    isFullScreen
                      ? "h-screen col-span-1 md:col-span-3 lg:col-span-4"
                      : index % 2 === 0
                      ? "h-[38rem]"
                      : "h-[34rem]"
                  }`}
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
            })}
          </div>
        </div>
        <div className="space-y-16">
          <div className="space-y-3 px-[3%] md:px-[7%] flex gap-6 md:gap-24">
            <h1 className="max-w-xl text-3xl font-bold md:text-6xl">
              Commitment & Policy Momentum
            </h1>
            <div className="text-xs md:text-lg font-sora">
              <p className="max-w-4xl">
                Engaged mayors, deputy mayors, ministry officials, and UN
                representatives to publicly commit to building and managing
                women-friendly public toilets. Captured visual pledges through
                symbolic signature walls and thumbprint art installations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {fifth.map((img, index) => {
              const isFullScreen = (index + 1) % 5 === 0;

              return (
                <div
                  key={index}
                  className={`relative w-full overflow-hidden ${
                    isFullScreen
                      ? "h-screen col-span-1 md:col-span-3 lg:col-span-4"
                      : index % 2 === 0
                      ? "h-[38rem]"
                      : "h-[34rem]"
                  }`}
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
            })}
          </div>
        </div>

        <div className="w-full md:h-screen flex flex-col md:flex-row items-center justify-center py-6 md:py-16 overflow-hidden px-[3%] md:px-[7%] gap-6">
          <div className="flex flex-col w-full h-full space-y-6 text-xl font-semibold md:w-1/2 md:space-y-8 md:text-2xl">
            <div className="pb-2 border-b border-black border-opacity-60 md:pb-4">
              <p>
                <Counter target={3} /> Campaign Phases (Pilot → Scale-Up →
                Finale)
              </p>
            </div>
            <div className="pb-2 border-b border-black border-opacity-60 md:pb-4">
              <p>
                <Counter target={40} />+ Influencers, Leaders & Media
                Representatives Engaged
              </p>
            </div>
            <div className="pb-2 border-b border-black border-opacity-60 md:pb-4">
              <p>
                <Counter target={30} />
                -Minute National TV Broadcast on Image Television
              </p>
            </div>
            <div className="pb-2 border-b border-black border-opacity-60 md:pb-4">
              <p>
                <Counter target={300} suffix="K" />+ Social Media Impressions
              </p>
            </div>
            <div className="pb-2 border-b border-black border-opacity-60 md:pb-4">
              <p>
                <Counter target={10} />+ Partner Institutions Involved
              </p>
            </div>
            <div className="pb-2 border-b border-black border-opacity-60 md:pb-4">
              <p>Multiple On-Ground Performances & Installations</p>
            </div>
          </div>
          <div className="flex justify-center w-full h-full md:w-1/2">
            <div
              className="relative w-[280px] sm:w-[320px] md:w-[380px] lg:w-[430px] bg-black rounded-xl overflow-hidden shadow-xl"
              style={{ maxHeight: "90vh" }}
            >
              <video
                ref={videoRef1}
                src={statv}
                autoPlay
                loop
                muted={isMuted1}
                playsInline
                className="object-cover w-full h-full"
                style={{ maxHeight: "90vh" }}
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

        <div className="space-y-24">
          <div className="space-y-3 px-[3%] md:px-[7%] flex gap-6 md:gap-24">
            <h1 className="max-w-xl text-3xl font-bold md:text-6xl">
              Living Our Vision
            </h1>
            <div className="text-xs md:text-lg font-sora">
              <p className="max-w-4xl">
                Through #TalkToilet, Vision Three Sixty proved that advocacy can
                move beyond reports and conferences—it can ride a bus, dance in
                the streets, and end up on national television. We didn’t just
                talk toilets; we made Nepal talk dignity. That’s what it means
                to Live Your Vision.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WorkOne;
