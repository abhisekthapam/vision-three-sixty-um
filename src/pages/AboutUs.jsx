import React from "react";
import one from "../assets/about-us/one.webp";
import PartnerCarousel from "../components/PartnerCarousel";
import Footer from "./Footer";

function AboutUs() {
  return (
    <div className="select-none">
      <div className="text-black pt-28 px-[3%] md:px-[7%]">
        <div>
          <div className="pb-16">
            <div className="pb-3 space-y-2 text-xl font-bold md:pb-6 md:space-y-3 md:text-4xl xl:text-6xl">
              <p>Designed for millions, and we are the</p>
              <p>
                team behind
                <span className="text-primary">future unicorns.</span>
              </p>
            </div>
            <div className="text-sm md:text-base xl:text-xl font-sora">
              <p>
                Transforming your digital presence with cutting-edge strategies,
                innovative
              </p>
              <p>
                solutions, and unparalleled creativity for sustainable growth
                and lasting impact.
              </p>
            </div>
          </div>
          <img src={one} />
        </div>
      </div>
      <div>
       <div className="py-12">
       <PartnerCarousel/>
       </div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
