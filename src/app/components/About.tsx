import React from 'react';
import { Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-grid">
            {/* Profile Image */}
            <div className="about-profile">
              <div className="profile-image-container">
                <div className="profile-image-wrapper">
                  <img
                    src="/profile-picture.jpg"
                    alt="Dilara Gadimaliyeva"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="about-bio">
              <h3 className="bio-greeting">Hello! I'm Dilara</h3>
              <div className="bio-text">
                <p>
                  I'm a dedicated Public Affairs student at ADA University, passionate about
                  creating positive change and advancing public sector excellence. My journey
                  combines academic rigor with practical experience in policy development
                  and community impact.
                </p>
                <p>
                  I believe in ethical leadership, evidence-based decision making, and
                  inclusive policy development. My goal is to strengthen governance frameworks
                  and improve public services for all citizens.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="mission-statement">
                <div className="mission-icon">
                  <Target size={20} />
                </div>
                <p className="mission-text">
                  To contribute to Azerbaijan's public sector through innovative policies
                  and programs that foster sustainable development and institutional excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
