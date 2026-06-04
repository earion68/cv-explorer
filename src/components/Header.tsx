import React from 'react';
import type { CVData } from '../types/cv';
import pdfUrl from '../assets/CV_Thomas_CHARBON_light.pdf?url';
import '../styles/Header.css';

interface HeaderProps {
  cv: CVData;
}

export const Header: React.FC<HeaderProps> = ({ cv }) => {
  return (
    <header className="cv-header">
      <div className="header-container">
        <div className="header-picture">

        </div>
        <div className="header-content">
          <h1 className="header-name">{cv.fullName}</h1>
          <p className="header-title">{cv.title}</p>
          {cv.summary && (
            <p className="header-summary">{cv.summary}</p>
          )}
          <div className="header-contact">
            {cv.contact.email && (
              <a href={`mailto:${cv.contact.email}`} className="contact-link">
                📧 {cv.contact.email}
              </a>
            )}
            {cv.contact.phone && (
              <a href={`tel:${cv.contact.phone}`} className="contact-link">
                📱 {cv.contact.phone}
              </a>
            )}
            {cv.contact.location && (
              <span className="contact-link">📍 {cv.contact.location}</span>
            )}
            {cv.contact.linkedin && (
              <a href={cv.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                💼 LinkedIn
              </a>
            )}
            {cv.contact.github && (
              <a href={cv.contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                🐙 GitHub
              </a>
            )}
            {cv.contact.website && (
              <a href={cv.contact.website} target="_blank" rel="noopener noreferrer" className="contact-link">
                🌐 Website
              </a>
            )}
          </div>
        </div>
        <a className="pdf-download-btn" href={pdfUrl} download="CV_Thomas_CHARBON.pdf">
          📥 Download PDF
        </a>
      </div>
    </header>
  );
};
