import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SystemConsole = ({ inline = false }) => {
  const [logs, setLogs] = useState(['[SYS] Console Initialized...']);

  useEffect(() => {
    const defaultLogs = [
      '[INFO] Loading core dependencies...',
      '[SEC] RBAC module loaded successfully.',
      '[WARN] High memory usage detected in Vector Store.',
      '[INFO] Connecting to external endpoints...',
      '[SYS] System ready.'
    ];
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < defaultLogs.length) {
        setLogs(prev => [...prev, defaultLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      drag={!inline}
      dragConstraints={{ left: -1500, right: 0, top: -800, bottom: 0 }}
      dragElastic={0.2}
      whileDrag={!inline ? { scale: 1.05, opacity: 1, boxShadow: '0 20px 50px rgba(0,0,0,0.8)' } : {}}
      initial={!inline ? { opacity: 0, y: 50 } : {}}
      animate={!inline ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 1 }}
      style={inline ? {
        width: '100%', height: '100%',
        backgroundColor: 'transparent',
        padding: '1rem', fontFamily: 'monospace',
        fontSize: '13px', overflowY: 'auto'
      } : {
        position: 'fixed', bottom: 20, right: 20, width: 300,
        backgroundColor: 'rgba(15, 23, 42, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px', padding: '1.5rem', fontFamily: 'monospace',
        fontSize: '0.8rem', zIndex: 9998, boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(15px)'
      }}
    >
      {!inline && (
        <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '1rem', paddingBottom: '0.5rem', color: '#94a3b8', display: 'flex', justifyContent: 'space-between' }}>
          <span>System Logs (Live)</span>
          <span style={{ fontSize: '0.7rem', cursor: 'grab' }}>[DRAG]</span>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <AnimatePresence>
          {logs.map((log, i) => {
            if (!log) return null;
            return (
              <motion.div 
                key={log + i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, height: 0 }}
                style={{ 
                  color: log.includes('[WARN]') ? '#ffbd2e' : log.includes('[SEC]') ? '#27c93f' : '#d4d4d4',
                  marginBottom: '0.5rem'
                }}
              >
                {log}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SystemConsole;
