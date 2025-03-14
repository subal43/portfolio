import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="space-y-6 text-center text-lg text-gray-700 leading-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p>
            Hi, I'm <span className="font-semibold">Subal Kundu</span>, a passionate web developer and tech enthusiast. I enjoy creating modern, responsive, and user-friendly web applications using technologies like{' '}
            <span className="font-medium">React</span>, <span className="font-medium">Tailwind CSS</span>,{' '}
            <span className="font-medium">JavaScript</span>, and <span className="font-medium">ExpressJS</span>.
          </p>

          <p>
            I'm currently pursuing my <span className="font-medium">Bachelor's in Computer Applications</span> at Siliguri Institute of Technology. I love exploring new tools, learning the latest tech, and contributing to meaningful projects.
          </p>

          <p>
            Outside of coding, you can often find me reading tech blogs, experimenting with new frameworks, and sharing insights on platforms like GitHub , LinkedIn and X (Twitter).
          </p>

        </motion.div>
      </div>
    </section>
  );
};


