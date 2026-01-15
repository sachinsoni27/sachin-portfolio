import React from 'react';
import { MdSchool } from "react-icons/md";
import kietLogo from '../assets/KIET-Logo.jpg';
import nielitLogo from '../assets/NIELIT.jpeg';
import buLogo from '../assets/Bundelkhand_University_Logo.png';

const Education = () => {
  return (
    <section className="py-10 px-6 md:px-20 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 mb-8 text-2xl font-bold text-blue-300">
        <MdSchool /> <h2>Education</h2>
      </div>

      <div className="bg-transparent border border-gray-800 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:border-purple-500 transition-all duration-300 mb-6">
        <img 
          src={kietLogo} 
          alt="KIET Logo" 
          className="w-24 h-24 object-contain"
        />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">KIET Group of Institutions</h3>
          <p className="text-gray-400 mt-1">Master of Computer Applications (MCA) · (2025 - 2027)</p>
          <p className="text-gray-500 text-sm">Ghaziabad, India</p>
        </div>
      </div>

      <div className="bg-transparent border border-gray-800 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:border-purple-500 transition-all duration-300 mb-6">
        <img 
          src={nielitLogo} 
          alt="NIELIT Logo" 
          className="w-24 h-24 object-contain"
        />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">NIELIT (National Institute of Electronics & IT)</h3>
          <p className="text-gray-400 mt-1">O'level IT (Diploma) - Information Technology · (July 2023 - November 2024)</p>
          <p className="text-gray-500 text-sm">India</p>
        </div>
      </div>

      <div className="bg-transparent border border-gray-800 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 hover:border-purple-500 transition-all duration-300">
        <img 
          src={buLogo} 
          alt="Bundelkhand University Logo" 
          className="w-24 h-24 object-contain"
        />
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">Bundelkhand University</h3>
          <p className="text-gray-400 mt-1">Bachelor of Elementary Education (B.El.Ed) · (August 2020 - November 2024)</p>
          <p className="text-gray-500 text-sm">Jhansi, India</p>
        </div>
      </div>
    </section>
  );
};

export default Education;