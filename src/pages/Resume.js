import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Garima_Jain_Resume.pdf';
    link.download = 'Garima_Jain_Resume.pdf';
    
    // Check if file exists before attempting download
    fetch('/Garima_Jain_Resume.pdf')
      .then(response => {
        if (response.ok) {
          link.click();
        } else {
          // If PDF doesn't exist, show message or print page
          alert('Resume PDF not found. You can print this page as PDF using Ctrl+P');
          window.print();
        }
      })
      .catch(() => {
        // Fallback: print the current page
        alert('Resume PDF not found. You can print this page as PDF using Ctrl+P');
        window.print();
      });
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Resume
          </h1>
          <button
            onClick={handleDownload}
            className="inline-flex items-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors duration-300 shadow-lg"
          >
            <FiDownload size={20} />
            <span>Download PDF</span>
          </button>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12"
        >
          {/* Header Section */}
          <div className="text-center mb-8 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Garima Jain
            </h1>
            <p className="text-xl text-primary-600 dark:text-primary-400 mb-4">
              React Full Stack Developer
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <FiMail size={16} />
                <span>jaingarima360@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone size={16} />
                <span>+91 9990231748</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMapPin size={16} />
                <span>Delhi, India</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/garima-jain-1b17aa301/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
              >
                <FiLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/garimajain16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FiGithub size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Objective
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Motivated BCA 3rd Year student with a strong foundation in Full Stack Development, AI, and IoT. 
              Passionate about building secure, scalable web apps. Eager to apply my skills through internships and 
              real-world product development.
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Kasturi Ram College of Higher Education • 2023 - 2026 (Expected)
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Current GPA: Above 9.0/10 • Relevant Coursework: Full Stack Development, Data Structures, Database Management
                </p>
              </div>
              <div className="border-l-4 border-secondary-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Higher Secondary (12th Grade)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Mahavir Senior Model School • Year of Completion: 2023
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Secondary (10th Grade)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Mahavir Senior Model School • Year of Completion: 2021
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h3>
                <p className="text-gray-600 dark:text-gray-300">HTML5, CSS3, JavaScript, React, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h3>
                <p className="text-gray-600 dark:text-gray-300">Node.js, Express.js</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Database</h3>
                <p className="text-gray-600 dark:text-gray-300">MongoDB</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Programming Languages</h3>
                <p className="text-gray-600 dark:text-gray-300">Python (Basic), C, C++, Java</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tools & Platforms</h3>
                <p className="text-gray-600 dark:text-gray-300">GitHub, VS Code, Replit, Postman</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Security</h3>
                <p className="text-gray-600 dark:text-gray-300">JWT, AES-256, WebAuthn</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Software & Design</h3>
                <p className="text-gray-600 dark:text-gray-300">Canva, Figma, Photoshop, Microsoft Tools</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Design & Productivity</h3>
                <p className="text-gray-600 dark:text-gray-300">Figma, Canva, MS Office Suite</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Key Projects
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Password Manager AI
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  React, Node.js, MongoDB, AES-256, WebAuthn
                </p>
                <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>Developed secure password management system with AES-256 encryption</li>
                  <li>Implemented WebAuthn for biometric authentication</li>
                  <li>Created AI-powered password strength analyzer and generator</li>
                  <li>Built comprehensive analytics dashboard for password security insights</li>
                </ul>
              </div>

              <div className="border-l-4 border-secondary-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Smart Bin Project
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  IoT Integration, Gamification Features, Real-time Data
                </p>
                <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>Conceptualized and developed a Smart Bin project with IoT integration</li>
                  <li>Implemented gamification features to encourage proper waste disposal</li>
                  <li>Created real-time data monitoring and analytics system</li>
                  <li>Designed user-friendly interface for waste management</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Zero Waste Delhi
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  React, JavaScript, CSS3, HTML5, Netlify
                </p>
                <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>Developed environmental awareness platform promoting sustainable practices</li>
                  <li>Created comprehensive waste management tips and recycling guides</li>
                  <li>Built local eco-friendly businesses directory with community features</li>
                  <li>Implemented responsive design for optimal user experience across devices</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Visual Graphics Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Figma, Canva, Photoshop, Design Tools
                </p>
                <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>Designed and developed visual graphics for various projects</li>
                  <li>Created user interface designs and prototypes</li>
                  <li>Developed marketing materials and digital assets</li>
                  <li>Collaborated on design projects using modern design tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Achievements & Certifications
            </h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Finalist in Smart India Hackathon (SIH) 2024
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Selected among top teams nationwide for innovative technology solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    2nd Round Qualifier in Smart Delhi Ideathon (SDI) 2025
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    State Level competition - Advanced to second round
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    5th Place, SGU Hackathon 2025
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    State level hackathon - Secured 5th position
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Certificate in Social Networking from IIT Madras
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Completed advanced course in social networking and digital communication
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Certificate in Digital Marketing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Certified in modern digital marketing strategies and analytics
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Certificate in MS Excel
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Advanced proficiency in Microsoft Excel for data analysis and management
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Strengths and Interests */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Strengths and Interests
            </h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Strong Leadership Capabilities
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Experience representing teams at competitive platforms with excellent interpersonal communication
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Excellent Communication Skills
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Confident, polite, and adaptable personality with strong collaborative abilities
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Reliable and Self-Driven
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Highly adaptable in collaborative environments with deep interest in full stack development
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Languages
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">English</h3>
                <p className="text-gray-600 dark:text-gray-300">Fluent</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Hindi</h3>
                <p className="text-gray-600 dark:text-gray-300">Native</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">[Regional Language]</h3>
                <p className="text-gray-600 dark:text-gray-300">Conversational</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;