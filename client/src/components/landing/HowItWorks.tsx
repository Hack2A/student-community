import { motion, type Variants } from "framer-motion";
import { Search, Users, Trophy } from "lucide-react";
import Arrow from "../../assets/landing/arrow.svg";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const HowItWorks = () => {
  return (
    <motion.section
      className="w-full bg-indigo-600 py-10 px-5"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-lg text-white mt-2 max-w-2xl mx-auto">
            How Student Community Works?
          </p>
          <h1 className="text-4xl font-bold text-white">
            Three steps to kickstart your hackathon journey
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center text-white text-center gap-10 relative mb-10 mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="mb-4">
              <Search size={64} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Discover Hackathons</h3>
            <p>
              Browse thousands of hackathons happening across India and globally. Filter by skills, location, and prizes.
            </p>
          </div>

          {/* Arrow 1 */}
          <img
            src={Arrow}
            alt="Arrow"
            className="hidden md:block w-40 h-40 transform -translate-y-5 rotate-91"
          />

          {/* Step 2 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="mb-4">
              <Users size={64} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Build Your Team</h3>
            <p>
              Create or join teams with complementary skills. Connect with developers, designers, and innovators.
            </p>
          </div>

          {/* Arrow 2 */}
          <img
            src={Arrow}
            alt="Arrow"
            className="hidden md:block w-40 h-40 transform -translate-y-5 rotate-91"
          />

          {/* Step 3 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="mb-4">
              <Trophy size={64} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Learn & Compete</h3>
            <p>
              Follow personalized learning roadmaps, develop skills, and compete in hackathons to win amazing prizes.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
