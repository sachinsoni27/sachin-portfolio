import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
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

const Stats = () => {
  return (
    <section className="py-10 px-6 md:px-20 max-w-6xl mx-auto">
      
      {/* Coding Profiles */}
      <div className="flex items-center gap-2 mb-6 text-2xl font-bold text-purple-300">
        <span>&lt;/&gt;</span> <h2>Coding</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-16">
        {/* LeetCode Card */}
        <div className="bg-[#1a1a1a] p-4 rounded-xl border border-orange-900/50 flex items-center justify-between">
           <div>
              <h3 className="text-orange-500 font-bold">LeetCode</h3>
              <p className="text-2xl font-bold">250+</p>
              <p className="text-xs text-gray-400">problems solved</p>
           </div>
           <a href="https://leetcode.com/u/sachin2711/" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-black text-xs px-3 py-1 rounded-full font-bold hover:bg-orange-600 transition-colors">Visit Profile</a>
        </div>

        {/* GFG Card */}
        <div className="bg-[#1a1a1a] p-4 rounded-xl border border-green-900/50 flex items-center justify-between">
           <div>
              <h3 className="text-green-500 font-bold">GeeksForGeeks</h3>
              <p className="text-2xl font-bold">300+</p>
              <p className="text-xs text-gray-400">problems solved</p>
           </div>
           <a href="https://www.geeksforgeeks.org/profile/sachinsoniof54eh" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-black text-xs px-3 py-1 rounded-full font-bold hover:bg-green-600 transition-colors">Visit Profile</a>
        </div>

         {/* HackerRank Card */}
         <div className="bg-[#1a1a1a] p-4 rounded-xl border border-blue-900/50 flex items-center justify-between">
           <div>
              <h3 className="text-blue-500 font-bold">HackerRank</h3>
              <p className="text-2xl font-bold">100+</p>
              <p className="text-xs text-gray-400">problems solved</p>
           </div>
           <a href="https://www.hackerrank.com/profile/sachinsonioffic1" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold hover:bg-blue-600 transition-colors">Visit Profile</a>
        </div>
      </div>

      {/* Achievements */}
      <div className="flex items-center gap-2 mb-8 text-2xl font-bold text-blue-300">
        <span className="text-3xl">🏆</span> <h2>Achievements & Certifications</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all group cursor-pointer">
          <img src={softwareEng} alt="Software Engineering" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
          <div className="p-4 bg-gray-900 flex justify-between items-center">
            <div>
              <h3 className="text-white font-bold">Software Engineering</h3>
              <p className="text-xs text-gray-400">Professional Certification</p>
            </div>
            <a href={softwareEngPdf} download className="text-blue-400 hover:text-blue-300 font-bold text-lg"><FaExternalLinkAlt /></a>
          </div>
        </div>
        <div className="border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all group cursor-pointer">
          <img src={linuxCert} alt="Linux Certificate" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
          <div className="p-4 bg-gray-900 flex justify-between items-center">
            <div>
              <h3 className="text-white font-bold">Linux for Beginners</h3>
              <p className="text-xs text-gray-400">Operating Systems Certification</p>
            </div>
            <a href={linuxPdf} download className="text-blue-400 hover:text-blue-300 font-bold text-lg"><FaExternalLinkAlt /></a>
          </div>
        </div>
        <div className="border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all group cursor-pointer">
          <img src={webDevCert} alt="Web Development" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
          <div className="p-4 bg-gray-900 flex justify-between items-center">
            <div>
              <h3 className="text-white font-bold">Web Development</h3>
              <p className="text-xs text-gray-400">Complete Web Development Training</p>
            </div>
            <a href={webDevPdf} download className="text-blue-400 hover:text-blue-300 font-bold text-lg"><FaExternalLinkAlt /></a>
          </div>
        </div>
        <div className="border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all group cursor-pointer">
          <img src={javaCert} alt="Java Programming" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
          <div className="p-4 bg-gray-900 flex justify-between items-center">
            <div>
              <h3 className="text-white font-bold">Java Programming</h3>
              <p className="text-xs text-gray-400">Java Programming Fundamentals</p>
            </div>
            <a href={javaPdf} download className="text-blue-400 hover:text-blue-300 font-bold text-lg"><FaExternalLinkAlt /></a>
          </div>
        </div>
        <div className="border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all group cursor-pointer">
          <img src={pmpCert} alt="PMP Training" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
          <div className="p-4 bg-gray-900 flex justify-between items-center">
            <div>
              <h3 className="text-white font-bold">PMP Training</h3>
              <p className="text-xs text-gray-400">Software Project Management</p>
            </div>
            <a href={pmpPdf} download className="text-blue-400 hover:text-blue-300 font-bold text-lg"><FaExternalLinkAlt /></a>
          </div>
        </div>
        <div className="border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all group cursor-pointer">
          <img src={genaiCert} alt="Ethical Considerations for Generative AI" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
          <div className="p-4 bg-gray-900 flex justify-between items-center">
            <div>
              <h3 className="text-white font-bold">Ethical Considerations for Generative AI</h3>
              <p className="text-xs text-gray-400">IBM SkillsBuild Certification</p>
            </div>
            <a href={genaiPdf} download className="text-blue-400 hover:text-blue-300 font-bold text-lg"><FaExternalLinkAlt /></a>
          </div>
        </div>
        <div className="border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all group cursor-pointer">
          <img src={ragCert} alt="Retrieval Augmented Generation" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
          <div className="p-4 bg-gray-900 flex justify-between items-center">
            <div>
              <h3 className="text-white font-bold">Retrieval Augmented Generation</h3>
              <p className="text-xs text-gray-400">IBM SkillsBuild Certification</p>
            </div>
            <a href={ragPdf} download className="text-blue-400 hover:text-blue-300 font-bold text-lg"><FaExternalLinkAlt /></a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Stats;