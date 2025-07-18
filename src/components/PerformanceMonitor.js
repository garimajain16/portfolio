import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiActivity, FiClock, FiZap, FiX } from 'react-icons/fi';

const PerformanceMonitor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  useEffect(() => {
    // Performance monitoring
    const startTime = performance.now();
    
    // Measure page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, loadTime: Math.round(loadTime) }));
    });

    // Measure memory usage (if available)
    if ('memory' in performance) {
      const memoryInfo = performance.memory;
      const memoryUsage = Math.round((memoryInfo.usedJSHeapSize / memoryInfo.jsHeapSizeLimit) * 100);
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }

    // FPS counter
    let fps = 0;
    let lastTime = performance.now();
    let frameCount = 0;

    const countFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(countFPS);
    };
    
    requestAnimationFrame(countFPS);

    // Show monitor after 3 seconds (for demo purposes)
    const timer = setTimeout(() => {
      if (process.env.NODE_ENV === 'development') {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const getPerformanceColor = (value, type) => {
    switch (type) {
      case 'loadTime':
        return value < 1000 ? 'text-green-500' : value < 3000 ? 'text-yellow-500' : 'text-red-500';
      case 'fps':
        return value >= 50 ? 'text-green-500' : value >= 30 ? 'text-yellow-500' : 'text-red-500';
      case 'memory':
        return value < 50 ? 'text-green-500' : value < 80 ? 'text-yellow-500' : 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-20 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-40 min-w-[200px]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <FiActivity className="text-primary-500" size={16} />
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Performance
              </span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <FiX size={14} />
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FiClock size={12} className="text-gray-400" />
                <span className="text-xs text-gray-600 dark:text-gray-300">Load Time</span>
              </div>
              <span className={`text-xs font-mono ${getPerformanceColor(metrics.loadTime, 'loadTime')}`}>
                {metrics.loadTime}ms
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FiZap size={12} className="text-gray-400" />
                <span className="text-xs text-gray-600 dark:text-gray-300">FPS</span>
              </div>
              <span className={`text-xs font-mono ${getPerformanceColor(metrics.fps, 'fps')}`}>
                {metrics.fps}
              </span>
            </div>

            {metrics.memoryUsage > 0 && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FiActivity size={12} className="text-gray-400" />
                  <span className="text-xs text-gray-600 dark:text-gray-300">Memory</span>
                </div>
                <span className={`text-xs font-mono ${getPerformanceColor(metrics.memoryUsage, 'memory')}`}>
                  {metrics.memoryUsage}%
                </span>
              </div>
            )}
          </div>

          <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Dev Mode Only
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PerformanceMonitor;