import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { CiLocationOn } from "react-icons/ci";
import profilePhoto from '../assets/1781540189495.jpg';
import resumePdf from '../assets/Sachin_Soni_SDE.pdf';

const Hero = () => {
  // Motion stagger settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }} 
          animate={{ opacity: 1, scale: 1, rotate: 0 }} 
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:w-5/12 flex justify-center md:justify-start mb-12 md:mb-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            {/* Animated Neon Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-full blur-3xl animate-pulse"></div>
            
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src={profilePhoto} 
              alt="Sachin Soni" 
              className="relative rounded-full w-full h-full object-cover border-[6px] border-[#0a0a0a] shadow-[0_0_40px_rgba(168,85,247,0.3)] z-10"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#0a0a0a]/80 backdrop-blur-md px-5 py-2 rounded-full text-sm border border-white/10 flex items-center gap-2 whitespace-nowrap z-20 shadow-2xl"
            >
               <CiLocationOn className="text-cyan-400 text-lg"/> Delhi, India
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-white/5 text-gray-300 text-sm font-medium tracking-wide shadow-lg">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for Opportunities
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 via-fuchsia-400 to-cyan-400">Sachin Soni.</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-6 font-medium">Software Developer | Problem Solver</motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            I'm an aspiring Software Developer passionate about solving complex problems and building seamless web experiences. I specialize in full-stack development using <span className="text-white font-medium">Java, Node.js,</span> and <span className="text-white font-medium">React.js</span>, along with strong foundations in <span className="text-white font-medium">Data Structures</span> and <span className="text-white font-medium">Oracle SQL</span>. Let's build something exceptional together.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center md:justify-start gap-6 text-2xl mb-10 w-full">
            <a href="https://github.com/sachinsoni27" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white hover:-translate-y-1 transition-all"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sachin-soni-82539036a/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 hover:-translate-y-1 transition-all"><FaLinkedin /></a>
            <a href="https://x.com/__sachin_soni__" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white hover:-translate-y-1 transition-all"><FaXTwitter /></a>
            <a href="https://www.instagram.com/__sachin_soni__/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 hover:-translate-y-1 transition-all"><FaInstagram /></a>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center md:items-start md:justify-start gap-6 w-full">
            <motion.a 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resumePdf} 
              download 
              className="px-8 py-3.5 bg-white text-black rounded-xl hover:bg-gray-200 transition-all font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] whitespace-nowrap"
            >
              Download Resume
            </motion.a>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 text-gray-400">
              <a href="mailto:sachinsoniofficial2003@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <span className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/20 group-hover:text-purple-400 border border-white/5 transition-all"><FaEnvelope /></span>
                sachinsoniofficial2003@gmail.com
              </a>
              <a href="tel:+919936503035" className="flex items-center gap-3 hover:text-white transition-colors group">
                <span className="p-2 bg-white/5 rounded-lg group-hover:bg-cyan-500/20 group-hover:text-cyan-400 border border-white/5 transition-all"><FaPhoneAlt /></span>
                +91-9936503035
              </a>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;