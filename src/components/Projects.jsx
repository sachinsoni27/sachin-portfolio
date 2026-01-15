import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiStripe, SiNodedotjs, SiMongodb } from 'react-icons/si';
import musicVibeImg from '../assets/project MUSIC VIBE.png';
import portfolioImg from '../assets/portfolio project.png';

const projects = [
  {
    title: "MUSIC VIBE",
    desc: "A modern music streaming application with a sleek interface for discovering and playing your favorite tracks.",
    icons: [<SiReact />],
    image: musicVibeImg,
    demo: "https://music-vibe-d8rt.vercel.app/",
    repo: "https://github.com/sachinsoni27/MUSIC-VIBE"
  },
  {
    title: "AI Project",
    desc: "An intelligent AI-driven application showcasing advanced machine learning capabilities and modern web technologies for smart solutions.",
    icons: [<span className="text-xl">🤖</span>],
    image: "https://via.placeholder.com/600x300",
    demo: "#",
    repo: "#"
  },
  {
    title: "Chrome Extension",
    desc: "A powerful browser extension that enhances productivity and provides useful utilities for everyday web browsing tasks.",
    icons: [<SiReact />],
    image: "https://via.placeholder.com/600x300",
    demo: "#",
    repo: "#"
  },
  {
    title: "Fullstack Project",
    desc: "A comprehensive full-stack application combining frontend and backend technologies to create a complete end-to-end solution.",
    icons: [<SiReact />, <SiNodedotjs />, <SiMongodb />],
    image: "https://via.placeholder.com/600x300",
    demo: "#",
    repo: "#"
  },
  {
    title: "Portfolio",
    desc: "A professional portfolio website showcasing projects, skills, certifications, and achievements with a modern design and interactive features.",
    icons: [<SiReact />],
    image: portfolioImg,
    demo: "https://sachin-portfolio-zeta-drab.vercel.app/",
    repo: "https://github.com/sachinsoni27/sachin-portfolio"
  }
];

const Projects = () => {
  return (
    <section className="py-10 px-6 md:px-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 mb-8 text-2xl font-bold text-cyan-300">
        <span className="text-2xl">{'{ }'}</span> <h2>Featured projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#050505] border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500 transition-colors group">
            {/* Image Container */}
            <div className="h-48 overflow-hidden group/img relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <label className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity cursor-pointer">
                <input type="file" accept="image/*" className="hidden" />
                <span className="text-white text-sm font-semibold">Upload Image</span>
              </label>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <div className="flex gap-2 text-xl text-gray-400">
                  {project.icons.map((icon, i) => <span key={i}>{icon}</span>)}
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {project.desc}
              </p>

              <div className="flex gap-4">
                <a href={project.demo} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-semibold">
                  <FaExternalLinkAlt /> Demo
                </a>
                <a href={project.repo} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold">
                  <FaGithub /> Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;