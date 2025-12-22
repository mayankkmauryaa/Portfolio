import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { DSA } from './components/DSA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThreeScene } from './components/ThreeScene';
import { Cursor } from './components/Cursor';
import { ResumeViewer } from './components/ResumeViewer';
import { GithubStats } from './components/GithubStats';

// Home Component housing all sections
const Home = ({ darkMode }: { darkMode: boolean }) => (
  <main className="flex flex-col gap-0">
    <section id="home">
      <Hero />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="experience" className="bg-gray-50/50 dark:bg-slate-900/30 backdrop-blur-sm">
      <Experience />
    </section>
    <section id="github">
      {/* <GithubStats /> */}
      <GithubStats darkMode={darkMode} />
    </section>
    <section id="dsa">
      <DSA darkMode={darkMode} />
    </section>
    <section id="certifications">
      <Certifications />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </main>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  // Handle Theme
  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Handle Mouse for 3D Parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position -1 to 1
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-accent selection:text-white">
      {/* Global Cursor */}
      <Cursor />

      {/* 3D Background - Persistent across sections */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ThreeScene mousePosition={mousePosition} darkMode={darkMode} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/resume" element={<ResumeViewer />} />
              <Route path="*" element={<Home darkMode={darkMode} />} />
            </Routes>
          </AnimatePresence>
        </div>

        <Footer />
      </div>

      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}