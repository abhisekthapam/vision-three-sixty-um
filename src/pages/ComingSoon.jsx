import { motion } from "framer-motion";

function ComingSoon() {
  const title = "Coming Soon";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 text-center text-white bg-black select-none">
      <h1 className="flex flex-wrap justify-center mb-6 font-extrabold tracking-widest text-[clamp(2rem,6vw,4rem)] leading-tight">
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: title.length * 0.1 + 1,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      <p className="max-w-md text-xs text-gray-400 md:text-sm sm:text-base">
        We’re working behind the scenes to bring you an exceptional experience.
      </p>
    </div>
  );
}

export default ComingSoon;
