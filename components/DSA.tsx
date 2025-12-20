import React from 'react';
import { ExternalLink, Trophy, Flame, Code2, LineChart } from 'lucide-react';
import { profile } from '../data/profile';

interface Props {
  darkMode: boolean;
}
export const DSA: React.FC<Props> = ({ darkMode }) => {
  const leetcodeTheme = darkMode ? 'transparent' : 'unicorn';
  const leetcodeHeatmapUrl = `https://leetcard.jacoblin.cool/mayankkmauryaa?ext=heatmap&theme=${leetcodeTheme}&v=${darkMode ? 'dark' : 'light'}`;

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Stats Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            DSA & <span className="text-gradient">Problem Solving</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
            Consistency is key. I maintain a strong streak on LeetCode, focusing on Java for core data structures and Python for rapid scripting. My problem-solving journey is visualized below.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-accent">
                <Code2 size={24} />
                <span className="font-bold">Languages</span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">Java & Python</p>
              <p className="text-sm text-slate-500 mt-1">446+ Java Solved</p>
            </div>

            <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-orange-500">
                <Flame size={24} />
                <span className="font-bold">Max Streak</span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">76 Days</p>
              <p className="text-sm text-slate-500 mt-1">Consistent effort</p>
            </div>

            <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm hover:border-yellow-500/50 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-yellow-500">
                <Trophy size={24} />
                <span className="font-bold">Rating</span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">1583</p>
              <p className="text-sm text-slate-500 mt-1">Top Percentile</p>
            </div>

            <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-gray-200 dark:border-dark-border shadow-sm hover:border-green-500/50 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-green-500">
                <LineChart size={24} />
                <span className="font-bold">Total</span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">1100+</p>
              <p className="text-sm text-slate-500 mt-1">Submissions</p>
            </div>
          </div>

        </div>

        {/* Visuals Column */}
        <div className="flex flex-col gap-6">
          {/* LeetCode Heatmap */}
          <div className="relative group">
            <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden">
              <img
                src={leetcodeHeatmapUrl}
                alt="LeetCode Heatmap"
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-xl transition-opacity duration-300"
              />
            </div>
          </div>

          <div className="flex gap-4 flex-wrap">

            <a
              href={profile.social.codolio}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-accent/20"
            >
              View Codolio Profile <ExternalLink size={18} />
            </a>
            <a
              href={profile.social.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-accent/20"
            >
              View LeetCode Profile <ExternalLink size={18} />
            </a>
            <a
              href={profile.social.codeforces}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-accent/20"
            >
              View Codeforces Profile <ExternalLink size={18} />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};