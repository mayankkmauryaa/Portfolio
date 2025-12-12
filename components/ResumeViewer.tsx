import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

export const ResumeViewer: React.FC = () => {
  // Use Google Drive Preview URL for embedding (replace /view with /preview)
  const embedUrl = profile.resumeUrl.replace(/\/view.*/, '/preview');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen pt-24 pb-12 px-6 bg-gray-50 dark:bg-slate-950"
    >
      <div className="max-w-5xl mx-auto h-full flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-accent transition-colors">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Resume</h1>
          
          <a 
            href={profile.resumeUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-accent/20"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>

        {/* PDF Embed */}
        <div className="flex-grow w-full h-[75vh] bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-slate-800 relative">
          <iframe 
            src={embedUrl}
            className="w-full h-full border-none"
            title="Resume PDF"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};