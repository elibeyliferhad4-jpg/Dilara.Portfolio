import React from 'react';
import { Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Dilara Gadimaliyeva</h3>
            <p>Public Affairs Student | Public Administration & Governance</p>
          </div>

          <div className="footer-social">
            <a 
              href="https://www.linkedin.com/in/dilara-gadimaliyeva-609179302/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Dilara Gadimaliyeva. All rights reserved.
          </p>
          <p className="footer-credit">
            Made with <Heart size={14} className="heart-icon" /> by Farhad Alibayli
          </p>
        </div>
      </div>
    </footer>
  );
}
