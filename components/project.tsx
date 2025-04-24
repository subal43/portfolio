import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import React from "react"

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and TailwindCSS to showcase my projects and skills.',
    github: 'https://github.com/subal43/portfolio',
    demo: 'https://portfoliosubal.netlify.app/',
  },
  {
    title: 'Pay-App',
    description: 'A Paytm like application built with React, TailwindCSS, Express and database (Mongodb).',
    github: 'https://github.com/subal43/pay-app',
    demo: '',
  },
  {
    title: 'Amazon Clone',
    description: 'A simple and intuitive Amazon Clone application made with Simple HTML and CSS.',
    github: 'https://github.com/subal43/amazon-home-page',
    demo: 'https://subalamazonclone.netlify.app/',
  },
  {
    title: 'CarRent-Backend',
    description: 'A car rental application backend built with Node.js, Express and MongoDB.',
    github: 'https://github.com/subal43/CarRent',
    demo: '',
  },
  {
    title: 'Amazondeal Clone',
    description: 'A simple and intuitive Amazondeal page made with Simple HTML and CSS.',
    github: 'https://github.com/subal43/amazondeal',
    demo: '',
  },
  {
    title: 'BlogWorld',
    description: "Full-stack BlogWorld built with React, Tailwind CSS, TypeScript, Express, and Hono.Uses Prisma + PostgreSQL for data, deployed via Cloudflare.Simple, scalable, and a work in progress — but it works! 💡",
    github: 'https://github.com/subal43/BlogWorld',
    demo: 'https://subalblog.netlify.app/',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-700"
                >
                  <FaGithub size={24} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
