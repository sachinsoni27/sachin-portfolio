import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { CiLocationOn } from "react-icons/ci";
import profilePhoto from '../assets/profile photo.jpg';
import resumePdf from '../assets/sachin resume.pdf';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-20">
      {/* Left: Image */}
      <div className="md:w-1/3 flex justify-center mb-10 md:mb-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80 group">
          <img 
            src={profilePhoto} 
            alt="Sachin Soni" 
            className="rounded-full w-full h-full object-cover border-4 border-gray-800 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          />
          <label className="absolute inset-0 flex items-center justify-center rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <input type="file" accept="image/*" className="hidden" />
            <span className="text-white text-sm font-semibold">Upload Photo</span>
          </label>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 px-4 py-1 rounded-full text-sm border border-gray-700 flex items-center gap-2 whitespace-nowrap">
             <CiLocationOn className="text-purple-400"/> Delhi, India
          </div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="md:w-2/3 md:pl-16 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Sachin Soni</h1>
        <h2 className="text-xl text-gray-400 mb-6">Java Backend Developer | Full Stack Web Developer</h2>
        
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8 mx-auto md:mx-0">
          Java Backend Developer with hands-on experience in <span className="text-white font-semibold">Spring Boot</span> based backend services and REST APIs. Strong foundation in Core Java, OOPs, SQL, and backend development with exposure to microservices concepts and role-based authorization. Full Stack Web Developer specializing in <span className="text-white font-semibold">MERN Stack, React.js, and AI-Driven Automation</span> solutions.
        </p>

        <div className="flex justify-center md:justify-start gap-6 text-3xl mb-8">
          <a href="https://github.com/sachinsoni27" target="_blank" rel="noopener noreferrer" className="text-gray-300 bg-gray-800 rounded-full p-2 hover:text-white hover:bg-gray-700 transition-colors"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sachin-soni-82539036a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 bg-blue-900 rounded-full p-2 hover:text-blue-400 hover:bg-blue-800 transition-colors"><FaLinkedin /></a>
          <a href="https://x.com/__sachin_soni__" target="_blank" rel="noopener noreferrer" className="text-black bg-white rounded-full p-2 hover:bg-gray-300 transition-colors"><FaXTwitter /></a>
          <a href="https://www.instagram.com/__sachin_soni__/" target="_blank" rel="noopener noreferrer" className="text-pink-500 bg-pink-900 rounded-full p-2 hover:text-pink-400 hover:bg-pink-800 transition-colors"><FaInstagram /></a>
        </div>

        <a href={resumePdf} download className="px-8 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all font-semibold inline-block">
          Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;