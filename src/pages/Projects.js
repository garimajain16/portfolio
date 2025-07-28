import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiStar,
  FiEye,
} from "react-icons/fi";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Password Manager",
      description:
        "A secure, full-stack password manager with AES-256 encryption and biometric authentication.",
      longDescription:
        "Built with React, Node.js, and MongoDB, this application features AES-256 encryption for secure password storage, WebAuthn for biometric login, AI-powered password suggestions, comprehensive analytics dashboard, and a mobile-friendly UI. Includes real-time password strength analysis and secure data management.",
      image: "/images/projects/password-manager.jpg",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "AES-256",
        "WebAuthn",
        "JWT",
      ],
      category: "fullstack",
      github: "https://github.com/garimajain16/PasswordManager",
      live: null,
      featured: true,
      stats: {
        stars: 0,
        views: 0,
      },
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website showcasing my skills and projects.",
      longDescription:
        "A professional portfolio website built with React, Tailwind CSS, and Framer Motion. Features include dark/light theme toggle, command palette for navigation, interactive animations, contact forms, and optimized performance. Fully responsive design with advanced UI components.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
      category: "frontend",
      github: "https://github.com/garimajain16/portfolio",
      live: "https://garimajain.vercel.app",
      featured: true,
      stats: {
        stars: 0,
        views: 0,
      },
    },
    {
      id: 3,
      title: "Zero Waste Delhi",
      description:
        "Environmental awareness platform promoting sustainable practices and zero waste lifestyle in Delhi.",
      longDescription:
        "A comprehensive web application focused on environmental sustainability and zero waste practices in Delhi. Features include waste management tips, recycling guides, local eco-friendly businesses directory, community engagement tools, and educational resources. Built with modern web technologies to create an engaging user experience that promotes environmental consciousness.",
      image: "/images/projects/zero-waste-delhi.png",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Netlify"],
      category: "frontend",
      github: "https://github.com/garimajain16/ZeroWasteDelhi",
      live: "https://zerowastedelhi.netlify.app",
      featured: true,
      stats: {
        stars: 0,
        views: 0,
      },
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);
  console.log('Featured projects:', featuredProjects.length, featuredProjects.map(p => p.title));

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
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in full-stack
            development and modern web technologies
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to gradient if image fails to load
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <FiCode size={64} className="text-white opacity-50" />
                  </div>
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <FiStar size={16} />
                        <span className="text-sm">{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiEye size={16} />
                        <span className="text-sm">{project.stats.views}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <FiGithub size={16} />
                      <span>View Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                      >
                        <FiExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center"
                  style={{ display: "none" }}
                >
                  <FiCode
                    size={48}
                    className="text-white opacity-50 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200"
                  >
                    <FiGithub size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors duration-200"
                  >
                    <FiExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
            <p className="text-lg mb-6 opacity-90">
              Check out my GitHub for more projects and contributions
            </p>
            <a
              href="https://github.com/garimajain16"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <FiGithub size={20} />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
