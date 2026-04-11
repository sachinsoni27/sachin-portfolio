import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="relative bg-[#030305] min-h-screen text-gray-200 selection:bg-purple-500/40 selection:text-white font-sans overflow-x-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 font-sans flex flex-col min-h-screen">
        <Navbar />
        <ScrollToTop />
        
        <main className="flex-grow pt-20 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-grow flex flex-col items-center justify-center w-full"
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Hero />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<TechStack />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>
        
        <footer className="py-12 flex flex-col items-center border-t border-white/5 bg-black/40 backdrop-blur-md">
          <p className="text-gray-400 text-sm font-medium tracking-wide">
            Crafted with ❤️ by Sachin Soni
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
