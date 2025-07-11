import React, { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-gray-50 text-gray-900 min-h-screen'}>
      <header className='text-center p-8 bg-blue-800 text-white'>
        <h1 className='text-3xl font-bold'>Devi Yolanda</h1>
        <p className='mt-2'>Technical Writer | Documentation Specialist | Content Strategist</p>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className='mt-4 bg-white text-blue-800 px-4 py-2 rounded shadow hover:bg-gray-200 transition'
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>

      <main className='max-w-2xl mx-auto p-6 space-y-6'>
        <section className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow'>
          <h2 className='text-2xl font-semibold text-blue-800 dark:text-blue-300'>About Me</h2>
          <p className='mt-2'>I am a Technical Writer with a passion for transforming complex technical processes into clear, user-friendly documentation and engaging presentations.</p>
        </section>

        <section className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow'>
          <h2 className='text-2xl font-semibold text-blue-800 dark:text-blue-300'>Featured Presentation</h2>
          <p className='mt-2'>Sample endpoint report presentation showing CPU, memory, and disk utilization trends, critical applications monitoring, and detailed actionable insights for operational teams.</p>
          <a href='#' className='inline-block mt-3 text-blue-600 hover:underline'>
            View Sample Presentation (PDF)
          </a>
        </section>

        <section className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow'>
          <h2 className='text-2xl font-semibold text-blue-800 dark:text-blue-300'>Skills</h2>
          <ul className='list-disc list-inside mt-2 space-y-1'>
            <li>Technical Documentation & Reporting</li>
            <li>Data Interpretation for Non-Technical Stakeholders</li>
            <li>Presentation Design & Content Structuring</li>
            <li>System Monitoring Tools Interpretation</li>
            <li>Information Architecture & User Guides</li>
          </ul>
        </section>

        <section className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow'>
          <h2 className='text-2xl font-semibold text-blue-800 dark:text-blue-300'>Contact</h2>
          <p className='mt-2'>Email: devi.yolanda@email.com</p>
          <p>LinkedIn: linkedin.com/in/deviyolanda</p>
        </section>
      </main>

      <footer className='text-center p-4 bg-blue-800 text-white mt-6'>
        © 2025 Devi Yolanda - Technical Writer Portfolio
      </footer>
    </div>
  );
}
