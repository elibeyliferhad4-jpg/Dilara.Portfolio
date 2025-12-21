import React from 'react';
import { ArrowDown, FileText, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleViewCV = () => {
    // Create a link element to download the CV
    const link = document.createElement('a');
    link.href = '/ADA International Resume - BA.docx';
    link.download = 'Dilara_Gadimaliyeva_CV.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-name">Dilara Gadimaliyeva</h1>
          <div className="hero-title">
            Bachelor of Public Affairs Student | Public Administration & Governance
          </div>
          <p className="hero-tagline">
            Dedicated to advancing public service excellence through strategic governance, 
            ethical leadership, and evidence-based policy implementation in Azerbaijan's 
            evolving public sector.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleViewCV}>
              <FileText size={20} />
              View CV
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <ArrowDown className="scroll-arrow" size={24} />
        </div>
      </div>
    </section>
  );
}
