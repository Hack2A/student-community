import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AlertMessage from "./AlertMessage";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const sendMessage = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    reset();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
  };

  return (
    <>
      <AnimatePresence>
        {showAlert && (
          <AlertMessage
            message="Your message has been sent successfully!"
            onClose={() => setShowAlert(false)}
          />
        )}
      </AnimatePresence>
      <motion.section
        className="w-full py-10 bg-indigo-600 px-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="flex flex-col text-center">
          <h1 className="text-3xl font-bold text-white">Get in Touch</h1>
          <h2 className="text-xl text-white">
            Ready to turn your unused software licenses into cash? Fill out the
            form below and we'll get back to you within 24 hours.
          </h2>
        </div>
        <motion.div
          className="flex justify-center items-center px-4 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6 sm:p-8"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(sendMessage)} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <textarea
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required" })}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none h-32"
                  required
                ></textarea>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <button
                  type="submit"
                  className={`w-full hover:cursor-pointer flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 ${
                    isLoading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  {!isLoading && <ArrowRight className="w-4 h-4" />}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ContactForm;
