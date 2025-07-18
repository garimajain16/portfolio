import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';

// Import new components
import StatsCounter from '../components/StatsCounter';
import Services from '../components/Services';
import Timeline from '../components/Timeline';
import SocialProof from '../components/SocialProof';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Garima Jain — React Full Stack Developer, Hackathon Finalist & Problem Solver.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

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
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 animated-bg opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full animate-float opacity-20"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full animate-float opacity-20" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-200 rounded-full animate-float opacity-20" style={{animationDelay: '4s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="relative inline-block">
                {/* Modern Square Frame */}
                <div className="relative w-64 h-64 mx-auto">
                  {/* Outer Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-green-500/20 rounded-3xl blur-xl"></div>
                  
                  {/* Main Frame Container */}
                  <div className="relative w-full h-full">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-green-500 rounded-2xl p-1">
                      <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl p-3">
                        {/* Photo Container */}
                        <div className="w-full h-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-inner">
                          <img
                            src="/images/profile.jpg"
                            alt="Garima Jain - React Full Stack Developer"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            onError={(e) => {
                              // Fallback to initials if image fails to load
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900" style={{display: 'none'}}>
                            <span className="text-5xl font-bold gradient-text">GJ</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg rotate-45 shadow-lg"></div>
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg -rotate-45 shadow-lg"></div>
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg -rotate-45 shadow-lg"></div>
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg rotate-45 shadow-lg"></div>

                    {/* Subtle Floating Dots */}
                    <div className="absolute top-8 -left-8 w-2 h-2 bg-primary-400 rounded-full animate-pulse opacity-60"></div>
                    <div className="absolute top-16 -right-8 w-3 h-3 bg-secondary-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-16 -left-8 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
                    <div className="absolute bottom-8 -right-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60" style={{animationDelay: '0.5s'}}></div>
                  </div>

                  {/* Tech Icons Floating Around */}
                  <div className="absolute top-4 -left-12 text-2xl animate-float opacity-70">⚛️</div>
                  <div className="absolute top-12 -right-12 text-2xl animate-float opacity-70" style={{animationDelay: '1s'}}>💻</div>
                  <div className="absolute bottom-12 -left-12 text-2xl animate-float opacity-70" style={{animationDelay: '2s'}}>🚀</div>
                  <div className="absolute bottom-4 -right-12 text-2xl animate-float opacity-70" style={{animationDelay: '1.5s'}}>⭐</div>
                </div>
              </div>
            </motion.div>

            {/* Typing Animation */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 min-h-[120px] md:min-h-[160px]"
            >
              <span className="gradient-text typing">
                {typedText}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Open to internship opportunities. Let's build the web together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link
                to="/resume"
                className="btn-hover px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold flex items-center space-x-2 hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <FiDownload />
                <span>View Resume</span>
              </Link>
              
              <Link
                to="/contact"
                className="btn-hover px-8 py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-full font-semibold flex items-center space-x-2 hover:from-secondary-600 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <FiMail />
                <span>Hire Me</span>
              </Link>
              
              <Link
                to="/projects"
                className="btn-hover px-8 py-4 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-full font-semibold hover:bg-primary-500 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                View Projects
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6 mb-12"
            >
              <a
                href="https://github.com/garimajain16"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/garima-jain-1b17aa301/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="mailto:jaingarima360@gmail.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-green-500 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <FiMail size={24} />
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="animate-bounce"
            >
              <FiArrowDown size={32} className="text-gray-400 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Social Proof Section */}
      <SocialProof />

      {/* Services Section */}
      <Services />

      {/* Timeline Section */}
      <Timeline />
    </>
  );
};

export default Home;