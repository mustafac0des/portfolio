import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/portfolio';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      {/* Full-width fixed bar for centering */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 20px',
        pointerEvents: 'none',
      }}>
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            maxWidth: '1100px',
            pointerEvents: 'all',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: '10px 16px 10px 20px',
            background: scrolled ? 'rgba(10,10,14,0.92)' : 'rgba(13,13,18,0.78)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '100px',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: scrolled
              ? '0 8px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)'
              : '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
            transition: 'background 0.3s, box-shadow 0.3s',
          }}>

            {/* Logo */}
            <a href="" style={{
              fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.03em',
              color: '#fff', textDecoration: 'none', flexShrink: 0,
              fontFamily: "'Inter', sans-serif",
            }}>
              MA<span style={{ color: '#7c6ef5' }}>.</span>
            </a>

            {/* Desktop nav links */}
            <div className="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {links.map(l => (
                <a key={l.href} href={l.href} style={{
                  color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
                  fontSize: '0.875rem', fontWeight: 500,
                  padding: '7px 16px', borderRadius: '100px',
                  transition: 'color 0.2s, background 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'transparent'; }}>
                  {l.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#7c6ef5',
              color: '#fff',
              textDecoration: 'none',
              padding: '8px 20px',
              borderRadius: '100px',
              fontSize: '0.84rem',
              fontWeight: 600,
              flexShrink: 0,
              boxShadow: '0 0 24px rgba(124,110,245,0.35)',
              transition: 'background 0.2s, box-shadow 0.2s',
              whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#9585f8'; e.currentTarget.style.boxShadow = '0 0 32px rgba(124,110,245,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#7c6ef5'; e.currentTarget.style.boxShadow = '0 0 24px rgba(124,110,245,0.35)'; }}>
              Let&apos;s talk ↗
            </a>

            {/* Mobile hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(p => !p)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'none', flexDirection: 'column', gap: '5px',
                padding: '4px',
              }}
              aria-label="Menu"
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block', width: 22, height: 2,
                  background: '#fff', borderRadius: 2,
                  transition: 'transform 0.2s, opacity 0.2s',
                  transform: menuOpen && i === 0 ? 'translateY(7px) rotate(45deg)'
                    : menuOpen && i === 2 ? 'translateY(-7px) rotate(-45deg)'
                      : menuOpen && i === 1 ? 'scaleX(0)' : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div style={{
              marginTop: 8, background: 'rgba(13,13,18,0.95)',
              border: '1px solid rgba(255,255,255,0.10)', borderRadius: 20,
              backdropFilter: 'blur(24px)', padding: '8px',
              display: 'flex', flexDirection: 'column', gap: 4,
            }}>
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
                  color: 'rgba(255,255,255,0.7)', textDecoration: 'none',
                  fontSize: '0.9rem', fontWeight: 500, padding: '10px 16px',
                  borderRadius: 12, transition: 'background 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} style={{
                background: '#7c6ef5', color: '#fff', textDecoration: 'none',
                padding: '10px 16px', borderRadius: 12, fontWeight: 600,
                fontSize: '0.9rem', marginTop: 4,
              }}>
                Let&apos;s talk ↗
              </a>
            </div>
          )}
        </motion.nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        /* Hide CTA on very small screens next to hamburger */
        @media (max-width: 480px) {
          .nav-cta-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
