import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiPostgresql,SiDocker, SiExpress, SiMongodb ,SiAmazon ,SiTypescript , SiPrisma} from 'react-icons/si';
import React from "react"

const skills = [
  { name: 'Java', icon: <FaJava size={40} className="text-[#f89820]" /> },
  { name: 'Python', icon: <FaPython size={40} className="text-[#3776ab]" /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} className="text-[#f7df1e]" /> },
  { name: 'React', icon: <FaReact size={40} className="text-[#61dafb]" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss size={40} className="text-[#38bdf8]" /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-[#e34f26]" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-[#1572b6]" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-[#336791]" /> },
  { name: 'GitHub', icon: <FaGithub size={40} className="text-black" /> },
  { name: 'Docker', icon: <SiDocker size={40} className="text-[#2496ED]" /> },
  { name: 'Express', icon: <SiExpress size={40} className="text-[#000000]" /> },
  { name: 'Mongodb', icon: <SiMongodb size={40} className="text-[#47A248]" /> },
  { name: 'Cloudflare', icon: <img src="https://yt3.googleusercontent.com/XLwUPwwj7PAZ4n-hMiM8poQUO9at8jaQf5BjEzdgMw6r_hOI_FZy9oM5f2mTCJWOfP5RM06XCw=s900-c-k-c0x00ffffff-no-rj" alt="CloudFront" className="w-12 h-12" />},
  { name: 'AWS', icon: <SiAmazon size={40} className="text-[#FF9900]" />},
  { name: 'TypeScript', icon: <SiTypescript size={40} className="text-[#3178C6]" /> },
  { name: 'Prisma', icon: <SiPrisma size={40} className="text-[#2D3748]"/> },
  
];

export const Skills:React.FC=()=>{
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {skill.icon}
              <p className="mt-2 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
