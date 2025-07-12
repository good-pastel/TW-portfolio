import React, { useState, useEffect } from 'react';
import Head from 'next/head';
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
    <>
      {/* === META HEAD === */}
      <Head>
        <title>Devi's Portfolio | Frontend Developer</title>
        <meta name="description" content="Hi, I'm Devi. This is my portfolio website showcasing my frontend projects and UI/UX works." />

        {/* Open Graph / WhatsApp / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tw-portfolio-devi.vercel.app/" />
        <meta property="og:title" content="Devi's Portfolio | Frontend Developer" />
        <meta property="og:description" content="Hi, I'm Devi. This is my portfolio website showcasing my frontend projects and UI/UX works." />
        <meta property="og:image" content="https://tw-portfolio-devi.vercel.app/hero-bg.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://tw-portfolio-devi.vercel.app/" />
        <meta name="twitter:title" content="Devi's Portfolio | Frontend Developer" />
        <meta name="twitter:description" content="Hi, I'm Devi. This is my portfolio website showcasing my frontend projects and UI/UX works." />
        <meta name="twitter:image" content="https://tw-portfolio-devi.vercel.app/hero-bg.jpg" />
      </Head>

      {/* === WEBSITE CONTENT === */}
      <div className={darkMode
        ? 'dark min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 transition-colors duration-700'
        : 'min-h-screen bg-gray-50 text-gray-900 transition-colors duration-700'
      }>
      
        {/* HERO */}
        <header className={`relative h-[90vh] bg-cover bg-center transition-colors duration-700 ${darkMode ? 'bg-gray-900' : 'bg-pink-200'}`}
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

        {/* ... (sisa dari konten website kamu tetap seperti sebelumnya) */}
