import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiPostgresql,SiPhp, SiDocker, SiExpress, SiMongodb, SiAmazon, SiTypescript, SiPrisma } from 'react-icons/si';
import React, { useState } from "react";

const skills = [
  { name: 'Java', icon: <FaJava size={40} className="text-[#f89820]" />, description: (
    <>
      Java is a versatile, object-oriented programming language which I have learned from my college teacher. 
      Also, I have completed the NPTEL Java Course Program for further improvement.{" "}  
       <a
        href="https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs43/Course/NPTEL24CS43S106680008730749175.pdf"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a> 
    </>
  ),},
  { name: 'Python', icon: <FaPython size={40} className="text-[#3776ab]" />, description: (
    <>
    Python is a high-level programming language known for its readability. It is easy to learn because its syntax is beginner-friendly. Python is my core subject in my degree. Here are some of my projects using Python.{" "}  
       <a
        href="https://github.com/subal43/jarvis/blob/main/jarvis.py"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a> <br/>
      <a
        href="https://github.com/subal43/snake-water-gun-game/blob/main/snakewatergun.py"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
    </>
  )},
  { name: 'JavaScript', icon: <SiJavascript size={40} className="text-[#f7df1e]" />, description: (
    <>
   JavaScript is the language of the web, used for dynamic content. I learned JavaScript from online sources. Here are some of my projects using JavaScript.{" "}  
       <br/><a
        href="https://github.com/subal43/number-guessing-game/blob/main/random.js"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a> <br/>
      <a
        href="https://github.com/subal43/s-w-g/blob/main/s%2Cw%2Cg.js"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
    </>
  )},
  {name: 'React', icon: <FaReact size={40} className="text-[#61dafb]" />, description: (
    <>
   React is a JavaScript library for building user interfaces. It is very helpful for creating frontends because it provides state management, hooks, and many other cool features. Here are some of my projects using React. {" "}  
       <br/><a
        href="https://github.com/subal43/pay-app/blob/main/Frontend/src/App.jsx"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a> <br/>
      <a
        href="https://github.com/subal43/portfolio/tree/main/src"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
    </>
  )},
  { name: 'TailwindCSS', icon: <SiTailwindcss size={40} className="text-[#38bdf8]" />, description: (
    <>
   TailwindCSS is a utility-first CSS framework for styling.It provides predefined utility classes for styling elements directly in your HTML or JSX, reducing the need for custom CSS . It seamlessly integrates with React, Vue, and other frameworks, making UI development more streamlined.{" "}  
       <br/><a
        href="https://github.com/subal43/pay-app/blob/main/Frontend/components/Users.jsx"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
    </>
  )},
  { name: 'HTML', icon: <FaHtml5 size={40} className="text-[#e34f26]" />, description: (
    <>
     HTML is the standard markup language for web pages. In my 12th standard, I had HTML in my Computer Applications subject. Then, I studied HTML from online sources.{" "}  
       <br/><a
        href="https://github.com/subal43/amazon-home-page/blob/main/index.html"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
    </>
  )},
  { name: 'CSS', icon: <FaCss3Alt size={40} className="text-[#1572b6]" />, description: (
    <>
     CSS is the latest evolution of the Cascading Style Sheets language, which I learned from online sources.{" "}  
       <br/><a
        href="https://github.com/subal43/amazon-home-page/blob/main/index.css"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
    </>
  )},
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-[#336791]" />, description: (
    <>
     PostgreSQL is a powerful open-source relational database system. It is known for its robustness, scalability, and support for advanced SQL features. I learned this skill from an online course{" "}  
       <br/><a
        href="https://x.com/subal64780/status/1891914771252822441"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
    </>
  )},

  
  { name: 'GitHub', icon: <FaGithub size={40} className="text-black"/>, description: (
    <>
      GitHub is a web-based version control and collaboration platform.{" "}  
       <br/><a
        href="https://github.com/subal43/"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
    </>
  )},

  { name: 'Docker', icon: <SiDocker size={40} className="text-[#2496ED]" />, description: (
    <>
    Docker is a platform for developing, shipping, and running applications in containers.I learned this skill from an online course.{" "}  
       <br/><a
        href="https://www.linkedin.com/posts/subal-kundu-b26905261_today-i-installed-docker-i-learned-that-activity-7296995704533590018-tcIQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBiZA4B8a7fOi_i6aYJ4xMT5Cf7c1Jghzs"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
    </>
  )},

  { name: 'Express', icon: <SiExpress size={40} className="text-[#000000]" />, description: (
    <>
     Express is a minimal web application framework for Node.js.{" "}  
       <br/><a
        href="https://github.com/subal43/pay-app/tree/main/Backend"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
      <br/><a
        href="https://github.com/subal43/CarRent"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
    </>
  )},

  { name: 'MongoDB', icon: <SiMongodb size={40} className="text-[#47A248]" />, description: (
    <>
      MongoDB is a NoSQL database designed for scalable applications. It is commonly used when quick data retrieval or fast responses from the database are required, as MongoDB is highly efficient and performant.{" "}  
       <br/><a
        href="https://github.com/subal43/CarRent/blob/main/db.js"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
      <br/><a
        href="https://github.com/subal43/pay-app/blob/main/Backend/db/db.js"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
    </>
  )},

  { name: 'Cloudflare', icon: <img src="https://yt3.googleusercontent.com/XLwUPwwj7PAZ4n-hMiM8poQUO9at8jaQf5BjEzdgMw6r_hOI_FZy9oM5f2mTCJWOfP5RM06XCw=s900-c-k-c0x00ffffff-no-rj" alt="Cloudflare" className="w-12 h-12" />,  description: (
    <>
    Cloudflare provides CDN, security, and performance enhancements for websites.{" "}  
   
    </>
  )},

  { name: 'AWS', icon: <SiAmazon size={40} className="text-[#FF9900]" />, description: (
    <>
    AWS is a comprehensive cloud computing platform provided by amazon.{" "}  
       <br/><a
        href="https://x.com/subal64780/status/1869114104730075504"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
    </>
  )},

  { name: 'TypeScript', icon: <SiTypescript size={40} className="text-[#3178C6]" />, description: (
    <>
      TypeScript is a strongly typed programming language that builds on JavaScript. It provides type safety to our code .{" "}  
       <br/><a
        href="https://www.linkedin.com/posts/subal-kundu-b26905261_today-i-learn-more-ts-apis-heres-what-activity-7276345100975198208-Dgqk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEBiZA4B8a7fOi_i6aYJ4xMT5Cf7c1Jghzs"
        target="_blank"
        className="text-blue-500 underline"
      >
        Click Me
      </a>
    </>
  )},

  { name: 'Prisma', icon: <SiPrisma size={40} className="text-[#2D3748]" />, description: (
    <>
     Prisma is an open-source, next-generation ORM for Node.js and TypeScript. It simplifies database management by providing a type-safe and intuitive API for querying databases{" "}  
       
    </>
  )},
  { 
    name: 'PHP', 
    icon: <SiPhp size={40} className="text-[#777BB4]" />, 
    description: (
      <>
        PHP is a popular general-purpose scripting language especially suited to web development. It is fast, flexible, and pragmatic. PHP is my core subject in my degree .{" "}  
        
      </>
    ) 
  },
  

];

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; icon: React.JSX.Element; description: React.ReactNode} | null>(null);

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedSkill(skill)}
            >
              {skill.icon}
              <p className="mt-2 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      
      {selectedSkill && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <div className="text-4xl mb-4">{selectedSkill.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{selectedSkill.name}</h3>
            <p className="text-gray-600">{selectedSkill.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => setSelectedSkill(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
