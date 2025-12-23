import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaGithub, FaDatabase, FaLinux, FaChartBar, FaBrain, FaServer, FaGitAlt, FaLanguage, FaChartLine } from 'react-icons/fa';
import { SiJavascript, SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiGooglecolab, SiPostgresql, SiTensorflow, SiPytorch, SiHuggingface } from 'react-icons/si';
import React, { useState } from "react";

const skills = [
  {
    name: 'Python',
    icon: <FaPython size={40} className="text-[#3776ab]" />,
    description: 'Programming & Analysis'
  },
  {
    name: 'Pandas',
    icon: <SiPandas size={40} className="text-[#150458]" />,
    description: 'Programming & Analysis'
  },
  {
    name: 'NumPy',
    icon: <SiNumpy size={40} className="text-[#013243]" />,
    description: 'Programming & Analysis'
  },
  {
    name: 'Matplotlib',
    icon: <FaChartBar size={40} className="text-[#11557c]" />,
    description: 'Programming & Analysis'
  },
  {
    name: 'Seaborn',
    icon: <FaChartLine size={40} className="text-[#7293CB]" />,
    description: 'Statistical Data Visualization'
  },
  {
    name: 'SQL',
    icon: <FaDatabase size={40} className="text-[#336791]" />,
    description: 'Programming & Analysis'
  },
  {
    name: 'Machine Learning',
    icon: <SiScikitlearn size={40} className="text-[#F7931E]" />,
    description: 'Regression, Classification, Clustering, Model Evaluation'
  },
  {
    name: 'Deep Learning',
    icon: <SiTensorflow size={40} className="text-[#FF6F00]" />,
    description: 'Neural Networks, CNN, RNN, Transformers'
  },
  {
    name: 'NLP',
    icon: <FaLanguage size={40} className="text-[#4B8BBE]" />,
    description: 'Text Processing, Sentiment Analysis, NLTK, Spacy'
  },
  {
    name: 'Hugging Face',
    icon: <SiHuggingface size={40} className="text-[#FFD21E]" />,
    description: 'Transformers, Datasets, Hub'
  },
  {
    name: 'SHAP',
    icon: <FaBrain size={40} className="text-[#ff0000]" />,
    description: 'Explainable AI'
  },
  {
    name: 'Jupyter Notebook',
    icon: <SiJupyter size={40} className="text-[#F37726]" />,
    description: 'Tools & Platforms'
  },
  {
    name: 'Google Colab',
    icon: <SiGooglecolab size={40} className="text-[#F9AB00]" />,
    description: 'Tools & Platforms'
  },
  {
    name: 'Git',
    icon: <FaGitAlt size={40} className="text-[#F05032]" />,
    description: 'Tools & Platforms'
  },
  {
    name: 'GitHub',
    icon: <FaGithub size={40} className="text-black" />,
    description: 'Tools & Platforms'
  },
  {
    name: 'HTML',
    icon: <FaHtml5 size={40} className="text-[#e34f26]" />,
    description: 'Web Development Basics'
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt size={40} className="text-[#1572b6]" />,
    description: 'Web Development Basics'
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript size={40} className="text-[#f7df1e]" />,
    description: 'Web Development Basics'
  },
  {
    name: 'REST API',
    icon: <FaServer size={40} className="text-[#000000]" />,
    description: 'Web Development Basics'
  },
  {
    name: 'Linux',
    icon: <FaLinux size={40} className="text-black" />,
    description: 'Operating Systems'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; icon: React.JSX.Element; description: React.ReactNode } | null>(null);

  return (
    <section id="skills" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          My Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-6 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600 hover:border-cyan-400 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/20 group"
              onClick={() => setSelectedSkill(skill)}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 transform">
                {skill.icon}
              </div>
              <p className="text-lg font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>


      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 backdrop-blur-sm p-4"
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-slate-600 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-5xl mb-6 flex justify-center">{selectedSkill.icon}</div>
            <h3 className="text-3xl font-bold mb-4 text-center text-white">{selectedSkill.name}</h3>
            <p className="text-slate-300 text-center mb-8 text-lg">{selectedSkill.description}</p>
            <div className="flex justify-center">
              <button
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                onClick={() => setSelectedSkill(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
