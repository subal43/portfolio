import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';


export const HeroItem: React.FC = () => {
    const typedElement = useRef(null);
    const typedInstance = useRef<Typed | null>(null);

    useEffect(() => {
        typedInstance.current = new Typed(typedElement.current, {
            strings: ['Web Developer', 'React Enthusiast', 'Open Source Contributor','Full Stack Developer'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typedInstance.current?.destroy();
        };
    }, []);

    return (
        <section >

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative bg-teal-600 bg-cover bg-center min-h-[350px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 p-8 md:p-16 drop-shadow-xl"
                style={{
                    backgroundImage: "url('photo2.webp')", // Change this to your image path
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Text Content */}
                <div className="relative z-10 text-white text-center md:text-left text-lg md:text-2xl font-bold leading-relaxed">
                    Hi, My name is <span className="text-[#FFD700]">Subal</span>
                    <br />
                    and I am a passionate <br />
                    <span className="text-[#FFD700]">
                        <span ref={typedElement}></span>
                    </span>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <a
                            href="/contact"
                            className="px-5 py-3 bg-[#FFD700] text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="px-5 py-3 border-2 border-[#FFD700] text-white font-semibold rounded-lg shadow-md hover:bg-[#FFD700] hover:text-black transition duration-300"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>

                {/* Profile Image */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative z-10 flex justify-center"
                >
                    <img
                        src="photo1.png"
                        alt="hero"
                        className="h-40 w-40 sm:h-52 sm:w-52 md:h-60 md:w-60 object-cover rounded-full border-4 border-[#FFD700] shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};
