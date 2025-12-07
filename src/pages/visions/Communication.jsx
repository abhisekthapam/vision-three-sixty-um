import one from "../../assets/home/eight.webp";
import { motion } from "framer-motion";
import PartnerCarousel from "../../components/PartnerCarousel";
import ComService from "../service/ComService";
import { Link } from "react-router-dom";

function Communication() {
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
    <div className="w-full h-[200vh] select-none">
      <div className="h-screen">
        <img
          src={one}
          alt="Image One"
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
        <div className="absolute top-0 w-full h-[57vh] md:h-[80vh] px-[3%] lg:px-[7%] mt-20">
          <motion.div
            className="flex flex-col items-center justify-center h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex flex-col h-full space-y-24 text-center md:space-y-8">
              <motion.div>
                <motion.div
                  className="pt-24 text-3xl font-semibold md:text-6xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={textVariants}
                >
                  <motion.p variants={textVariants}>
                    Vision Development
                  </motion.p>
                  <motion.p variants={textVariants}>Communications</motion.p>
                </motion.div>
                <div className="pt-4 text-lg text-secondary">
                  <p>A division of Vision Three Sixty</p>
                </div>
                <motion.div
                  className="flex items-center justify-center gap-5 pt-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={textVariants}
                >
                  <button
                    className="px-4 py-2 text-sm text-black bg-white rounded md:text-lg"
                    onClick={() => {
                      const impactSection =
                        document.getElementById("development");
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
                  </button></Link>
                </motion.div>
              </motion.div>
              {/* <motion.div
                className="flex items-center justify-end"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeUp}
              >
                <div className="flex">
                  <div className="flex flex-col max-w-sm gap-4">
                    <h1 className="max-w-sm text-2xl underline md:text-4xl">
                      Strategic <br /> Communication <br />& Branding Identity
                    </h1>
                    <p className="text-base text-secondary">
                      CREATIVE SOLUTIONS FOR YOUR BRAND, PRODUCT, AND AUDIENCE.
                    </p>
                    <button className="flex">
                      <span className="flex items-center gap-2 px-4 py-2 text-sm text-black bg-white rounded-full md:text-lg">
                        Let's Talk{" "}
                        <svg
                          width="18"
                          height="14"
                          viewBox="0 0 18 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.2802 6.23871C17.4206 6.37933 17.4995 6.56996 17.4995 6.76871C17.4995 6.96746 17.4206 7.15808 17.2802 7.29871L11.2802 13.2987C11.2115 13.3724 11.1287 13.4315 11.0367 13.4725C10.9447 13.5135 10.8454 13.5355 10.7447 13.5373C10.644 13.5391 10.544 13.5206 10.4506 13.4828C10.3572 13.4451 10.2724 13.389 10.2011 13.3177C10.1299 13.2465 10.0738 13.1617 10.036 13.0683C9.99833 12.9749 9.9798 12.8749 9.98158 12.7742C9.98336 12.6735 10.0054 12.5742 10.0464 12.4822C10.0874 12.3902 10.1465 12.3074 10.2202 12.2387L14.9402 7.51871L0.750171 7.51871C0.55126 7.51871 0.360492 7.43969 0.219841 7.29904C0.079189 7.15838 0.000171357 6.96762 0.000171366 6.76871C0.000171374 6.5698 0.079189 6.37903 0.219841 6.23838C0.360492 6.09773 0.55126 6.01871 0.750171 6.01871L14.9402 6.01871L10.2202 1.29871C10.1465 1.23005 10.0874 1.14725 10.0464 1.05525C10.0054 0.963247 9.98336 0.863933 9.98158 0.76323C9.9798 0.662527 9.99833 0.562498 10.036 0.46911C10.0738 0.375722 10.1299 0.290888 10.2011 0.219669C10.2724 0.148451 10.3572 0.0923061 10.4506 0.054585C10.544 0.016864 10.644 -0.00166036 10.7447 0.000116427C10.8454 0.00189322 10.9447 0.0239347 11.0367 0.0649267C11.1287 0.105919 11.2115 0.165021 11.2802 0.238708L17.2802 6.23871Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div>
        <PartnerCarousel />
        <div id="development">
          <ComService />
        </div>
      </div>
    </div>
  );
}

export default Communication;
