import React from 'react';
import { siteConfig } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>© {year} {siteConfig.name}</span>
    </footer>
  );
}
