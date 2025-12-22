import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { profile } from "../data/profile";

interface GithubStatsProps {
    darkMode: boolean;
}

export const GithubStats: React.FC<GithubStatsProps> = ({ darkMode }) => {
    // Choose a GitHub card theme
    const theme = darkMode ? "2077" : "github";

    const graphTheme = darkMode ? "react-dark" : "";

    const cards = [
        `https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=mayankkmauryaa&theme=${theme}&hide_border=true`,
        `https://github-profile-summary-cards.vercel.app/api/cards/stats?username=mayankkmauryaa&theme=${theme}&hide_border=true`,
        `https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=mayankkmauryaa&theme=${theme}&hide_border=true`,
        `https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=mayankkmauryaa&theme=${theme}&hide_border=true`
    ];

    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Open Source & GitHub
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    A snapshot of my contributions, streaks, and impact in the open source community.
                </p>

                <div className="mt-6 flex justify-center">
                    <a
                        href={profile.social.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                        <Github size={18} /> Visit GitHub Profile
                    </a>
                </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <img src="https://img.shields.io/github/followers/mayankkmauryaa?label=Followers&style=social" alt="GitHub Followers" className="h-7" />
                <img src="https://img.shields.io/github/stars/mayankkmauryaa?affiliations=OWNER&style=social" alt="GitHub Stars" className="h-7" />

                {/* Dynamic badge color only where possible */}
                <img
                    src={`https://img.shields.io/badge/Open%20Source-Contributor-${darkMode ? "white" : "blueviolet"}?style=flat`} alt="Open Source Contributor Badge" className="h-7"
                />

                <img src="https://komarev.com/ghpvc/?username=mayankkmauryaa&color=brightgreen" alt="Profile Views Count" className="h-7" />
                <img src="https://img.shields.io/badge/100%2B%20Contributions-🔥-orange?style=flat" alt="100+ GitHub Contributions" className="h-7" />
            </div>

            {/* Activity Graph */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 overflow-x-auto mb-10"
            >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center flex items-center justify-center gap-2">
                    <Github size={24} /> Contribution Activity
                </h3>

                <div className="min-w-[800px] flex justify-center">
                    <img
                        src={`https://github-readme-activity-graph.vercel.app/graph?username=mayankkmauryaa&theme=${graphTheme}&hide_border=true&area=true`} alt="GitHub contribution activity graph"
                        className="w-full max-w-4xl rounded-4xl"
                    />
                </div>
            </motion.div>

            {/* 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                {cards.map((src, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-xl shadow-sm overflow-hidden"
                    >
                        <img src={src} alt={`GitHub summary card ${idx + 1}`} className="w-full" />
                    </motion.div>
                ))}
            </div>

            {/* Profile Details */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl shadow-sm overflow-hidden mb-12"
            >
                <img
                    src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=mayankkmauryaa&theme=${theme}&hide_border=true`} alt="GitHub profile details card" className="w-full"
                />
            </motion.div>

        </div>
    );
};
