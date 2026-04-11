import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { TbBrandVscode } from "react-icons/tb";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: 'Java', icon: <FaJava className="text-orange-500" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> }
    ]
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> }
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Oracle SQL', icon: <span className="text-red-500 font-bold">SQL</span> }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
      { name: 'VS Code', icon: <TbBrandVscode className="text-blue-400" /> }
    ]
  }
];

const TechStack = () => {
  return (
    <section id="skills" className="min-h-[85vh] flex flex-col justify-center py-12 px-6 md:px-20 max-w-6xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <div className="inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-full mb-4">
          <span className="text-purple-400 text-xl">⚛️</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight mb-4">Tech Arsenal</h2>
        <p className="text-gray-400 max-w-2xl text-center">
          A blend of robust backend technologies, modern frontend frameworks, and architectural principles.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={idx} 
            className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-purple-500/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-200 border-b border-white/10 pb-4">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill, index) => (
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  key={index} 
                  className="flex flex-col items-center justify-center p-4 border border-white/5 bg-black/40 rounded-xl hover:bg-purple-900/30 hover:border-purple-500/60 transition-all cursor-default group"
                >
                  <div className="text-3xl mb-3 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.6)] transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;