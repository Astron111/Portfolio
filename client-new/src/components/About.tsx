import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaCode, FaLaptopCode, FaBrain, FaCalculator } from 'react-icons/fa6';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: IconType;
  delay?: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon: Icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-gray-700/30 hover:border-blue-500/30 transition-colors"
  >
    <div className="flex items-center gap-3 text-blue-400">
      <Icon className="text-2xl" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: delay + 0.1 + index * 0.05 }}
          className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm font-medium"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const About: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: FaCode,
      skills: ["TypeScript", "JavaScript", "React", "HTML", "CSS"],
      delay: 0.8
    },
    {
      title: "Software Development",
      icon: FaLaptopCode,
      skills: ["Object-oriented programming", "Algorithms", "Data structures", "Recursion", "Problem solving"],
      delay: 0.9
    },
    {
      title: "Web Development",
      icon: FaCode,
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
      delay: 1.0
    },
    {
      title: "Technical Foundations",
      icon: FaCalculator,
      skills: ["Mathematics", "Physics", "Computational Methods", "Mathematical Reasoning"],
      delay: 1.1
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 py-16 relative"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Photo and Introduction Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img
                  src="/profile.jpg"
                  alt="Mohamed Nadir Saidi"
                  className="absolute inset-2 rounded-full object-cover shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Mohamed Nadir Saidi
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-400">
                Software Engineer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I am a dedicated and intellectually curious software engineering student with a passion for mastering technical foundations and exploring the deeper principles behind technology and science. My journey has shaped me into a resilient, adaptable, and self-motivated learner who thrives on challenges and continuously seeks growth.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I believe that knowledge, discipline, and curiosity are key to making a meaningful impact. I am eager to apply my skills, engage with like-minded thinkers, and contribute to projects that challenge both my technical abilities and my capacity for innovation.
            </motion.p>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 gap-6"
          >
            {skillCategories.map((category) => (
              <SkillCategory key={category.title} {...category} />
            ))}

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 space-y-4"
            >
              <div className="flex items-center gap-3 text-blue-400">
                <FaBrain className="text-2xl" />
                <h3 className="text-xl font-semibold">Soft Skills</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Resilience and adaptability in challenging situations</li>
                <li>Strong self-motivation and continuous learning mindset</li>
                <li>Critical thinking and analytical problem solving</li>
                <li>Effective collaboration and communication</li>
                <li>Clean code practices and version control</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Add subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-blue-500/5 blur-3xl transform rotate-12 opacity-50"></div>
      </div>
    </motion.section>
  );
};

export default About; 