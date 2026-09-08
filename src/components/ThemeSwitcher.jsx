import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { playBlip } from './SoundManager';

const THEMES = {
  modern: {
    '--bg-color': '#0f172a',
    '--text-color': '#f8fafc',
    '--primary-color': '#3b82f6',
    '--accent-color': '#8b5cf6',
    '--card-bg': 'rgba(255, 255, 255, 0.05)'
  },
  vscode: {
    '--bg-color': '#1e1e1e',
    '--text-color': '#d4d4d4',
    '--primary-color': '#569cd6',
    '--accent-color': '#c586c0',
    '--card-bg': '#252526'
  },
  matrix: {
    '--bg-color': '#000000',
    '--text-color': '#00ff41',
    '--primary-color': '#008f11',
    '--accent-color': '#ffffff',
    '--card-bg': '#002200'
  },
  cyberpunk: {
    '--bg-color': '#0f0f1c',
    '--text-color': '#f8f8f2',
    '--primary-color': '#ff0055',
    '--accent-color': '#00f0ff',
    '--card-bg': '#19192e'
  }
};

const ThemeSwitcher = () => {
  const applyTheme = (themeName) => {
    const root = document.documentElement;
    const theme = THEMES[themeName];
    for (const key in theme) {
      root.style.setProperty(key, theme[key]);
    }
  };

  useEffect(() => {
    applyTheme('modern');
  }, []);

  const switchTheme = (themeName) => {
    playBlip();
    applyTheme(themeName);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: -1500, right: 0, top: 0, bottom: 800 }}
      whileDrag={{ scale: 1.1, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        position: 'fixed', top: 20, right: 20, zIndex: 9998,
        display: 'flex', gap: '0.5rem',
        backgroundColor: 'rgba(30,30,30,0.8)', padding: '0.5rem',
        borderRadius: '20px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <motion.button 
        whileHover={{ scale: 1.2 }} onClick={() => switchTheme('modern')}
        style={{ width: 24, height: 24, borderRadius: '50%', border: 'none', background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)' }}
        title="Modern Glass Theme"
      />
      <motion.button 
        whileHover={{ scale: 1.2 }} onClick={() => switchTheme('vscode')}
        style={{ width: 24, height: 24, borderRadius: '50%', border: 'none', backgroundColor: '#569cd6' }}
        title="VS Code Theme"
      />
      <motion.button 
        whileHover={{ scale: 1.2 }} onClick={() => switchTheme('matrix')}
        style={{ width: 24, height: 24, borderRadius: '50%', border: 'none', backgroundColor: '#00ff41' }}
        title="Matrix Theme"
      />
      <motion.button 
        whileHover={{ scale: 1.2 }} onClick={() => switchTheme('cyberpunk')}
        style={{ width: 24, height: 24, borderRadius: '50%', border: 'none', backgroundColor: '#ff0055' }}
        title="Cyberpunk Theme"
      />
    </motion.div>
  );
};

export default ThemeSwitcher;
