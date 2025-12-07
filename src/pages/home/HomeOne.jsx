import one from "../../assets/home/one.webp";
import pone from "../../assets/partner/one.webp";
import ptwo from "../../assets/partner/two.webp";
import pthree from "../../assets/partner/three.webp";
import { motion } from "framer-motion";
import hero from "../../assets/home/hero.mp4";
import { Link, useNavigate } from "react-router-dom";

function HomeOne() {
  const partnerImages = [pone, ptwo, pthree];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const logoVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { state: { scrollTo: "vision" } });
  };

  return (
    <div className="relative w-full h-auto md:h-screen">
      <video
        src={hero}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        className="object-cover w-full h-auto pointer-events-none md:h-full md:absolute md:inset-0"
      />
      <div className="absolute inset-0 hidden bg-black bg-opacity-50 md:block"></div>
      <div className="absolute top-0 w-full h-[67vh] px-[3%] lg:px-[7%]">
        <motion.div
          className="flex flex-col justify-center h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <motion.div
            className="flex items-center gap-1 py-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.5"
                width="12"
                height="12"
                rx="6"
                fill="#00FF0D"
                fillOpacity="0.25"
              />
              <circle cx="6" cy="6.5" r="2" fill="#00FF0D" />
            </svg>
            <h1 className="text-xs md:text-lg font-sora">
              Creative excellence built on speed, trust & unmatched
            </h1>
          </motion.div> */}
          {/* <motion.div
            className="text-3xl md:text-6xl font-[500]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            <motion.p variants={textVariants}>Shaping Communication</motion.p>
            <motion.p className="italic" variants={textVariants}>
              for Global Impact
            </motion.p>
          </motion.div> */}
          {/* <motion.div
            className="flex items-center gap-5 pt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            <button
              className="px-4 py-2 text-sm text-black bg-white rounded md:text-lg"
              onClick={handleClick}
            >
              Get Started
            </button>
            <Link to="/about-us">
              <button
                className="px-4 py-2 text-sm rounded md:text-lg"
                style={{
                  borderImageSource:
                    "linear-gradient(134.83deg, rgba(255, 255, 255, 0) 22.54%, rgba(255, 255, 255, 0.08) 77.46%)",
                  background: "#FFFFFF14",
                  backdropFilter: "blur(40px)",
                }}
              >
                About Company
              </button>
            </Link>
          </motion.div> */}
          {/* <div className="md:hidden">
            <motion.div
              className="absolute bottom-[5%] text-center"
              variants={textVariants}
            >
              <p>
                A multinational Development Comms specialist & Creative Agency
              </p>
            </motion.div>
          </div> */}
        </motion.div>
        {/* <div className="hidden md:block">
          <motion.div
            className="flex items-center justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
          >
            <p className="max-w-80">
              A multinational Development Comms specialist & Creative Agency
            </p>
          </motion.div>
        </div> */}
        {/* <div className="h-[28vh] md:h-[25vh]">
          <div className="h-full md:hidden">
            <motion.div
              className="flex flex-col items-center justify-end h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <motion.div className="flex items-end justify-center gap-6 p-6">
                {partnerImages.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Partner ${index + 1}`}
                    className="object-contain h-16 w-28 filter grayscale"
                    variants={logoVariants}
                  />
                ))}
              </motion.div>
              <motion.div className="flex items-end gap-2" variants={fadeUp}>
                <svg
                  width="15"
                  height="20"
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 20C7.30707 20 7.11817 19.9688 6.93328 19.9062C6.74839 19.8438 6.57556 19.75 6.41479 19.625L0.723473 15.2C0.490354 15.025 0.311495 14.8063 0.186897 14.5437C0.062299 14.2812 0 14 0 13.7V1.875C0 1.35833 0.176849 0.916667 0.530547 0.55C0.884244 0.183333 1.31029 0 1.80868 0H13.1913C13.6897 0 14.1158 0.183333 14.4695 0.55C14.8232 0.916667 15 1.35833 15 1.875V13.7C15 14 14.9377 14.2812 14.8131 14.5437C14.6885 14.8063 14.5096 15.025 14.2765 15.2L8.58521 19.625C8.42444 19.75 8.25161 19.8438 8.06672 19.9062C7.88183 19.9688 7.69293 20 7.5 20ZM6.51125 9.975L5.1246 8.5375C4.93971 8.34583 4.72669 8.25208 4.48553 8.25625C4.24437 8.26042 4.03135 8.35417 3.84646 8.5375C3.66158 8.72917 3.56712 8.95208 3.5631 9.20625C3.55908 9.46042 3.64952 9.68333 3.83441 9.875L5.87219 11.9875C6.05707 12.1792 6.2701 12.275 6.51125 12.275C6.75241 12.275 6.96543 12.1792 7.15032 11.9875L11.1777 7.8125C11.3625 7.62083 11.453 7.4 11.449 7.15C11.4449 6.9 11.3545 6.67917 11.1777 6.4875C10.9928 6.29583 10.7777 6.19792 10.5326 6.19375C10.2874 6.18958 10.0723 6.28333 9.88746 6.475L6.51125 9.975Z"
                    fill="#10B981"
                  />
                </svg>
                <p>We support 100+ company's in 1 year</p>
              </motion.div>
            </motion.div>
          </div>
          <div className="hidden h-full md:block">
            <motion.div
              className="flex items-end justify-between h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <motion.div className="flex items-end gap-2" variants={fadeUp}>
                <svg
                  width="15"
                  height="20"
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 20C7.30707 20 7.11817 19.9688 6.93328 19.9062C6.74839 19.8438 6.57556 19.75 6.41479 19.625L0.723473 15.2C0.490354 15.025 0.311495 14.8063 0.186897 14.5437C0.062299 14.2812 0 14 0 13.7V1.875C0 1.35833 0.176849 0.916667 0.530547 0.55C0.884244 0.183333 1.31029 0 1.80868 0H13.1913C13.6897 0 14.1158 0.183333 14.4695 0.55C14.8232 0.916667 15 1.35833 15 1.875V13.7C15 14 14.9377 14.2812 14.8131 14.5437C14.6885 14.8063 14.5096 15.025 14.2765 15.2L8.58521 19.625C8.42444 19.75 8.25161 19.8438 8.06672 19.9062C7.88183 19.9688 7.69293 20 7.5 20ZM6.51125 9.975L5.1246 8.5375C4.93971 8.34583 4.72669 8.25208 4.48553 8.25625C4.24437 8.26042 4.03135 8.35417 3.84646 8.5375C3.66158 8.72917 3.56712 8.95208 3.5631 9.20625C3.55908 9.46042 3.64952 9.68333 3.83441 9.875L5.87219 11.9875C6.05707 12.1792 6.2701 12.275 6.51125 12.275C6.75241 12.275 6.96543 12.1792 7.15032 11.9875L11.1777 7.8125C11.3625 7.62083 11.453 7.4 11.449 7.15C11.4449 6.9 11.3545 6.67917 11.1777 6.4875C10.9928 6.29583 10.7777 6.19792 10.5326 6.19375C10.2874 6.18958 10.0723 6.28333 9.88746 6.475L6.51125 9.975Z"
                    fill="#10B981"
                  />
                </svg>
                <p>We support 100+ company's in 1 year</p>
              </motion.div>
              <motion.div
                className="flex items-end justify-center gap-6 p-6"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {partnerImages.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Partner ${index + 1}`}
                    className="object-contain h-16 w-28 filter grayscale"
                    variants={logoVariants}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HomeOne;
