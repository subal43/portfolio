import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-1 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="space-y-12">
            {/* Professional Summary */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-700/30 p-8 rounded-2xl border border-slate-600 hover:border-cyan-500/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Professional Summary</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                Entry-level Data Science / AI & Machine Learning professional with strong hands-on experience in Python, data analysis, machine learning, and Explainable AI (SHAP). Skilled in building end-to-end ML solutions, performing EDA, and communicating actionable insights. Seeking Data Science, AI/ML, or Junior Analyst roles in startups or enterprises.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-700/30 p-8 rounded-2xl border border-slate-600 hover:border-purple-500/50 transition-colors"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Education</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex flex-col">
                    <span className="font-semibold text-white text-lg">Master of Computer Applications (MCA)</span>
                    <span className="text-slate-400 text-sm">Pursuing</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-semibold text-white text-lg">Bachelor of Computer Applications (BCA)</span>
                    <span className="text-slate-400 text-sm">Siliguri Institute of Technology</span>
                  </li>
                </ul>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-700/30 p-8 rounded-2xl border border-slate-600 hover:border-cyan-500/50 transition-colors"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Certifications</h3>
                <ul className="space-y-3 text-slate-300 list-disc list-inside">
                  <li>The Ultimate Job Ready Data Science Course</li>
                  <li>Python for Data Science – IBM</li>
                  <li>Full Stack Web Development Certification</li>
                </ul>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Strengths */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-700/30 p-8 rounded-2xl border border-slate-600 hover:border-purple-500/50 transition-colors"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Strengths</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">✅ Strong analytical and problem-solving skills</li>
                  <li className="flex items-center gap-2">✅ Excellent written and verbal communication</li>
                  <li className="flex items-center gap-2">✅ Quick learner with adaptability and growth mindset</li>
                  <li className="flex items-center gap-2">✅ High attention to detail and data accuracy</li>
                </ul>
              </motion.div>

              {/* Availability */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-cyan-900/40 to-purple-900/40 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-colors flex flex-col justify-center"
              >
                <h3 className="text-2xl font-bold text-white mb-2">Availability</h3>
                <p className="text-cyan-300 text-lg font-medium mb-4">
                  Immediate Joiner
                </p>
                <p className="text-slate-300">
                  Open to On-site, Hybrid, or Remote Roles
                </p>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
