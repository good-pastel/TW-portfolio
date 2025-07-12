import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => setShowTopBtn(window.scrollY > 300);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={darkMode
      ? 'dark min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 transition-colors duration-700'
      : 'min-h-screen bg-gray-50 text-gray-900 transition-colors duration-700'
    }>

      {/* HERO */}
      <header className={relative h-[90vh] bg-cover bg-center transition-colors duration-700 ${darkMode ? 'bg-gray-900' : 'bg-pink-200'}}
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair">Devi Yolanda</h1>
          <p className="mt-2 text-lg md:text-xl font-playfair">
            Technical Writer | Documentation Specialist | Content Strategist
          </p>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-6 bg-white text-pink-600 px-4 py-2 rounded shadow hover:bg-pink-100 transition"
          >
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </header>

      <main className='max-w-2xl mx-auto p-6 space-y-6'>

        {/* ABOUT */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow overflow-hidden"
        >
          <h2 className="text-2xl font-semibold text-pink-600 dark:text-pink-400">About Me</h2>
          <p className="mt-2">
            Hello, I'm Devi. A meticulous and detail-oriented Technical Writer with a passion for transforming complex technical processes into clear, user-friendly documentation and engaging presentations.
          </p>
        </motion.section>

        {/* FEATURED */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow'
        >
          <h2 className='text-2xl font-semibold text-pink-600 dark:text-pink-400'>Featured Presentation</h2>
          <p className='mt-2'>
            Sample endpoint report showing CPU, memory, and disk trends, critical applications monitoring, and actionable insights.
          </p>
          <a
            href='https://raw.githubusercontent.com/good-pastel/TW-portfolio/refs/heads/master/doc/daily_report_sample.jpg'
            className='inline-block mt-3 text-pink-600 dark:text-pink-300 hover:text-pink-400 transition'
          >
            View Sample Presentation (PDF)
          </a>
        </motion.section>

        {/* WAVE */}
        <div className="overflow-hidden -mt-1">
          <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
            <path
              fill={darkMode ? "#1f2937" : "#f472b6"}
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>

        {/* SKILLS */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow'
        >
          <h2 className='text-2xl font-semibold text-pink-600 dark:text-pink-400'>Skills</h2>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-800 dark:text-gray-200">
            <li>📘 Technical Documentation & Reporting</li>
            <li>📊 Data Interpretation for Stakeholders</li>
            <li>🎨 Presentation Design</li>
            <li>🛠️ System Monitoring Tools</li>
            <li>📂 Information Architecture</li>
          </ul>
        </motion.section>

            {/* CONTACT */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow'
>
  <h2 className='text-2xl font-semibold text-pink-600 dark:text-pink-400'>Contact</h2>
  <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">

    {/* Email */}
    <a
      href="mailto:deviyolanda901@gmail.com"
      className="flex items-center gap-2 hover:text-pink-500 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-pink-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      deviyolanda901@gmail.com
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/in/deviyool"
      className="flex items-center gap-2 hover:text-pink-500 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-pink-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56v13H.22zM7.58 8h4.36v1.78h.06c.61-1.17..." />
      </svg>
      linkedin.com/in/deviyool
    </a>

  </div>
</motion.section>
      </main>

      {/* SCROLL TO TOP */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition"
        >
          ↑
        </button>
      )}

      <footer className="text-center p-4 bg-pink-600 text-white dark:bg-gray-950 dark:text-pink-300 mt-6">
        &copy; 2025 Devi Yolanda - Technical Writer Portfolio
      </footer>
    </div>
  );
}
