import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiShield, FiTool, FiTrendingUp } from 'react-icons/fi';

const SkillsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: <FiCode size={24} />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90, description: 'Building dynamic UIs with hooks and context' },
        { name: 'JavaScript ES6+', level: 88, description: 'Modern JS features and async programming' },
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework mastery' },
        { name: 'HTML5 & CSS3', level: 95, description: 'Semantic markup and responsive design' },
        { name: 'Framer Motion', level: 85, description: 'Advanced animations and interactions' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: <FiServer size={24} />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 82, description: 'Server-side JavaScript development' },
        { name: 'Express.js', level: 80, description: 'RESTful API development' },
        { name: 'MongoDB', level: 78, description: 'NoSQL database design and queries' },
        { name: 'JWT Authentication', level: 85, description: 'Secure token-based authentication' },
        { name: 'WebSocket', level: 75, description: 'Real-time communication' }
      ]
    },
    security: {
      title: 'Security & Encryption',
      icon: <FiShield size={24} />,
      color: 'from-red-500 to-pink-500',
      skills: [
        { name: 'AES-256 Encryption', level: 80, description: 'Advanced encryption implementation' },
        { name: 'WebAuthn', level: 75, description: 'Biometric authentication systems' },
        { name: 'OAuth 2.0', level: 78, description: 'Third-party authentication' },
        { name: 'HTTPS & SSL', level: 85, description: 'Secure communication protocols' },
        { name: 'Data Protection', level: 82, description: 'Privacy and security best practices' }
      ]
    },
    tools: {
      title: 'Tools & Platforms',
      icon: <FiTool size={24} />,
      color: 'from-purple-500 to-indigo-500',
      skills: [
        { name: 'Git & GitHub', level: 90, description: 'Version control and collaboration' },
        { name: 'VS Code', level: 95, description: 'Advanced IDE usage and extensions' },
        { name: 'Postman', level: 88, description: 'API testing and documentation' },
        { name: 'Figma', level: 78, description: 'UI/UX design and prototyping' },
        { name: 'Vercel/Netlify', level: 85, description: 'Modern deployment platforms' }
      ]
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Interactive Skills Showcase
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my technical expertise across different domains
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
              style={activeCategory === key ? {
                backgroundImage: `linear-gradient(to right, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`
              } : {}}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Category Info */}
              <div>
                <div className={`inline-flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].color} text-white mb-6`}>
                  {skillCategories[activeCategory].icon}
                  <h3 className="text-xl font-bold">
                    {skillCategories[activeCategory].title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {skillCategories[activeCategory].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual Representation */}
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Circular Progress */}
                  <svg className="w-64 h-64 transform -rotate-90">
                    {skillCategories[activeCategory].skills.map((skill, index) => {
                      const radius = 100 - index * 15;
                      const circumference = 2 * Math.PI * radius;
                      const strokeDasharray = circumference;
                      const strokeDashoffset = circumference - (skill.level / 100) * circumference;
                      
                      return (
                        <motion.circle
                          key={skill.name}
                          cx="128"
                          cy="128"
                          r={radius}
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          className={`text-gradient-to-r ${skillCategories[activeCategory].color.replace('from-', 'text-').replace('to-', '').split(' ')[0]} opacity-80`}
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          initial={{ strokeDashoffset: circumference }}
                          animate={{ strokeDashoffset }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                        />
                      );
                    })}
                  </svg>
                  
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} flex items-center justify-center text-white`}>
                        {skillCategories[activeCategory].icon}
                      </div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {skillCategories[activeCategory].skills.length} Skills
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsShowcase;