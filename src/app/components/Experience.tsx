import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      organization: 'Ministry of Foreign Affairs of Republic of Azerbaijan',
      role: 'Intern, Consular Department (Citizen Affairs)',
      period: 'June 2025',
      location: 'Baku, Azerbaijan',
      image: '/experience-picture-1.jpg',
      responsibilities: [
        'Supported the restoration and termination of citizenship procedures by verifying the accuracy of submitted documents and providing citizens with initial guidance on consular documentation requirements',
        'Assisted in drafting official consular letters and maintained clear, organized records to ensure efficient processing of citizenship-related cases in compliance with legal standards',
      ],
    },
    {
      organization: 'State Examination Center',
      role: 'Volunteer',
      period: 'March 2025',
      location: 'Baku, Azerbaijan',
      image: '/experience-picture-2.jpg',
      responsibilities: [
        'Participated as a dedicated volunteer, assisting in the smooth organization and fair execution of examination procedures, while ensuring a supportive and disciplined environment for all candidates',
        'Contributed to maintaining order and providing guidance to examination participants, ensuring adherence to the center\'s regulations and fostering a calm and organized atmosphere throughout the examination process',
      ],
    },
    {
      organization: 'Watchmen Organization (ADA University)',
      role: 'HR Manager',
      period: 'October 2024 – Present',
      location: 'Baku, Azerbaijan',
      image: '/experience-picture-3.jpg',
      responsibilities: [
        'Engaging in active participation with the Watchmen Organization, demonstrating a strong commitment to upholding the code of conduct and fostering smooth and respectful environment within ADA University',
        'Our ongoing commitment is to help the university and its student by ensuring a positive, inclusive, and violation-free environment through our vigilant presence and proactive approach',
      ],
    },
    {
      organization: 'DOST Agency',
      role: 'Volunteer',
      period: 'June 2024 – August 2024',
      location: 'Baku, Azerbaijan',
      image: '/experience-picture-4.jpg',
      responsibilities: [
        'Assisted with numerous tasks during my 2-month volunteer experience with the DOST Agency',
        'Led a team of volunteers, overseeing various tasks and ensuring the successful execution of initiatives',
      ],
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-underline"></div>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-icon-wrapper">
                <div className="experience-image-frame">
                  <img
                    src={exp.image}
                    alt={`${exp.organization} logo`}
                    className="experience-image"
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.querySelector('.experience-icon')!.classList.remove('hidden');
                    }}
                  />
                  <div className="experience-icon hidden">
                    <Briefcase size={24} />
                  </div>
                </div>
                {index !== experiences.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="experience-content">
                <h3 className="experience-organization">{exp.organization}</h3>
                <h4 className="experience-role">{exp.role}</h4>
                
                <div className="experience-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
