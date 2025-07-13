import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface AlertMessageProps {
  message: string;
  onClose: () => void;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ message, onClose }) => {
  return (
    <motion.div
      className="fixed top-6 right-6 z-50 max-w-sm w-full bg-white border border-indigo-200 shadow-lg rounded-lg p-4 flex items-start gap-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <CheckCircle2 className="text-green-500 mt-1" size={24} />
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 transition"
        aria-label="Close"
      >
        x
      </button>
    </motion.div>
  );
};

export default AlertMessage;
