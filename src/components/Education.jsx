import React from 'react';
import { motion } from 'framer-motion';
import { MdSchool } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import kietLogo from '../assets/KIET-Logo.jpg';
import buLogo from '../assets/Bundelkhand_University_Logo.png';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-20 max-w-6xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-4">
          <MdSchool className="text-blue-400 text-2xl" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Education</h2>
        <p className="text-gray-400 max-w-2xl text-center">
          My academic background and formal educational achievements.
        </p>
      </motion.div>

      {/* KIET */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition-all duration-300 mb-6 group"
      >
        <img 
          src={kietLogo} 
          alt="KIET Logo" 
          className="w-24 h-24 object-contain"
        />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold group-hover:text-white transition-colors">KIET Group of Institutions, Ghaziabad</h3>
          <p className="text-gray-400 mt-1">Master of Computer Applications (MCA) · (August 2025 - Present)</p>
          <p className="text-blue-500 text-sm font-semibold mt-1">CGPA: 8.02</p>
        </div>
      </motion.div>

      {/* BU */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition-all duration-300 mb-6 group"
      >
        <img 
          src={buLogo} 
          alt="Bundelkhand University Logo" 
          className="w-24 h-24 object-contain"
        />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold group-hover:text-white transition-colors">Bundelkhand University, Jhansi</h3>
          <p className="text-gray-400 mt-1">Bachelor of Elementary Education (B.El.Ed) · (November 2024)</p>
          <p className="text-blue-500 text-sm font-semibold mt-1">Percentage: 86.77%</p>
        </div>
      </motion.div>

      {/* 12th Grade */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition-all duration-300 mb-6 group"
      >
        <div className="w-24 h-24 flex items-center justify-center bg-gray-900 rounded-xl border border-white/5">
           <FaGraduationCap className="text-5xl text-gray-500 group-hover:text-blue-400 transition-colors" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold group-hover:text-white transition-colors">Shri Vinayak Academy International School, Orai</h3>
          <p className="text-gray-400 mt-1">Higher Secondary (12th Grade)</p>
          <p className="text-blue-500 text-sm font-semibold mt-1">Percentage: 88%</p>
        </div>
      </motion.div>

      {/* 10th Grade */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] transition-all duration-300 group"
      >
        <div className="w-24 h-24 flex items-center justify-center bg-gray-900 rounded-xl border border-white/5">
           <FaGraduationCap className="text-5xl text-gray-500 group-hover:text-blue-400 transition-colors" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold group-hover:text-white transition-colors">Shri Vinayak Academy International School, Orai</h3>
          <p className="text-gray-400 mt-1">Secondary (10th Grade)</p>
          <p className="text-blue-500 text-sm font-semibold mt-1">Percentage: 87.6%</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;