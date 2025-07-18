import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/garimajain16',
      icon: <FiGithub size={20} />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/garima-jain-1b17aa301/',
      icon: <FiLinkedin size={20} />
    },
    {
      name: 'Email',
      url: 'mailto:jaingarima360@gmail.com',
      icon: <FiMail size={20} />
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="font-bold text-xl gradient-text">Garima Jain</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              React Full Stack Developer passionate about creating innovative solutions. 
              Currently seeking internship opportunities to contribute to meaningful projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="p-2 bg-white dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>jaingarima360@gmail.com</p>
              <p>+91 9990231748</p>
              <p>Delhi, India</p>
            </div>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                <FiMail size={16} />
                <span>Hire Me</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
              <span>© {currentYear} Garima Jain. Made with</span>
              <FiHeart className="text-red-500" size={16} />
              <span>and React</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;