import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaTimes, FaExternalLinkAlt, FaGraduationCap, FaCertificate, FaCode, FaBriefcase, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const typeIcons = {
  experience: <FaBriefcase />,
  education: <FaGraduationCap />,
  certification: <FaCertificate />,
  project: <FaCode />,
};

const typePill = {
  experience: 'pill-blue',
  education: 'pill-accent',
  certification: 'pill-amber',
  project: 'pill-green',
};

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ images, startIndex, title, onClose }) {
  const lightboxRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <motion.div
      ref={lightboxRef}
      onClick={(e) => { if (e.target === lightboxRef.current) onClose(); }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 3000,
        background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 20, right: 20, zIndex: 10,
          width: 40, height: 40, borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', cursor: 'pointer', display: 'flex',
          alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
        }}
      >
        <FaTimes />
      </button>

      {/* Lightbox Swiper */}
      <div style={{ width: '90vw', height: '85vh', position: 'relative' }}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          navigation={{
            nextEl: '.lb-next',
            prevEl: '.lb-prev',
          }}
          pagination={{ clickable: true }}
          initialSlide={startIndex}
          loop={images.length > 1}
          style={{ width: '100%', height: '100%' }}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                style={{
                  maxWidth: '100%', maxHeight: '100%',
                  objectFit: 'contain', borderRadius: 8,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {images.length > 1 && (
          <>
            <button className="lb-prev" style={{
              position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
              transition: 'background 0.2s',
            }}><FaChevronLeft /></button>
            <button className="lb-next" style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: '1rem',
              transition: 'background 0.2s',
            }}><FaChevronRight /></button>
          </>
        )}
      </div>
    </motion.div>
  );
}

// ── Carousel slide with blurred background ────────────────────────────────────
function BlurSlide({ src, alt, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer', overflow: 'hidden' }}
    >
      {/* Blurred background fill */}
      <div style={{
        position: 'absolute', inset: -20,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(24px) brightness(0.5)',
        transform: 'scale(1.15)',
      }} />
      {/* Sharp contained image on top */}
      <img
        src={src}
        alt={alt}
        style={{
          position: 'relative', zIndex: 1,
          width: '100%', height: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

// ── Modal ─────────────────────────────────────────────────────────────────────
export default function TimelineModal({ item, onClose }) {
  const backdropRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter out empty image strings
  const validImages = item?.images?.filter(src => src && src.trim() !== '') || [];

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
          {validImages.length > 0 ? (
            <div className="modal-carousel">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={validImages.length > 1}
              >
                {validImages.map((src, i) => (
                  <SwiperSlide key={i}>
                    <BlurSlide
                      src={src}
                      alt={`${item.title} screenshot ${i + 1}`}
                      onClick={() => setLightboxIndex(i)}
                    />
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
                item.type === 'project' ? (
                  <span className="pill pill-red">
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ef4444', display: 'inline-block', boxShadow: '0 0 6px rgba(239,68,68,0.6)', animation: 'pulse 2s infinite' }} />
                    Live
                  </span>
                ) : (
                  <span className="pill" style={{
                    background: 'rgba(248,223,22,0.15)',
                    color: '#efd544ff',
                    border: '1px solid rgba(248,223,22,0.35)',
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#efd544ff', display: 'inline-block', boxShadow: '0 0 6px rgba(239,68,68,0.6)', animation: 'pulse 2s infinite' }} />
                    Present
                  </span>
                )
              ) : (
                <span className="pill pill-brown">Completed</span>
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
                    : item.type === 'education' ? 'Institution'
                      : item.type === 'experience' ? 'Company'
                        : 'Project'
                }
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox overlay */}
      {lightboxIndex !== null && (
        <Lightbox
          images={validImages}
          startIndex={lightboxIndex}
          title={item.title}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </AnimatePresence>
  );
}
