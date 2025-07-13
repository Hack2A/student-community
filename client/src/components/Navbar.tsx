import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const handleAuthClick = () => {
    navigate("/u/auth");
  };

  return (
    <motion.nav
      className="mx-auto w-[90%] h-14 px-6 flex items-center justify-between rounded-full sticky top-4 left-0 right-0 shadow-xl backdrop-blur-xl bg-white/80 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Brand Name */}
      <div className="text-lg font-semibold text-gray-800">Student Community</div>

      {/* CTA Button */}
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm rounded-full font-medium transition hover:cursor-pointer"
        onClick={handleAuthClick}>
        Authenticate
      </button>
    </motion.nav>
  );
};

export default Navbar;
