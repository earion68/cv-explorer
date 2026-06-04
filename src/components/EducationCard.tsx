import React from 'react';
import type { Education } from '../types/cv';
import '../styles/EducationCard.css';

interface EducationCardProps {
  education: Education;
  onDetailsClick: () => void;
}

export const EducationCard: React.FC<EducationCardProps> = ({
  education,
  onDetailsClick,
}) => {
  return (
    <div className="education-card" onClick={onDetailsClick}>
      <h3 className="education-institution">{education.institution}</h3>
      <p className="education-degree">
        {education.degree} in {education.field}
      </p>
      {education.graduationDate && (
        <p className="education-date">Graduated: {education.graduationDate}</p>
      )}

      <div className="education-footer">
      {education.details && (
        <button
          className="details-btn"
          onClick={(e) => {
            e.stopPropagation();
            onDetailsClick();
          }}
        >
          Details →
        </button>
      )}

      {education.link && (
        <a
          href={education.link}
          target="_blank"
          rel="noopener noreferrer"
          className="details-btn"
          onClick={(e) => e.stopPropagation()}
        >
          Link →
        </a>
      )}
      </div>
    </div>
  );
};
