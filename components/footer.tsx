import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-8 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Connect with me</h3>
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/subal43"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300 transform"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/subal-kundu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 hover:scale-110 transition-all duration-300 transform"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://x.com/subal64780"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-500 hover:scale-110 transition-all duration-300 transform"
          >
            <FaTwitter size={32} />
          </a>
          <a
            href="mailto:subalkundu3@gmail.com"
            className="text-slate-400 hover:text-red-500 hover:scale-110 transition-all duration-300 transform"
          >
            <FaEnvelope size={32} />
          </a>
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Subal Kundu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
