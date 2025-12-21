import React from 'react';
import { Code, Users, Lightbulb } from 'lucide-react';

export default function Skills() {
  const technicalSkills = [
    { name: 'Microsoft Office Suite', level: 90 },
    { name: 'Microsoft Excel', level: 95 },
    { name: 'Canva', level: 85 },
    { name: 'Data & Computing Skills', level: 80 },
  ];

  const softSkills = [
    'Leadership',
    'Communication',
    'Organizational Skills',
    'Team Coordination',
    'Public Service Ethics',
    'Critical Thinking',
    'Research & Analysis',
    'Public Speaking',
    'Problem Solving',
    'Adaptability',
    'Time Management',
    'Cultural Sensitivity',
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Competencies</h2>
          <div className="section-underline"></div>
        </div>

        <div className="skills-content">
          {/* Technical Skills */}
          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">
                <Code size={28} />
              </div>
              <h3 className="category-title">Technical Skills</h3>
            </div>

            <div className="technical-skills">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">
                <Lightbulb size={28} />
              </div>
              <h3 className="category-title">Soft Skills</h3>
            </div>

            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <div key={index} className="soft-skill-tag">
                  <Users size={16} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
