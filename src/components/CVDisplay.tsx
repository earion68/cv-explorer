import React from 'react';
import type { CVData, Experience, Skill, Project, Education } from '../types/cv';
import { SectionContainer } from './SectionContainer';
import { ExperienceCard } from './ExperienceCard';
import { SkillsSection } from './SkillsSection';
import { ProjectCard } from './ProjectCard';
import { EducationCard } from './EducationCard';
import '../styles/CVDisplay.css';

interface CVDisplayProps {
  cv: CVData;
  onExperienceClick: (exp: Experience) => void;
  onSkillClick: (skill: Skill) => void;
  onProjectClick: (proj: Project) => void;
  onEducationClick: (edu: Education) => void;
}

export const CVDisplay: React.FC<CVDisplayProps> = ({
  cv,
  onExperienceClick,
  onSkillClick,
  onProjectClick,
  onEducationClick,
}) => {
  return (
    <div className="cv-display" id="cv-content">
      {/* Experience Section */}
      {cv.experiences && cv.experiences.length > 0 && (
        <SectionContainer title="Experience">
          <div className="experience-timeline">
            {cv.experiences.map((exp) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-node"></div>
                <ExperienceCard
                  experience={exp}
                  onDetailsClick={() => onExperienceClick(exp)}
                />
              </div>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Projects Section */}
      {cv.projects && cv.projects.length > 0 && (
        <SectionContainer title="Featured Projects">
          <div className="projects-grid">
            {cv.projects.map((proj) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                onDetailsClick={() => onProjectClick(proj)}
              />
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Education Section */}
      {cv.education && cv.education.length > 0 && (
        <SectionContainer title="Education & Certifications">
          <div className="education-list">
            {cv.education.map((edu) => (
              <EducationCard
                key={edu.id}
                education={edu}
                onDetailsClick={() => onEducationClick(edu)}
              />
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Skills Section */}
      {cv.skills && cv.skills.length > 0 && (
        <SectionContainer title="Technical Skills">
          <SkillsSection
            skills={cv.skills}
            onSkillClick={onSkillClick}
          />
        </SectionContainer>
      )}

      {/* Soft Skills Section */}
      {cv.softSkills && cv.softSkills.length > 0 && (
        <SectionContainer title="Soft Skills">
          <SkillsSection
            skills={cv.softSkills}
            onSkillClick={onSkillClick}
          />
        </SectionContainer>
      )}
    </div>
  );
};
