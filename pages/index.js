import React, { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={
      darkMode 
        ? 'dark min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 transition-colors duration-700' 
        : 'min-h-screen bg-gray-50 text-gray-900 transition-colors duration-700'
    }>
      {/* HERO */}
      <header
        className={`relative h-[90vh] bg-cover bg-center transition-colors duration-700 ${
          darkMode ? 'bg-gray-900' : 'bg-pink-200'
        }`}
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
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
        {/* ABOUT ME */}
        <section className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors duration-700 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" fill="none">
              <defs>
                <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotPattern)" className="text-pink-200 dark:text-gray-700" />
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-pink-600 dark:text-pink-400">About Me</h2>
            <p className="mt-2">
              I am a Technical Writer with a passion for transforming complex technical processes into clear, user-friendly documentation and engaging presentations.
            </p>
          </div>
        </section>

        {/* FEATURED PRESENTATION */}
        <section className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors duration-700'>
          <h2 className='text-2xl font-semibold text-pink-600 dark:text-pink-400'>Featured Presentation</h2>
          <p className='mt-2'>
            Sample endpoint report presentation showing CPU, memory, and disk utilization trends, critical applications monitoring, and detailed actionable insights for operational teams.
          </p>
          <a href='https://raw.githubusercontent.com/good-pastel/TW-portfolio/refs/heads/master/doc/daily_report_sample.jpg' className='inline-block mt-3 text-pink-600 dark:text-pink-300 hover:text-pink-400 transition'>
            View Sample Presentation (PDF)
          </a>
        </section>

        {/* WAVE SEPARATOR */}
        <div className="overflow-hidden -mt-1">
          <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none">
            <path
              fill={darkMode ? "#1f2937" : "#f472b6"}
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,117.3C1248,128,1344,128,1392,128L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>

        {/* SKILLS */}
        <section className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors duration-700'>
          <h2 className='text-2xl font-semibold text-pink-600 dark:text-pink-400'>Skills</h2>
          <ul className='list-none mt-4 space-y-3'>
            {[
              "Technical Documentation & Reporting",
              "Data Interpretation for Non-Technical Stakeholders",
              "Presentation Design & Content Structuring",
              "System Monitoring Tools Interpretation",
              "Information Architecture & User Guides",
            ].map((skill, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-pink-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow transition-colors duration-700'>
          <h2 className='text-2xl font-semibold text-pink-600 dark:text-pink-400'>Contact</h2>
          <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              deviyolanda901@gmail.com
            </p>

            <p className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56v13H.22zM7.58 8h4.36v1.78h.06c.61-1.17 2.1-2.42 4.32-2.42 4.62 0 5.47 3.04 5.47 6.99v8.65h-4.56v-7.67c0-1.83-.03-4.19-2.56-4.19s-2.95 1.99-2.95 4.06v7.8H7.58V8z"/>
              </svg>
              <a
                href="https://linkedin.com/in/deviyool"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-pink-600 dark:text-pink-300"
              >
                linkedin.com/in/deviyool
              </a>
            </p>
          </div>
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