import React, { useState } from "react";
import '../assets/styles/Experience.scss';
import logo1 from '../assets/images/logo1.jpg';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ExpItem {
  id: number;
  company: string;
  logo: string;
  position: string;
  description: string;
}

const experienceData: ExpItem[] = [
  {
    id: 1,
    company: "Deloitte USI",
    logo: logo1,
    position: "Associate Analyst",
    description: "Designed and implemented frontend features using React and TypeScript, collaborated with cross-functional teams, and improved app performance by 30%."
  }
];

const Experience: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleOpen = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="experience-expand">
      <h2 className="title">Experience</h2>
      {experienceData.map((exp) => (
        <div key={exp.id} className={`exp-card ${openId === exp.id ? 'open' : ''}`}>
          <button
            className="exp-header"
            onClick={() => toggleOpen(exp.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                toggleOpen(exp.id);
                e.preventDefault();
              }
            }}
            aria-expanded={openId === exp.id}
          >
            <div className="exp-info">
              <img src={exp.logo} alt={exp.company} className="exp-logo" />
              <div className="exp-text">
                <h3>{exp.company}</h3>
                <p>{exp.position}</p>
              </div>
            </div>
            <FontAwesomeIcon 
              icon={faAngleUp} 
              className={`toggle-icon ${openId === exp.id ? 'rotate' : ''}`} 
              aria-hidden="true" 
            />
          </button>
          {openId === exp.id && (
            <div className="exp-details">
              {exp.description}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Experience;
