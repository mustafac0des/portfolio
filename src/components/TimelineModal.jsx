import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaTimes, FaExternalLinkAlt, FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa';

const typeIcons = {
  education: <FaGraduationCap />,
  certification: <FaCertificate />,
  project: <FaCode />,
};

const typePill = {
  education: 'pill-accent',
  certification: 'pill-muted',
  project: 'pill-green',
};

export default function TimelineModal({ item, onClose }) {
  const backdropRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose();
  };

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={backdropRef}
        className="modal-backdrop"
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="modal-box"
          initial={{ opacity: 0, scale: 0.93, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close */}
          <button className="modal-close" onClick={onClose}><FaTimes /></button>

          {/* Image Carousel or Placeholder */}
          {item.images && item.images.length > 0 ? (
            <div className="modal-carousel">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
              >
                {item.images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <img src={src} alt={`${item.title} screenshot ${i + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="modal-carousel-empty" style={{ fontSize: '4rem' }}>
              {typeIcons[item.type]}
            </div>
          )}

          {/* Body */}
          <div className="modal-body">
            <div className="modal-header-row">
              <div>
                <h2 className="modal-title">{item.title}</h2>
                <p className="modal-org">{item.organization}</p>
              </div>
            </div>

            {/* Meta */}
            <div className="modal-meta">
              <span className={`pill ${typePill[item.type]}`}>
                {typeIcons[item.type]} {item.type}
              </span>
              <span className="pill pill-muted">{item.date}</span>
              {item.isLive ? (
                <span className="pill pill-green">
                  <span className="status-dot" style={{ width: 6, height: 6 }} /> Live
                </span>
              ) : (
                <span className="pill pill-muted">Completed</span>
              )}
            </div>

            {/* Description */}
            <p className="modal-desc">{item.description}</p>

            {/* Skills */}
            {item.skills && item.skills.length > 0 && (
              <div>
                <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Skills / Technologies
                </p>
                <div className="modal-skills">
                  {item.skills.map(s => (
                    <span key={s} className="modal-skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Link */}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary modal-link"
              >
                <FaExternalLinkAlt /> View {
                  item.type === 'certification' ? 'Certificate'
                  : item.type === 'education'   ? 'Institution'
                  : item.type === 'experience'  ? 'Company'
                  : 'Project'
                }
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
