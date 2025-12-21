import React from 'react';
import { Globe, Star } from 'lucide-react';

export default function Languages() {
  const languages = [
    {
      name: 'Azerbaijani',
      level: 'Native',
      proficiency: 100,
      flag: '🇦🇿',
    },
    {
      name: 'English',
      level: 'Fluent',
      proficiency: 95,
      flag: '🇬🇧',
    },
    {
      name: 'Turkish',
      level: 'Fluent',
      proficiency: 95,
      flag: '🇹🇷',
    },
  ];

  return (
    <section id="languages" className="section languages-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Languages</h2>
          <div className="section-underline"></div>
        </div>

        <div className="languages-intro">
          <Globe className="globe-icon" size={48} />
          <p className="languages-description">
            Multilingual proficiency enabling effective cross-cultural communication 
            and collaboration in diverse professional environments
          </p>
        </div>

        <div className="languages-grid">
          {languages.map((language, index) => (
            <div key={index} className="language-card">
              <div className="language-flag">{language.flag}</div>
              <h3 className="language-name">{language.name}</h3>
              <div className="language-level">{language.level}</div>
              
              <div className="language-stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.round((language.proficiency / 100) * 5) ? 'star-filled' : 'star-empty'}
                    fill={i < Math.round((language.proficiency / 100) * 5) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>

              <div className="language-progress-bar">
                <div 
                  className="language-progress" 
                  style={{ width: `${language.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
