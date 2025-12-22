import React from 'react';
import { motion } from 'framer-motion';

const SkillRow = ({ skills, reverse = false }: { skills: string[]; reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden w-full py-4 group">
      <div
        className={`flex gap-8 px-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          } hover:[animation-play-state:paused]`}
      >
        {/* Double the list to create seamless loop */}
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className="shrink-0 relative group/icon transition-transform hover:scale-110 duration-300"
          >
            <img
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={skill}
              className="h-16 w-16 md:h-20 md:w-20 drop-shadow-[0_0_10px_rgba(168,85,247,0.3)] group-hover/icon:drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  // Categorized skills for rows
  const row1 = ['java', 'python', 'cpp', 'c', 'js', 'ts', 'html', 'css', 'kotlin', 'r'];
  const row2 = ['react', 'nextjs', 'redux', 'tailwind', 'threejs', 'bootstrap', 'figma', 'materialui'];
  const row3 = ['nodejs', 'express', 'mongodb', 'mysql', 'postgres', 'firebase', 'git', 'github', 'appwrite'];
  const row4 = ['vscode', 'postman', 'vercel', 'netlify', 'docker', 'linux', 'bash', 'aws', 'gcp'];

  return (
    <div className="py-24 px-0 max-w-[100vw] overflow-hidden">
      <div className="text-center mb-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          <span className="text-slate-900 dark:text-white">Technical </span>
          <span className="text-gradient">Skills</span>
        </motion.h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A continuous stream of technologies I use to build scalable, high-performance applications.
        </p>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-gray-50 dark:from-dark-bg to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-gray-50 dark:from-dark-bg to-transparent z-20 pointer-events-none"></div>

        <SkillRow skills={row1} />
        <SkillRow skills={row2} reverse={true} />
        <SkillRow skills={row3} />
        <SkillRow skills={row4} reverse={true} />
      </div>
    </div>
  );
};