import React from 'react';
import type { Experience } from '../types/cv';
import '../styles/ExperienceCard.css';

interface ExperienceCardProps {
  experience: Experience;
  onDetailsClick: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  onDetailsClick,
}) => {
  const dateRange = experience.endDate
    ? `${experience.startDate} - ${experience.endDate}`
    : `${experience.startDate} - Present`;

  return (
    <div className="experience-card" onClick={onDetailsClick}>
      <div className="experience-header">
        <h3 className="experience-position">{experience.position}</h3>
        {experience.isCurrent && <span className="badge-current">Current</span>}
      </div>
      <p className="experience-company">{experience.company}</p>
      <p className="experience-date">{dateRange}</p>
      <p className="experience-summary">{experience.summary}</p>
      
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="experience-tech">
          {experience.technologies.map((tech, idx) => (
            <span key={idx} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* {experience.details && (
        <button className="details-btn" onClick={(e) => {
          e.stopPropagation();
          onDetailsClick();
        }}>
          View Details →
        </button>
      )} */}
    </div>
  );
};
