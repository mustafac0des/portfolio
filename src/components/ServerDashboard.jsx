import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServerDashboard = () => {
  const [metrics, setMetrics] = useState({
    cpu: [40, 50, 45, 60, 55, 70, 80, 60, 50, 40],
    memory: [20, 22, 21, 23, 25, 24, 26, 25, 22, 21],
    network: [10, 15, 12, 40, 60, 30, 20, 15, 12, 10]
  });

  // Simulate live data updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => {
        const newCpu = [...prev.cpu.slice(1), Math.floor(Math.random() * 40) + 40];
        const newMem = [...prev.memory.slice(1), Math.floor(Math.random() * 10) + 20];
        const newNet = [...prev.network.slice(1), Math.floor(Math.random() * 80) + 10];
        return { cpu: newCpu, memory: newMem, network: newNet };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderChart = (data, color, label) => (
    <div style={{ flex: 1, backgroundColor: 'rgba(30,30,30,0.6)', backdropFilter: 'blur(15px)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
      <h3 style={{ color: '#f8fafc', fontSize: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>{label}</h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '120px' }}>
        {data.map((val, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${val}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              flex: 1,
              backgroundColor: color,
              borderTopLeftRadius: '2px',
              borderTopRightRadius: '2px',
              minHeight: '2px'
            }}
          />
        ))}
      </div>
      <div style={{ textAlign: 'right', color: color, marginTop: '0.5rem', fontFamily: 'monospace', fontWeight: 'bold' }}>
        {data[data.length - 1]}%
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', gap: '1rem', width: '100%', flexWrap: 'wrap' }}>
      {renderChart(metrics.cpu, '#569cd6', 'CPU Load (Core 0)')}
      {renderChart(metrics.memory, '#c586c0', 'Memory Allocation')}
      {renderChart(metrics.network, '#4ec9b0', 'Network I/O')}
    </div>
  );
};

export default ServerDashboard;
