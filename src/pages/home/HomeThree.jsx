import React from "react";
import one from "../../assets/home/three.webp";

function HomeThree() {
  return (
    <div className="relative h-screen w-full bg-[#13161A] flex items-center justify-center overflow-hidden">
      <img
        src={one}
        alt="Hero Background"
        className="absolute w-[80%] h-[80%] object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
      />
      <div className="absolute w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 rounded-xl"></div>
      <div className="absolute text-white top-16 md:left-24">
        <div className="space-y-4 text-4xl font-bold md:text-8xl">
          <p>DEVELOPMENT</p>
          <p className="text-[#FA693E]">COMMUNICATIONS</p>
          <p className="text-[#FA693E]">& EVENTS</p>
        </div>
      </div>
      <div className="absolute text-white md:top-[60%] right-24 left-10">
        <div className="text-lg text-white uppercase md:text-right text-opacity-70 font-sora">
          <p>From policy dialogues to grassroots</p>
          <p>movements, from global summits to</p>
          <p>community workshops—we design</p>
          <p>experiences that connect people,</p>
          <p>amplify voices, and drive change.</p>
        </div>
      </div>
      <div className="absolute text-center text-white -translate-x-1/2 bottom-4 left-1/2">
        <h2 className="text-lg font-semibold md:text-4xl">
          We create events that inspire action.
        </h2>
      </div>
    </div>
  );
}

export default HomeThree;
