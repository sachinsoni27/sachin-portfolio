import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Stats from './components/Stats';

function App() {

  return (
    <div className="bg-black min-h-screen text-white selection:bg-purple-500 selection:text-white">
      <Navbar />
      <Hero />
      <Education />
      <TechStack />
      <Projects />
      <Stats />
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-900 mt-20">
        <p>Thank you for visiting | Sachin Soni | All Rights Reserved | 2026</p>
      </footer>
    </div>
  )
}

export default App
