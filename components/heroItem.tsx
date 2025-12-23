import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';


export const HeroItem: React.FC = () => {
    const typedElement = useRef(null);
    const typedInstance = useRef<Typed | null>(null);

    useEffect(() => {
        typedInstance.current = new Typed(typedElement.current, {
            strings: ['Data Science Professional', 'AI & ML Practitioner', 'Python Developer', 'Data Analyst'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 1500,
        });

        return () => {
            typedInstance.current?.destroy();
        };
    }, []);

    return (
        <section className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col justify-center items-center text-white bg-slate-900 py-20 md:py-0">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
                animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity }}
            ></motion.div>
            <motion.div
                className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
                animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 7, repeat: Infinity, delay: 2 }}
            ></motion.div>

            <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl px-8 w-full">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Subal Kundu</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-6 h-16">
                        I am a <span ref={typedElement} className="text-cyan-400"></span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all border border-transparent"
                        >
                            Contact Me
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-transparent border border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 transition-all"
                        >
                            Download Resume
                        </motion.a>
                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
                        <img
                            src="photo1.png"
                            alt="Subal Kundu"
                            className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl z-10"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
