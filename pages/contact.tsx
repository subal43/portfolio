import React from 'react';
import {useNavigate} from "react-router-dom"
import { FaTimes } from "react-icons/fa";
export const Contact: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <form
            action="https://formspree.io/f/mqaerwjd"
            method="POST"
            className="space-y-6"
          >
            <div>
               <div className="flex justify-end cursor-pointer" onClick={()=>{navigate("/")}}><FaTimes /></div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Write your message..."
                className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-lg">Or reach me at:</p>
            <p className="text-blue-600 mt-2">
              <a href="mailto:subalkundu3@gmail.com">subalkundu3@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


