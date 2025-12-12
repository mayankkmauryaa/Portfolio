import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { experience } from '../data/experience';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          My journey through internships and professional training.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0"></div>

        <div className="space-y-12">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-dark-bg border-4 border-accent shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10 mt-6"></div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-[calc(50%-2rem)]">
                <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-gray-200 dark:border-dark-border shadow-lg hover:border-accent/50 transition-all duration-300 group hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.15)]">
                  <div className="flex flex-col gap-2 mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-accent font-medium text-sm">
                      <Briefcase size={14} />
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                    <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800/50 px-2 py-1 rounded">
                      <Calendar size={12} /> {item.start} - {item.end}
                    </span>
                    <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800/50 px-2 py-1 rounded">
                      <MapPin size={12} /> {item.location}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <ChevronRight size={16} className="text-accent flex-shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {item.certLink && (
                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <a
                        href={item.certLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white bg-accent hover:bg-accent-dark px-4 py-2 rounded-lg transition-colors shadow-lg shadow-accent/20"
                      >
                        View Certificate <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};