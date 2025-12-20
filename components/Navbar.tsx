import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, FileText, Instagram, MessageCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { profile } from '../data/profile';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Certifications', href: '/#certifications' },
  // { name: 'GitHub', href: '/#github' },
  { name: 'Contact', href: '/#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-dark-border bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white tracking-tight">
            MM<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="flex md:order-2 space-x-2 md:space-x-4 rtl:space-x-reverse items-center">
          <Link to="/resume" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent transition-colors mr-2">
            <FileText size={18} />
            <span className="hidden lg:inline">Resume</span>
          </Link>

          <div className="hidden sm:flex items-center gap-3 border-r border-gray-300 dark:border-gray-700 pr-4 mr-1">
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent dark:hover:text-accent dark:text-gray-400 transition-colors">
              <Github size={20} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent dark:hover:text-accent dark:text-gray-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={profile.social.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent dark:hover:text-accent dark:text-gray-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href={profile.social.whatsapp} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent dark:hover:text-accent dark:text-gray-400 transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 text-gray-500 rounded-3xl hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-all"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-3xl md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'
            }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-accent md:dark:hover:bg-transparent dark:border-gray-700 transition-colors w-full text-left md:w-auto"
                >
                  {link.name}
                </button>
              </li>


            ))}
            {/* <div className="flex justify-center items-center gap-3 border-r border-gray-300 dark:border-gray-700 pr-4 mr-1">
              <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent dark:hover:text-accent dark:text-gray-400 transition-colors">
                <Github size={20} />
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent dark:hover:text-accent dark:text-gray-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={profile.social.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent dark:hover:text-accent dark:text-gray-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={profile.social.whatsapp} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent dark:hover:text-accent dark:text-gray-400 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};