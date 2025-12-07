import React from "react";
import one from "../../assets/services/one.webp";
import two from "../../assets/services/two.webp";
import Footer from "../Footer";
import UImpact from "./UImpact";

function Service() {
  return (
    <div className="text-black">
      <div className="py-6 px-[3%] md:px-[7%]">
        <div className="flex items-center justify-between gap-4 pt-6">
          <p className="text-2xl font-semibold md:text-6xl">
            Our Core <br /> Services
          </p>
          <p className="text-sm md:max-w-sm text-secondary font-sora">
            At Vision Three-Sixty Pvt Ltd, we believe in the power of
            collaboration and the transformative potential of media and events
            to inspire meaningful change.
          </p>
        </div>
      </div>
      {/* <div className="h-screen px-[3%] bg-[#ADADAD] py-4">
        <div className="flex items-center justify-between text-2xl font-semibold md:text-6xl">
          <p>01</p>
          <p>
            Documentary <br />
            and film production
          </p>
        </div>
        <div className="grid grid-cols-1 h-3/4 md:grid-cols-2">
          <div className="flex flex-col w-full h-full gap-3 py-24 md:justify-between">
            <div className="max-w-2xl text-xl md:text-3xl">
              <p>
                Long-form and short-form films that humanize issues and
                influence policy.
              </p>
              <p>
                Examples: KOICA 30-year journey; TB & mental health films
                (SPARSHA); MATCOBIND docu-film.
              </p>
            </div>
            <div className="flex gap-12 text-sm md:text-lg">
              <div>
                <p>Brand identity</p>
                <p>Brand guidelines</p>
                <p>Brand strategy</p>
                <p>Rebranding</p>
              </div>
              <div>
                <p>Creative Direction</p>
                <p> Marketing Design</p>
                <p> Typographic System</p>
                <p>Color System</p>
              </div>
            </div>
            <div className="w-full h-full mt-4 md:hidden">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={one}
                  alt="Service One"
                  className="object-cover w-[200px] h-[250px] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="hidden w-full h-full md:block">
            <div className="flex items-center justify-end w-full h-full">
              <img
                src={one}
                alt="Service One"
                className="object-cover w-[400px] h-[450px] rounded-md"
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="h-screen px-[3%] bg-[#ECECEC] py-4">
        <div className="flex items-center justify-between text-2xl font-semibold md:text-6xl">
          <p>02</p>
          <p>
            Visual training materials / <br />
            awareness videos
          </p>
        </div>
        <div className="grid grid-cols-1 h-3/4 md:grid-cols-2">
          <div className="flex flex-col w-full h-full gap-3 py-24 md:justify-between">
            <div className="max-w-2xl text-xl md:text-3xl">
              <p>
                We design intentional websites that reflect who you are, connect
                with the right people, and give you the confidence to show up
                online with clarity and purpose.
              </p>
            </div>
            <div className="flex gap-12 text-sm md:text-lg">
              <div>
                <p>Website strategy</p>
                <p>Custom Web Design</p>
                <p>Responsive Design</p>
                <p>Web Development</p>
              </div>
              <div>
                <p>Copywriting</p>
                <p>SEO</p>
                <p>Copywriting</p>
                <p>UI / UX</p>
              </div>
            </div>
            <div className="w-full h-full mt-4 md:hidden">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={two}
                  alt="Service two"
                  className="object-cover w-[200px] h-[250px] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="hidden w-full h-full md:block">
            <div className="flex items-center justify-end w-full h-full">
              <img
                src={two}
                alt="Service two"
                className="object-cover w-[400px] h-[450px] rounded-md"
              />
            </div>
          </div>
        </div>
      </div> */}
      <UImpact/>
      <Footer />
    </div>
  );
}

export default Service;
