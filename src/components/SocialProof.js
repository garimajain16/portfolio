import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';

const SocialProof = () => {
  const achievements = [
    {
      icon: <FiAward className="text-yellow-500" size={24} />,
      title: "Smart India Hackathon",
      subtitle: "National Finalist",
      description: "Selected among top teams nationwide in 2024",
      badge: "2024"
    },
    {
      icon: <FiAward className="text-green-500" size={24} />,
      title: "Smart Delhi Ideathon",
      subtitle: "2nd Round Qualifier",
      description: "Advanced to second round at state level competition",
      badge: "2025"
    },
    {
      icon: <FiAward className="text-purple-500" size={24} />,
      title: "SGU Hackathon",
      subtitle: "5th Place Winner",
      description: "Secured 5th position in state level hackathon",
      badge: "2025"
    },
    {
      icon: <FiStar className="text-blue-500" size={24} />,
      title: "IIT Madras Certified",
      subtitle: "Social Networking",
      description: "Completed advanced course from prestigious institution",
      badge: "Verified"
    },
    {
      icon: <FiTrendingUp className="text-red-500" size={24} />,
      title: "Digital Marketing",
      subtitle: "Certified Professional",
      description: "Proven expertise in modern marketing strategies",
      badge: "Certified"
    },
    {
      icon: <FiUsers className="text-indigo-500" size={24} />,
      title: "MS Excel Expert",
      subtitle: "Advanced Proficiency",
      description: "Certified in advanced Excel for data management",
      badge: "Certified"
    }
  ];

  const stats = [
    { label: "Hackathons Participated", value: "3", color: "text-yellow-500" },
    { label: "Projects Built", value: "3", color: "text-green-500" },
    { label: "Certifications Earned", value: "3", color: "text-blue-500" },
    { label: "Current GPA", value: "9.0+", color: "text-purple-500" }
  ];

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
            Trusted & Recognized
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My work and achievements have been recognized by leading institutions and the developer community
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full transform translate-x-8 -translate-y-8"></div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-xs font-medium">
                  {achievement.badge}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {achievement.title}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                      {achievement.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Me?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Results-Driven
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Focused on delivering high-quality solutions that meet your goals
                </p>
              </div>
              
              <div>
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Fast Delivery
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Efficient development process with regular updates and communication
                </p>
              </div>
              
              <div>
                <div className="text-2xl mb-2">🔒</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Security First
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Implementing best practices for secure and reliable applications
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;