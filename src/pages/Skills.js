import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiServer, 
  FiShield, 
  FiLayers
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiCode className="text-blue-500" size={32} />,
      color: "from-blue-400 to-blue-600",
      skills: [
        { name: "HTML5", level: 90, color: "bg-orange-500" },
        { name: "CSS3", level: 85, color: "bg-blue-500" },
        { name: "JavaScript", level: 80, color: "bg-yellow-500" },
        { name: "React", level: 75, color: "bg-cyan-500" },
        { name: "Tailwind CSS", level: 80, color: "bg-teal-500" }
      ]
    },
    {
      title: "Backend & Database",
      icon: <FiServer className="text-green-500" size={32} />,
      color: "from-green-400 to-green-600",
      skills: [
        { name: "Node.js", level: 70, color: "bg-green-500" },
        { name: "Express.js", level: 65, color: "bg-gray-600" },
        { name: "MongoDB", level: 70, color: "bg-green-600" }
      ]
    },
    {
      title: "Programming Languages",
      icon: <FiCode className="text-purple-500" size={32} />,
      color: "from-purple-400 to-purple-600",
      skills: [
        { name: "Python", level: 60, color: "bg-blue-500" },
        { name: "C", level: 70, color: "bg-gray-600" },
        { name: "C++", level: 70, color: "bg-blue-600" },
        { name: "Java", level: 65, color: "bg-red-500" }
      ]
    },
    {
      title: "Tools & Security",
      icon: <FiShield className="text-red-500" size={32} />,
      color: "from-red-400 to-red-600",
      skills: [
        { name: "GitHub", level: 85, color: "bg-gray-800" },
        { name: "VS Code", level: 90, color: "bg-blue-600" },
        { name: "Replit", level: 80, color: "bg-orange-500" },
        { name: "Postman", level: 75, color: "bg-orange-600" },
        { name: "JWT", level: 70, color: "bg-indigo-500" },
        { name: "AES-256", level: 65, color: "bg-red-500" },
        { name: "WebAuthn", level: 60, color: "bg-yellow-600" }
      ]
    },
    {
      title: "Design & Productivity",
      icon: <FiLayers className="text-indigo-500" size={32} />,
      color: "from-indigo-400 to-indigo-600",
      skills: [
        { name: "Figma", level: 75, color: "bg-purple-500" },
        { name: "Canva", level: 85, color: "bg-cyan-500" },
        { name: "Photoshop", level: 70, color: "bg-blue-600" },
        { name: "MS Office Suite", level: 90, color: "bg-blue-500" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className={`h-2 rounded-full ${skill.color} relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly updating my skills 
              and learning new technologies to stay current with industry trends and best practices.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {["Next.js", "TypeScript", "Docker", "AWS", "React Native"].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md"
                >
                  Currently Learning: {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;