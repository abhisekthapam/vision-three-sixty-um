import React, { useState, useEffect } from "react";
import { Listbox } from "@headlessui/react";
import {
  FaChevronDown,
  FaCheck,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
const options = ["General Inquiry", "Support", "Pricing", "Feedback"];

function ContactUs() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subscribe: false,
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => setErrors({}), 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
    if (errors.product) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.product;
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";
    if (selectedOption === "General Inquiry")
      newErrors.product = "Please select a topic.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        subscribe: false,
      });
      setSelectedOption(options[0]);
      setToast({
        id: Date.now(),
        message: "Message sent successfully 🚀",
      });
    }
  };
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "contact") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 40, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 40 }}
            className="fixed z-50 top-6 right-6"
          >
            <div className="relative overflow-hidden border shadow-2xl rounded-xl border-black/20">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d8ff6a] via-[#bff16a] to-[#8fe77a] blur-2xl opacity-60 animate-[pulse_4s_infinite]"></div>
              <div className="relative z-10 flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-sm rounded-xl">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-none"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#134e04"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-sm font-semibold text-black">
                  {toast.message}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex flex-col items-center justify-center flex-grow px-6 overflow-hidden py-28">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full">
            <div className="w-full h-[75%] bg-black"></div>
            <div className="w-full h-[30%] bg-white"></div>
          </div>
        </div>

        <div className="relative z-10 mb-12 text-center">
          <p className="mb-2 text-sm md:text-lg font-medium text-[#D5FF3F]">
            Contact Us
          </p>
          <h1 className="text-3xl font-semibold md:text-5xl">Get in Touch</h1>
          <p className="max-w-2xl mx-auto mt-3 text-sm text-secondary md:text-base">
            Have questions? We’re here for you. Drop us a line, write us an
            email, or send us a text.
          </p>
        </div>

        <div
          className="relative z-10 grid w-full max-w-6xl overflow-hidden shadow-2xl rounded-2xl md:grid-cols-2"
          id="contact"
        >
          <div className="flex flex-col justify-between p-3 bg-[#141313]">
            <div className="flex flex-col justify-between h-full p-10 bg-black rounded-2xl">
              <div>
                <h2 className="mb-4 text-3xl font-semibold">
                  Contact Information
                </h2>
                <p className="mb-8 text-secondary">
                  Say something to start a live chat!
                </p>
                <div className="flex flex-col h-full space-y-10 text-gray-300 md:justify-center">
                  <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-xl" />
                    <span>+977 - 9851046510</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-xl" />
                    <span>info@visionthreesixty.org</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-xl" />
                    <span>
                      Kapan Marga, Kathmandu, Nepal <br /> Kottawa, Pannipitiya,
                      Colombo, Sri Lanka
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-10">
                <a
                  href="https://www.instagram.com/vision_three_sixty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="p-1 text-3xl text-black transition-transform bg-white border rounded-full cursor-pointer hover:scale-110" />
                </a>
                <a
                  href="https://www.facebook.com/visionthreesixtynepal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="p-1 text-3xl text-black transition-transform bg-white border rounded-full cursor-pointer hover:scale-110" />
                </a>
                <a
                  href="https://www.linkedin.com/company/vision-three-sixty-international/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="p-1 text-3xl text-black transition-transform bg-white border rounded-full cursor-pointer hover:scale-110" />
                </a>
                <FaYoutube className="p-1 text-3xl text-black transition-transform bg-white border rounded-full cursor-pointer hover:scale-110" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-10 bg-[#141313] md:p-12 text-white">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full py-2 text-sm bg-transparent border-b outline-none transition-all ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-400 focus:border-lime-500"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-1 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full py-2 text-sm bg-transparent border-b outline-none transition-all ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-400 focus:border-lime-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-1 text-sm text-gray-600">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="+977 - 9818181818"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full py-2 text-sm bg-transparent border-b outline-none transition-all ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-400 focus:border-lime-500"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-1 text-sm text-gray-600">
                    Product Question
                  </label>
                  <Listbox value={selectedOption} onChange={handleSelect}>
                    <div className="relative">
                      <Listbox.Button
                        className={`flex items-center justify-between w-full py-2 text-sm bg-transparent border-b outline-none transition-all ${
                          errors.product
                            ? "border-red-500"
                            : "border-gray-400 focus:border-lime-500"
                        }`}
                      >
                        <span
                          className={
                            selectedOption === "General Inquiry"
                              ? "text-gray-400"
                              : "text-white"
                          }
                        >
                          {selectedOption}
                        </span>
                        <FaChevronDown className="text-gray-400" />
                      </Listbox.Button>
                      <Listbox.Options className="absolute mt-1 w-full bg-[#141313] border border-gray-700 rounded-md shadow-lg z-10">
                        {options.map((option, idx) => (
                          <Listbox.Option
                            key={idx}
                            value={option}
                            className={({ active }) =>
                              `cursor-pointer px-4 py-2 text-sm flex items-center gap-2 ${
                                active ? "bg-lime-500 text-black" : "text-white"
                              }`
                            }
                          >
                            {({ selected }) => (
                              <>
                                {selected && <FaCheck className="text-xs" />}
                                <span>{option}</span>
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </div>
                  </Listbox>
                  {errors.product && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.product}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full py-2 text-sm bg-transparent border-b outline-none transition-all ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-400 focus:border-lime-500"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <input
                  id="subscribe"
                  name="subscribe"
                  type="checkbox"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="accent-lime-500"
                />
                <label htmlFor="subscribe" className="text-sm text-gray-600">
                  Subscribe to receive the latest news and exclusive offers
                </label>
              </div>

              <button
                type="submit"
                className="px-8 py-3 transition-all bg-black rounded-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default ContactUs;
