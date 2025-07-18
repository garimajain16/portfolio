import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiSmartphone, 
  FiDatabase, 
  FiShield, 
  FiTrendingUp, 
  FiSettings,
  FiArrowRight,
  FiCheck
} from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FiCode className="text-blue-500" size={32} />,
      title: 'Full-Stack Web Development',
      description: 'Complete web application development using React, Node.js, and modern technologies.',
      features: [
        'Responsive React Applications',
        'RESTful API Development',
        'Database Design & Integration',
        'Authentication & Security'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      pricing: 'Project-based',
      timeline: '2-4 weeks'
    },
    {
      id: 2,
      icon: <FiSmartphone className="text-green-500" size={32} />,
      title: 'Frontend Development',
      description: 'Modern, responsive, and interactive user interfaces that provide excellent user experience.',
      features: [
        'Responsive Design',
        'Interactive UI Components',
        'Performance Optimization',
        'Cross-browser Compatibility'
      ],
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5'],
      pricing: 'Project-based',
      timeline: '1-2 weeks'
    },
    {
      id: 3,
      icon: <FiDatabase className="text-purple-500" size={32} />,
      title: 'Backend API Development',
      description: 'Robust and scalable backend services with secure APIs and database integration.',
      features: [
        'RESTful API Design',
        'Database Architecture',
        'Authentication Systems',
        'Real-time Features'
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      pricing: 'Project-based',
      timeline: '1-3 weeks'
    },
    {
      id: 4,
      icon: <FiTrendingUp className="text-yellow-500" size={32} />,
      title: 'Website Optimization',
      description: 'Performance optimization, SEO, and analytics integration for better user experience.',
      features: [
        'Performance Optimization',
        'SEO Implementation',
        'Analytics Integration',
        'Mobile Optimization'
      ],
      technologies: ['Google Analytics', 'SEO Tools', 'Performance Tools'],
      pricing: 'Consultation',
      timeline: '3-5 days'
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Services I Offer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with modern technologies and best practices
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <FiCheck className="text-green-500 flex-shrink-0" size={16} />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing & Timeline */}
              <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Starting Price</p>
                  <p className="font-bold text-gray-900 dark:text-white">{service.pricing}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Timeline</p>
                  <p className="font-bold text-gray-900 dark:text-white">{service.timeline}</p>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={`mailto:jaingarima360@gmail.com?subject=${encodeURIComponent(service.title + ' - Project Inquiry')}&body=${encodeURIComponent(`Hi Garima, I'm interested in your ${service.title} service. Let's discuss my project requirements.`)}`}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-secondary-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span>Get Started</span>
                <FiArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            My Development Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your requirements and project goals'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating detailed project roadmap and timeline'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building your solution with regular updates'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Testing, deployment, and ongoing support'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss your requirements and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:jaingarima360@gmail.com?subject=Project Inquiry&body=Hi Garima, I'm interested in discussing a project with you."
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
              >
                Get Free Quote
              </a>
              <a
                href="/projects"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300 inline-block"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;