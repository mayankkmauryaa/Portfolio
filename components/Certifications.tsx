import React, { useState } from 'react';
import { Search, Award, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/certifications';
import { motion } from 'framer-motion';

export const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Google Cloud');
  const [searchTerm, setSearchTerm] = useState('');

  const issuers = ['All', ...Array.from(new Set(certifications.map(c => c.issuer)))];

  const filteredCerts = certifications.filter(cert => {
    const matchesTab = activeTab === 'All' || cert.issuer === activeTab;
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          cert.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Certified <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Validation of skills through industry-recognized credentials.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <div className="flex space-x-2 p-1">
            {issuers.map(issuer => (
              <button
                key={issuer}
                onClick={() => setActiveTab(issuer)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                  activeTab === issuer
                    ? 'bg-accent text-white border-accent shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                    : 'bg-white dark:bg-dark-card border-gray-200 dark:border-dark-border text-slate-600 dark:text-slate-400 hover:border-accent/50'
                }`}
              >
                {issuer}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-72 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent transition-colors" size={18} />
          <input
            type="text"
            placeholder="Search certificates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card text-slate-900 dark:text-white focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.length > 0 ? (
            filteredCerts.map((cert, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-gray-200 dark:border-dark-border hover:border-accent/50 transition-all duration-300 flex flex-col hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.2)] group"
            >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent/10 rounded-xl border border-accent/20 group-hover:bg-accent/20 transition-colors">
                      <Award className="text-accent" size={28} />
                  </div>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded bg-gray-50 dark:bg-gray-800/50">
                      {cert.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                   <ShieldCheck size={16} className="text-accent" />
                   {cert.issuer}
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-5">
                      {cert.skills.slice(0, 3).map(skill => (
                      <span key={skill} className="text-xs font-medium bg-gray-100 dark:bg-gray-800/80 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md border border-transparent hover:border-accent/30 transition-colors">
                          {skill}
                      </span>
                      ))}
                      {cert.skills.length > 3 && <span className="text-xs text-gray-400 self-center">+{cert.skills.length - 3}</span>}
                  </div>
                  
                  <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full text-center py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 text-sm font-semibold shadow-sm"
                  >
                      Verify Credential
                  </a>
                </div>
            </motion.div>
            ))
        ) : (
            <div className="col-span-full text-center py-16 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-dark-card/50 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
                <Award size={48} className="mx-auto mb-4 opacity-50" />
                No certifications found matching your criteria.
            </div>
        )}
      </div>
    </div>
  );
};