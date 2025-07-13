import { motion, type Variants } from "framer-motion";
import CustomerTestimonyCard from "./CustomerTestimonyCard";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const CustomerTestimony = () => {
  const testimony = [
    {
      name: "Rohan Mehta",
      role: "Computer Science Student",
      company: "IIT Delhi",
      avatar: "https://avatar.iran.liara.run/public/boy",
      testimony:
        "Student Community helped me find the perfect team for Smart India Hackathon. We won first place and got an internship offer! The platform made networking so easy.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      company: "IIIT Hyderabad",
      avatar: "https://avatar.iran.liara.run/public/girl",
      testimony:
        "The learning roadmaps are incredible! I learned React and Node.js following their hackathon-focused curriculum. Won my first hackathon within 3 months of joining.",
      rating: 5,
    },
    {
      name: "Ashish Sinha",
      role: "UI/UX Designer",
      company: "NIT Surathkal",
      avatar: "https://avatar.iran.liara.run/public/boy",
      testimony:
        "Found amazing developers to work with through Student Community. We've participated in 5+ hackathons together and built some incredible projects. Great community!",
      rating: 4,
    },
  ];

  return (
    <motion.section
      className="w-full justify-center items-center flex flex-col gap-4 px-5 py-10 bg-indigo-600"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="flex flex-col text-center">
        <h1 className="text-3xl font-bold text-white">Student Success Stories</h1>
        <h2 className="text-xl text-white">
          See how students are winning hackathons, building amazing projects,
          and advancing their careers through our platform.
        </h2>
      </div>

      {/* Horizontal Division */}
      <div className="flex items-center w-[80%] my-4">
        <div className="flex-grow h-px bg-white" />
        <div className="mx-2 w-2.5 h-2.5 rounded-full bg-white" />
        <div className="flex-grow h-px bg-white" />
      </div>

      {/* Mapping Customer Testimonies */}
      <div className="flex gap-4 py-4 flex-col md:flex-row flex-wrap justify-center items-center">
        {testimony.map((testimonies, index) => (
          <CustomerTestimonyCard
            key={index}
            name={testimonies.name}
            role={testimonies.role}
            company={testimonies.company}
            avatar={testimonies.avatar}
            testimony={testimonies.testimony}
            rating={testimonies.rating}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default CustomerTestimony;
