import { motion, type Variants } from "framer-motion";
import ChooseCards from "./ChooseCards";

import { Bell, ShieldCheck, Trophy, BookOpen } from "lucide-react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Bell size={24} className="text-indigo-600" />,
      title: "Real-time Updates",
      desc: "Get instant notifications about new hackathons, team invitations, and application deadlines.",
    },
    {
      icon: <ShieldCheck size={24} className="text-indigo-600" />,
      title: "Verified Community",
      desc: "Connect with verified students and professionals. Build trust through our reputation system.",
    },
    {
      icon: <Trophy size={24} className="text-indigo-600" />,
      title: "Win Big Prizes",
      desc: "Participate in hackathons with cash prizes, internships, and job opportunities worth lakhs.",
    },
    {
      icon: <BookOpen size={24} className="text-indigo-600" />,
      title: "Skill Development",
      desc: "Access curated learning roadmaps and resources to master skills needed for hackathons.",
    },
  ];

  return (
    <motion.section
      className="w-full py-12 bg-gray-50 px-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Why Choose Student Community?</h1>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            Join thousands of students and developers who are building amazing projects,
            learning new skills, and winning hackathons together.
          </p>
        </div>

        {/* Horizontal Division */}
        <div className="flex items-center w-[80%] my-4 mx-auto">
          <div className="flex-grow h-px bg-gray-300" />
          <div className="mx-2 w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
          {benefits.map((benefit, index) => (
            <ChooseCards
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              desc={benefit.desc}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
