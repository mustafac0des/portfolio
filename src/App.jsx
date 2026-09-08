import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 3,
        background: 'var(--accent)',
        transformOrigin: '0%',
        zIndex: 9999,
        boxShadow: '0 0 10px var(--accent-glow)',
      }}
    />
  );
}

function Divider() {
  return <div className="section-divider" />;
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Divider />
        <Skills />
        <Divider />
        <Timeline />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
