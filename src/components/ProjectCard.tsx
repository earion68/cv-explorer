import React from 'react';
import type { Project } from '../types/cv';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  onDetailsClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onDetailsClick,
}) => {
  return (
    <div className="project-card" onClick={onDetailsClick}>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-description">{project.description}</p>

      {project.technologies && project.technologies.length > 0 && (
        <div className="project-tech">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="project-footer">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="details-btn"
            onClick={(e) => e.stopPropagation()}
          >
            Project →
          </a>
        )}
        {project.details && (
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
      </div>
    </div>
  );
};
