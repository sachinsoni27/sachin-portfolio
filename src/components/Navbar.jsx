import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="flex justify-between items-center p-6 md:px-12 fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="text-xl font-bold tracking-tight">
        <span className="text-purple-500">⚡</span> Sachin.site
      </div>
      <div className="text-gray-400 text-sm font-mono hidden md:block">
        {time}
      </div>
    </nav>
  );
};

export default Navbar;