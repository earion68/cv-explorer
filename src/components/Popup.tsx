import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import type { PopupContent } from '../hooks/usePopup';
import '../styles/Popup.css';

interface PopupProps {
  isOpen: boolean;
  content: PopupContent | null;
  onClose: () => void;
}

export const Popup: React.FC<PopupProps> = ({ isOpen, content, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !content) {
    return null;
  }

  return (
    <>
      <div className="popup-overlay" onClick={onClose} />
      <div className="popup-modal">
        <div className="popup-header">
          <h2>{content.title}</h2>
          <button
            className="popup-close-btn"
            onClick={onClose}
            aria-label="Close popup"
          >
            ✕
          </button>
        </div>
        <div className="popup-body">
          <ReactMarkdown
            components={{
              a: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
              ),
            }}
          >
            {content.body}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};
