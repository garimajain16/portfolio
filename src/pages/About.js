import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBook, FiTrendingUp, FiUsers } from 'react-icons/fi';

const About = () => {
  const achievements = [
    {
      icon: <FiAward className="text-yellow-500" size={24} />,
      title: "Smart India Hackathon Finalist 2024",
      description: "Selected among top teams nationwide"
    },
    {
      icon: <FiAward className="text-green-500" size={24} />,
      title: "Smart Delhi Ideathon 2025",
      description: "2nd Round Qualifier (State Level)"
    },
    {
      icon: <FiAward className="text-purple-500" size={24} />,
      title: "SGU Hackathon 2025",
      description: "5th Place (State Level)"
    },
    {
      icon: <FiBook className="text-blue-500" size={24} />,
      title: "IIT Madras Certified",
      description: "Social Networking Certificate"
    },
    {
      icon: <FiTrendingUp className="text-red-500" size={24} />,
      title: "Digital Marketing Certified",
      description: "Professional certification earned"
    },
    {
      icon: <FiUsers className="text-indigo-500" size={24} />,
      title: "MS Excel Certified",
      description: "Advanced proficiency certification"
    }
  ];

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
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a journey of continuous learning and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h2>
            
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm currently a 3rd year BCA student at Kasturi Ram College of Higher Education, 
                maintaining a GPA above 9.0. I have developed a strong foundation in Full Stack Development, 
                AI, and IoT, with a passion for building secure, scalable web applications.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                What sets me apart is my experience in competitive programming and hackathons. 
                Being a finalist in the Smart India Hackathon 2024, qualifying for the 2nd round of 
                Smart Delhi Ideathon 2025, and securing 5th place in SGU Hackathon 2025 has taught me 
                how to work under pressure, collaborate effectively, and create innovative solutions.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in continuous learning and have earned certifications from prestigious 
                institutions like IIT Madras in Social Networking, along with certifications in 
                Digital Marketing and MS Excel. My goal is to apply my skills through internships 
                and real-world product development.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Current Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Actively seeking internship opportunities where I can contribute to meaningful 
                projects while continuing to grow as a developer. I'm particularly interested 
                in roles that involve React, Node.js, and modern web technologies.
              </p>
            </div>
          </motion.div>

          {/* Image/Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-400 via-secondary-400 to-green-400 rounded-2xl p-1">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👩‍💻</div>
                    <h3 className="text-2xl font-bold gradient-text mb-2">Always Learning</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Passionate about technology and innovation
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary-600">9.0+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Current GPA</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-secondary-600">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Hackathons</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Achievements & Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certificate Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Featured Certificate
            </h3>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <img
                  src="/images/certificates/digital-marketing.jpg"
                  alt="Digital Marketing Certificate"
                  className="w-full h-auto rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => window.open('/images/certificates/digital-marketing.jpg', '_blank')}
                  onError={(e) => {
                    // Fallback if certificate image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="hidden text-center py-8">
                  <div className="text-4xl mb-4">📜</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Digital Marketing Certificate
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Click to view certificate
                  </p>
                </div>
                
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Digital Marketing Certification
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Professional certification in modern digital marketing strategies and analytics
                  </p>
                  <button
                    onClick={() => window.open('/images/certificates/digital-marketing.jpg', '_blank')}
                    className="mt-3 inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
                  >
                    <span>Click to view full certificate</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-6 opacity-90">
            I'm always excited to take on new challenges and contribute to innovative projects
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;