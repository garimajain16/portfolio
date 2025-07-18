import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    hackathons: 0,
    gpa: 0,
    certifications: 0
  });

  const sectionRef = useRef(null);

  const stats = useMemo(() => [
    {
      key: 'projects',
      end: 3,
      label: 'Projects Built',
      suffix: '',
      icon: '💼'
    },
    {
      key: 'hackathons',
      end: 3,
      label: 'Hackathons',
      suffix: '',
      icon: '🏆'
    },
    {
      key: 'gpa',
      end: 9,
      label: 'Current GPA',
      suffix: '+',
      icon: '📚'
    },
    {
      key: 'certifications',
      end: 3,
      label: 'Certifications',
      suffix: '',
      icon: '🎓'
    }
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounters = () => {
      stats.forEach(stat => {
        let start = 0;
        const increment = stat.end / 50;
        const timer = setInterval(() => {
          start += increment;
          if (start >= stat.end) {
            setCounts(prev => ({ ...prev, [stat.key]: stat.end }));
            clearInterval(timer);
          } else {
            setCounts(prev => ({ ...prev, [stat.key]: Math.floor(start) }));
          }
        }, 40);
      });
    };

    animateCounters();
  }, [isVisible, stats]);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Journey in Numbers
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Every project, hackathon, and certification has contributed to my growth as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {counts[stat.key]}{stat.suffix}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center text-white">
            <div className="text-2xl mb-2">🏆</div>
            <h3 className="font-semibold mb-1">Smart India Hackathon</h3>
            <p className="text-white/80 text-sm">National Finalist</p>
          </div>
          <div className="text-center text-white">
            <div className="text-2xl mb-2">🎓</div>
            <h3 className="font-semibold mb-1">IIT Madras</h3>
            <p className="text-white/80 text-sm">Certified Developer</p>
          </div>
          <div className="text-center text-white">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-semibold mb-1">Digital Marketing</h3>
            <p className="text-white/80 text-sm">Certified Expert</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;