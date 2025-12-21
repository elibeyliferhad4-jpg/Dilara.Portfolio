import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Linkedin, ExternalLink, Sparkles, Heart, Coffee } from 'lucide-react';

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const contactCards = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email',
      value: 'dgadimaliyeva16146@ada.edu.az',
      link: 'mailto:dgadimaliyeva16146@ada.edu.az',
      gradient: 'from-blue-500 to-purple-600',
      description: 'Drop me a message anytime'
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Location',
      value: 'Baku, Azerbaijan',
      link: null,
      gradient: 'from-green-500 to-teal-600',
      description: 'Based in the beautiful capital'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/dilara-gadimaliyeva-609179302/',
      gradient: 'from-blue-600 to-blue-800',
      description: 'Let\'s network professionally'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Enhanced Header */}
        <div className={`contact-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="header-content">
            <div className="title-wrapper">
              <h2 className="contact-title">Get In Touch</h2>
            </div>
            <p className="contact-description">
              I'm always open to discussing public affairs opportunities, collaboration, or professional inquiries.
              <Heart className="heart-icon" size={16} />
            </p>
          </div>
        </div>

        {/* Enhanced Contact Cards */}
        <div className="contact-grid">
          {contactCards.map((card, index) => {
            const IconComponent = card.icon;
            const isHovered = hoveredCard === card.id;

            return (
              <div
                key={card.id}
                className={`contact-card ${isVisible ? 'animate-in' : ''}`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-background">
                  <div className={`card-gradient bg-gradient-to-br ${card.gradient}`}></div>
                  <div className="card-pattern"></div>
                </div>

                <div className="card-content">
                  <div className="card-icon-container">
                    <div className={`icon-wrapper ${isHovered ? 'pulse' : ''}`}>
                      <IconComponent size={32} />
                    </div>
                  </div>

                  <div className="card-text">
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-description">{card.description}</p>
                    {card.link ? (
                      <a
                        href={card.link}
                        target={card.id === 'linkedin' ? '_blank' : undefined}
                        rel={card.id === 'linkedin' ? 'noopener noreferrer' : undefined}
                        className="card-link"
                      >
                        <span className="link-text">{card.value}</span>
                        {card.id === 'linkedin' && <ExternalLink size={14} />}
                      </a>
                    ) : (
                      <span className="card-value">{card.value}</span>
                    )}
                  </div>
                </div>

                <div className="card-hover-effect"></div>
              </div>
            );
          })}
        </div>

        {/* Fun Footer Message */}
        <div className={`contact-footer ${isVisible ? 'animate-in' : ''}`}>
          <Coffee className="coffee-icon" size={20} />
          <span>Let's grab a virtual coffee and chat!</span>
          <Coffee className="coffee-icon" size={20} />
        </div>
      </div>
    </section>
  );
}