import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiStripe, SiNodedotjs, SiMongodb, SiHtml5, SiJavascript } from 'react-icons/si';
import portfolioImg from '../assets/Portfolio.png';
import projectHelperImg from '../assets/project_helper.png';
import musicVibeImg from '../assets/project MUSIC VIBE.png';

const projects = [
  {
    title: "Project Helper - AI Code Analyzer",
    desc: "Built an AI-based system to analyze and explain codebases. Provided line-by-line code explanation and chatbot support. Implemented bug detection and interview question generation.",
    icons: [<SiReact />, <SiNodedotjs />, <SiHtml5 />, <SiJavascript />],
    image: projectHelperImg,
    demo: "https://project-helper-x8n7-gt3lbe5aq-sachin-sonis-projects.vercel.app/",
    repo: "https://github.com/sachinsoni27/PROJECT-HELPER",
    isPlaceholder: false
  },
  {
    title: "MUSIC VIBE",
    desc: "A modern music streaming application with a sleek interface for discovering and playing your favorite tracks.",
    icons: [<SiReact />],
    image: musicVibeImg,
    demo: "https://music-vibe-d8rt.vercel.app/",
    repo: "https://github.com/sachinsoni27/MUSIC-VIBE",
    isPlaceholder: false
  },
  {
    title: "Portfolio",
    desc: "A professional portfolio website showcasing projects, skills, certifications, and achievements with a modern design and interactive features.",
    icons: [<SiReact />],
    image: portfolioImg,
    demo: "https://sachin-portfolio-zeta-drab.vercel.app/",
    repo: "https://github.com/sachinsoni27/sachin-portfolio",
    isPlaceholder: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 max-w-6xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <div className="inline-flex items-center justify-center p-3 bg-cyan-500/10 rounded-full mb-4">
          <span className="text-cyan-400 text-xl">{'{ }'}</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl text-center">
          A selection of projects that showcase my passion for building scalable, beautiful, and efficient applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index} 
            className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] transition-all duration-300 group flex flex-col"
          >
            {/* Image Container */}
            <div className={`h-48 overflow-hidden relative ${project.isPlaceholder ? 'bg-gradient-to-br from-[#0a0a0a] to-gray-900 border-b border-white/5 flex items-center justify-center' : ''}`}>
              {!project.isPlaceholder ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="text-gray-600 flex flex-col items-center justify-center h-full w-full">
                  <span className="text-4xl mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">🚧</span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">In Development</span>
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="p-6 flex flex-col flex-grow relative">
              <div className="flex justify-between items-start mb-4 relative z-10">
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <div className="flex gap-2 text-lg text-gray-400">
                  {project.icons.map((icon, i) => <span key={i} className="drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">{icon}</span>)}
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow relative z-10">
                {project.desc}
              </p>

              <div className="flex gap-6 mt-auto relative z-10">
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] text-sm font-semibold transition-all">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.repo !== "#" && (
                  <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] text-sm font-semibold transition-all">
                    <FaGithub /> Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;