import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-50 text-gray-700 py-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Logo + Tagline */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600">Student Community</h2>
            <p className="mt-2 text-sm">
              Find hackathons, find teams and grow your skills - all in one place.
            </p>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="mailto:contact@softsell.io" aria-label="Email">
                <Mail className="w-5 h-5 hover:text-indigo-600 transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 hover:text-indigo-600 transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="w-5 h-5 hover:text-indigo-600 transition-colors" />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5 hover:text-indigo-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 text-sm text-center border-t pt-4 border-gray-200">
          © {new Date().getFullYear()} SoftSell. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
