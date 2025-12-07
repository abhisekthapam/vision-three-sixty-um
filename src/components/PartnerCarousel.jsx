import React from "react";
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
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
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
  twenty,
  twentyone,
  twentytwo,
  twentythree,
  twentyfour,
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
];

export default function PartnerCarousel() {
  return (
    <div className="py-4 overflow-hidden text-black select-none">
      <div className="font-bold text-center">
        <p>Trusted by 50+ global companies</p>
      </div>
      <div className="flex gap-4 min-w-max animate-scroll">
        {images.concat(images).map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-32 h-32 p-2 overflow-hidden transition-transform transform rounded-lg md:w-36 md:h-36 lg:w-40 lg:h-40"
          >
            <img
              src={img}
              alt={`partner-${idx}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
