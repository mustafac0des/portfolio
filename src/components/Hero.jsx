import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { siteConfig } from '../data/portfolio';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const glanceItems = [
  { val: '4+', key: 'Years of Experience' },
  { val: '10+', key: 'Projects Shipped' },
  { val: '6+', key: 'Certifications' },
];

export default function Hero() {
  return (
    <section className="hero-section section" id="about">
      <div className="section-inner">
        <div className="hero-grid">
          {/* Left */}
          <div>
            <motion.div className="hero-meta" {...fadeUp(0.1)}>
              <span className="pill pill-green">
                <span className="status-dot" /> Available for work
              </span>
              <span className="pill pill-muted">Islamabad, Pakistan</span>
            </motion.div>

            <motion.h1 className="hero-name" {...fadeUp(0.2)}>
              {siteConfig.name}
            </motion.h1>

            <motion.p className="hero-tagline" {...fadeUp(0.3)}>
              {siteConfig.description}
            </motion.p>

            <motion.div className="hero-actions" {...fadeUp(0.4)}>
              <a href="#contact" className="btn btn-primary">Get in touch ↗</a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <FaLinkedin /> LinkedIn
              </a>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <FaGithub /> GitHub
              </a>
            </motion.div>
          </div>

          {/* Right — At a Glance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glance-card card">
              <div className="glance-header">at a glance</div>

              {glanceItems.map(({ val, key }) => (
                <div className="glance-row" key={key}>
                  <span className="glance-val">{val}</span>
                  <span className="glance-key">{key}</span>
                </div>
              ))}

              <div className="glance-avail">
                <span>{siteConfig.email}</span>
                <span className="avail-badge">
                  <span className="status-dot" /> Available
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
