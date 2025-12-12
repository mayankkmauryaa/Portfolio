import React from 'react';
import { profile } from '../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 text-center relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#home" className="text-slate-600 dark:text-slate-300 hover:text-accent transition-colors">Home</a>
          <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-accent transition-colors">Projects</a>
          <a href={profile.social.github} className="text-slate-600 dark:text-slate-300 hover:text-accent transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};