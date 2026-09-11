import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaCopy, FaCheck, FaTimes, FaExternalLinkAlt, FaEnvelopeOpenText, FaYahoo } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { siteConfig, social } from '../data/portfolio';

const iconMap = { FaLinkedin: <FaLinkedin />, FaGithub: <FaGithub />, FaEnvelope: <FaEnvelope /> };

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleCopyEmail = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const emailSubject = encodeURIComponent('Project Inquiry / Connecting with Mustafa');
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${emailSubject}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${siteConfig.email}&subject=${emailSubject}`;
  const yahooUrl = `https://compose.mail.yahoo.com/?to=${siteConfig.email}&subject=${emailSubject}`;
  const mailtoUrl = `mailto:${siteConfig.email}?subject=${emailSubject}`;

  const emailOptions = [
    {
      id: 'gmail',
      title: 'Gmail',
      desc: 'Open web composer in new tab',
      icon: <SiGmail />,
      color: '#EA4335',
      href: gmailUrl,
      target: '_blank',
    },
    {
      id: 'outlook',
      title: 'Outlook / Hotmail',
      desc: 'Open Outlook Web compose',
      icon: <FaEnvelopeOpenText />,
      color: '#0078D4',
      href: outlookUrl,
      target: '_blank',
    },
    {
      id: 'yahoo',
      title: 'Yahoo Mail',
      desc: 'Open Yahoo Web compose',
      icon: <FaYahoo />,
      color: '#7B1FA2',
      href: yahooUrl,
      target: '_blank',
    },
    {
      id: 'default',
      title: 'Default Mail App',
      desc: 'Open system client (Apple Mail, Thunderbird, etc.)',
      icon: <FaEnvelope />,
      color: '#818CF8',
      href: mailtoUrl,
      target: '_self',
    },
  ];

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
              {social.map(s => {
                const isEmail = s.label.toLowerCase() === 'email';
                return isEmail ? (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="social-link card"
                    style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', textAlign: 'left', cursor: 'pointer', width: '100%' }}
                  >
                    <div className="social-link-icon">{iconMap[s.icon]}</div>
                    <div className="social-link-info">
                      <span className="social-link-label">{s.label}</span>
                      <span className="social-link-url">{siteConfig.email}</span>
                    </div>
                  </button>
                ) : (
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
                        {s.url.replace('https://', '')}
                      </span>
                    </div>
                  </a>
                );
              })}
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
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn btn-primary"
                style={{ justifyContent: 'center', width: '100%', cursor: 'pointer' }}
                id="send-email-btn"
              >
                <FaEnvelope /> Send an email
              </button>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                style={{ justifyContent: 'center', width: '100%' }}
              >
                <FaLinkedin /> Connect on LinkedIn
              </a>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <div
                onClick={handleCopyEmail}
                style={{
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: copied ? '#34d399' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  transition: 'color 0.2s',
                }}
                title="Click to copy email"
              >
                <span>{siteConfig.email}</span>
                {copied ? <FaCheck style={{ fontSize: '0.8rem' }} /> : <FaCopy style={{ fontSize: '0.75rem', opacity: 0.6 }} />}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginTop: 4 }}>
                {siteConfig.location}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* EMAIL PROVIDER PICKER MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            style={{ zIndex: 3000 }}
          >
            <motion.div
              className="modal-box"
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '520px',
                padding: '2rem',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-hover)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: '8px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      color: 'var(--accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <FaEnvelope style={{ fontSize: '0.9rem' }} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>Send an email</h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: 4 }}>
                    Choose your preferred email service to get in touch:
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    width: 32,
                    height: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--border-hover)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Email Address Bar with 1-Click Copy */}
              <div
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
                    Recipient Email
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    {siteConfig.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn btn-ghost"
                  style={{
                    padding: '6px 12px',
                    fontSize: '0.8rem',
                    background: copied ? 'rgba(52, 211, 153, 0.15)' : undefined,
                    borderColor: copied ? '#34d399' : undefined,
                    color: copied ? '#34d399' : undefined,
                  }}
                >
                  {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy</>}
                </button>
              </div>

              {/* Provider Options Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {emailOptions.map((opt) => (
                  <a
                    key={opt.id}
                    href={opt.href}
                    target={opt.target}
                    rel={opt.target === '_blank' ? 'noreferrer' : undefined}
                    onClick={() => {
                      if (opt.target === '_blank') {
                        setTimeout(() => setIsModalOpen(false), 300);
                      }
                    }}
                    className="card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      textDecoration: 'none',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = opt.color;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: '8px',
                          background: 'var(--bg-elevated)',
                          color: opt.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                          flexShrink: 0,
                        }}
                      >
                        {opt.icon}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{opt.title}</span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{opt.desc}</span>
                      </div>
                    </div>
                    <FaExternalLinkAlt style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
