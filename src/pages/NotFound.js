import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full animate-float opacity-20"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full animate-float opacity-20" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-200 rounded-full animate-float opacity-20" style={{animationDelay: '4s'}}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-9xl md:text-[12rem] font-bold gradient-text leading-none">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off into the digital void. 
              Don't worry, even the best developers encounter 404s!
            </p>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-full flex items-center justify-center">
                <div className="text-8xl">🔍</div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">❓</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FiHome size={20} />
              <span>Go Home</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 border-2 border-primary-500 text-primary-500 dark:text-primary-400 px-8 py-4 rounded-full font-semibold hover:bg-primary-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <FiArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Maybe you were looking for:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                to="/projects"
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
              >
                <div className="text-2xl mb-2">💼</div>
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  My Projects
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Check out my latest work
                </p>
              </Link>
              
              <Link
                to="/about"
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
              >
                <div className="text-2xl mb-2">👩‍💻</div>
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  About Me
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Learn about my journey
                </p>
              </Link>
              
              <Link
                to="/contact"
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 group"
              >
                <div className="text-2xl mb-2">📧</div>
                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  Contact
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Let's work together
                </p>
              </Link>
            </div>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 text-gray-500 dark:text-gray-400"
          >
            <p className="text-sm">
              Fun fact: HTTP 404 errors were named after room 404 at CERN, where the World Wide Web was born! 🌐
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;