import React from 'react';
import { motion } from 'framer-motion';
import { playBlip } from './SoundManager';

const GithubGraph = () => {
  const [graphData] = React.useState(() => {
    const weeks = [];
    for (let w = 0; w < 52; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const intensity = Math.floor(Math.random() * 5);
        days.push(intensity);
      }
      weeks.push(days);
    }
    return weeks;
  });

  const getIntensityColor = (intensity) => {
    switch(intensity) {
      case 0: return 'rgba(255,255,255,0.05)';
      case 1: return '#0e4429';
      case 2: return '#006d32';
      case 3: return '#26a641';
      case 4: return '#39d353';
      default: return 'rgba(255,255,255,0.05)';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: '#161b22', // GitHub dark theme bg
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid #30363d',
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}
    >
      <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
        {graphData.map((week, wIndex) => (
          <div key={wIndex} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {week.map((day, dIndex) => (
              <motion.div
                key={dIndex}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (wIndex * 0.02) + (dIndex * 0.01), type: 'spring' }}
                whileHover={{ scale: 1.5, zIndex: 10, boxShadow: '0 0 10px #39d353' }}
                onMouseEnter={playBlip}
                style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: getIntensityColor(day),
                  borderRadius: '2px',
                  cursor: 'none'
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div style={{ color: '#8b949e', fontSize: '0.85rem', fontFamily: 'monospace', width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <span>1,492 contributions in the last year</span>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          Less 
          <div style={{ width: 12, height: 12, backgroundColor: getIntensityColor(0), borderRadius: 2 }} />
          <div style={{ width: 12, height: 12, backgroundColor: getIntensityColor(1), borderRadius: 2 }} />
          <div style={{ width: 12, height: 12, backgroundColor: getIntensityColor(2), borderRadius: 2 }} />
          <div style={{ width: 12, height: 12, backgroundColor: getIntensityColor(3), borderRadius: 2 }} />
          <div style={{ width: 12, height: 12, backgroundColor: getIntensityColor(4), borderRadius: 2 }} />
          More
        </div>
      </div>
    </motion.div>
  );
};

export default GithubGraph;
