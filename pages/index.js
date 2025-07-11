import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      
      {/* Hero Section */}
      <header className="relative h-[90vh] bg-cover bg-center bg-pink-200 dark:bg-gray-800"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Devi Yolanda</h1>
          <p className="mt-2 text-lg md:text-xl">Technical Writer | Documentation Specialist</p>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-6 bg-white text-pink-600 px-4 py-2 rounded shadow hover:bg-pink-100 transition"
          >
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto p-6 space-y-10">

        {/* About */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
        >
          <h2 className="text-2xl font-semibold text-pink-600 dark:text-pink-400">About Me</h2>
          <p className="mt-2">
            I'm a Technical Writer who enjoys turning complex systems into simple guides,
            clear documentation, and engaging content for users and developers alike.
          </p>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
        >
          <h2 className="text-2xl font-semibold text-pink-600 dark:text-pink-400">Skills</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>📘 Technical Documentation & Reporting</li>
            <li>📊 Data Interpretation for Stakeholders</li>
            <li>🎨 Presentation Design</li>
            <li>🛠️ System Monitoring Tools</li>
            <li>📂 Information Architecture</li>
          </ul>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
        >
          <h2 className="text-2xl font-semibold text-pink-600 dark:text-pink-400">Contact</h2>
          <p className="mt-2">Email: <a href="mailto:deviyolanda901@gmail.com" className="underline">deviyolanda901@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/deviyool" className="underline" target="_blank">linkedin.com/in/deviyool</a></p>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 bg-pink-600 text-white dark:bg-gray-950 dark:text-pink-300 mt-6">
        &copy; 2025 Devi Yolanda - Technical Writer Portfolio
      </footer>
    </div>
  );
}