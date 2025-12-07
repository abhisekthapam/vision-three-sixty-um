import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Gallery", path: "/gallery" },
    // { name: "Our Work", path: "/our-work" },
    { name: "Contact Us", path: "/contact-us" },
  ];
  const location = useLocation();
  const isHome =
    location.pathname === "/" ||
    location.pathname === "/contact-us" ||
    location.pathname === "/wow-nepal" ||
    location.pathname === "/talk-toilet" ||
    location.pathname === "/mango" ||
    location.pathname === "/development-communication-and-event" ||
    location.pathname === "/impact-media-and-story-telling";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
        setShowNavbar(true);
      } else {
        setIsAtTop(false);
        if (window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact-us", { state: { scrollTo: "contact" } });
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 select-none 
    ${isHome ? "text-white" : "text-black"}
    ${
      showNavbar
        ? isAtTop
          ? isHome
            ? "bg-transparent"
            : "bg-white"
          : isHome
          ? "bg-black"
          : "bg-white"
        : "-translate-y-full"
    }`}
    >
      <div className="px-[3%] lg:px-[7%]">
        <div className="flex items-center justify-between h-16">
          <div className="hidden space-x-10 lg:space-x-16 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => (isActive ? "" : "")}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            {!isOpen && (
              <button
                onClick={() => setIsOpen(true)}
                className={`${
                  isHome ? "text-white" : "text-black"
                } focus:outline-none`}
              >
                <FiMenu size={24} />
              </button>
            )}
          </div>
          <div className="hidden md:block">
            <button className="p-1 px-3 text-white rounded lg:text-lg lg:px-4 lg:p-2 bg-primary" onClick={handleClick}>
              Schedule Call
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 z-40 w-screen h-screen bg-black flex flex-col items-center justify-center md:hidden transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute z-50 text-3xl text-white top-5 right-5"
        >
          <FiX />
        </button>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-white font-bold text-2xl my-4"
                : "block text-white text-2xl my-4"
            }
          >
            {item.name}
          </NavLink>
        ))}
        <div className="mt-8 md:hidden">
          <button className="p-2 px-4 text-2xl font-semibold text-white rounded bg-primary" onClick={handleClick}>
            Schedule Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
