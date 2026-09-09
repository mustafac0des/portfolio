import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { timelineItems } from '../data/portfolio';
import { FaGraduationCap, FaCertificate, FaCode, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';
import TimelineModal from './TimelineModal';

// ── Type config ───────────────────────────────────────────────────────────────
const TYPE_CFG = {
  experience: { icon: <FaBriefcase />, label: 'Experience', color: '#38bdf8', bg: 'rgba(56,189,248,0.13)' },
  education: { icon: <FaGraduationCap />, label: 'Education', color: '#7c6ef5', bg: 'rgba(124,110,245,0.13)' },
  certification: { icon: <FaCertificate />, label: 'Certification', color: '#f59e0b', bg: 'rgba(245,158,11,0.13)' },
  project: { icon: <FaCode />, label: 'Project', color: '#00e5a0', bg: 'rgba(0,229,160,0.13)' },
};

// ── Date helpers ──────────────────────────────────────────────────────────────
const MONTH_MAP = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

/** Parse a date string to a sortable number: year*100 + month (1-12). Year-only → month 1. */
function parseDate(raw) {
  if (!raw) return 0;
  // Normalise "Sept" → "Sep"
  const s = raw.trim().replace(/\bSept\b/g, 'Sep').replace(/\bJune\b/g, 'Jun').replace(/\bJuly\b/g, 'Jul');
  const parts = s.split(/\s+/);
  // "Mon YYYY"
  if (parts.length === 2 && MONTH_MAP[parts[0]]) return parseInt(parts[1]) * 100 + MONTH_MAP[parts[0]];
  // Year only  "2022"
  if (/^\d{4}$/.test(s)) return parseInt(s) * 100 + 1;
  // Fallback: extract last 4-digit year
  const m = s.match(/(\d{4})/g);
  return m ? parseInt(m[m.length - 1]) * 100 + 1 : 0;
}

/** Parse a range string "Apr 2025 - Jan 2026" → { start, end } as numeric values. */
function parseDateRange(dateStr) {
  if (!dateStr) return { start: 0, end: 0 };
  // Split on en-dash, em-dash, or surrounded hyphen
  const parts = dateStr.split(/\s*[\u2013\u2014\-]\s*/).map(p => p.trim()).filter(Boolean);
  if (parts.length >= 2) return { start: parseDate(parts[0]), end: parseDate(parts[parts.length - 1]) };
  const v = parseDate(dateStr.trim());
  return { start: v, end: v };
}

/** Duration in months between two numeric date values. */
function durationMonths(start, end) {
  const sy = Math.floor(start / 100), sm = start % 100 || 1;
  const ey = Math.floor(end / 100), em = end % 100 || 1;
  return (ey - sy) * 12 + (em - sm);
}

// ── Sort ─────────────────────────────────────────────────────────────────────
const sorted = [...timelineItems].sort((a, b) => parseDate(b.dateShort) - parseDate(a.dateShort));

const TABS = [
  { id: 'all', label: 'All' },
  { id: 'experience', label: 'Experience' },
  { id: 'project', label: 'Projects' },
  { id: 'certification', label: 'Certifications' },
  { id: 'education', label: 'Education' },
];

// ── Row height constants ──────────────────────────────────────────────────────
// Must stay in sync with minHeight + marginBottom on TimelineRow's outer div.
const ROW_MIN_H = 190;   // px (minHeight of the outer grid row)
const ROW_MARGIN = 28;    // px (marginBottom: '1.75rem' at 16px base)
const ROW_H = ROW_MIN_H + ROW_MARGIN; // total "slot" height ≈ 218px

/**
 * Given a target date value and the sorted filtered item list,
 * return a fractional index representing where that date sits
 * on the timeline.  Newest = index 0 (top), oldest = last index (bottom).
 * Values outside [0, n-1] are valid (above/below the visible range).
 */
function dateToFractionalIndex(targetDate, items) {
  if (!items.length) return 0;
  const vals = items.map(it => parseDate(it.dateShort));

  // Above top
  if (targetDate >= vals[0]) {
    const gap = vals.length > 1 ? vals[0] - vals[1] : 100;
    return 0 - (targetDate - vals[0]) / Math.max(gap, 1);
  }
  // Below bottom
  const last = vals.length - 1;
  if (targetDate <= vals[last]) {
    const gap = vals.length > 1 ? vals[last - 1] - vals[last] : 100;
    return last + (vals[last] - targetDate) / Math.max(gap, 1);
  }
  // Interpolate between two adjacent items
  for (let i = 0; i < vals.length - 1; i++) {
    const upper = vals[i];     // newer
    const lower = vals[i + 1]; // older
    if (targetDate <= upper && targetDate >= lower) {
      const span = upper === lower ? 1 : upper - lower;
      const t = (upper - targetDate) / span;
      return i + t;
    }
  }
  return vals.length / 2;
}

/**
 * Compute the spine bar props for one timeline item.
 * Returns null if no bar is needed, or:
 *   { px, direction: 'up'|'down', isLive }
 */
function computeSpanBar(item, itemIndex, filteredItems) {
  // ── Live: line goes UP to PRESENT ────────────────────────────────────────
  if (item.isLive) {
    // Extend from this dot upward, through all rows above
    const upPx = itemIndex * ROW_H + ROW_MIN_H / 2;
    return { px: Math.max(upPx, 48), direction: 'up', isLive: true };
  }

  const { start, end } = parseDateRange(item.date);
  const months = durationMonths(start, end);

  // Skip 1-month (or shorter) point events
  if (months < 2) return null;

  // Which end of the range is NOT the dot position?
  const dotDate = parseDate(item.dateShort);
  const distStart = Math.abs(dotDate - start);
  const distEnd = Math.abs(dotDate - end);
  const otherDate = distStart >= distEnd ? start : end;

  const dotIdx = itemIndex;
  const otherIdx = dateToFractionalIndex(otherDate, filteredItems);
  const rowDiff = otherIdx - dotIdx; // positive = below = down

  const px = Math.abs(rowDiff) * ROW_H;
  if (px < 16) return null;

  return { px, direction: rowDiff > 0 ? 'down' : 'up', isLive: false };
}

// ── SpineBar ──────────────────────────────────────────────────────────────────
function SpineBar({ color, px, direction, isLive }) {
  const isDown = direction === 'down';

  return (
    <div style={{
      position: 'absolute',
      [isDown ? 'top' : 'bottom']: '50%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 4,
      height: px,
      background: isDown
        ? `linear-gradient(to bottom, ${color}ee 0%, ${color}22 100%)`
        : `linear-gradient(to top,   ${color}ee 0%, ${color}22 100%)`,
      borderRadius: 2,
      zIndex: 1,
      pointerEvents: 'none',
    }}>

      {/* End-date cap dot (bottom, for downward spans) */}
      {!isLive && isDown && (
        <div style={{
          position: 'absolute',
          bottom: 0, left: '50%',
          transform: 'translate(-50%, 50%)',
          width: 10, height: 10, borderRadius: '50%',
          background: color, opacity: 0.75,
          boxShadow: `0 0 8px ${color}80`,
        }} />
      )}

      {/* PRESENT glow + label (top of upward bar for live items) */}
      {isLive && (
        <div style={{
          position: 'absolute',
          top: 0, left: '50%',
          transform: 'translate(-50%, -100%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
          paddingBottom: 8,
        }}>
          <div style={{ position: 'relative', width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', width: 36, height: 36, borderRadius: '50%', background: color, opacity: 0.08 }} />
            <div style={{ position: 'absolute', width: 20, height: 20, borderRadius: '50%', background: color, opacity: 0.3 }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: color, opacity: 1, animation: 'pulse 2s infinite' }} />
          </div>
          <span style={{
            fontSize: '0.58rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color,
            opacity: 0.9,
            whiteSpace: 'nowrap',
          }}>PRESENT</span>
        </div>
      )}
    </div>
  );
}

// ── TimelineCard ──────────────────────────────────────────────────────────────
function TimelineCard({ item, cfg, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className="tl-card"
      style={{
        '--c': cfg.color,
        background: 'var(--bg-surface)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '18px',
        padding: '1.4rem 1.5rem',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        height: '100%',
        boxSizing: 'border-box',
        transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
      }}
    >
      <div className="tl-card-glow" style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
        background: `radial-gradient(ellipse at 110% -10%, ${cfg.color}18 0%, transparent 60%)`,
        opacity: 0, transition: 'opacity 0.3s',
      }} />
      <div style={{
        position: 'absolute', left: 0, top: '16px', bottom: '16px',
        width: 3, borderRadius: '0 4px 4px 0',
        background: `linear-gradient(to bottom, ${cfg.color}, ${cfg.color}40)`,
      }} />

      {/* Badge row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap', paddingLeft: '0.25rem' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.07em', padding: '3px 10px', borderRadius: 100,
          background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.color}40`,
        }}>
          {cfg.icon} {cfg.label}
        </span>
        {item.isLive && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontSize: '0.68rem', fontWeight: 700, padding: '3px 10px', borderRadius: 100,
            background: 'rgba(0,229,160,0.1)', color: '#00e5a0',
            border: '1px solid rgba(0,229,160,0.25)',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00e5a0', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            Live
          </span>
        )}
      </div>

      <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: cfg.color, fontWeight: 600, letterSpacing: '0.04em', paddingLeft: '0.25rem' }}>
        {item.date}
      </p>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.35, margin: 0, paddingLeft: '0.25rem' }}>
        {item.title}
      </h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', paddingLeft: '0.25rem' }}>
        {item.organization}
      </p>

      {item.skills?.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 2, paddingLeft: '0.25rem' }}>
          {item.skills.slice(0, 3).map(s => (
            <span key={s} style={{
              fontSize: '0.67rem', fontWeight: 600, fontFamily: 'var(--font-mono)',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 100, padding: '3px 9px', color: 'var(--text-secondary)',
            }}>{s}</span>
          ))}
          {item.skills.length > 3 && (
            <span style={{
              fontSize: '0.67rem', fontWeight: 600, fontFamily: 'var(--font-mono)',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 100, padding: '3px 8px', color: 'var(--text-muted)',
            }}>+{item.skills.length - 3}</span>
          )}
        </div>
      )}

      <div className="tl-card-footer" style={{
        display: 'flex', alignItems: 'center', gap: 6, paddingLeft: '0.25rem',
        paddingTop: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.05)',
        color: 'var(--text-muted)', fontSize: '0.72rem', fontWeight: 600,
        marginTop: 'auto', transition: 'color 0.2s',
      }}>
        View full details <FaExternalLinkAlt style={{ fontSize: '0.6rem' }} />
      </div>
    </div>
  );
}

// ── TimelineDot ───────────────────────────────────────────────────────────────
function TimelineDot({ cfg, delay }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          position: 'absolute', width: 60, height: 60, borderRadius: '50%',
          background: `${cfg.color}15`, animation: 'pulse 2.5s ease-in-out infinite',
        }} />
        <div style={{
          width: 42, height: 42, borderRadius: '50%',
          background: cfg.bg, border: `2px solid ${cfg.color}`,
          boxShadow: `0 0 0 4px ${cfg.color}15, 0 0 20px ${cfg.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: cfg.color, fontSize: '1rem', zIndex: 1, flexShrink: 0,
        }}>
          {cfg.icon}
        </div>
      </div>
    </motion.div>
  );
}

// ── TimelineRow ───────────────────────────────────────────────────────────────
function TimelineRow({ item, index, onClick, spanBar }) {
  const cfg = TYPE_CFG[item.type] || TYPE_CFG.project;
  const isLeft = index % 2 === 0;
  const delay = index * 0.06;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 80px 1fr',
      alignItems: 'center',
      marginBottom: `${ROW_MARGIN}px`,
      position: 'relative',
      minHeight: ROW_MIN_H,
    }}>
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: delay + 0.05, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
      >
        {isLeft ? (
          <>
            <div style={{ width: '100%', paddingRight: '1.5rem' }}>
              <TimelineCard item={item} cfg={cfg} onClick={onClick} />
            </div>
            <div style={{
              position: 'absolute', right: '-19px', top: '50%', transform: 'translateY(-50%)',
              width: 'calc(1.5rem + 19px)', height: 1,
              backgroundImage: `repeating-linear-gradient(90deg, ${cfg.color}70 0px, ${cfg.color}70 4px, transparent 4px, transparent 8px)`,
            }} />
          </>
        ) : (
          <div style={{ width: '100%' }} />
        )}
      </motion.div>

      {/* CENTER — dot + optional spine bar */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <TimelineDot cfg={cfg} delay={delay} />
        {spanBar && (
          <SpineBar
            color={cfg.color}
            px={spanBar.px}
            direction={spanBar.direction}
            isLive={spanBar.isLive}
          />
        )}
      </div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: delay + 0.05, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
      >
        {!isLeft ? (
          <>
            <div style={{
              position: 'absolute', left: '-19px', top: '50%', transform: 'translateY(-50%)',
              width: 'calc(1.5rem + 19px)', height: 1,
              backgroundImage: `repeating-linear-gradient(90deg, ${cfg.color}70 0px, ${cfg.color}70 4px, transparent 4px, transparent 8px)`,
            }} />
            <div style={{ width: '100%', paddingLeft: '1.5rem' }}>
              <TimelineCard item={item} cfg={cfg} onClick={onClick} />
            </div>
          </>
        ) : (
          <div style={{ width: '100%' }} />
        )}
      </motion.div>
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function Timeline() {
  const [activeTab, setActiveTab] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = activeTab === 'all' ? sorted : sorted.filter(i => i.type === activeTab);

  const counts = {
    all: timelineItems.length,
    experience: timelineItems.filter(i => i.type === 'experience').length,
    project: timelineItems.filter(i => i.type === 'project').length,
    certification: timelineItems.filter(i => i.type === 'certification').length,
    education: timelineItems.filter(i => i.type === 'education').length,
  };

  return (
    <section className="section" id="timeline">
      <div className="section-inner">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-label">// overview</p>
          <h2 className="section-title">Journey &amp; Work</h2>
          <p className="section-sub">Projects, certifications, and education — all in one place. Click any card for the full story.</p>
        </motion.div>

        {/* Filter tabs */}
        <div className="timeline-tabs" style={{ marginTop: '2.5rem' }}>
          {TABS.map(t => (
            <button
              key={t.id}
              className={`timeline-tab${activeTab === t.id ? ' active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
              <span style={{
                marginLeft: 7, fontSize: '0.68rem',
                background: activeTab === t.id ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.07)',
                borderRadius: 100, padding: '1px 7px', fontFamily: 'var(--font-mono)',
              }}>{counts[t.id]}</span>
            </button>
          ))}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          {Object.entries(TYPE_CFG).map(([k, v]) => (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span style={{ color: v.color, fontSize: '0.7rem' }}>{v.icon}</span>
              {v.label}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', marginTop: '3rem' }}>
          {/* Vertical spine (base) */}
          <div style={{
            position: 'absolute', left: 'calc(50% - 1px)', top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 8%, rgba(255,255,255,0.08) 92%, transparent)',
            zIndex: 0,
          }} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {filtered.map((item, i) => (
                <TimelineRow
                  key={item.id}
                  item={item}
                  index={i}
                  onClick={setSelected}
                  spanBar={computeSpanBar(item, i, filtered)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <TimelineModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      {/* Hover styles */}
      <style>{`
        .tl-card:hover {
          border-color: rgba(255,255,255,0.15) !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4) !important;
        }
        .tl-card:hover .tl-card-glow  { opacity: 1 !important; }
        .tl-card:hover .tl-card-footer { color: var(--accent) !important; }

        @media (max-width: 768px) {
          #timeline [style*="gridTemplateColumns"] {
            grid-template-columns: 36px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
