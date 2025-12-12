import { ProjectGroup } from '../types';

export const projectGroups: ProjectGroup[] = [
  {
    title: "Portfolio & AI Tools",
    key: "portfolio-tools",
    projects: [
      {
        title: "Portfolio Website",
        description: "Modern, high-performance portfolio built with React, TypeScript",
        tags: ["React.js", "TypeScript", "Tailwind"],
        liveLink: "https://mayankmaurya.netlify.app",
        image: "https://picsum.photos/seed/portfolio/600/400"
      },
      {
        title: "Portfolio Website",
        description: "Modern, high-performance portfolio built with React, TypeScript, and Three.js.",
        tags: ["React.js", "TypeScript", "Tailwind", "Three.js"],
        liveLink: "https://mayankmaurya.vercel.app",
        image: "https://picsum.photos/seed/portfolio/600/400"
      },
      {
        title: "AI Code Assistant",
        description: "Intelligent coding helper leveraging OpenAI API for real-time suggestions.",
        tags: ["React.js", "Node.js", "OpenAI API"],
        image: "https://picsum.photos/seed/ai/600/400"
      }
    ]
  },
  {
    title: "Devslane Training",
    key: "devslane",
    projects: [
      {
        title: "Devslane Training Hub",
        description: "Centralized hub for assignment submissions and tracking during Devslane training.",
        tags: ["React.js", "Next.js", "Vercel"],
        liveLink: "https://devslane-hub.vercel.app/",
        image: "https://picsum.photos/seed/devslane/600/400"
      }
    ]
  },
  {
    title: "Machine Learning",
    key: "ml",
    projects: [
      {
        title: "Customer Churn Predictor",
        description: "Analytical tool to predict customer churn using ML models and visualize data.",
        tags: ["Python", "Flask", "React.js", "Scikit-Learn"],
        liveLink: "https://ml-prediction-analysis-telco-custom.vercel.app/",
        image: "https://picsum.photos/seed/ml/600/400"
      }
    ]
  }
];