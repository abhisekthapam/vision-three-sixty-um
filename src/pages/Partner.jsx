import React from "react";
import { motion } from "framer-motion";
import one from "../assets/partner/first.webp";
import two from "../assets/partner/second.webp";
import three from "../assets/partner/third.webp";
import four from "../assets/partner/fourth.webp";
import five from "../assets/partner/fifth.webp";
import six from "../assets/partner/six.webp";
import seven from "../assets/partner/seven.webp";
import eight from "../assets/partner/eight.webp";
import nine from "../assets/partner/nine.webp";
import ten from "../assets/partner/ten.webp";
import eleven from "../assets/partner/eleven.webp";
import twelve from "../assets/partner/twelve.webp";
import thirteen from "../assets/partner/thirteen.webp";
import fourteen from "../assets/partner/fourteen.webp";
import fifteen from "../assets/partner/fifteen.webp";
import sixteen from "../assets/partner/sixteen.webp";
import seventeen from "../assets/partner/seventeen.webp";
import eighteen from "../assets/partner/eighteen.webp";
import nineteen from "../assets/partner/nineteen.webp";
import twenty from "../assets/partner/twenty.webp";
import twentyone from "../assets/partner/twentyone.webp";
import twentytwo from "../assets/partner/twentytwo.webp";
import twentythree from "../assets/partner/twentythree.webp";
import twentyfour from "../assets/partner/twentyfour.webp";
import twentyfive from "../assets/partner/twentyfive.webp";
import twentysix from "../assets/partner/twentysix.webp";
import twentyseven from "../assets/partner/twentyseven.webp";
import twentyeight from "../assets/partner/twentyeight.webp";
import twentynine from "../assets/partner/twentynine.webp";
import thirty from "../assets/partner/thirty.webp";
import thirtyone from "../assets/partner/thirtyone.webp";
import thirtytwo from "../assets/partner/thirtytwo.webp";
import thirtythree from "../assets/partner/thirtythree.webp";
import thirtyfour from "../assets/partner/thirtyfour.webp";
import thirtyfive from "../assets/partner/thirtyfive.webp";
import thirtysix from "../assets/partner/thirtysix.webp";
import thirtyseven from "../assets/partner/thirtyseven.webp";
import thirtyeight from "../assets/partner/thirtyeight.webp";
import thirtynine from "../assets/partner/thirtynine.webp";
import forty from "../assets/partner/fourty.webp";
import fortyone from "../assets/partner/fourtyone.webp";
import fortytwo from "../assets/partner/fourtytwo.webp";
import fortythree from "../assets/partner/fourtythree.webp";
import fortyfour from "../assets/partner/fourtyfour.webp";
import fortyfive from "../assets/partner/fourtyfive.webp";
import fortysix from "../assets/partner/fourtysix.webp";
import fortyseven from "../assets/partner/fourtyseven.webp";
import fortyeight from "../assets/partner/fourtyeight.webp";
import fortynine from "../assets/partner/fourtynine.webp";
import fifty from "../assets/partner/fifty.webp";
import fiftyone from "../assets/partner/fiftyone.webp";
import fiftytwo from "../assets/partner/fiftytwo.webp";

const images = [
  { id: 1, src: one, alt: "Partner 1", size: "w-42 h-32" },
  { id: 2, src: two, alt: "Partner 2", size: "w-42 h-32" },
  { id: 3, src: three, alt: "Partner 3", size: "w-42 h-32" },
  { id: 4, src: four, alt: "Partner 4", size: "w-32 h-32" },
  { id: 5, src: five, alt: "Partner 5", size: "w-32 h-32" },
  { id: 6, src: six, alt: "Partner 6", size: "w-32 h-32" },
  { id: 7, src: seven, alt: "Partner 7", size: "w-32 h-32" },
  { id: 8, src: eight, alt: "Partner 8", size: "w-32 h-32" },
  { id: 9, src: nine, alt: "Partner 9", size: "w-32 h-32" },
  { id: 10, src: ten, alt: "Partner 10", size: "w-32 h-32" },
  { id: 11, src: eleven, alt: "Partner 11", size: "w-28 h-32" },
  { id: 12, src: twelve, alt: "Partner 12", size: "w-32 h-32" },
  { id: 13, src: thirteen, alt: "Partner 13", size: "w-32 h-32" },
  { id: 14, src: fourteen, alt: "Partner 14", size: "w-32 h-32" },
  { id: 15, src: fifteen, alt: "Partner 15", size: "w-32 h-32" },
  { id: 16, src: sixteen, alt: "Partner 16", size: "w-32 h-32" },
  { id: 17, src: seventeen, alt: "Partner 17", size: "w-32 h-32" },
  { id: 18, src: eighteen, alt: "Partner 18", size: "w-32 h-32" },
  { id: 19, src: nineteen, alt: "Partner 19", size: "w-32 h-32" },
  { id: 20, src: twenty, alt: "Partner 20", size: "w-32 h-32" },
  { id: 21, src: twentyone, alt: "Partner 21", size: "w-32 h-32" },
  { id: 22, src: twentytwo, alt: "Partner 22", size: "w-32 h-32" },
  { id: 23, src: twentythree, alt: "Partner 23", size: "w-32 h-32" },
  { id: 24, src: twentyfour, alt: "Partner 24", size: "w-32 h-32" },
  { id: 25, src: twentyfive, alt: "Partner 25", size: "w-32 h-32" },
  { id: 26, src: twentysix, alt: "Partner 26", size: "w-32 h-32" },
  { id: 27, src: twentyseven, alt: "Partner 27", size: "w-32 h-32" },
  { id: 28, src: twentyeight, alt: "Partner 28", size: "w-32 h-32" },
  { id: 29, src: twentynine, alt: "Partner 29", size: "w-32 h-32" },
  { id: 30, src: thirty, alt: "Partner 30", size: "w-32 h-32" },
  { id: 31, src: thirtyone, alt: "Partner 31", size: "w-32 h-32" },
  { id: 32, src: thirtytwo, alt: "Partner 32", size: "w-32 h-32" },
  { id: 33, src: thirtythree, alt: "Partner 33", size: "w-32 h-32" },
  { id: 34, src: thirtyfour, alt: "Partner 34", size: "w-32 h-32" },
  { id: 35, src: thirtyfive, alt: "Partner 35", size: "w-32 h-32" },
  { id: 36, src: thirtysix, alt: "Partner 36", size: "w-32 h-32" },
  { id: 37, src: thirtyseven, alt: "Partner 37", size: "w-32 h-32" },
  { id: 38, src: thirtyeight, alt: "Partner 38", size: "w-32 h-32" },
  { id: 39, src: thirtynine, alt: "Partner 39", size: "w-32 h-32" },
  { id: 40, src: forty, alt: "Partner 40", size: "w-32 h-32" },
  { id: 41, src: fortyone, alt: "Partner 41", size: "w-32 h-32" },
  { id: 42, src: fortytwo, alt: "Partner 42", size: "w-32 h-32" },
  { id: 43, src: fortythree, alt: "Partner 43", size: "w-32 h-32" },
  { id: 44, src: fortyfour, alt: "Partner 44", size: "w-32 h-32" },
  { id: 45, src: fortyfive, alt: "Partner 45", size: "w-32 h-32" },   
  { id: 46, src: fortysix, alt: "Partner 46", size: "w-32 h-32" },
  { id: 47, src: fortyseven, alt: "Partner 47", size: "w-32 h-32" },
  { id: 48, src: fortyeight, alt: "Partner 48", size: "w-32 h-32" },
  { id: 49, src: fortynine, alt: "Partner 49", size: "w-32 h-32" },
  { id: 50, src: fifty, alt: "Partner 50", size: "w-32 h-32" },
  { id: 51, src: fiftyone, alt: "Partner 51", size: "w-32 h-32" },
  { id: 52, src: fiftytwo, alt: "Partner 52", size: "w-32 h-32" }
];

function Partner() {
  return (
    <div className="w-full py-16 overflow-hidden bg-white px-[3%] md:px-[7%]">
      <h2 className="mb-4 text-3xl font-semibold text-center md:text-6xl text-primary">
        Our Partners
      </h2>
      <p className="mb-12 text-sm text-center text-secondary md:text-lg">
        Trusted by 50+ global dev partners
      </p>

      <div className="w-full mx-auto overflow-hidden">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 place-items-center">
          {images
            .sort((a, b) => a.id - b.id)
            .map((img) => (
              <div
                key={img.id}
                className={`flex items-center justify-center rounded-lg bg-white ${img.size}`}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="object-contain w-full h-full cursor-pointer"
                  whileHover={{ scale: 1.07 }} 
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Partner;