import React from "react";
import one from "../../assets/home/three.webp";

function HomeEight() {
  return (
    <div className="relative h-screen w-full bg-[#13161A] flex items-center justify-center overflow-hidden">
      <img
        src={one}
        alt="Hero Background"
        className="absolute w-[80%] h-[80%] object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
      />
      <div className="absolute w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 rounded-xl"></div>
      <div className="absolute text-white top-16 md:left-24">
        <p className="text-sm md:text-2xl font-sora">
          We don’t just tell stories. We move people with them.
        </p>
        <div className="pt-2 space-y-4 text-5xl font-bold md:text-8xl">
          <p>
            Impact<span className="text-[#FA693E]"> Media </span>
          </p>
          <p className="text-[#FA693E]">& Storytelling</p>
        </div>
      </div>
      <div className="absolute text-white md:bottom-[10%] px-10 right-0 md:right-16">
        <div className="flex text-lg text-white uppercase md:text-right text-opacity-70">
          <p className="max-w-2xl font-sora">
            Films, campaigns, and digital storytelling that shine light on
            untold realities and inspire action. Because every story deserves to
            be heard—and to create change.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeEight;
