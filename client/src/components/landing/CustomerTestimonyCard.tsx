import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface CustomerTestimonyCardProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimony: string;
  rating: number;
}

const CustomerTestimonyCard = (props: CustomerTestimonyCardProps) => {
  const { name, role, company, avatar, testimony, rating } = props;

  return (
    <motion.div
      className="relative w-[80%] sm:w-[300px] bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 mx-2"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Quote Icon */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center z-10">
        <Quote className="text-white" size={22} />
      </div>

      {/* Top Section */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-white shadow-md"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <h3 className="text-xs text-gray-600 flex flex-col leading-snug">
            <span>{role}</span>
            <span>{company}</span>
          </h3>
        </div>
      </div>

      {/* Testimonial Text */}
      <div className="text-gray-700 text-sm leading-relaxed text-center flex flex-col gap-2">
        “{testimony}”
        <div className="flex justify-center">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="text-indigo-600"
              fill="#4f39f6"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerTestimonyCard;
