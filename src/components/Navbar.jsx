import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/stats' },
  ];

  const activeStyle = "text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] border-b-2 border-purple-500 pb-1 transition-all";
  const inactiveStyle = "text-gray-300 hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all pb-1 border-b-2 border-transparent";

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-[#030305]/70 backdrop-blur-xl border-b border-white/5"
    >
      <div className="flex justify-between items-center p-4 md:p-6 md:px-20 max-w-6xl mx-auto w-full">
        <Link to="/" className="text-xl font-bold tracking-tight cursor-pointer hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] hover:text-purple-400 transition-all duration-300">
          <span className="text-purple-500">⚡</span> Sachin.site
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="text-gray-400 text-sm font-mono hidden md:block">
          {time}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-3xl border-b border-white/10"
          >
            <div className="flex flex-col items-center py-6 gap-6 text-base font-medium text-gray-300">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => isActive ? "text-purple-400 font-bold" : "hover:text-purple-400 w-full text-center transition-all"}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;