import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import React from 'react';

export const Footer:React.FC=()=> {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold mb-4">Connect with me</h3>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/subal43"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/subal-kundu-b26905261/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://x.com/subal64780"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="mailto:subalkundu3@gmail.com"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Subal Kundu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
