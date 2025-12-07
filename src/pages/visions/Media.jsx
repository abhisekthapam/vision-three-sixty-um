import one from "../../assets/home/nine.webp";
import { motion } from "framer-motion";
import PartnerCarousel from "../../components/PartnerCarousel";
import Service from "../service/Service";
import { Link } from "react-router-dom";

function Media() {
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

  return (
    <div className="w-full h-[200vh]">
      <div className="h-screen">
        <img
          src={one}
          alt="Image One"
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
        <div className="absolute top-0 w-full h-[57vh] md:h-[80vh] px-[3%] lg:px-[7%] mt-10">
          <motion.div
            className="flex flex-col justify-center h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex flex-col justify-around h-full">
              <motion.div>
                <motion.div
                  className="flex items-center gap-1 py-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={textVariants}
                >
                  <div className="flex items-center justify-end w-full">
                    <h1 className="max-w-[18rem] text-sm font-light md:max-w-xs md:text-base font-sora text-end pb-12 md:pb-0 md:pt-7">
                      Transforming your digital presence with cutting-edge
                      strategies, innovative solutions, and unparalleled
                      creativity for sustainable growth and lasting impact.
                    </h1>
                  </div>
                </motion.div>
                <motion.div
                  className="text-3xl font-semibold md:text-6xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={textVariants}
                >
                  <motion.p variants={textVariants}>Impact Media</motion.p>
                  <motion.p variants={textVariants}>& Story Telling</motion.p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-5 pt-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={textVariants}
                >
                  <button
                    className="px-4 py-2 text-sm text-black bg-white rounded md:text-lg"
                    onClick={() => {
                      const impactSection = document.getElementById("impact");
                      if (impactSection) {
                        impactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
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
                </motion.div>
              </motion.div>
              <motion.div
                className="flex items-center justify-end"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp}
              >
                <div className="flex items-center w-full">
                  <h1 className="max-w-[17rem] md:max-w-sm text-sm font-light md:text-base font-sora">
                    Live your Vision through impact media and capacity
                    building—from documentaries and human-interest stories to
                    digital campaigns and media partnerships—that amplify voices
                    and inspire change.
                  </h1>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div>
        <PartnerCarousel />
        <div id="impact">
          {" "}
          <Service />
        </div>
      </div>
    </div>
  );
}

export default Media;
