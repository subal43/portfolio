import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="contact" className="min-h-screen py-20 bg-slate-900 text-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-slate-700 relative"
        >
          <button
            onClick={() => navigate("/")}
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>

          <form
            action="https://formspree.io/f/mqaerwjd"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full p-4 bg-slate-900/50 border border-slate-600 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full p-4 bg-slate-900/50 border border-slate-600 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Write your message..."
                className="w-full p-4 bg-slate-900/50 border border-slate-600 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-500 transition-all resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-lg font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all"
            >
              Send Message
            </motion.button>
          </form>

          <div className="mt-8 text-center border-t border-slate-700 pt-6">
            <p className="text-lg text-slate-400">Or reach me directly at:</p>
            <a
              href="mailto:subalkundu3@gmail.com"
              className="inline-block mt-2 text-xl font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              subalkundu3@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


