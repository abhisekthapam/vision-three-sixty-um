import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/footer/logo.webp";
import nepal from "../assets/footer/nepal.webp";
import colombo from "../assets/footer/colombo.webp";

function Footer() {
  const navigate = useNavigate();
  const [times, setTimes] = useState({
    kathmandu: "",
    colombo: "",
  });

  const [isDay, setIsDay] = useState({
    kathmandu: true,
    colombo: true,
  });

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  useEffect(() => {
    const updateTimes = () => {
      const nowUTC = new Date();
      const kathmanduTime = new Date(nowUTC.getTime() + 5.75 * 60 * 60 * 1000);
      const colomboTime = new Date(nowUTC.getTime() + 5.5 * 60 * 60 * 1000);

      setTimes({
        kathmandu: formatTime(kathmanduTime),
        colombo: formatTime(colomboTime),
      });

      const khHour = kathmanduTime.getHours();
      const coHour = colomboTime.getHours();

      setIsDay({
        kathmandu: khHour >= 6 && khHour < 18,
        colombo: coHour >= 6 && coHour < 18,
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#f5f5f5] text-gray-900 px-6 md:px-10 py-12 w-full font-sora">
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <img
              src={logo}
              alt="Logo"
              className="object-contain w-auto h-16 mb-4"
            />
            <p className="text-sm leading-relaxed text-gray-600">
              Designed for millions, and we are the team behind future unicorns.
              Transforming your digital presence with cutting-edge strategies,
              innovative solutions, and unparalleled creativity for sustainable
              growth and lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                Socials
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.instagram.com/vision_three_sixty"
                    className="text-gray-600 transition hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/visionthreesixtynepal/"
                    className="text-gray-600 transition hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/vision-three-sixty-international/"
                    className="text-gray-600 transition hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-600 transition hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                Services
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/impact-media-and-story-telling"
                    className="text-gray-600 transition hover:text-gray-900"
                  >
                    Impact Media & Storytelling
                  </Link>
                </li>
                <li>
                  <Link
                    to="/development-communication-and-event"
                    className="text-gray-600 transition hover:text-gray-900"
                  >
                    Development Communication & Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col space-y-6 md:items-end">
            <div className="flex items-start space-x-3 max-w-[12rem]">
              <img
                src={nepal}
                alt="Kathmandu Icon"
                className="object-contain w-6 h-12"
              />
              <div>
                <h4 className="text-base font-semibold text-gray-800">
                  Kathmandu
                </h4>
                <p className="text-sm leading-snug text-gray-600">
                  Kapan Marga, Kathmandu, <br />
                  Nepal <br />
                  +977 - 9851046510
                </p>
              </div>
            </div>

            <div className="flex items-start max-w-[12rem] space-x-3">
              <img
                src={colombo}
                alt="Colombo Icon"
                className="object-contain w-6 h-12"
              />
              <div>
                <h4 className="text-base font-semibold text-gray-800">
                  Colombo
                </h4>
                <p className="text-sm leading-snug text-gray-600">
                  Kottawa, Pannipitiya, Colombo, <br />
                  Sri Lanka <br />
                  +977 - 9851046510{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-300" />

        <div className="flex flex-col items-center justify-between text-sm text-gray-500 sm:flex-row">
          <p>Copyright © {new Date().getFullYear()}</p>
          <p className="mt-2 sm:mt-0">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
