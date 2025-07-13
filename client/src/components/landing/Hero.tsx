import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Sale from "../../assets/landing/sale.svg";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <motion.section
      className="relative bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="md:min-h-[calc(100vh-100px)] flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-center px-6 md:px-16 py-12 pb-32 w-full">
        {/* Left Part */}
        <div className="flex flex-col justify-center items-center space-y-4 md:w-1/2 w-full h-full pl-5 text-center md:text-left z-20 md:items-start">
          <p className="text-3xl md:text-4xl font-medium text-indigo-600 w-full">
            Welcome to
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 w-full">
            Student Community
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-xl w-full">
            Find hackathons, find teams and grow your skills - all in one place.
          </p>
          <button className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm md:text-base rounded-xl font-medium inline-flex items-center transition hover:cursor-pointer">
            Button which can be used <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Right Part */}
        <div className="flex justify-center items-center mt-10 md:mt-0 md:w-1/2 w-full z-20">
          <img
            src={Sale}
            alt="Software resale illustration"
            className="w-[90%] md:max-w-full max-w-md object-contain"
          />
        </div>
      </div>

      {/* Bottom Oval SVG */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#4f39f6"
            fillOpacity="1"
            d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,218.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96V320H0Z"
          />
        </svg>
      </div>
    </motion.section>
  );
};

export default Hero;
