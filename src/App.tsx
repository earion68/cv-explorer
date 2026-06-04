import cvDataJson from './data/cv-data.json';
import type { CVData, Experience, Skill, Project, Education } from './types/cv';
import { Header } from './components/Header';
import { CVDisplay } from './components/CVDisplay';
import { Popup } from './components/Popup';
import { usePopup } from './hooks/usePopup';
import './App.css';

function App() {
  const cvData: CVData = cvDataJson;
  const { isOpen, content, openPopup, closePopup } = usePopup();

  const handleExperienceClick = (exp: Experience) => {
    if (exp.details) {
      const achievementsList = exp.achievements
        ? `\n\n## Key Achievements\n${exp.achievements.map((a) => `- ${a}`).join('\n')}`
        : '';
      openPopup({
        title: `${exp.position} at ${exp.company}`,
        body: exp.details + achievementsList,
      });
    }
  };

  const handleSkillClick = (skill: Skill) => {
    if (skill.details) {
      openPopup({
        title: skill.name,
        body: skill.details,
      });
    }
  };

  const handleProjectClick = (proj: Project) => {
    if (proj.details) {
      openPopup({
        title: proj.name,
        body: proj.details,
      });
    }
  };

  const handleEducationClick = (edu: Education) => {
    if (edu.details) {
      openPopup({
        title: `${edu.degree} in ${edu.field}`,
        body: edu.details,
      });
    }
  };

  return (
    <div className="app">
      <Header cv={cvData} />
      <div>
        <CVDisplay
          cv={cvData}
          onExperienceClick={handleExperienceClick}
          onSkillClick={handleSkillClick}
          onProjectClick={handleProjectClick}
          onEducationClick={handleEducationClick}
        />
      </div>
      <Popup isOpen={isOpen} content={content} onClose={closePopup} />
    </div>
  );
}

export default App;
