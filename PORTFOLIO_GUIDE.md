# Dilara Gadimaliyeva - Portfolio Website

## Overview
A modern, professional portfolio website for Dilara Gadimaliyeva, a Public Affairs student at ADA University specializing in Public Administration and Governance.

## Features

### 🎨 Design
- **Professional & Elegant**: Soft neutral color palette (white, beige, light gray, muted blue)
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Subtle hover effects and scroll animations
- **Accessible**: ARIA labels, keyboard navigation, proper contrast ratios

### 📱 Sections
1. **Home/Hero** - Professional introduction with call-to-action buttons
2. **About** - Comprehensive biography highlighting expertise and goals
3. **Education** - Academic credentials with expandable coursework
4. **Experience** - Timeline-based professional experience showcase
5. **Activities & Awards** - Recognition and achievements
6. **Skills** - Technical and soft skills with visual indicators
7. **Languages** - Multilingual proficiency display
8. **Contact** - Contact information and message form

### 🛠️ Technical Stack
- **React 18.3.1** with TypeScript
- **Tailwind CSS 4.x** for styling
- **Lucide React** for icons
- **Vite** for build tooling
- **Motion/React** available for animations (if needed)

## Structure

```
/src
  /app
    App.tsx                    # Main application component
    /components
      Navigation.tsx           # Sticky navigation with mobile menu
      Hero.tsx                 # Hero section with introduction
      About.tsx                # About section with highlights
      Education.tsx            # Education with collapsible coursework
      Experience.tsx           # Professional experience timeline
      ActivitiesAwards.tsx     # Awards and recognition
      Skills.tsx               # Technical and soft skills
      Languages.tsx            # Language proficiency
      Contact.tsx              # Contact form and information
      Footer.tsx               # Footer with social links
  /styles
    portfolio.css              # Custom portfolio styles
    index.css                  # Style imports
```

## Key Features

### Navigation
- Fixed navigation bar with scroll effect
- Active section highlighting
- Mobile-responsive menu
- Smooth scroll to sections

### Hero Section
- Eye-catching introduction
- Professional title and tagline
- Call-to-action buttons (View CV, Contact Me)
- Scroll indicator animation

### Education Section
- University and high school education
- GPA and graduation dates
- Expandable coursework section
- Location and timeline information

### Experience Timeline
- Visual timeline with icons
- Detailed role descriptions
- Organized chronologically
- Organization and location details

### Skills Display
- Progress bars for technical skills
- Interactive soft skill tags
- Categorized presentation
- Hover effects

### Languages
- Visual proficiency indicators
- Star ratings
- Progress bars
- Flag emojis for visual appeal

### Contact Form
- Professional contact information
- Working contact form
- Success message on submission
- LinkedIn profile integration

## Color Scheme
- **Primary**: #6b7c93 (Professional blue-gray)
- **Secondary**: #d4a373 (Warm beige/gold)
- **Accent**: #8b6f47 (Muted brown)
- **Text**: #2d3748 (Dark gray)
- **Background**: White, light gray variants

## Customization

### To Update Contact Information
Edit `/src/app/components/Contact.tsx`:
- Email
- Phone number
- LinkedIn URL
- Location

### To Add/Update Experience
Edit `/src/app/components/Experience.tsx`:
- Add new experience objects to the `experiences` array

### To Modify Skills
Edit `/src/app/components/Skills.tsx`:
- Add to `technicalSkills` array
- Add to `softSkills` array

### To Change Colors
Edit `/src/styles/portfolio.css`:
- Modify CSS variables in `:root` section

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Accessibility Features
- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation support
- Reduced motion support
- High contrast text
- Focus indicators

## Performance
- Optimized images
- Minimal external dependencies
- CSS animations for smooth performance
- Lazy loading ready

## Future Enhancements
- Add CV download functionality
- Integrate email service for contact form
- Add blog section
- Include portfolio projects showcase
- Add testimonials section
- Multi-language support (AZ/EN/TR)

## Deployment
The website is ready for deployment on:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Contact
For questions or updates to the portfolio:
- Email: dgadimaliyeva16146@ada.edu.az
- LinkedIn: [Dilara Gadimaliyeva](https://www.linkedin.com/in/dilara-gadimaliyeva)

---

© 2025 Dilara Gadimaliyeva. All rights reserved.
Made with ❤️ in Baku, Azerbaijan
