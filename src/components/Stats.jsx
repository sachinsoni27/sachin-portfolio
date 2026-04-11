import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { GitHubCalendar } from 'react-github-calendar';
import softwareEng from '../assets/Software engineering.jpg';
import softwareEngPdf from '../assets/Software engineering certificate.pdf';
import linuxCert from '../assets/linux certificate.jpg';
import linuxPdf from '../assets/linux certificate.pdf';
import webDevCert from '../assets/The Complete Web Development Training Courses  Web Design Courses.jpg';
import webDevPdf from '../assets/The Complete Web Development Training Courses  Web Design Courses certificate.pdf';
import javaCert from '../assets/Java Programming Fundamentals.jpg';
import javaPdf from '../assets/Java Programming Fundamentals certificate.pdf';
import pmpCert from '../assets/Software Project Management Training (PMP).jpg';
import pmpPdf from '../assets/Software Project Management Training (PMP) certificate.pdf';
import genaiCert from '../assets/Ethical Considerations for Generative AI by IBM SkillsBuild.jpg';
import genaiPdf from '../assets/Ethical Considerations for Generative AI by IBM SkillsBuild.PDF';
import ragCert from '../assets/Introduction to Retrieval Augmented Generation by IBM SkillsBuild.jpg';
import ragPdf from '../assets/Introduction to Retrieval Augmented Generation by IBM SkillsBuild.PDF';
import awsCertPdf from '../assets/AWS Certified Cloud Practitioner certificate.pdf';
import awsCertImg from '../assets/AWS Certified Cloud Practitioner certificate.jpg';

const Stats = () => {
  return (
    <section id="achievements" className="min-h-[85vh] flex flex-col justify-center py-12 px-6 md:px-20 max-w-6xl mx-auto relative z-10">
      
      {/* Target Section Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <div className="inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-full mb-4">
          <span className="text-purple-400 text-xl">🏆</span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Coding Profiles & Achievements</h2>
        <p className="text-gray-400 max-w-2xl text-center">
          Active problem solver and continuous learner holding professional certifications.
        </p>
      </motion.div>

      {/* Coding Profiles Table/Cards */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-6 text-xl font-semibold text-gray-300 border-b border-white/10 pb-2"
      >
        <span>&lt;/&gt;</span> <h3>Programming</h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {/* LeetCode Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0 }}
          className="bg-[#0a0a0a]/60 backdrop-blur-sm p-6 rounded-2xl border border-white/5 flex flex-col hover:border-orange-500/40 hover:shadow-[0_10px_30px_rgb(249,115,22,0.1)] transition-all group"
        >
           <h3 className="text-orange-500 font-bold mb-4 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">LeetCode</h3>
           <div className="flex-grow">
             <p className="text-4xl font-bold text-white mb-1">250+</p>
             <p className="text-sm text-gray-500 mb-6">problems solved</p>
           </div>
           <a href="https://leetcode.com/u/sachin2711/" target="_blank" rel="noopener noreferrer" className="bg-white/5 text-gray-300 text-sm px-4 py-2 rounded-lg font-medium hover:bg-orange-500 hover:text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all text-center">Visit Profile</a>
        </motion.div>

        {/* GFG Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-[#0a0a0a]/60 backdrop-blur-sm p-6 rounded-2xl border border-white/5 flex flex-col hover:border-green-500/40 hover:shadow-[0_10px_30px_rgb(34,197,94,0.1)] transition-all group"
        >
           <h3 className="text-green-500 font-bold mb-4 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">GeeksForGeeks</h3>
           <div className="flex-grow">
             <p className="text-4xl font-bold text-white mb-1">300+</p>
             <p className="text-sm text-gray-500 mb-6">problems solved</p>
           </div>
           <a href="https://www.geeksforgeeks.org/profile/sachinsoniof54eh" target="_blank" rel="noopener noreferrer" className="bg-white/5 text-gray-300 text-sm px-4 py-2 rounded-lg font-medium hover:bg-green-500 hover:text-white hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] transition-all text-center border-transparent">Visit Profile</a>
        </motion.div>

         {/* HackerRank Card */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.4, delay: 0.2 }}
           className="bg-[#0a0a0a]/60 backdrop-blur-sm p-6 rounded-2xl border border-white/5 flex flex-col hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgb(59,130,246,0.1)] transition-all group"
         >
           <h3 className="text-blue-500 font-bold mb-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">HackerRank</h3>
           <div className="flex-grow">
             <p className="text-4xl font-bold text-white mb-1">100+</p>
             <p className="text-sm text-gray-500 mb-6">problems solved</p>
           </div>
           <a href="https://www.hackerrank.com/profile/sachinsonioffic1" target="_blank" rel="noopener noreferrer" className="bg-white/5 text-gray-300 text-sm px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all text-center">Visit Profile</a>
        </motion.div>
      </div>

      {/* GitHub Contributions */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-8 text-xl font-semibold text-gray-300 border-b border-white/10 pb-2"
      >
        <span className="text-xl">🟩</span> <h3>GitHub Contributions</h3>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="bg-[#0a0a0a]/60 backdrop-blur-sm p-6 rounded-2xl border border-white/5 flex justify-center w-full mb-16 overflow-x-auto"
      >
        <div className="min-w-[750px] md:min-w-0">
          <GitHubCalendar 
            username="sachinsoni27" 
            colorScheme="dark" 
            theme={{
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            blockSize={14}
            blockMargin={5}
            fontSize={14}
          />
        </div>
      </motion.div>

      {/* Workshops & Industry Exposure */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-8 text-xl font-semibold text-gray-300 border-b border-white/10 pb-2"
      >
        <span className="text-xl">🏭</span> <h3>Workshops & Industry Exposure</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#0a0a0a]/60 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)] transition-all"
        >
          <h3 className="text-lg font-bold text-white mb-2">INNOTECH'25 Participant</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Earned Certificate of Achievement for active participation in a national-level technical event.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#0a0a0a]/60 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)] transition-all"
        >
          <h3 className="text-lg font-bold text-white mb-2">Industrial Visit – CtrlS Datacentre, Noida</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Observed enterprise-scale IT infrastructure, power redundancy systems, network security, and data center operations.
          </p>
        </motion.div>
      </div>

      {/* Achievements / Certifications */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-8 text-xl font-semibold text-gray-300 border-b border-white/10 pb-2"
      >
        <span className="text-xl">📜</span> <h3>Certifications</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "AWS Cloud Practitioner", desc: "AWS Certified Cloud Practitioner", img: awsCertImg, pdf: awsCertPdf },
          { title: "Software Engineering", desc: "Professional Certification", img: softwareEng, pdf: softwareEngPdf },
          { title: "Linux for Beginners", desc: "Operating Systems Certification", img: linuxCert, pdf: linuxPdf },
          { title: "Web Development", desc: "Complete Web Development Training", img: webDevCert, pdf: webDevPdf },
          { title: "Java Programming", desc: "Java Programming Fundamentals", img: javaCert, pdf: javaPdf },
          { title: "PMP Training", desc: "Software Project Management", img: pmpCert, pdf: pmpPdf },
          { title: "Generative AI", desc: "Ethical Considerations Certification", img: genaiCert, pdf: genaiPdf },
          { title: "RAG & LLMs", desc: "Retrieval Augmented Generation", img: ragCert, pdf: ragPdf }
        ].map((cert, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index} 
            className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/40 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] transition-all duration-300 group flex flex-col"
          >
            <div className="h-48 overflow-hidden relative border-b border-white/5">
              <img src={cert.img} alt={cert.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="p-5 flex justify-between items-center sm:min-h-[90px] relative z-10">
              <div>
                <h3 className="text-gray-200 font-bold tracking-tight group-hover:text-white transition-colors drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">{cert.title}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-1">{cert.desc}</p>
              </div>
              <motion.a 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href={cert.pdf} 
                download 
                className="text-gray-400 hover:text-purple-400 font-bold p-2 bg-white/5 rounded-full transition-all hover:bg-purple-500/20 hover:shadow-[0_0_10px_rgba(168,85,247,0.4)]" aria-label="Download Certificate"
              >
                <FaExternalLinkAlt />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Stats;