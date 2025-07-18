import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiCommand, FiHome, FiUser, FiCode, FiBriefcase, FiFileText, FiMail } from 'react-icons/fi';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const commands = [
    {
      id: 'home',
      title: 'Go to Home',
      subtitle: 'Navigate to homepage',
      icon: <FiHome size={16} />,
      action: () => navigate('/'),
      keywords: ['home', 'main', 'start']
    },
    {
      id: 'about',
      title: 'About Me',
      subtitle: 'Learn about my journey',
      icon: <FiUser size={16} />,
      action: () => navigate('/about'),
      keywords: ['about', 'bio', 'story', 'journey']
    },
    {
      id: 'skills',
      title: 'Skills & Technologies',
      subtitle: 'View my technical skills',
      icon: <FiCode size={16} />,
      action: () => navigate('/skills'),
      keywords: ['skills', 'tech', 'technologies', 'abilities']
    },
    {
      id: 'projects',
      title: 'My Projects',
      subtitle: 'Explore my work',
      icon: <FiBriefcase size={16} />,
      action: () => navigate('/projects'),
      keywords: ['projects', 'work', 'portfolio', 'code']
    },
    {
      id: 'resume',
      title: 'Resume',
      subtitle: 'View and download my resume',
      icon: <FiFileText size={16} />,
      action: () => navigate('/resume'),
      keywords: ['resume', 'cv', 'download', 'experience']
    },
    {
      id: 'contact',
      title: 'Contact Me',
      subtitle: 'Get in touch',
      icon: <FiMail size={16} />,
      action: () => navigate('/contact'),
      keywords: ['contact', 'email', 'hire', 'message']
    },
    {
      id: 'github',
      title: 'GitHub Profile',
      subtitle: 'View my GitHub',
      icon: <FiCode size={16} />,
      action: () => window.open('https://github.com/garimajain16', '_blank'),
      keywords: ['github', 'code', 'repositories', 'git']
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Profile',
      subtitle: 'Connect on LinkedIn',
      icon: <FiUser size={16} />,
      action: () => window.open('https://www.linkedin.com/in/garima-jain-1b17aa301/', '_blank'),
      keywords: ['linkedin', 'professional', 'network', 'connect']
    }
  ];

  const filteredCommands = commands.filter(command =>
    command.title.toLowerCase().includes(query.toLowerCase()) ||
    command.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    command.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCommandSelect = (command) => {
    command.action();
    setIsOpen(false);
    setQuery('');
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-colors duration-200 z-40"
        title="Open Command Palette (Ctrl+K)"
      >
        <FiCommand size={20} />
      </button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <FiSearch className="text-gray-400 mr-3" size={20} />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 outline-none text-lg"
                  autoFocus
                />
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">Esc</kbd>
                  <span>to close</span>
                </div>
              </div>

              {/* Commands List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.length > 0 ? (
                  <div className="p-2">
                    {filteredCommands.map((command, index) => (
                      <motion.button
                        key={command.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleCommandSelect(command)}
                        className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-left group"
                      >
                        <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors duration-200">
                          {command.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                            {command.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                            {command.subtitle}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                    <FiSearch size={48} className="mx-auto mb-4 opacity-50" />
                    <p>No commands found for "{query}"</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded">↑↓</kbd>
                      <span>to navigate</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded">Enter</kbd>
                      <span>to select</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded">Ctrl</kbd>
                    <span>+</span>
                    <kbd className="px-2 py-1 bg-white dark:bg-gray-700 rounded">K</kbd>
                    <span>to open</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;