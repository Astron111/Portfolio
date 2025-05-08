import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import Scene3D from './components/Scene3D';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900 relative overflow-hidden">
        <Scene3D />
        
        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
            >
              <FaArrowUp />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Fixed Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg z-50 border-b border-blue-500/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.h1 
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Mohamed Nadir
              </motion.h1>
              <div className="flex gap-8">
                <Link 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm uppercase tracking-wider cursor-pointer relative group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                </Link>
                <Link 
                  to="projects" 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm uppercase tracking-wider cursor-pointer relative group"
                >
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                </Link>
                <Link 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm uppercase tracking-wider cursor-pointer relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <motion.section 
            className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative bg-gradient-to-b from-transparent via-blue-900/5 to-blue-900/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h2 
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Building beautiful, responsive, and user-friendly web applications with modern technologies and best practices.
            </motion.p>
            
            <motion.div 
              className="flex gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link 
                to="projects" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors shadow-lg hover:shadow-blue-500/20 cursor-pointer"
              >
                View Projects
              </Link>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={500}
                className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors cursor-pointer"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.section>

          {/* About Section with distinct gradient */}
          <section id="about" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-blue-900/10 pointer-events-none"></div>
            <About />
          </section>

          {/* Projects Section with distinct gradient */}
          <section id="projects" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-cyan-900/10 to-blue-900/10 pointer-events-none"></div>
            <Projects />
          </section>

          {/* Contact Section with distinct gradient */}
          <section id="contact" className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-indigo-900/10 to-transparent pointer-events-none"></div>
            <Contact />
          </section>
        </main>
      </div>
    </Router>
  );
};

export default App;
