import React, { useEffect, useState, memo } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";

import img1 from "../assets/Gallery/1.webp";
import img2 from "../assets/Gallery/2.webp";
import img3 from "../assets/Gallery/3.webp";
import img4 from "../assets/Gallery/4.webp";
import img5 from "../assets/Gallery/5.webp";
import img6 from "../assets/Gallery/6.webp";

import img8 from "../assets/Gallery/8.webp";
import img9 from "../assets/Gallery/9.webp";
import img10 from "../assets/Gallery/10.webp";
import img11 from "../assets/Gallery/11.webp";
import img12 from "../assets/Gallery/12.webp";
import img13 from "../assets/Gallery/13.webp";
import img14 from "../assets/Gallery/14.webp";
import img15 from "../assets/Gallery/15.webp";
import img16 from "../assets/Gallery/16.webp";

import img17 from "../assets/Gallery/17.webp";
import img18 from "../assets/Gallery/18.webp";
import img19 from "../assets/Gallery/20.webp";
import img21 from "../assets/Gallery/21.webp";
import img22 from "../assets/Gallery/22.webp";
import img23 from "../assets/Gallery/23.webp";
import img24 from "../assets/Gallery/24.webp";
import Footer from "./Footer";

const SWIPER_IMAGES = [img1, img2, img3, img4, img5, img6];
const GRID_IMAGES = [
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];
const HORIZONTAL_SWIPER_IMAGES = [
  img17,
  img18,
  img19,
  img21,
  img22,
  img23,
  img24,
];
const chunkArray = (arr, chunkSize = 3) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize)
    chunks.push(arr.slice(i, i + chunkSize));
  return chunks;
};
const getGridClass = (rowIndex) => {
  const layouts = [
    "md:grid-cols-[25%_25%_47%]",
    "md:grid-cols-[25%_47%_25%]",
    "md:grid-cols-[47%_25%_25%]",
  ];
  return layouts[rowIndex % layouts.length];
};

const Gallery = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const swiper1 = new Swiper(".gallery-swiper", {
      modules: [Autoplay],
      loop: true,
      spaceBetween: 20,
      speed: 1200,

      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      preloadImages: false,
      lazy: true,
      watchSlidesProgress: true,

      breakpoints: {
        0: { slidesPerView: 1, centeredSlides: true },
        640: { slidesPerView: 2, centeredSlides: true },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      },

      navigation: {
        nextEl: ".gallery-next",
        prevEl: ".gallery-prev",
      },
    });

    const swiper2 = new Swiper(".horizontal-swiper", {
      modules: [Autoplay],
      loop: true,
      spaceBetween: 20,
      speed: 1200,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      preloadImages: false,
      lazy: true,
      watchSlidesProgress: true,

      breakpoints: {
        0: { slidesPerView: 1, centeredSlides: true },
        640: { slidesPerView: 1.5, centeredSlides: true },
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3.5 },
      },
    });

    return () => {
      swiper1.destroy();
      swiper2.destroy();
    };
  }, [loaded]);

  const gridRows = chunkArray(GRID_IMAGES);

  return (
    <div className="select-none">
      <div className="flex flex-col items-center w-full overflow-hidden text-black py-28">
        <header className="mb-10 text-center">
          <h1 className="mb-3 text-xl font-bold leading-tight md:text-5xl">
            Begin an exploration through
          </h1>
          <h1 className="mb-3 text-xl font-bold leading-tight md:text-5xl">
            a gallery showcasing
          </h1>
          <h1 className="text-xl font-bold leading-tight md:text-5xl text-primary">
            creativity.
          </h1>
        </header>
        <div className="relative w-full max-w-[1400px] mx-auto gallery-swiper rounded-xl">
          <button className="gallery-prev swiper-button-prev"></button>
          <button className="gallery-next swiper-button-next"></button>

          <div className="swiper-wrapper">
            {SWIPER_IMAGES.map((src, i) => (
              <div key={i} className="swiper-slide">
                {!loaded ? (
                  <div className="w-full h-[260px] md:h-[340px] lg:h-[400px] bg-gray-200 animate-pulse rounded-xl"></div>
                ) : (
                  <img
                    src={src}
                    loading="lazy"
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-[260px] md:h-[340px] lg:h-[400px] object-cover rounded-xl will-change-transform"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="pt-16 w-full text-center px-[3%] md:px-[7%] space-y-2 mb-10">
          <p>A blend of our stories</p>
          <div className="flex justify-center">
            <p className="pt-2 text-lg md:w-3/5 md:text-4xl">
              At Vision Three-Sixty Pvt Ltd, we believe in the power of
              collaboration
              <span className="pl-1 text-secondary">
                and the transformative potential of media and events to inspire
                meaningful change.
              </span>
            </p>
          </div>
        </div>
        <div>
          {gridRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid gap-6 pt-6 p-3 md:p-3 ${getGridClass(rowIndex)}`}
            >
              {row.map((src, idx) => (
                <div key={idx}>
                  {!loaded ? (
                    <div className="object-cover w-full bg-gray-200 rounded-lg animate-pulse h-80"></div>
                  ) : (
                    <img
                      src={src}
                      loading="lazy"
                      alt="Gallery Grid"
                      className="object-cover w-full rounded-lg h-80 will-change-transform"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          <div className="pt-12 text-xl font-semibold text-center md:text-5xl">
            <p className="mb-3">Experience the works</p>
            <p>shaping today’s culture.</p>
          </div>
          <div className="pt-16 w-full max-w-[1400px] mx-auto horizontal-swiper">
            <div className="swiper-wrapper">
              {HORIZONTAL_SWIPER_IMAGES.map((src, i) => (
                <div key={i} className="swiper-slide">
                  {!loaded ? (
                    <div className="w-full h-[260px] md:h-[340px] lg:h-[400px] bg-gray-200 animate-pulse rounded-xl"></div>
                  ) : (
                    <img
                      src={src}
                      loading="lazy"
                      alt="Horizontal Gallery"
                      className="w-full h-[260px] md:h-[340px] lg:h-[400px] object-cover rounded-xl will-change-transform"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
        .swiper-wrapper, .swiper-slide { box-sizing: border-box !important; }
        .gallery-swiper, .horizontal-swiper { overflow: hidden !important; }

        .gallery-swiper::before,
        .gallery-swiper::after {
          content: "";
          position: absolute;
          left: -10%;
          width: 120%;
          background: white;
          border-radius: 100%;
          z-index: 20;
        }
        .gallery-swiper::before { top: -70px; height: 100px; }
        .gallery-swiper::after { bottom: -60px; height: 100px; }
      `}</style>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default memo(Gallery);
