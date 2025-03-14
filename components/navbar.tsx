import { useState } from "react";
import { Menu, X } from "lucide-react";
import React from "react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 shadow-md bg-white text-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Subal's Portfolio</h1>

        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="/contact" className="hover:text-blue-500">Contact</a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <a href="#about" className="block text-center py-2 hover:text-blue-500">About</a>
          <a href="#projects" className="block text-center py-2 hover:text-blue-500">Projects</a>
          <a href="/contact" className="block text-center py-2 hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
}