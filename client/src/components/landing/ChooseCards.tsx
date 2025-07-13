import type { JSX } from "react";
import { motion } from "framer-motion";

interface ChooseCardsProps {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const ChooseCards = ({ icon, title, desc }: ChooseCardsProps) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex items-start gap-4">
        <div className="text-indigo-600 text-3xl">{icon}</div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
          <p className="text-gray-600 text-sm mt-1">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChooseCards;
