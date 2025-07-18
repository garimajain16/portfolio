import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    {
      name: 'React',
      category: 'Frontend',
      level: 90,
      color: '#61DAFB',
      description: 'Building dynamic and interactive user interfaces',
      projects: ['Password Manager AI', 'Smart IoT Dashboard', 'E-commerce Platform']
    },
    {
      name: 'Node.js',
      category: 'Backend',
      level: 85,
      color: '#339933',
      description: 'Server-side JavaScript development and API creation',
      projects: ['Password Manager API', 'Task Management System', 'IoT Data Processing']
    },
    {
      name: 'MongoDB',
      category: 'Database',
      level: 80,
      color: '#47A248',
      description: 'NoSQL database design and optimization',
      projects: ['User Management System', 'Analytics Dashboard', 'Content Management']
    },
    {
      name: 'JavaScript',
      category: 'Language',
      level: 88,
      color: '#F7DF1E',
      description: 'Modern ES6+ features and asynchronous programming',
      projects: ['Interactive Web Apps', 'API Integrations', 'Real-time Features']
    },
    {
      name: 'Tailwind CSS',
      category: 'Styling',
      level: 92,
      color: '#06B6D4',
      description: 'Utility-first CSS framework for rapid UI development',
      projects: ['Responsive Designs', 'Component Libraries', 'Design Systems']
    },
    {
      name: 'Express.js',
      category: 'Backend',
      level: 82,
      color: '#000000',
      description: 'Fast and minimalist web framework for Node.js',
      projects: ['REST APIs', 'Authentication Systems', 'Middleware Development']
    },
    {
      name: 'JWT',
      category: 'Security',
      level: 85,
      color: '#000000',
      description: 'JSON Web Token implementation for secure authentication',
      projects: ['User Authentication', 'API Security', 'Session Management']
    },
    {
      name: 'WebAuthn',
      category: 'Security',
      level: 75,
      color: '#FF6B35',
      description: 'Biometric authentication and passwordless login',
      projects: ['Password Manager', 'Secure Login Systems', 'Multi-factor Auth']
    },
    {
      name: 'Git',
      category: 'Tools',
      level: 90,
      color: '#F05032',
      description: 'Version control and collaborative development',
      projects: ['All Projects', 'Team Collaboration', 'Code Management']
    },
    {
      name: 'Figma',
      category: 'Design',
      level: 78,
      color: '#F24E1E',
      description: 'UI/UX design and prototyping',
      projects: ['Design Systems', 'Wireframes', 'User Interface Design']
    },
    {
      name: 'Firebase',
      category: 'Backend',
      level: 75,
      color: '#FFCA28',
      description: 'Backend-as-a-Service for rapid development',
      projects: ['Real-time Apps', 'Authentication', 'Cloud Storage']
    },
    {
      name: 'Postman',
      category: 'Tools',
      level: 88,
      color: '#FF6C37',
      description: 'API development and testing',
      projects: ['API Testing', 'Documentation', 'Integration Testing']
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Security', 'Tools', 'Design'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTechnologies = selectedCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Technology Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              onHoverStart={() => setHoveredTech(tech)}
              onHoverEnd={() => setHoveredTech(null)}
              className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* Technology Icon/Name */}
              <div className="text-center mb-4">
                <div 
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tech.category}
                </p>
              </div>

              {/* Skill Level */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span>Proficiency</span>
                  <span>{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{ backgroundColor: tech.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              {/* Hover Details */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: hoveredTech?.name === tech.name ? 1 : 0,
                  height: hoveredTech?.name === tech.name ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {tech.description}
                  </p>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Used in:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {tech.projects.slice(0, 2).map((project, projectIndex) => (
                        <span
                          key={projectIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {project}
                        </span>
                      ))}
                      {tech.projects.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                          +{tech.projects.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Currently Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always expanding my skill set with new technologies and frameworks
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Next.js', 'TypeScript', 'Docker', 'AWS', 'GraphQL', 'React Native'].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;