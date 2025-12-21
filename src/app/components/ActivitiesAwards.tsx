import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

export default function ActivitiesAwards() {
  const awards = [
    {
      icon: Trophy,
      title: 'Certificate of Academic Excellence',
      description: 'Awarded three times by ADA University for outstanding academic performance',
      count: 3,
    },
    {
      icon: Star,
      title: 'COP29 Side Events Certificate',
      description: 'Certificate from Institute for Development and Diplomacy (IDD) for participation in COP29 related events',
      count: 1,
    },
    {
      icon: Award,
      title: 'Ministry of Foreign Affairs Recommendation',
      description: 'Official recommendation (Rəy) from the Ministry of Foreign Affairs of the Republic of Azerbaijan',
      count: 1,
    },
  ];

  return (
    <section id="activities" className="section activities-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Activities & Awards</h2>
          <div className="section-underline"></div>
        </div>

        <div className="awards-grid">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div key={index} className="award-card">
                <div className="award-icon-wrapper">
                  <IconComponent className="award-icon" size={36} />
                  {award.count > 1 && <span className="award-badge">{award.count}×</span>}
                </div>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-description">{award.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
