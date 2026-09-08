import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { siteConfig, social } from '../data/portfolio';

const iconMap = { FaLinkedin: <FaLinkedin />, FaGithub: <FaGithub />, FaEnvelope: <FaEnvelope /> };

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <div className="contact-grid">
          {/* Left */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-label">// contact</p>
            <h2 className="section-title">Let's build something great.</h2>
            <p>
              Whether you have a project in mind, want to discuss opportunities, or just want to connect — my inbox is always open. I'm especially interested in the intersection of software engineering and business strategy.
            </p>

            <div className="social-links" style={{ marginTop: '2.5rem' }}>
              {social.map(s => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link card"
                >
                  <div className="social-link-icon">{iconMap[s.icon]}</div>
                  <div className="social-link-info">
                    <span className="social-link-label">{s.label}</span>
                    <span className="social-link-url">
                      {s.url.replace('mailto:', '').replace('https://', '')}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — CTA Card */}
          <motion.div
            className="contact-right card"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div>
              <span className="pill pill-green" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                <span className="status-dot" style={{ width: 6, height: 6 }} /> Currently Available
              </span>
              <h3>Start a conversation</h3>
              <p style={{ marginTop: '0.5rem' }}>Typically responds within 24 hours</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href={`mailto:${siteConfig.email}`} className="btn btn-primary" style={{ justifyContent: 'center' }}>
                <FaEnvelope /> Send an email
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ justifyContent: 'center' }}>
                <FaLinkedin /> Connect on LinkedIn
              </a>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                {siteConfig.email}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginTop: 4 }}>
                {siteConfig.location}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
