import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import React from "react"

const projects = [
  {
    title: 'Social Media Sentiment Analysis & Trend Prediction',
    description: 'Collected and analyzed large-scale social media text data to identify sentiment trends. Performed data cleaning, preprocessing, feature extraction, and EDA. Built and evaluated ML models using accuracy, precision, recall, and F1-score. Generated actionable insights to support business and marketing decisions.',
    github: 'https://github.com/subal43/DS-Social-Media-Sentiment-Analyzer-Trend-Prediction.git',
    demo: '',
  },
  {
    title: 'California House Price Prediction',
    description: 'Developed a regression-based ML model to predict housing prices. Conducted EDA, feature engineering, scaling, and model evaluation using RMSE and R². Applied SHAP (Explainable AI) to interpret predictions and identify key price drivers.',
    github: 'https://github.com/subal43/DS-California-House-Price-Prediction.git',
    demo: '',
  },
  {
    title: 'SMS Classifier',
    description: 'A simple yet powerful web application designed to classify SMS messages as either Spam or Ham (not spam). Built with Python, this project leverages Natural Language Processing (NLP) and Machine Learning to provide accurate predictions.',
    github: 'https://github.com/subal43/DS-SMS-Classifier-System.git',
    demo: '',
  },
 
   {
    title: 'Movie Recommendation System',
    description: 'A content-based movie recommendation system built with Python and Streamlit. This application suggests movies similar to a user-selected movie using cosine similarity and fetches movie posters via the TMDB API.',
    github: 'https://github.com/subal43/DS-Movie-Recommended.git',
    demo: '',
  },
 
];

import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col h-full"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow">{project.description}</p>
              </div>

              <div className="flex gap-4 mt-auto pt-6 border-t border-slate-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <FaGithub size={20} />
                  <span className="font-medium">Code</span>
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
