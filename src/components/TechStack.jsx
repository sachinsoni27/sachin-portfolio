import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaLinux, FaDatabase, FaGithub, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiMongodb, SiGo, SiMysql, SiPostman, SiCplusplus, SiJavascript } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: <FaJava className="text-orange-600" /> },
  { name: 'Spring Boot', icon: <span className="text-green-500 font-bold text-xl">🍃</span> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
  { name: 'Express', icon: <span className="font-bold">ex</span> },
  { name: 'Python', icon: <FaPython className="text-blue-300" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
  { name: 'SQL', icon: <FaDatabase className="text-gray-400" /> },
  { name: 'REST APIs', icon: <span className="text-purple-400 font-bold">API</span> },
  { name: 'Microservices', icon: <span className="text-blue-400 text-lg">⚙️</span> },
  { name: 'OOPs', icon: <span className="text-green-400 text-lg">🔷</span> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'n8n Automation', icon: <span className="text-red-400 font-bold">n8n</span> },
  { name: 'CodeChef', icon: <span className="text-orange-400 font-bold text-lg">🏆</span> },
  { name: 'Linux', icon: <FaLinux className="text-yellow-100" /> },
];

const TechStack = () => {
  return (
    <section className="py-10 px-6 md:px-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 mb-8 text-2xl font-bold text-blue-300">
        <span>⚛️</span> <h2>Tech Arsenal</h2>
      </div>

      <div className="mb-6 space-y-2 text-gray-300 text-sm md:text-base">
        <p>› Data Structures & Algorithms</p>
        <p>› Object Oriented Programming (OOPs)</p>
        <p>› Database Management and Memory System</p>
        <p>› Computer Networks</p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4 border border-purple-900/50 bg-purple-900/10 rounded-xl hover:border-purple-500 hover:scale-105 transition-all cursor-default">
            <div className="text-3xl mb-2">{skill.icon}</div>
            <span className="text-xs font-medium text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;