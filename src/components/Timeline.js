import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBook, FiCode } from 'react-icons/fi';

const Timeline = () => {
  const timelineEvents = [
    {
      id: 1,
      year: '2025',
      title: 'Seeking Internship Opportunities',
      description: 'Currently looking for internship positions to apply my skills in real-world projects and contribute to innovative solutions.',
      type: 'career',
      icon: <FiCode className="text-blue-500" size={20} />,
      status: 'current'
    },
    {
      id: 2,
      year: '2025',
      title: 'Smart Delhi Ideathon & SGU Hackathon',
      description: '2nd Round Qualifier in Smart Delhi Ideathon (State Level) and secured 5th place in SGU Hackathon (State Level).',
      type: 'achievement',
      icon: <FiAward className="text-green-500" size={20} />,
      status: 'completed'
    },
    {
      id: 3,
      year: '2024',
      title: 'Smart India Hackathon Finalist',
      description: 'Selected as a finalist in Smart India Hackathon 2024, competing among thousands of teams nationwide with innovative technology solutions.',
      type: 'achievement',
      icon: <FiAward className="text-yellow-500" size={20} />,
      status: 'completed'
    },
    {
      id: 4,
      year: '2024',
      title: 'Advanced Project Development',
      description: 'Built sophisticated applications including Password Manager with AES-256 encryption, biometric authentication, and Smart Bin project with IoT integration.',
      type: 'project',
      icon: <FiCode className="text-green-500" size={20} />,
      status: 'completed'
    },
    {
      id: 5,
      year: '2023',
      title: 'Started BCA Journey',
      description: 'Began Bachelor of Computer Applications at Kasturi Ram College of Higher Education, maintaining GPA above 9.0.',
      type: 'education',
      icon: <FiBook className="text-indigo-500" size={20} />,
      status: 'completed'
    },
    {
      id: 6,
      year: '2023',
      title: 'Higher Secondary Completion',
      description: 'Completed Higher Secondary (12th Grade) from Mahavir Senior Model School.',
      type: 'education',
      icon: <FiBook className="text-purple-500" size={20} />,
      status: 'completed'
    },
    {
      id: 7,
      year: '2021',
      title: 'Secondary Education Completion',
      description: 'Completed Secondary (10th Grade) from Mahavir Senior Model School.',
      type: 'education',
      icon: <FiBook className="text-cyan-500" size={20} />,
      status: 'completed'
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            My Journey Timeline
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Key milestones and achievements in my development career
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className="relative flex items-start space-x-6"
              >
                {/* Timeline Dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${
                  event.status === 'current' 
                    ? 'bg-primary-500 border-primary-200 dark:border-primary-800' 
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                } shadow-lg`}>
                  {event.icon}
                  {event.status === 'current' && (
                    <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-20"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {event.year}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.type === 'achievement' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                          event.type === 'education' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                          event.type === 'project' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                      {event.status === 'current' && (
                        <span className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 text-sm font-medium">
                          <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                          <span>Current</span>
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
            <p className="text-lg mb-6 opacity-90">
              Looking forward to joining a dynamic team where I can contribute to innovative projects 
              and continue growing as a full-stack developer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Full-Stack Development
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Team Collaboration
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                Innovation
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;