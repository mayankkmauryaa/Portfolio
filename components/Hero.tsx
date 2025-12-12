import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 border border-accent/20">
            Available for Hire
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">{profile.name}</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {profile.title}
            <br />
            <span className="text-base text-slate-500 dark:text-slate-400 mt-2 block">
              {profile.tagline}
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-lg bg-accent text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-accent/25 flex items-center gap-2 group"
            >
              View Projects
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            
            <Link
              to="/resume"
              className="px-8 py-3.5 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
            >
              View Resume
              <ExternalLink size={18} />
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400"
      >
        <ArrowDown size={24} />
      </motion.div>
    </div>
  );
};