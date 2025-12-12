import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Sparkles } from 'lucide-react';
import { projectGroups } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Highlighting my work in MERN stack, Machine Learning, and AI integration with a touch of modern UI.
        </p>
      </div>

      <div className="space-y-20">
        {projectGroups.map((group, groupIdx) => (
          <div key={group.key}>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
                <Sparkles className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                {group.title}
              </h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-accent/50 to-transparent ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-border hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] flex flex-col h-full"
                >
                  {/* Image Area */}
                  <div className="h-52 bg-gray-100 dark:bg-gray-900/50 relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-accent/30 bg-gradient-to-br from-dark-bg to-dark-card">
                        <Folder size={48} className="mb-2" />
                        <span className="text-sm font-mono">No Preview</span>
                      </div>
                    )}

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex flex-col items-center gap-1 text-white hover:text-accent transition-colors transform hover:scale-110"
                        >
                          <div className="p-3 bg-white/10 rounded-full border border-white/20">
                            <ExternalLink size={24} />
                          </div>
                          <span className="text-xs font-medium">Live Demo</span>
                        </a>
                      )}
                      {project.repoLink && (
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex flex-col items-center gap-1 text-white hover:text-accent transition-colors transform hover:scale-110"
                        >
                          <div className="p-3 bg-white/10 rounded-full border border-white/20">
                            <Github size={24} />
                          </div>
                          <span className="text-xs font-medium">Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow relative z-10 bg-white dark:bg-dark-card">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-accent transition-colors line-clamp-1">
                      {project.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-accent/5 text-accent border border-accent/10">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};