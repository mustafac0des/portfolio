import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import * as Si from 'react-icons/si';
import * as Md from 'react-icons/md';

const allIcons = { ...Si, ...Md };

function SkillCard({ name, icon, color }) {
  const IconComp = allIcons[icon];

  return (
    <motion.div
      className="skill-card card"
      whileHover={{ scale: 1.04 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
    >
      {/* Per-card glow */}
      <div
        className="skill-glow"
        style={{ background: `radial-gradient(circle at 50% 100%, ${color}25 0%, transparent 70%)` }}
      />
      <div className="skill-icon" style={{ color }}>
        {IconComp ? <IconComp /> : <span style={{ fontSize: '1.5rem' }}>⚡</span>}
      </div>
      <span className="skill-name">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">// skills</p>
          <h2 className="section-title">What I work with</h2>
          <p className="section-sub">
            A mix of technical depth and business acumen — tools I use daily and principles that guide how I think.
          </p>
        </motion.div>

        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div>
            <p className="skills-group-title">Technical</p>
            <div className="skills-grid">
              {skills.technical.map(s => <SkillCard key={s.name} {...s} />)}
            </div>
          </div>

          <div>
            <p className="skills-group-title">Non-Technical & Business</p>
            <div className="skills-grid">
              {skills.nonTechnical.map(s => <SkillCard key={s.name} {...s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
