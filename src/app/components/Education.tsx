import React, { useState } from 'react';
import { GraduationCap, MapPin, Calendar, Award, ChevronDown, ChevronUp } from 'lucide-react';

export default function Education() {
  const [showCoursework, setShowCoursework] = useState(false);

  const coursework = [
    'Public Affairs and Governance',
    'Microeconomics & Macroeconomics',
    'Research Methods I & II',
    'Public Speaking',
    'Leadership, Ethics and Communication',
    'Public Administration Theory',
    'Public Finance & Budgets',
    'Gender, Diversity & Culture',
    'Law & Public Affairs',
    'Management Information Systems',
    'Writing and Information Literacy I & II',
    'Introduction to Social Psychology',
    'Introduction to Statistics',
    'State and Politics',
    'Fundamentals of Philosophy',
    'History of Azerbaijan',
    'Data and Computing Skills',
    'Modern World History',
    'Organizational Behaviors',
    'Environmental Sciences',
    'Literature of Azerbaijan',
    'Public Management',
    'Global Perspectives',
    'Azerbaijani Studies',
    'Career Development Skills & Strategies',
    'Media & Culture',
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-underline"></div>
        </div>

        <div className="education-content">
          {/* University Education */}
          <div className="education-card main">
            <div className="education-icon">
              <GraduationCap size={40} />
            </div>
            
            <div className="education-details">
              <h3 className="education-school">ADA University</h3>
              <h4 className="education-degree">Bachelor of Arts in Public Affairs</h4>
              
              <div className="education-meta">
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>Baku, Azerbaijan</span>
                </div>
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>Expected May 2026</span>
                </div>
                <div className="meta-item">
                  <Award size={16} />
                  <span>GPA: 3.3</span>
                </div>
              </div>

              {/* Coursework Section */}
              <div className="coursework-section">
                <button
                  className="coursework-toggle"
                  onClick={() => setShowCoursework(!showCoursework)}
                >
                  <span>Selected Coursework</span>
                  {showCoursework ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {showCoursework && (
                  <div className="coursework-grid">
                    {coursework.map((course, index) => (
                      <div key={index} className="coursework-item">
                        <span className="coursework-bullet">•</span>
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* High School Education */}
          <div className="education-card secondary">
            <div className="education-icon secondary">
              <GraduationCap size={32} />
            </div>
            
            <div className="education-details">
              <h3 className="education-school">High School No. 232</h3>
              
              <div className="education-meta">
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>Baku, Azerbaijan</span>
                </div>
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>Graduated June 2021</span>
                </div>
                <div className="meta-item">
                  <Award size={16} />
                  <span>Score: 597</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
