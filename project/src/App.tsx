import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import ExploreArea from './components/ExploreArea';
import Contact from './components/Contact';
import Booking from './components/Booking';
import StickyBookingBar from './components/StickyBookingBar';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    
    // Smooth scroll to section
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  const handleBookNow = () => {
    handleSectionChange('booking');
  };

  const handleExploreMore = () => {
    handleSectionChange('about');
  };

  // Handle scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gallery', 'explore', 'contact', 'booking'];
      const navHeight = 80;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section === 'home') {
          if (window.scrollY < 100) {
            setActiveSection('home');
            break;
          }
        } else {
          const element = document.getElementById(section);
          if (element && window.scrollY >= element.offsetTop - navHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation 
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        
        {/* Hero Section */}
        <Hero 
          onBookNow={handleBookNow}
          onExploreMore={handleExploreMore}
        />
        
        {/* About Section */}
        <div id="about">
          <About />
        </div>
        
        {/* Gallery Section */}
        <div id="gallery">
          <Gallery />
        </div>
        
        {/* Explore Area Section */}
        <div id="explore">
          <ExploreArea />
        </div>
        
        {/* Contact Section */}
        <div id="contact">
          <Contact />
        </div>
        
        {/* Booking Section */}
        <div id="booking">
          <Booking />
        </div>

        {/* Sticky Booking Bar for Mobile */}
        <StickyBookingBar onBookNow={handleBookNow} />
      </div>
    </LanguageProvider>
  );
}

export default App;