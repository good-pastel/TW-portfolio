import React, { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={
      darkMode 
        ? 'dark min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 transition-colors duration-700' 
        : 'min-h-screen bg-gray-50 text-gray-900 transition-colors duration-700'
    }>
      <header className={
        darkMode 
          ? 'text-center p-8 bg-gray-950 text-pink-300 transition-colors duration-700'
          : 'text-center p-8 bg-pink-600 text-white transition-colors duration-700'
      }>
        <h1 className='text-3xl font-bold'>Devi Yolanda</h1>
        <p className='mt-2'>Technical Writer | Documentation Specialist | Content Strategist</p>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className='mt-4 bg-white text-pink-600 px-4 py-2 rounded shadow hover:bg-pink-100 transition'
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      <main className='max-w-2xl mx-auto p-6 space-y-6'>
        <section className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors duration-700'>
          <h2 className='text-2xl font-semibold text-pink-600 dark:text-pink-400'>About Me</h2>
          <p className='mt-2'>I am a Technical Writer with a passion for transforming complex technical processes into clear, user-friendly documentation and engaging presentations.</p>
        </section>

        <section className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors duration-700'>
          <h2 className='text-2xl font-semibold text-pink-600 dark:text-pink-400'>Featured Presentation</h2>
          <p className='mt-2'>Sample endpoint report presentation showing CPU, memory, and disk utilization trends, critical applications monitoring, and detailed actionable insights for operational teams.</p>
          <a href='https://raw.githubusercontent.com/good-pastel/TW-portfolio/refs/heads/master/doc/daily_report_sample.jpg' className='inline-block mt-3 text-pink-600 dark:text-pink-300 hover:text-pink-400 transition'>
            View Sample Presentation (PDF)
          </a>
        </section>

        <section className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors duration-700'>
          <h2 className='text-2xl font-semibold text-pink-600 dark:text-pink-400'>Skills</h2>
          <ul className='list-disc list-inside mt-2 space-y-1'>
            <li>Technical Documentation & Reporting</li>
            <li>Data Interpretation for Non-Technical Stakeholders</li>
            <li>Presentation Design & Content Structuring</li>
            <li>System Monitoring Tools Interpretation</li>
            <li>Information Architecture & User Guides</li>
          </ul>
        </section>

        <section className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors duration-700'>
          <h2 className='text-2xl font-semibold text-pink-600 dark:text-pink-400'>Contact</h2>
          <p className='mt-2'>Email: devi.yolanda@email.com</p>
          <p>LinkedIn: linkedin.com/in/deviyolanda</p>
        </section>
      </main>

      <footer className={
        darkMode 
          ? 'text-center p-4 bg-gray-950 text-pink-300 mt-6 transition-colors duration-700'
          : 'text-center p-4 bg-pink-600 text-white mt-6 transition-colors duration-700'
      }>
        © 2025 Devi Yolanda - Technical Writer Portfolio
      </footer>
    </div>
  );
}
