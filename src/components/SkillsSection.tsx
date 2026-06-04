import React from 'react';
import type { Skill } from '../types/cv';
import '../styles/SkillsSection.css';

interface SkillsSectionProps {
  skills: Skill[];
  onSkillClick: (skill: Skill) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  onSkillClick,
}) => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="skills-container">
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category} className="skill-category">
          <h4 className="category-title">{category}</h4>
          <div className="skills-grid">
            {categorySkills.map((skill) => (
              <div
                key={skill.id}
                className="skill-card"
                onClick={() => onSkillClick(skill)}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  {skill.proficiency && (
                    <span className="skill-proficiency">
                      {'⭐'.repeat(skill.proficiency)}
                    </span>
                  )}
                </div>
                {/* {skill.details && (
                  <span className="skill-hint">Click for details →</span>
                )} */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
